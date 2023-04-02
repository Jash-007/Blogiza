import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function Post3(props) {
	const [blog, setBlog] = useState("");
	const [author, setAuthor] = useState("");
	const id = props.id;

    const tokenstr = localStorage.getItem("usertoken")
  	const str = tokenstr.split("/")
  	const token = str[0]

	const getBlogDetails = () => {
		axios.get(`https://localhost:7079/api/BlogPosts/${id}`)
			.then((response) => {
				setBlog(response.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}
	const aid = blog.authorId;
	console.log(`Author Id ${aid}`)
	const pdate = moment(blog.publishDate).format('MMM D, YYYY');
	console.log(aid)

	const getAuthor = () => {
		axios.get(`https://localhost:7079/api/Users/${aid}`)
			.then((response) => {
				setAuthor(response.data.username);
			})
			.catch((err) => {
				console.log(err);
			})
	}
if(blog.authorId !== undefined){
		console.log(`Author Id ${aid}`)
		getAuthor();
	}
	useEffect(() => {
		getBlogDetails();
		
	}, [])

    const deleteBlog = () => {
		console.log('deleteBlog')
		console.log(blog.id)
		try {
		  axios.delete(`https://localhost:7079/api/BlogPosts/${blog.id}`,{
			withCredentials: true,
			headers: {
			  'accept': 'text/plain',
			  'Content-Type': 'application/json',
			  'Authorization': `bearer ${token}`
			}
		  })
		 .then((response) => {
			  console.log("Sucess")
			  console.log(response.data);
			  window.location.reload();
			});
		} catch (error) {
			console.log("Error")
		  console.error(error);
		}
	  };

	return (
		<div class="py-16 bg-gradient-to-br from-green-50 to-cyan-100">
			<div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
				<div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
					<img src={blog.imageURL} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
					<div class="sm:w-7/12 pl-0 p-5">
						<div class="space-y-2">
							<div class="space-y-4">
								<h4 class="text-2xl font-semibold text-cyan-900">{blog.title}</h4>
								<p class="text-gray-600">{blog.content && <h4 class="card-text">{blog.content.slice(0, 20)}</h4>}</p>
							</div>
							<div class="flex space-x-1 items-center">
								<p>{blog.catagory}</p>
							</div>
							{/* <span class="post-read-more"><Link to={`/blog/${blog.id}`} className="btn" style={{ marginLeft: "1rem" }}>Read More</Link></span> */}
                            <span class="post-read-more"><Link to={`/updateBlog/${blog.id}`} className="btn" style={{marginLeft:"1rem"}}>Edit</Link></span>
						    <span class="post-read-more"><button onClick={deleteBlog} className='btn'>Delete</button></span>
						</div>
					</div>
				</div>

			</div>
		</div>


	)
}

export default Post3
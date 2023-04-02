import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import Post2 from './Post2';
import './Firstpage.css'


const Blog = () => {
  const [ fblogs, setBlogs ] = useState([]);
  
  const getFeaturedBlgs = () => {
    axios.get('https://localhost:7079/api/BlogPosts')
    .then((response) => {
      // console.log(response.data);
      setBlogs(response.data);
      // console.log("Dhr");
      // console.log(fblogs);
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  useEffect(() => {
    getFeaturedBlgs();
  }, [])
  return (
    
    
    <div class="flex justify-center items-center">

      <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" class="flex flex-col items-center justify-center">
          <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-black-50">Featured Blogs</h1>
          <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
        </div>
        <div class="grid gap-12 lg:grid-cols-2">
          {fblogs && fblogs.map((i) => {
            return (
            <Post2 id={i.id} key={i.id} />
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Blog;
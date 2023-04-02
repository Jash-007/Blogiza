
import { Routes, Route } from "react-router-dom"
import Blog from './Component/Frontpage/Firstpage';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import LoginForm from './Component/Login/login';
import CreateBlog from './Component/createblog';
import Signup from "./Component/Signin/signin";
import UpdateBlog from "./Component/Profile/UpdateBlog";
import BlogDetails from "./Component/Blog/Blog";
import Articles from "./Component/Articles/Articles";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Blog/> } />
        <Route path="create" element={ <CreateBlog/> } />
        <Route path="login" element={ <LoginForm/> } />
        <Route path="signup" element={ <Signup/> } />
        <Route path='/updateBlog/:id' element={<UpdateBlog />} />
        <Route path='/blog/:id' element={<BlogDetails />} /> 
        <Route path="articles" element={ <Articles/> } /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;

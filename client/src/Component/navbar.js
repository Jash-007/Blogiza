import React from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import './t.css'
function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem("usertoken")
  const handlelogout = () => {
    localStorage.removeItem("usertoken")
    navigate("/")
  }
  return (
    <div>

      <nav class="flex justify-between px-20 py-10 items-center bg-white">
        <h1 class="text-xl text-gray-800 font-bold">Blogiza</h1>
        <div class="flex items-center">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input class="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
          </div>
          <ul class="flex items-center space-x-6">
            <NavLink to="/"><li class="font-semibold text-gray-700">Home</li></NavLink>
            {!token && <NavLink to="/login"> <li class="font-semibold text-gray-700">Login</li></NavLink>}
            {!token && <NavLink to="/signup"><li class="font-semibold text-gray-700">Sign Up</li></NavLink>}
            {token && <NavLink to="/create"><li class="font-semibold text-gray-700">Create Blog</li></NavLink>}
            {token && <NavLink to="/articles"><li class="font-semibold text-gray-700">Articles</li></NavLink>}
            {token && <button onClick={handlelogout}><li class="font-semibold text-gray-700">Logout</li></button>}
          </ul>
        </div>
      </nav>

    </div>
  );
}
export default Navbar

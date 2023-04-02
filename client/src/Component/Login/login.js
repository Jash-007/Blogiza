import React, { useState,useEffecct } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 function LoginForm  ()  {
  const navigate = useNavigate()
    
  const [user, setUser] = useState({
      username: "",
      password: ""
  })

  const setValue = ({currentTarget: input}) => {
    setUser({...user, [input.name]:input.value})
  }

  const userLogin = async e =>{
    e.preventDefault();
    console.log(user)
    try {
      if(user.username === "" || user.password === ""){
        toast.error("Fill required field!", {
          position: 'top-center'
        });
      }
      else {
        const response = await axios.post("https://localhost:7079/api/Auth/Login", user);
        console.log(response.data);
        if(response.data.status == 200){
          localStorage.setItem('usertoken', response.data.token)
          navigate('/')
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Incorrect Username or password!');
    }
  }

  return (
    <form onSubmit={userLogin}>
    <div class="bg-no-repeat bg-cover bg-center relative" styles="background-image: url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80);"><div class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
      <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div class="self-start hidden lg:flex flex-col  text-white">
              <img src="" class="mb-3"/>
              <h1 class="mb-3 font-bold text-5xl">Hi ? Welcome Back Aji </h1>
              <p class="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                and publishing industries for previewing layouts and visual mockups</p>
            </div>
          </div>
          <div class="flex justify-center self-center  z-10">
            <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                <div class="mb-4">
                  <h3 class="font-semibold text-2xl text-gray-800">Log In </h3>
                  <p class="text-gray-500">Please sign in to your account.</p>
                </div>
                <div class="space-y-5">
                            <div class="space-y-2">
                                  <label class="text-sm font-medium text-gray-700 tracking-wide">UserName</label>
                  <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" name="username"
							  onChange={setValue}
							  value={user.username} placeholder="mail@gmail.com"/>
                  </div>
                              <div class="space-y-2">
                  <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" name="password"
							  onChange={setValue}
							  value={user.password} placeholder="Enter your password"/>
                </div>
                  <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
                    <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                      Remember me
                    </label>
                  </div>
                  <div class="text-sm">
                    <a href="#" class="text-green-400 hover:text-green-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button type="submit" class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign in
                  </button>
                </div>
                </div>
                <div class="pt-5 text-center text-gray-400 text-xs">
                  <span>
                    Copyright © 2021-2022
                    <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Ajimon" class="text-green hover:text-green-500 ">AJI</a></span>
                </div>
            </div>
          </div>
      </div>
    </div>
    </form>
  );
};

export default LoginForm;
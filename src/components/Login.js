import React, { useState } from 'react'
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constant";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const[isLogin,setIsLogin]=useState(true);

  const loginSignupHandler = () => {
    setIsLogin(!isLogin)
  }
  const[name,setName]= useState("");
  const[username,setUsername]= useState("");
  const[email,setEmail]= useState("");
  const[password,setPassword]= useState("");
  const navigate = useNavigate();

  const submitHandler = async(e)=>{
    e.preventDefault();
    if(isLogin){
        //login
        try {
          const res = await axios.post(`${USER_API_ENDPOINT}/login`,{email,password},{
            headers:{
              'Content-Type':"application/json",
              withCredentials:true
            },
          });
 
          if(res.data.success){
            navigate("/")
            toast.success(res.data.message);
          }
        } catch (error) {
          toast.success(error.response.data.message);
          console.log(error);
        }
    }
    else{
      //signup
      try {
        const res = await axios.post(`${USER_API_ENDPOINT}/register`,{name,username,email,password},{
          'Content-type':"application/json",
          withCredentials:true
        }
      );
      if(res.data.success){
        setIsLogin(true);
        toast.success(res.data.message);

      }
        console.log(res);
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
  }





  
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div>
        <img className='ml-4' width={"500px"} src="https://www.mtctutorials.com/wp-content/uploads/2023/08/Twitter-x-logo.jpg" alt="twitter-logo"></img>
        </div>
        <div>
          <div className='my-5'>
          <h1 className='font-bold text-7xl'>Happening Now</h1>
            <h2 className='font-bold text-5xl my-5'>Join today.</h2>
          </div>
            <h1 className='mt-4 mb-2 text-2xl font-semibold'>{isLogin? "Login" : "SignUp"}</h1>
            <form className='flex flex-col w-[55%]' onSubmit={submitHandler}>{
              !isLogin && (<>
              <input className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Name"/>
              <input className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' value={username} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Username"/>
              </>)
            }
              <input className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email"/>
              <input className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password"/>
              <button className='px-4 py-1 border-none text-md  rounded-full bg-blue-500 text-white text-lg my-4 font-bold'>{isLogin ?"Login" : "Create Account"}</button>

              <h1>{isLogin ? "Do not have an account?" : "Already have an account?"} <span className='cursor-pointer underline underline-offset-1 font-bold text-blue-700' onClick={loginSignupHandler}>{isLogin ? "SignUp" : "Login"}</span></h1>
            </form>

        </div>
      </div> 
    </div>
  )
}

export default Login

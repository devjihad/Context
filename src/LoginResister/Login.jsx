import { useContext, useState } from "react";
import { DataProvider } from "../Provider/Provider";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";



const Login = () => {
  const {Login,} =useContext(DataProvider)
  const [error,seterror]=useState()
 

  const login=(e)=>{
    e.preventDefault()
    const main=e.target
    const email=main.email.value
    const pass =main.pass.value
    Login(email,pass)
    .then((result)=>{
        // console.log(result.user)
        toast(result.user.email, 'user login')
        seterror(result.user)
    })
    .catch((error)=>{
        console.log(error.message)
    })
  }
 
  
    return (
        <div className="flex justify-center">
           <div className="bg-slate-500 w-1/3 px-5  py-5 rounded-lg mt-10">
            <form onSubmit={login}>
            <div className="mb-5">
            <label className="text-xl font-bold">Email </label><br />
            <input className="border-2 w-[350px] h-[50px] border-gray-500 rounded-md mt-3 " name="email" type="email" placeholder="Email" />
            </div>
            <div>
                <label className="text-xl font-bold">Password</label><br />
                <input className="border-2 w-[350px] h-[50px] border-gray-500 rounded-md mt-3 " name="pass"  type="password" placeholder="Password" />
            </div>
            <Link to='/Reset'>forgor password</Link>

            <div className="text-center">
            <button className="btn btn-primary mt-3 w-52">Login</button>
            
            <ToastContainer></ToastContainer>
            </div>
            </form>

            </div> 
        </div>
    );
};

export default Login;
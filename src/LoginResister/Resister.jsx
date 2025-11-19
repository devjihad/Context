import { useContext } from "react";
import { DataProvider } from "../Provider/Provider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";


const Resister = () => {
    const {resister}=useContext(DataProvider)
    // console.log(resister)
    const handle=(e)=>{
        e.preventDefault()
        const main=e.target
        const Name = main.name.value
        const Photo = main.photoURL.value
        const email= main.email.value
        const password =main.pass.value

        resister(email,password)
        .then((result)=>{
            updateProfile(result.user,{
                displayName:Name,
                photoURL:Photo
            })
            .then(()=>{
                console.log('update')
            })
            .catch((err)=>{
                console.log(err.message)
            })
            sendEmailVerification(result.user)
            .then(()=>{
                toast('verify your email')
            })

            console.log(result.user)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <div className="flex justify-center">
        <div className="bg-slate-500 w-1/3 px-5  py-5 rounded-lg mt-10">
         <form onSubmit={handle}>
         <div className="mb-5">
         <label className="text-xl font-bold">UserName</label><br />
         <input className="border-2 w-[350px] h-[50px] border-gray-500 rounded-md mt-3 pl-5 " name="name" type="text" placeholder="User Name" />
         </div>
         <div className="mb-5">
         <label className="text-xl font-bold">PhotoURL</label><br />
         <input className="border-2 w-[350px] h-[50px] border-gray-500 rounded-md mt-3 pl-5" name="photoURL" type="text" placeholder="PhotoURL" />
         </div>
         <div className="mb-5">
         <label className="text-xl font-bold">Email </label><br />
         <input className="border-2 w-[350px] h-[50px] border-gray-500 rounded-md mt-3 pl-5 " name="email" type="text" placeholder="Email" />
         </div>
         <div>
             <label className="text-xl font-bold">Password</label><br />
             <input className="border-2 w-[350px] h-[50px] border-gray-500 rounded-md mt-3 pl-5 " name="pass" type="password" placeholder="Password" />
         </div>

         <div className="text-center">
         <button className="btn btn-primary mt-3 w-52">Resister</button>
         </div>
         <ToastContainer></ToastContainer>
         </form>

         </div> 
     </div>
    );
};

export default Resister;
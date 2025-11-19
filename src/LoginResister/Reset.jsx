import { useContext } from "react";
import { DataProvider } from "../Provider/Provider";
import { toast, ToastContainer } from "react-toastify";
const Reset = () => {
    const {resetPass}=useContext(DataProvider)
    const Reset=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        resetPass(email)
        .then(()=>{
          toast('Cheak your email & Reset your password')
        })
        .catch((err)=>{
          console.log(err.message)
        })
       
    }
    return (
        <div className="bg-slate-400 w-1/3 py-10 px-10">
            <form onSubmit={Reset}>
                <label htmlFor="">Enter Your Email:</label> 
                <input type="email" name="email" placeholder="Enter your email" /><br />
                <button className="btn btn-error">Submit</button>
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default Reset;
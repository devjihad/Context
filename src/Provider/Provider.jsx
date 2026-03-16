// import  { createContext, useEffect, useState} from "react";
// import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import Auth from "../../Firebase/Firebase.config";
// export  const DataProvider =createContext(null)
// const Provider = ({children}) => {
//     const[focus ,setfocus]=useState(null)
//     // RESISTER
//     const resister=(email,pass)=>{
//         return createUserWithEmailAndPassword(Auth,email,pass)
         
//     }
//     // LOGIN
//     const Login =(email,pass)=>{
//         return signInWithEmailAndPassword(Auth,email,pass)
//     }
//     useEffect(()=>{
//         const unsubscribe =onAuthStateChanged(Auth , (user)=>{
//             setfocus(user)
//             if(user){
//                 console.log(user)
//             }
//             return(()=>{
//                 unsubscribe()
//             })
//         })
//     },[])
//     const logout =()=>{
//         return signOut(Auth)
//     }
//     const resetPass=(email)=>{
//         return sendPasswordResetEmail(Auth,email)
//     }
//     const name={
//         resister,
//         Login,
//         focus,
//         logout,
//         resetPass
//     }
//     return (
//         <div>
//             <DataProvider.Provider value={name}>
//             {children}
//             </DataProvider.Provider>
//         </div>
//     );
// };
// export default Provider;
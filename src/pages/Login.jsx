import React, { useRef } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseconfig";
import { useNavigate } from 'react-router-dom';



const Login = () => {
const email = useRef()
const password = useRef()
const navigate = useNavigate()
const UserLogin = () => {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    console.log(email.current.value);
    console.log(password.current.value);
    navigate('login')
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
}



  return (
    <form onSubmit={UserLogin} className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <div className='my-10'>
        <h1 className='flex justify-center text-3xl '>Login</h1>
        </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
        ref={email}
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="absolute text-sm text-gray-500 transition-transform duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
        ref={password}
          type="password"
          name="floating_password"
          id="floating_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="absolute text-sm text-gray-500 transition-transform duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>
      <button
        type="submit"
        className="my-5 w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  )
}

export default Login
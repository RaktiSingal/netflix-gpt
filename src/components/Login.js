import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignUp, handleSignUp] = useState(false);

  return (
    <div>
      <Header />
      <div className='w-full h-full'>
        <img
          className='absolute w-full h-full'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg"
        />
      </div>
      <form className='absolute p-12 bg-black w-3/12 my-40 mx-auto right-0 left-0 opacity-85 text-white'>
        <div className="font-bold text-3xl m-2">{!!isSignUp ? 'Sign Up' : 'Sign In'}</div>
        {!!isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full rounded-md bg-slate-800 border border-gray-400"
          />
        )}
        <input
          type="text"
          label="Email or mobile number"
          placeholder="Email or mobile number"
          className="p-4 m-2 w-full rounded-md bg-slate-800 border border-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full rounded-md bg-slate-800 border border-gray-400"
        />
        <button
          type="button"
          className="bg-red-600 p-4 m-2 text-white w-full rounded-md"
        >
          {!!isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
        {!!isSignUp
          ? (<p className="m-2"><span className='text-gray-400'>Already registered? </span> <span onClick={() => handleSignUp(false)} className="font-bold cursor-pointer">Sign in now.</span></p>)
          : (<p className="m-2"><span className='text-gray-400'>New to netflix? </span><span onClick={() => handleSignUp(true)} className="font-bold cursor-pointer">Sign up now.</span></p>)
        }
      </form>
    </div>
  )
}

export default Login;
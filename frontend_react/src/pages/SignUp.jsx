import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-end gap-3 mb-4">
        <div className='w-5'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" ><path d="M 6 0 L 6 12 M 0 6 L 12 6 M 1.757 1.758 L 10.243 10.242 M 1.758 10.243 L 10.242 1.757" fill="transparent" strokeWidth="1.45" stroke="#111827" strokeMiterlimit="10"></path></svg>
        </div>
        <p className='text-accent-900 font-secondary text-xl'>V-TOC</p>
      </div>
      <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Sign Up</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="Name" className="block mb-2 text-sm text-gray-600">Full Name</label>
          <input type="text" id="Name" name="Name" autoComplete='name' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" autoComplete='email' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
          <input type="password" id="password" name="password" autoComplete='new-password' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black" required />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm text-gray-600">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" autoComplete='new-password' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black" required />
        </div>
        <button type="submit" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">Sign Up</button>
      </form>
      <div className="text-center">
        <p className="text-sm text-gray-600">Do you already have an account? <Link to={'/LogIn'} className='text-cyan-600'>Log in</Link></p>
      </div>
      <p className="text-xs text-gray-600 text-center mt-8">&copy; 2023 V-TOC</p>
    </div>
  </div>
  );
}

export default SignUp;

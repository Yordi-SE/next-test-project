'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    confirm_password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[rgba(255,255,255,0.7)] rounded-sm shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Complete Your Signup</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

        <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter Your Name *
            </label>
            <input
              type="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email Here"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter Your Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email Here"
              required
            />
          </div>





          <div>
            <label className="block text-sm font-medium text-gray-700">
              Create  Password *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type Password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password *
            </label>
            <input
              type="confirm_password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>
        <div className='flex items-center text-center justify-center mt-4'>
    <p className='text-gray-700 text-sm '>
            By proceeding you are agreeing to  <br/><span className='font-bold'><Link className='underline' href={"#"}>Terms & Conditions </Link ></span> and <span className='font-bold'><Link className='underline' href={"#"}>Pravicy Policy</Link></span>
        </p>
    </div>
      </div>
    </div>
  );
} 
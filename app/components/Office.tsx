'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
type FormData = {
  name: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  companySize: string;
  password: string;
  confirmPassword: string;
  logo: string
};

export default function Office() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const form = useForm<FormData>();

  const { register, handleSubmit, formState, reset, setError,watch } = form;
  const { errors } = formState;

  const onsubmit = (data: FormData) => {
    console.log(data);
  };
  const password = watch('password');
  const [logo, setLogo] = useState("");

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        alert('File size exceeds 5MB limit');
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setLogoPreview(imageUrl);
    }
  };

  const handleRemoveLogo = () => {
    setLogoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the file input
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-[rgba(255,255,255,0.7)] rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Set Up Your Office</h1>
          <div className="flex flex-col items-center mb-6">
          <div className="relative w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
            {logoPreview ? (
              <img
                src={logoPreview}
                alt="Uploaded Logo"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white">Logo here</span>
            )}
            {/* Upload Icon at the Bottom */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              title="Upload Image"
              aria-label="Upload company logo"
            >
              <svg
                className="w-5 h-5 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 16v4a2 2 0 002 2h14a2 2 0 002-2v-4M16 6l-4-4m0 0L8 6m4-4v12"
                />
              </svg>
            </button>
          </div>
          <input
            type="file"
            accept="image/*"
            {...register('logo', {
              required: 'Please upload a company logo',
            })}
            onChange={(e) => {
              register('logo').onChange(e);
              handleLogoUpload(e);
            }}
            className="hidden"
            ref={fileInputRef}
          />
          {errors.logo && (
            <p className="text-red-500 text-sm mt-2">{errors.logo.message}</p>
          )}
          {logoPreview && (
            <button
              type="button"
              onClick={handleRemoveLogo}
              className="mt-2 bg-red-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-red-600 transition-colors"
            >
              Remove Image
            </button>
          )}
        </div>
        </div>

        <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
          <div>
            <label htmlFor='name' className="block text-sm font-medium text-gray-700">
              Enter Your Name *
            </label>
            <input
              type="text"
              id='name'
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="First Last Name"
              {...register("name", {
                required: "This field is required",
              })}
              />
                <p className="text-sm text-red-700 ">{errors.name?.message}</p>

          </div>

          <div>
            <label htmlFor='email' className="block text-sm font-medium text-gray-700">
              Enter Your Email *
            </label>
            <input
              type="email"
              id='email'
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email Here"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
                            <p className="text-sm text-red-700 ">{errors.email?.message}</p>

          </div>

          <div>
            <label htmlFor='companyName' className="block text-sm font-medium text-gray-700">
              Your Company Name *
            </label>
            <input
              type="text"
              id='companyName'
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Name Here"
              {...register("companyName", {
                required: "This field is required",
              })}            
            />
                            <p className="text-sm text-red-700 ">{errors.companyName?.message}</p>

          </div>

          <div>
            <label htmlFor='companyWebsite' className="block text-sm font-medium text-gray-700">
              Your Company Website *
            </label>
            <input
              type="url"
              id='companyWebsite'
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Website Here"
              {...register('companyWebsite', {
                required: 'Company website is required',
                pattern: {
                  value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: 'Invalid website URL',
                },
              })}          
            />
                            <p className="text-sm text-red-700 ">{errors.companyWebsite?.message}</p>

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size *
            </label>
            <div className="space-y-2  bg-white p-2 rounded-md" >
              {['0 to 10 Employees', '11 to 50 Employees', '> Than 50 Employees'].map((size,idx) => (
          <div className="flex items-center justify-between">
                <span className="ml-2 text-sm text-gray-600">{size}</span>

              <label htmlFor={`checkbox + ${idx}`} className="relative pl-8 cursor-pointer select-none">
                
              <input type="checkbox" className="hidden peer" id={`checkbox + ${idx}`} value={size} {...register("companySize", {
                required: "This field is required",
              })}  />
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 
                     border-2 border-yellow-400 bg-white
                     rounded-md
                     peer-checked:bg-yellow-400 peer-checked:border-yellow-400
                     transition-all duration-200
                     flex items-center justify-center">
                  <svg className="w-3 h-3 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
            </label>
        </div>
              ))}
            </div>
            <p className="text-sm text-red-700 ">{errors.companySize?.message}</p>

          </div>

          <div>
            <label htmlFor='password' className="block text-sm font-medium text-gray-700">
              Create Password *
            </label>
            <input
            id='password'
              type="password"
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Create Password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
              })}
            />
                            <p className="text-sm text-red-700 ">{errors.password?.message}</p>

          </div>


          <div>
            <label htmlFor='confirmPassword' className="block text-sm font-medium text-gray-700">
              Confirm Password *
            </label>
            <input
              type="password"
              id='confirmPassword'
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm Password"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) =>
                  value === password || 'Passwords do not match',
              })}
            />
                            <p className="text-sm text-red-700 ">{errors.confirmPassword?.message}</p>

          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>

      </div>
    </div>
  );
} 
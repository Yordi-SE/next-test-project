"use client"
import React, { useState } from 'react'
// import { useSession } from "next-auth/react";
import Office from './components/Office';
import Link from 'next/link';



function page() {
    // const { data: session } = useSession();
    const [showForm, setShowForm] = useState(false);

    if (showForm) {
        return (
            <Office />
        )
    }
  return (
    <div className="min-h-screen max-w-5xl w-full mx-auto px-4 sm:px-6 flex flex-col items-center justify-around">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-16 md:mb-20">
        Welcome To Your <span className="text-amber-500">Virtual Office</span>
      </h1>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-6 md:gap-10 lg:gap-20">
        <Link
          href="#demo"
          className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 sm:px-8 py-3 rounded transition-colors w-full sm:w-auto text-center"
        >
          Instant Demo
        </Link>
        <button
          onClick={() => setShowForm(true)}
          className="border border-white hover:bg-white/10 text-white font-medium px-6 sm:px-8 py-3 rounded transition-colors w-full sm:w-auto text-center"
        >
          Setup Your Company
        </button>
      </div>
    </div>
  )
}

export default page
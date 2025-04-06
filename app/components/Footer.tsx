import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="w-full py-4 px-6 flex justify-between text-sm text-gray-400">
    <Link href="/terms" className="hover:text-white transition-colors">
      Term & Conditions
    </Link>
    <Link href="/privacy" className="hover:text-white transition-colors">
      Privacy Policy
    </Link>
  </footer>
  )
}

export default Footer
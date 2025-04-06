"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const { data: session } = useSession()
  const PathName = usePathname()
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${scrollPosition === 0 ? "bg-transparent" : "bg-gray-800/60 backdrop-blur-md"} text-white z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <Image src={"/logo.png"} alt="logo" width={100} height={50} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href={"/"}
                className={`px-3 py-2 text-sm font-medium hover:bg-gray-800 ${PathName === "/" || PathName.startsWith("//") ? "border-b-2" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/features"
                className={`px-3 py-2 text-sm font-medium hover:bg-gray-800 ${PathName === "/features" || PathName.startsWith("/features/") ? "border-b-2" : ""}`}
              >
                Features
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium hover:bg-gray-800 ${PathName === "/about" || PathName.startsWith("/about/") ? "border-b-2" : ""}`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium hover:bg-gray-800 ${PathName === "/contact" || PathName.startsWith("/contact/") ? "border-b-2" : ""}`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {/* Authentication Button */}
            <Link
              href={`${PathName === "/signup" || PathName.startsWith("/signup/") ? "/login" : PathName === "/login" || PathName.startsWith("/login/") ? "/signup" : session ? "/logout" : "/login"}`}
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium"
            >
              {PathName === "/signup" || PathName.startsWith("/signup/")
                ? "Sign In"
                : PathName === "/login" || PathName.startsWith("/login/")
                  ? "Sign Up"
                  : session
                    ? "Logout"
                    : "Sign In"}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 md:hidden"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/90 backdrop-blur-md rounded-b-md">
              <Link
                href={"/"}
                className={`block px-3 py-2 text-sm font-medium hover:bg-gray-700 ${PathName === "/" || PathName.startsWith("//") ? "border-l-2 border-orange-500 pl-4" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/features"
                className={`block px-3 py-2 text-sm font-medium hover:bg-gray-700 ${PathName === "/features" || PathName.startsWith("/features/") ? "border-l-2 border-orange-500 pl-4" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-sm font-medium hover:bg-gray-700 ${PathName === "/about" || PathName.startsWith("/about/") ? "border-l-2 border-orange-500 pl-4" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-sm font-medium hover:bg-gray-700 ${PathName === "/contact" || PathName.startsWith("/contact/") ? "border-l-2 border-orange-500 pl-4" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


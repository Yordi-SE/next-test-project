"use client"

import Link from "next/link"
import { LogOut, XCircle } from "lucide-react"
import { signOut } from "next-auth/react"

export default function LogoutConfirmation() {
  return (
    <main className="min-h-screen flex flex-col text-white">
      {/* Logout Confirmation Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative px-4 py-16 md:py-24">
        <div className="max-w-md w-full mx-auto flex flex-col items-center text-center">
          {/* Warning Icon */}
          <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center mb-8">
            <LogOut className="w-10 h-10 text-amber-500" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-amber-500">Log Out</span>?
          </h1>

          <p className="text-gray-300 mb-12">
            You're about to log out from your Virtual Office account. Any unsaved work may be lost.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col w-full gap-4 mb-8">
            <button
              className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-3 rounded transition-colors flex items-center justify-center gap-2"
              onClick={() => {
                // In a real implementation, this would call a logout function
                // For now, we'll just redirect to a hypothetical logged-out state
                signOut({ callbackUrl: "/login" })
              }}
            >
              <LogOut className="w-5 h-5" />
              Yes, Log Me Out
            </button>
            <Link
              href="/"
              className="border border-white hover:bg-white/10 text-white font-medium px-8 py-3 rounded transition-colors flex items-center justify-center gap-2"
            >
              <XCircle className="w-5 h-5" />
              Cancel
            </Link>
          </div>

          {/* Additional Info */}
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 w-full">
            <h3 className="text-lg font-medium mb-2">Session Information</h3>
            <p className="text-sm text-gray-400">
              You've been active for approximately 2 hours and 15 minutes. Logging out will end your current session and
              require you to log in again to access your workspace.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}


/* This example requires Tailwind CSS v2.0+ */
import React from "react"
import { Link } from "@reach/router"

export default function HeaderSimpleCentered() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase"><Link to="">Adventure Adventure</Link></h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Adventures from adventure land
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Tales of adventures happening in the adventure land
            </p>
          </div>
        </div>
      </div>
    )
  }
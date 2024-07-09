import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-slate-100 font-mono shadow-sm p-6 text-gray-800 w-[100vw] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a className="text-3xl font-bold">Broge.</a>
        <div className="flex space-x-4">
          <Link href="/"><p className="text-gray-400 mx-2 font-thin hover:text-gray-900">Home</p></Link>
          <Link href="/about"><p className="text-gray-400 mx-2 font-thin hover:text-gray-900">About</p></Link>
          <Link href="/contact"><p className="text-gray-400 mx-2 font-thin hover:text-gray-900">Contact</p></Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

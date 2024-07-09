import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-[90vw] md:w-full h-[50vh] md:h-[50vh] mt-5 font-mono cursor-pointer">
      <div className="flex md:grid md:grid-cols-3 h-full gap-3">
        <div className="bg-[url('/hero1.jpg')] md:hover:scale-105 transition-all duration-700 col-span-2 bg-cover p-5 md:rounded-xl shadow-lg place-content-end">
          <div className="bg-black p-5 md:rounded-xl bg-opacity-70">
            <Link href="/blog/0160511a-f2a1-4833-8224-1400f8b4c308">
              <h1 className="font-bold text-4xl text-white">
                The Boys: A Dark Twist on the Superhero Genre
              </h1>
            </Link>
          </div>
        </div>

        <div className="hidden md:block hover:scale-105 transition-all duration-700 col-span-1 bg-[url('/hero2.jpg')] bg-cover bg-fill p-5 rounded-xl shadow-lg place-content-end">
          <div className="bg-black p-5 rounded-xl bg-opacity-70">
            <Link href="/blog/d17a0e97-1e32-476d-b52d-35f292ee932f">
              <h1 className="font-bold text-4xl text-white">
                Marvel&apos;s Spider-Man 2: Swinging into New Heights
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

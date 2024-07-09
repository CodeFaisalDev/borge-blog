import React from "react";
import Image from "next/image";

const MoreBlogsContent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-start cursor-pointer hover:scale-105 transition-all duration-700 hover:bg-slate-200 p-5">
      <div>
        <Image
          className="rounded-lg shadow-md"
          src="/hero2.jpg"
          width={500}
          height={500}
        />
      </div>
      <div className="place-content-center p-2">
        <h1 className="font-bold text-lg mt-2 mb-3">
          Marvel's Spider-Man 2: Swinging into New Heights
        </h1>
      </div>
    </div>
  );
};

export default MoreBlogsContent;

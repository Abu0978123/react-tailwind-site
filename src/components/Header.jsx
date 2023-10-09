import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="bg-[#2699fb] md:px-9">
      <div className="mx-w-[1240px]  p-[19px] flex  justify-between items-center md:mx-auto ">
        <div className="text-3xl font-bold">Abu Bakar</div>

        {toggle ? (
          <AiOutlineMenu
            className="text-2xl text-white md:hidden block"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineClose
            className="text-2xl text-white md:hidden block"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[75px] 
        ${toggle ? "left-[100%]" : "left-0"}
        `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About </li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}

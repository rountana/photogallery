import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/Ai";
import { useState } from "react";

const Navbar = () => {
  const [menuSelected, setMenuSelected] = useState(false);

  const handleMenu = () => {
    setMenuSelected(!menuSelected);
  };
  return (
    // tailwind notes: fix the navbar in place.
    // Ease-in duration when we change color of background whenever we scroll
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        {/* for the logo */}
        <Link href="/">
          <h1 className="font-bold text-4xl"> Header </h1>
        </Link>
        {/* anything above small size its going to be flex, otherwise will be hidden (for mobile form factor) */}
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home </Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery </Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Button */}

      <div onClick={handleMenu} className="justify-end">
        {!menuSelected ? (
          <AiOutlineMenu color="white" size={40} />
        ) : (
          <AiOutlineClose color="white" size={40} />
        )}
      </div>

      {/* Make the app mobile friendly, imported react-icons */}
      <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300">
        <ul>
          <li className="p-4 text-4xl hover: text-gray-500">
            <Link href="/">Home </Link>
          </li>
          <li className="p-4 text-4xl hover: text-gray-500">
            <Link href="/#gallery">Gallery </Link>
          </li>
          <li className="p-4 text-4xl hover: text-gray-500">
            <Link href="/portfolio">Work </Link>
          </li>
          <li className="p-4 text-4xl hover: text-gray-500">
            <Link href="/contact">Contact </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/Ai";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuSelected, setMenuSelected] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleMenu = () => {
    setMenuSelected(!menuSelected);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    // tailwind notes: fix the navbar in place.
    // Ease-in duration when we change color of background whenever we scroll
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        {/* for the logo */}
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Cosmo
          </h1>
        </Link>
        {/* anything above small size its going to be flex, otherwise will be hidden (for mobile form factor) */}
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
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

        <div onClick={handleMenu} className="z-20 sm:hidden">
          {!menuSelected ? (
            <AiOutlineMenu
              style={{ color: `${textColor}` }}
              color="white"
              size={40}
            />
          ) : (
            <AiOutlineClose
              style={{ color: `${textColor}` }}
              color="white"
              size={40}
            />
          )}
        </div>

        {/* Mobile Button */}

        {/* Make the app mobile friendly, imported react-icons */}
        <div
          className={
            menuSelected
              ? "sm:hidden z-0 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300"
              : "sm:hidden z-0 absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300"
          }
        >
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
    </div>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ SocialImg }) => {
  return (
    <div className="relative group">
      <Image
        src={SocialImg}
        alt="/"
        className="w-full h-full object-cover group"
      />
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 object-cover hover:bg-black/50 ">
        <p className=" hidden group-hover:block text-gray-400 ">
          <FaInstagram size={60} className="z-20" />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;

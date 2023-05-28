import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-between items-center w-screen bg-sky-700 p-4">
      <div className="w-[70px] h-[70px]">
        <img
          className="cursor-pointer w-full h-full object-cover invert brightness-0"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png"
          alt=""
        />
      </div>

      <div className="flex justify-around w-1/2">
        <Link className="text-white">Link</Link>
        <Link className="text-white">Link</Link>
        <Link className="text-white">Link</Link>
        <Link className="text-white">Link</Link>
      </div>
    </div>
  );
}

export default Footer;

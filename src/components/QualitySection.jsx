import React from "react";

import { AiFillDollarCircle } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";

function QualitySection() {
  return (
    <div className="flex sm:flex-col md:flex-col lg:flex-row flex-col">
      <div className="group h-[33vh] text-white lg:w-1/3 md:w-screen sm:w-screen flex flex-col items-center justify-center bg-teal-400 transition-all duration-700 hover:bg-teal-600">
        <FaCarAlt className="w-[50px] h-[50px] group-hover:w-[65px] group-hover:h-[65px] transition-all duration-700" />
        <h2 className="text-2xl font-bold">Sport Cars</h2>
        <small>Our speciality !</small>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
          ad! Ut, reiciendis laboriosam culpa dolores ratione veritatis! Ipsum,
          iste laborum!
        </p>
      </div>
      <div className="group h-[33vh] lg:w-1/3 md:w-screen sm:w-screen flex flex-col text-white items-center justify-center bg-green-400 transition-all duration-700 hover:bg-green-800">
        <MdHighQuality className="w-[50px] h-[50px] group-hover:w-[65px] group-hover:h-[65px] transition-all duration-700" />
        <h2 className="text-2xl font-bold">High Quality</h2>
        <small>That's what we provide</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia
          perspiciatis delectus repellat, debitis assumenda?
        </p>
      </div>
      <div className="group h-[33vh] text-white lg:w-1/3 md:w-screen sm:w-screen flex flex-col items-center justify-center transition-all duration-700 bg-amber-300 hover:bg-amber-600">
        <AiFillDollarCircle className="w-[50px] h-[50px] group-hover:w-[65px] group-hover:h-[65px] transition-all duration-700" />
        <h2 className="text-2xl font-bold">Adventagous Price</h2>
        <small>What our competitiors envy</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia
          perspiciatis delectus repellat, debitis assumenda?
        </p>
      </div>
    </div>
  );
}

export default QualitySection;

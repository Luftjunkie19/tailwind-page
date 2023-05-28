import "./Effects.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkIfScrolled = () => {
      const scrolledLevel = document.body.getBoundingClientRect();

      if (scrolledLevel.y < -50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", checkIfScrolled);

    return () => {
      window.removeEventListener("scroll", checkIfScrolled);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between bg-sky-700 transition-all duration-500 ${
        scrolled ? "sticky z-50 top-0 left-0 bg-sky-500 scrolled" : ""
      }`}
    >
      <div className="w-[50px] h-[50px] m-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png"
          alt=""
          className="w-full h-full invert brightness-0 object-cover cursor-pointer"
        />
      </div>

      <div className="flex justify-around w-72 items-center">
        <Link className="text-white">Link</Link>
        <Link className="text-white">Link</Link>
        <Link className="text-white">Link</Link>
        <Link className="text-white">Link</Link>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';

function AutobahnSection() {
  return (
    <div className="w-full h-[50vh] relative top-0 left-0">
      <img
        src="https://images.unsplash.com/photo-1595801185745-c35f30d63934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="autobahn"
        className="w-full h-full object-cover"
      />

      <img
        src="https://evdirect.ca/wp-content/uploads/2023/02/zero-emissions.png"
        className="absolute w-[150px] h-[150px] top-0 left-0 invert brightness-0 m-3 object-contain"
        alt=""
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png"
        className="absolute w-[50px] h-[50px] bottom-0 right-0 invert brightness-0 m-5 object-cover"
        alt=""
      />

      <div className="absolute top-0 flex flex-col justify-center items-center bg-introColor text-white w-full h-full">
        <h1 className="text-5xl font-extrabold mb-5">Way to Zero !</h1>
        <p>
          Wyznaczamy nową drogę do osiągnięcia neutralności pod względem emisji
          CO2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consectetur.
        </p>
      </div>
    </div>
  );
}

export default AutobahnSection;

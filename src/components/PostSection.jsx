import React from "react";

function PostSection() {
  return (
    <div className="flex flex-wrap">
      <img
        src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
        alt=""
        className="flex lg:w-1/2 md:w-full flex-grow flex-shrink h-auto object-cover"
      />

      <div className="flex lg:w-1/2 md:w-full lg:static flex-grow flex-shrink text-white bg-slate-600 items-center justify-center flex-col">
        <h2 className="font-bold text-4xl">Die Gurke, Bus of Legends!</h2>
        <p className="text-lg my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          provident totam impedit distinctio? Animi reiciendis dolores,
          inventore itaque cum quo at quos nisi exercitationem eligendi, in
          maxime sapiente voluptatibus ducimus asperiores autem minus eius
          quidem accusantium recusandae illo, alias architecto? Expedita in
          atque quis eum quidem ut modi dolorum ipsa iusto, nihil dignissimos
          laboriosam, facere doloribus nostrum deleniti quae ex totam officia
          cupiditate, alias voluptatibus? Dolor non consequuntur fugiat eius?
        </p>
        <small>Oliver Zipse, Chief Executive Officer BMW</small>
      </div>
    </div>
  );
}

export default PostSection;

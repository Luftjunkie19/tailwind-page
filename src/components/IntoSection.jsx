function IntoSection() {
  return (
    <div className="grid grid-cols-12 bg-gray-700">
      <div className="flex flex-col relative top-0 left-0 text-white items-center justify-center lg:col-span-5 md:col-span-6 sm:col-span-12 col-span-12 lg:border-r-4 lg:border-sky-700">
        <img
          src="https://images.unsplash.com/photo-1571872580550-5a0570339714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt="img"
          className="w-full h-[90vh] object-cover"
        />
        <div className="flex flex-col items-center justify-center absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-introColor">
          <h1 className="text-7xl mb-4 font-bold">Welcome to VW</h1>
          <p className="mb-4">The Shrine of Quality and Convenience</p>
          <button className="btn rounded-lg bg-sky-600 py-2 px-12 m-3 text-white transition-all duration-500 hover:px-16 hover:-translate-y-3">
            Button
          </button>
        </div>
      </div>

      <div className="hidden sm:hidden md:flex lg:flex flex-col lg:col-span-4 md:col-span-6 sm:col-span-5 col-span-4 my-4">
        <img
          src="https://images.unsplash.com/photo-1610480313684-897be1b6e79b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80"
          alt=""
          className="w-full h-[25vh] object-cover p-3 my-5 rounded cursor-pointer transition-all hover:-translate-y-4 duration-700"
        />

        <img
          src="https://images.unsplash.com/photo-1565520651265-1148c3b277f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          alt=""
          className="w-full h-[32vh] p-3 object-cover my-12 rounded cursor-pointer transition-all hover:-translate-y-4 duration-700"
        />
      </div>

      <div className="col-span-3 sm:hidden md:hidden lg:block hidden">
        {/* Add the 'hidden' class here */}
        <img
          src="https://images.unsplash.com/photo-1623013274387-45cbcbc1725b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          alt=""
          className="w-[20vw] h-[25vh] object-cover m-12 rounded cursor-pointer transition-all hover:-translate-y-4 duration-700"
        />
        <img
          src="https://images.unsplash.com/photo-1550085122-2a4948cda8c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80"
          alt=""
          className="object-cover m-5 w-[23vw] h-[35vh] rounded cursor-pointer transition-all hover:-translate-y-4 duration-700"
        />
      </div>
    </div>
  );
}

export default IntoSection;

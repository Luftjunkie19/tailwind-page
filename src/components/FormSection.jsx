function FormSection() {
  return (
    <div className="flex flex-wrap">
      <form className="flex flex-col justify-center items-center w-1/2 bg-slate-500">
        <h2 className="text-6xl font-bold my-2 text-white">
          Sign up for newsletter !
        </h2>

        <label className="flex flex-col">
          <span className="text-white">Name:</span>
          <input type="text" className="rounded-lg outline-none px-4 py-1" />
        </label>

        <label className="flex flex-col">
          <span className="text-white">Surname:</span>
          <input type="text" className="rounded-lg outline-none px-4 py-1" />
        </label>

        <label className="flex flex-col">
          <span className="text-white">Email:</span>
          <input type="text" className="rounded-lg outline-none px-4 py-1" />
        </label>

        <button className="px-16 py-2 my-4 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>

      <div className="w-1/2 h-auto relative top-0 left-0 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-introColor">
        <img
          src="https://images.unsplash.com/photo-1518830892177-d7611245a832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default FormSection;

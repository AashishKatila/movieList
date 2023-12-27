import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#121212] py-6 text-white flex flex-col md:flex-row justify-around items-center ">
      <div className="text-3xl font-bold">MovieList</div>
      <div className="flex flex-col md:flex-row items-center ">
        <div className="mx-4">Watching</div>
        <div className="mx-4">Watched</div>
        <div className="mx-4">
          <button className="bg-blue-600 rounded-lg px-4 py-1 ">Hold List</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

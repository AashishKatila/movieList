import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#121212] py-6 text-white flex justify-around items-center ">
      <div>MovieList</div>
      <div className="flex items-center ">
        <div className="mx-4">WatchList</div>
        <div className="mx-4">Watched</div>
        <div className="mx-4">
          <button className="bg-green-800 rounded-lg px-4 py-1 ">+ Add to Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

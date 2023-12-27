import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#121212] py-6 text-white flex flex-col md:flex-row justify-around items-center ">
      <div className="text-3xl font-bold">MovieList</div>
      <div className="flex flex-col md:flex-row items-center ">
        <div className="mx-4">
          {/* <Link to="/"> Hold List</Link> */}
          HoldList
        </div>
        <div className="mx-4">
          
          {/* <Link to="/watched"> Watched</Link> */}
          Watched
        </div>
        <div className="mx-4">
          <button className="bg-blue-600 rounded-lg px-4 py-1 ">
          {/* <Link to="/add"> Watched</Link> */}
          + ADD</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

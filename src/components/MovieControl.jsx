import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { IoMdEye,IoMdEyeOff  } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieControl = ({ movie, type }) => {
  const { removeMovieFromHoldlist, addMovieToWatched,moveToHoldList, removeFromWatched } =
    useContext(GlobalContext);

    const showToastMessage = (type,movie,bool) => {
      if(bool == true){
      toast.success(`${movie.title} added to ${type} !`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else{
      toast.warning(`${movie.title} Removed from ${type} !`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    };

  return (
    <div className="text-white absolute top-[130px] left-[70px] w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {/* if movie is in the hold list  */}
      {type === "holdList" && (
        <div className="flex items-center">

          {/* Adds movie from Hold List to Watched  */}
              <button onClick={() => {addMovieToWatched(movie); showToastMessage(type,movie,true)}}>
              <IoMdEye size={30} />
            </button>
          
          {/* Removes movie From HoldList */}
          <button onClick={() => {removeMovieFromHoldlist(movie.id);showToastMessage(type,movie,false) }}>
            <ImCross size={20} />
          </button>
        </div>
      )}

      {/* if movie has been watched  */}
      {type === "watched" && (
        <div className="flex items-center">

          {/* Adds movie from Hold List to Watched  */}
            <button onClick={() => {moveToHoldList(movie);showToastMessage(type,movie,true)} }>
              <IoMdEyeOff  size={30} />
            </button>
          
          {/* Removes movie From HoldList */}
          <button onClick={() => {removeFromWatched(movie.id);showToastMessage(type,movie,false)}}>
            <ImCross size={20} />
          </button>
        </div>
      )}
       <ToastContainer />
    </div>
  );
};

export default MovieControl;

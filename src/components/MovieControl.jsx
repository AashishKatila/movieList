import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { IoMdEye,IoMdEyeOff  } from "react-icons/io";
import { ImCross } from "react-icons/im";

const MovieControl = ({ movie, type }) => {
  const { removeMovieFromHoldlist, addMovieToWatched,moveToHoldList, removeFromWatched } =
    useContext(GlobalContext);
  return (
    <div className="text-white absolute top-[130px] left-[70px] w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {/* if movie is in the hold list  */}
      {type === "holdList" && (
        <div className="flex items-center">

          {/* Adds movie from Hold List to Watched  */}
            <button onClick={() => addMovieToWatched(movie)}>
              <IoMdEye size={30} />
            </button>
          
          {/* Removes movie From HoldList */}
          <button onClick={() => removeMovieFromHoldlist(movie.id)}>
            <ImCross size={20} />
          </button>
        </div>
      )}

      {/* if movie has been watched  */}
      {type === "watched" && (
        <div className="flex items-center">

          {/* Adds movie from Hold List to Watched  */}
            <button onClick={() => moveToHoldList(movie)}>
              <IoMdEyeOff  size={30} />
            </button>
          
          {/* Removes movie From HoldList */}
          <button onClick={() => removeFromWatched(movie.id)}>
            <ImCross size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieControl;

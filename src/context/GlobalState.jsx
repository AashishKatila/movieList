import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  holdList: localStorage.getItem("holdList")
    ? JSON.parse(localStorage.getItem("holdList"))
    : [],
  watchedMovie: localStorage.getItem("watchedMovie")
    ? JSON.parse(localStorage.getItem("watchedMovie"))
    : [],
};

export const GlobalContext = createContext(initialState);

//Manage Global State
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("holdList", JSON.stringify(state.holdList));
    localStorage.setItem("watchedMovie", JSON.stringify(state.watchedMovie));
  }, [state]);

  //To add movie in holdList
  const addMovieToHoldList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_HOLDLIST", payload: movie });
  };

  //To remove the movie from our holdlist
  const removeMovieFromHoldlist = (id) => {
    dispatch({
      type: "REMOVE_MOVIE_FROM_HOLDLIST",
      payload: id,
    });
  };

  //To add movies in watchedMovies
  const addMovieToWatched = (movie) =>{
    dispatch({type: "ADD_MOVIE_TO_WATCHED",payload:movie})
  }

  return (
    <GlobalContext.Provider
      value={{
        holdList: state.holdList,
        watchedMovie: state.watchedMovie,
        addMovieToHoldList: addMovieToHoldList,
        removeMovieFromHoldlist: removeMovieFromHoldlist,
        addMovieToWatched: addMovieToWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

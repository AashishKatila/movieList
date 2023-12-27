import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  holdList: localStorage.getItem("holdList") ? JSON.parse(localStorage.getItem('holdList')) : [],
  watchedMovie: localStorage.getItem("watchedMovie") ? JSON.parse(localStorage.getItem('watchedMovie')) : [],
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

  return (
    <GlobalContext.Provider
      value={{
        holdList: state.holdList,
        watchedMovie: state.watchedMovie,
        addMovieToHoldList: addMovieToHoldList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

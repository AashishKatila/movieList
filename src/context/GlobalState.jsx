import React,{createContext, useContext,useReducer} from 'react'
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    holdList: [],
    watchedMovie: [],
}

export const GlobalContext = createContext(initialState);



export const GlobalProvider = (props) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    const addMovieToHoldList = (movie) =>{
        dispatch({type: "ADD_MOVIE_TO_HOLDLIST", payload:movie})
    }

    return(
        <GlobalContext.Provider value={{holdList: state.holdList, watchedMovie: state.watchedMovie, addMovieToHoldList:addMovieToHoldList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
//Holds the action types
export default (state,action) =>{
    switch(action.type){
        case "ADD_MOVIE_TO_HOLDLIST":
            return{
                ...state,
                holdList: [action.payload, ...state.holdList]
            }
            case "REMOVE_MOVIE_FROM_HOLDLIST":
                return{
                    ...state,
                    holdList: state.holdList.filter(
                        (movie) => movie.id !== action.payload
                    )
                }
            case "ADD_MOVIE_TO_WATCHED":
                return{
                    ...state,
                    holdList: state.holdList.filter(
                        (movie) => movie.id !== action.payload.id
                    ),
                    watchedMovie: [action.payload,...state.watchedMovie]
                }
            case "MOVE_TO_HOLDLIST":
                return{
                    ...state,
                    watchedMovie: state.watchedMovie.filter(
                        (movie) => movie.id != action.payload.id
                    ),
                    holdList: [action.payload,...state.holdList]
                }
        default:
            return state;
    }
}
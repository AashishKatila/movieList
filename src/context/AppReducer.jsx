//Holds the action types
export default (state,action) =>{
    switch(action.type){
        case "ADD_MOVIE_TO_HOLDLIST":
            return{
                ...state,
                holdList: [action.payload, ...state.holdList]
            }
        default:
            return state;
    }
}
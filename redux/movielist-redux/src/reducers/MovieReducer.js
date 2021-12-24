const initialState = {
    movies: [
        { id: 0, name: 'Learn React', desc: "awesome scifi movie" },
    ],
}


const MovieReducer = (state = initialState, action) => {
    if (action.type === "AddMovie") {
        return {
            ...state,
            movies: [...state.movies, action.payload]
        };
    } else {
        return state;
    }
}

export default MovieReducer
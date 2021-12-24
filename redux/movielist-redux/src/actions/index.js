export const AddMovies = (details) => {
    return (dispatch) => {
        dispatch({
            type: "AddMovies",
            payload: details
        })
    }

}
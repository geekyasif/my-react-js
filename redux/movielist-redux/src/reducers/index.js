import { combineReducers } from "redux";
import MovieReducer  from './MovieReducer'


const allReducers = combineReducers({
    movies: MovieReducer
})

export default allReducers;
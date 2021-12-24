import React from 'react'
import { useSelector } from 'react-redux';


export default function TotalMovies() {
    const movies = useSelector(state => state.movies)
    return (
        <div>
            <p>Total movies : {movies["movies"].length}</p>
        </div>
    )
}

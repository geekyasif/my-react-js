import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const image_url = 'https://image.tmdb.org/t/p/original/'

export default function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    console.log(movies)

    useEffect(() => {

        async function fetchData(){
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchUrl])

    const opts = {
                height: "390",
                width: '100%',
                playerVars:{

                    autoplay: 1
                }

    }

    const handleClick = (movie) => {
            if (trailerUrl){
                setTrailerUrl('')
            }else{
                movieTrailer(movie?.name || "")
                .then( url => {
                        const urlParams = new URLSearchParams(new URL(url).search)
                        setTrailerUrl(urlParams.get("v"))
                })
                .catch(err => console.log(err))
            }
    }

    return (
        <div className="row">
            <h2 className="title">{title}</h2>

            <div className="row_posters">
            
            {movies.map( movie => (
                <img 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id} 
                    onClick={() => handleClick(movie)}
                    src={`${image_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt="" />
            ))}

        </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}

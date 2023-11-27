import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './moviesapp.css'
import { AiFillStar } from 'react-icons/ai';

export interface Moviedetails {
    title: string,
    id: string,
    vote_average: string
    overview: string,
    poster_path: string,
    release_date:string,
    runtime:'',    
}

const movieIntialDetails: Moviedetails = {
    title: " ",
    id: " ",
    vote_average: '',
    overview: " ",
    poster_path: " ",
    release_date:" ",
    runtime:"",
}

const MovieDetails = () => {

    const [moviedetails, setMovieDetails] = useState<Moviedetails>(movieIntialDetails);
    const { id } = useParams();

    useEffect(() => {
        const apiKey = '6616823caeaa94528298e8b6895d80ef';
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

        axios.get(apiUrl)
            .then((response) => {
                setMovieDetails(response.data)
                // console.log(moviedetails);
            })
            .catch(error => {
                console.error("Error", error);
            })
    }, [id]);

    const movie = moviedetails; // You have a single movie detail
    console.log(movie);

    return (
        <div className='movie-details'>
            {movie && (
                <div className='movie-container'>
                    <div>
                        <img alt={movie.title} style={{height:"50vh"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    </div>
                    <div className='moviedetail'>
                        <span className='movie_title'>{movie.title} ({Number(movie.vote_average).toFixed(1)}<AiFillStar />)
                        </span>

                        <span><b>{movie.release_date.slice(0,4)}</b>|
                        <b>{movie.runtime}min</b>
                        </span>

                        <span>Description: {movie.overview}</span>
                    </div>
                </div>
            )}
        </div>
    );
};


export default MovieDetails;



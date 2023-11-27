import React, { useEffect, useState } from 'react'
import './moviesapp.css'
import axios from 'axios';
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import SearchMovies, { Movie } from './SearchBar';
import { AiFillHome } from 'react-icons/ai';

const MoviesApp = () => {
    const apiKey = '6616823caeaa94528298e8b6895d80ef';
    const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjE2ODIzY2FlYWE5NDUyODI5OGU4YjY4OTVkODBlZiIsInN1YiI6IjY0ZGIzNjMyNTllOGE5MDBlMjI3OGFiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E_OjUBZxTQ8szosZrYTmUdUUKBV1IqDjIL2hM0uJSOc';

    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    
    const navigate = useNavigate();

    const [movieData, setMovieData] = useState(
        {
            results: [],
        }

    );

    const [filteredMovieData, setFilteredMovieData] = useState<Movie[]>([]);

   

    useEffect(() => {
        axios.get(apiUrl, {
            params: {
                api_key: apiKey,
            },
            headers: {
                'Authorization': `Bearer ${apiToken}`,
            },
        })
            .then((response: any) => {
                console.log('Data:', response.data);
                setMovieData(response.data);
                console.log(movieData);
            })
            .catch((error: any) => {
                console.error('Error:', error);
            });
    }, []); // Empty dependency array to ensure the API call is made only once

    const handleMovieClick = (movie : any) =>{
            navigate(`/movie/${movie.id}`) 
    }

    const handleSearchResults = (results: Movie[]) => {
        setFilteredMovieData(results);
    }

    return (
        <>
            <span className='header'>
              <SearchMovies handleSearchResults={handleSearchResults}/>
                <span><AiFillHome /></span>
            </span>
            <div className='movies-container'> 
            {(filteredMovieData.length > 0 ? filteredMovieData : movieData.results).map((movie: any) => (
                    <Card style={{ width: '12rem' }} key={movie.id} className='movie-card' onClick={() => handleMovieClick(movie)}>

                        <Card.Img variant="top" alt={movie.title} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

                        <Card.Body className='card_body'>
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip id={`tooltip-${movie.id}`}>{movie.title}</Tooltip>}
                            >
                                <Card.Title className='movie_title'>{movie.title}</Card.Title>
                            </OverlayTrigger>
                            <span><b>({Number(movie.vote_average).toFixed(1)})</b></span>
                        </Card.Body>

                        <span className='movie_overview'>{movie.overview}</span>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default MoviesApp;

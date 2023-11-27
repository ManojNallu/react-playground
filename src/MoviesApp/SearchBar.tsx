import axios from 'axios';
import React, { useEffect,useState } from 'react'
import './moviesapp.css';

export interface Movie {
    id: number;
    title: string;
}

const SearchMovies = ({ handleSearchResults }: { handleSearchResults: Function }) => {
    const apiKey = '6616823caeaa94528298e8b6895d80ef';
    const[searchquery,setSearchQuery] = useState('');
    const[searchresults,setSearchResults] = useState<Movie[]>([]);

    useEffect(()=>{
            if(searchquery.trim() !== ''){
                const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchquery}`;

                axios.get(apiUrl)
                .then(response =>{
                    setSearchResults(response.data.results);
                    handleSearchResults(response.data.results);
                })
                .catch(error =>{
                    console.error('error', error);
                })
            } else{
                setSearchResults([]);
                
            }
    },[searchquery,apiKey,handleSearchResults]);

    

  return (
    <div className="search_bar">
    <input
        type='text'
        className='form-control'
        placeholder='Search movie'
        id = "searchbar"
        value={searchquery}
        onChange={e => setSearchQuery(e.target.value)}
    />
    <div className='search-results'>
        { searchresults.map(movie => (
            <div key={movie.id} className='search-result'>
                
            </div>
        ))}
    </div>
</div>
  )
}

export default SearchMovies;

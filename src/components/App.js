import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import SearchMovie from "./SearchMovie";
import "./App.css"
import MovieDetail from "./MovieDetail";

const App = () => {
    const[movies, setMovies] = useState([])
    const[detail, setDetail] = useState([])
    const[searchValue, setSearchValue] = useState('')

    async function getMovieRequest(searchValue) {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=511a3527`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue)
    }, [searchValue])

    const clickPoster = (movie) => {
        setDetail([
            <div key={movie.imdbID}>
            <img className="detail_image"src={movie.Poster} alt=''></img>
            <div className="detail_introduce">
                <div className="detail_title">{movie.Title}</div>
                <div className="detail_data">
                    <div>Year: {movie.Year}</div>
                    <div>Type: {movie.Type}</div>
                    <div>imdbID: {movie.imdbID}</div>
                </div>
            </div>
            </div>
        ])
    }

    function Back() {
        window.location.reload()
    }

       return (
        <div className="container-fluid">
            <div>
                <label className="omdb_title" onClick={Back}>OMDB</label>
                <label className="search">
                    <SearchMovie value={searchValue} setSearchValue={setSearchValue} />
                </label>
            </div>
            <div className="row">
                <MovieList
                    movies = {movies}
                    clickPoster = {clickPoster}
                />
            </div>
            <div>
                <MovieDetail
                    detail={detail}
                />
                    
            </div>
        </div>
    )
}

export default App
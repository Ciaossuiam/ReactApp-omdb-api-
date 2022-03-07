

const MovieList = (props) => {
    return (
        <div className="result">
            {props.movies.map((movie, index) => {
                return (
                <div className="picture" key={movie.imdbID}> 
                    <div
                        className="image-container"
                        onClick={()=> props.clickPoster(movie)}
                    >
                        <img
                            src={movie.Poster}
                            alt='movie'
                            id='result_image'>
                        </img>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default MovieList
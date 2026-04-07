import React, { useState } from 'react'

const Add = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([]);

    const API_KEY = process.env.REACT_APP_TMDB_KEY;

    const handleQuery = (e) => {
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${e.target.value}&language=en-US&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => setResults(data.results));
    };
    return (
        <div className='add-page'>
            <div className="container">
                <div className="add-content">
                    <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" alt="add-bg" />
                    <div className="titles">
                        <h1 className="">Hoş Geldiniz</h1>
                        <h2 className="">
                            İzlenecek film ve dizileri arayın ve ekleyin.Zevkinize göre yeni TV şovları keşfedin.
                        </h2>

                    </div>
                    <div className="input-wrapper">
                        <input onChange={handleQuery} value={query} type="text" placeholder='Film veya dizi ara...' />
                        

                    </div>
                    {results.map((movie)=>(
                        <div key={movie.id}>
                            <h1>{movie.title}</h1>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />        
                       <p>{movie.overview}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Add
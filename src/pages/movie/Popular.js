import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies"
import ENDPOINTS from "../../utils/constants/endpoints";
import Hero from "../../components/Hero/Hero";

const PopularMovie = ()=> {

    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        getPopularMovies();
    },[]);

    const getPopularMovies = async () => {
        const response =  await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.result);
    }

    return (
        <div>
            <Hero />
            <Movies title = "Popular Movies" movies={movies} />
        </div>
    )
}
export default PopularMovie;
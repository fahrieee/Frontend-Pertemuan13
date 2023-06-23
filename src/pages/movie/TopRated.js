import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie() {
    const [movies,setMovies ]= useState([]);

    useEffect( () => {
        getTopRatedMovies();
    }, [])

    const getTopRatedMovies = async () => {
        const response = await axios(ENDPOINTS.TOP);
        setMovies(response.data.results)
    }
    return (
        <div>
            <Hero/>
            <Movies title = "TopRated Movies" movies = {movies}/>
        </div>
    )
}
export default TopRatedMovie;
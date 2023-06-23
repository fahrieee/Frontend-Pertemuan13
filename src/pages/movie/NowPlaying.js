import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";


function NowPlayingMovie() {
    const [movies, setMovies] =  useState([]);

    /**
     * Melakukan use effact for fecth data
    */
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
    const getNowPlayingMovies = async()=> {
        const response = await axios(ENDPOINTS.NOW);
        setMovies(response.data.results)
    }

    return(
        <div>
            <Hero/>
            <Movies title = "Now Playing" movies = {movies}/>
        </div>
    )
}

export default NowPlayingMovie;
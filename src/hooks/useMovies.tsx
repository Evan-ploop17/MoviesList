import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBResponse } from '../interfaces/movideDB'

export interface MoviesState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upComing: Movie[]
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: [],
    })

    const getMovies = async () => {
        try{
            const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing')
            const popularPromise = movieDB.get<MovieDBResponse>('/popular')
            const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated')
            const upComingPromise = movieDB.get<MovieDBResponse>('/upcoming')

            const [nowPlaying, popular, topRated, upComing] = await Promise.all([ nowPlayingPromise, popularPromise, topRatedPromise, upComingPromise])

            setMoviesState({
                nowPlaying: nowPlaying.data.results ,
                popular: popular.data.results ,
                topRated: topRated.data.results ,
                upComing: upComing.data.results ,
            })

            setIsLoading(false)
        } catch (error) {
            console.error('error en la petición de las películas', error);
        }
    }


    useEffect(() => {
        getMovies()
    }, [])

    return {
        isLoading,
        ...moviesState,
        setIsLoading,
    }
}
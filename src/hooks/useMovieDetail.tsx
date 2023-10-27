import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movideDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetail = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        cast: [],
        isLoading: true,
        movieFull: undefined,
    })

    const getMovieDetail = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`)
        const [movieDetails, cast] = await Promise.all([movieDetailsPromise, castPromise])

        setState({
            isLoading: false,
            movieFull: movieDetails.data,
            cast: cast.data.cast
        })

    }

    useEffect(() => {
        getMovieDetail()
    }, [])

    return {
        ...state
    }
}
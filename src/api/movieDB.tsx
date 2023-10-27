import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODU4NTA4Y2VjYTg4MDg1OWM2MWY3MjMxMTZjZjI3NyIsInN1YiI6IjY1MWQ3ZDVjZWE4NGM3MDE0ZWZlMTAzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.548Yo0IfXu-TaT1eYG2UU063nJ7rWM_-2EdyhMbT6LU'
    },
    params: {
        language: 'es-ES'
    },
})

export default movieDB
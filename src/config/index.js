
const APIKEY =`api_key=2a05a7d0307bb58cd4c95759d1c8b8c6`

const APIURL = {
    getPopularMoviesURL:`https://api.themoviedb.org/3/movie/popular?${APIKEY}`,
    getNowPlayingMoviesURL:`https://api.themoviedb.org/3/movie/now_playing?${APIKEY}`,
    getMovieDetailsById:function (movieId){
        return `https://api.themoviedb.org/3/movie/${movieId}?${APIKEY}`
    },
    getMoviesVideosByMovieId:function(movieId){
        return `https://api.themoviedb.org/3/movie/${movieId}/videos?${APIKEY}`
    }
}


export default APIURL
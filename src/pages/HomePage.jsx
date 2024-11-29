import { useEffect, useState } from 'react'
import { getMoviesData } from '../modules/movies/services'
import APIURL from '../config'
import ShowMovie from '../modules/movies/components/ShowMovie';
import NavBar from "../shared/components/NavBar"

const HomePage = () => {

  const [popularMovie , setPopularMovie] = useState(null);
  const [nowPlayingMovie , setNowPlayingMovie] = useState(null);

  useEffect(()=>{
    getMoviesData(APIURL.getPopularMoviesURL).then((response)=>{
      setPopularMovie(response.data.results)
      
    }).catch((error)=>{
      console.log(error);
      
    })

    getMoviesData(APIURL.getNowPlayingMoviesURL).then((response)=>{


      setNowPlayingMovie(response.data.results)
      
    }).catch((error)=>{
      console.log(error);
      
    })
  },[])

  return (
    <div>
      <NavBar/>
      <ShowMovie movies={nowPlayingMovie} title={"Now Playing Movies"}/>
      <ShowMovie movies={popularMovie} title={"Popular Movies"}/>
    </div>
  )
}

export default HomePage
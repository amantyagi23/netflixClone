import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getMoviesData } from '../modules/movies/services'
import APIURL from '../config'
import { Box } from '@mui/material'
import NavBar from "../shared/components/NavBar"
import ReactPlayer from 'react-player'

const MovieDetailPage = () => {
  const {id} = useParams()

  const [movie,setMovie] = useState(null)
  const [videos,setVideos] = useState(null)

  useEffect(()=>{
    const API = APIURL.getMovieDetailsById(id)
    const videoAPI = APIURL.getMoviesVideosByMovieId(id);  
    getMoviesData(API).then((response)=>{
      
      setMovie(response.data);
    }).catch((error)=>{
      console.log(error);
      
    })
    getMoviesData(videoAPI).then((response)=>{
      console.log(response);
      setVideos(response.data.results);
    }).catch((error)=>{
      console.log(error);
      
    })
  },[])
  return (
    <div>
      <NavBar/>
      {movie!==null && <>
      <Box sx={{height:700 }}>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
      </Box>
     
     <Box sx={{m:5,position:"absolute" ,top:0}}>
     <h1>{movie.title}</h1>
     <p>{movie.overview}</p>

    
     {videos!==null && <ReactPlayer width={"100%"} height={500} controls={true} url={`https://www.youtube.com/embed/${videos[0].key}?si=qZ53OU_vnbFwut_j`}/> }
     </Box>
      
     
      </>}
    </div>
  )
}

export default MovieDetailPage
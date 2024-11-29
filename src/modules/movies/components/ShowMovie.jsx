import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router';


// eslint-disable-next-line react/prop-types
const ShowMovie = ({movies,title}) => {

  return (
   <>
   <h2>{title}</h2>
    <div className='grid'>
      {movies!==null && movies.map((item)=>
    <Link to={`/movie_details/${item.id}`} key={item.id}>
      <Card className='card' >
    <CardMedia
      component="img"
     
      image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
      alt="Live from space album cover"
    />
  </Card></Link>

)}
    </div>
   </>
  )
}

export default ShowMovie
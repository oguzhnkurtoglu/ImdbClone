import Slider  from '../components/Carousel/Index'
import MovieList from '../components/MovieList/Index'

const Home = () => {
  return (
    <div>   


      {/* MAIN AREA */}
   
      <Slider/>

    
       {/* Explore the Movies */}
       <div className='w-full h-full'>
      <MovieList/>

    </div>
    </div>
  )
}

export default Home
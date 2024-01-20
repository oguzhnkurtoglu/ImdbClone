import Slider  from '../components/Carousel/Index'
import MovieList from '../components/MovieList/Index'
import UpnextItem from '../components/UpnextItem/Index'

const Home = () => {
  return (
    <div>   


      {/* MAIN AREA */}
    <div className='flex flex-col md:grid md:grid-cols-3 '>
      <div className="md:col-span-2">

         <Slider/>
      </div>
      <div className=' md:col-span-1 text-white border text-center'>
        <div>
          <h2 className='text-2xl text-primary font-extrabold'>Up Nexts</h2>
          <UpnextItem/>
          <UpnextItem/>
          <UpnextItem/>
          <UpnextItem/>
        </div>
       
      </div>
    </div>
       {/* Explore the Movies */}
       <div>
      <MovieList/>

    </div>
    </div>
  )
}

export default Home
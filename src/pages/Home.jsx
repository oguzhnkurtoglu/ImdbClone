import Slider  from '../components/Carousel/Index'

const Home = () => {
  return (
    <div className=" h-screen">   


      {/* MAIN AREA */}
    <div className='flex flex-col md:grid md:grid-cols-3 '>
      <div className="md:col-span-2">

         <Slider/>
      </div>
      <div className=' md:col-span-1 text-white border text-center'>
        <div>
          <h2 className='text-2xl text-primary font-extrabold'>Up Nexts</h2>
        </div>
        <ul>
          <li>Lorem.</li>
          <li>Ipsam!</li>
          <li>Tempora!</li>
          <li>Asperiores.</li>
          <li>Nulla.</li>
          <li>Libero.</li>
          <li>Nulla!</li>
          <li>Eos.</li>
          <li>Vitae!</li>
          <li>Nam.</li>
        </ul>
      </div>
    </div>

    {/* YOUR WATCHLIST */}
    <div>
      <div className='text-primary'>Your WathList.</div>
    </div>
       {/* Explore the Movies */}
       <div>
      <div className='text-primary'>Explore the Movies!.</div>
    </div>
    </div>
  )
}

export default Home
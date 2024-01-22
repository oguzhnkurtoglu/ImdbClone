import { FaStar } from "react-icons/fa";

const DetailContent = ({item}) => {
  return (
    <div className="text-white flex items-center justify-center text-center mt-2    ">
        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
        <div>
        <div className="text-3xl p-2 font-black">{item.title}</div>
        <div className="text-left">{item.overview}</div>
            <div className="flex items-center justify-center space-x-4" > 
            {console.log(item)}
         {/* {[...item.genres].length ?  
         genres.map((item,index) => (<span className="rounded-xl p-2 border" key={index}>{item.name}</span>)) :
         ( <p>Loading</p>) } */}
          </div>
          <div className="flex justify-center items-center   ">{Number(item.vote_average).toFixed(1)} <FaStar color="gold" /></div>
        </div>

    </div>
        
  )
}

export default DetailContent
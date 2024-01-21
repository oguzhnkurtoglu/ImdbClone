import axios from "axios";
import { CiBookmarkPlus } from "react-icons/ci";
import { Link } from 'react-router-dom';

const MovieListItem = ({item}) => {
  const options = {
    method: 'DELETE',
    url: 'https://api.themoviedb.org/3/account/20466368/watchlist',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGUzMzg2ODc5YTQ5YjM4NmY0NTk5NzM5MDZkYzYwMiIsInN1YiI6IjY1MGFjMTgyOTY2MWZjMDFlNzZjYmQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdYUYURrv_ryy8Y6kL4sZS8RKC164X9V0mMXmQ3lNIc'
    },
    data: {"media_type":"movie", "media_id": item.id, "watchlist": "true"}};
  
 


  return (
    <div className="text-white bg-buttonHover rounded-sm leading-normal  mx-auto hover:bg-slate-400/40">
      <div className="relative" >
        <img className="w-full"
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.title}
              />
              <span className=" cursor-pointer">
              <CiBookmarkPlus size={74} onClick={()=>{ axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error);
    })}} className="absolute top-[-5px] left-[-14px]" />
    </span>

      </div>
      <p className=" whitespace-nowrap text-ellipsis overflow-hidden ">{item.title}</p>
      <div>{item.vote_average}</div>
      <Link to={`/${item.id}`}>Detail Page</Link>
    </div>
  )
}

export default MovieListItem
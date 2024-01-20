
const MovieListItem = ({item}) => {
  return (
    <div className="text-white bg-buttonHover rounded-sm leading-normal max-w-[200px]">
      <div>
        <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.title}
              />
      </div>
      <p className=" whitespace-nowrap text-ellipsis overflow-hidden ">{item.title}</p>
      <div>{item.vote_average}</div>
      <div>+ Watchlist</div>
      <div>Play Trailer</div>
    </div>
  )
}

export default MovieListItem
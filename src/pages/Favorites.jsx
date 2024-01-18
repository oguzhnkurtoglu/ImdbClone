import { useContext } from "react"
import {ApiDataContext} from "../context/Movies"

const Favorites = () => {
  const apiData = useContext(ApiDataContext);
  return (
    <div>{console.log(apiData)}</div>
  )
}

export default Favorites
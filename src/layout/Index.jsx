import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "../pages/Home"
import Favorites from "../pages/Favorites"
import Detail from '../pages/Detail'
import NotFound from '../pages/NotFound'
import Navbar from '../components/Navbar/Index'

  
  const Layout = () => {
  return (
<>
    <div className='h-14'>
        <Navbar />
    </div>
    <div className='container'>
        <BrowserRouter>
        <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='favorites' element={<Favorites/>} />
        <Route  path=':detail' element={<Detail/>} />
        <Route  path='*' element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
      </div>
</>

  )
}

export default Layout
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "../pages/Home"
import Favorites from "../pages/Favorites"
import Detail from '../pages/Detail'
import Navbar from '../components/Navbar/Index'
  
  const Layout = () => {
  return (
<>
    <div className='h-14  bg-navbarBg'>
        <Navbar />
    </div>
    <div className='container'>
        <BrowserRouter>
        <Routes>
        <Route key="home" exact path='/' element={<Home/>} />
        <Route exact path='favorites' element={<Favorites/>} />
        <Route exact path=':itemId' element={<Detail/>} />
        </Routes>
        </BrowserRouter>
      </div>
</>

  )
}

export default Layout

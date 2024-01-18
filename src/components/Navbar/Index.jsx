import {UnorderedListOutlined} from "@ant-design/icons"
import { Input } from "antd"

const Navbar = () => {
  return (
    <div className="h-[100%] mx-auto flex justify-evenly items-center bg-navbarBg ">

    
      {/* LOGO */}
      <div className="box-border p-0 font-Roboto bg-logoBg w-16 h-8 font-black rounded-md justify-center flex items-center text-xl">IMDb</div>
    
    
      {/* MENU ICON */}
      <div className="w-14 h-12 box-border flex items-center font-black">
      <UnorderedListOutlined style={{ fontSize: '18px', color: '#fff', fontWeight:"bold" }} />
      <span className="text-white text-sm">Menu</span>
      </div>
      
      {/* INPUT FIELD */}
      <div className=" max-w-[300px]"> 

      <Input />
      </div>


      <div className="box-border bg-logoBg w-16 h-8 font-black rounded-md justify-center flex items-center text-xl">WatchList</div>

    </div>

    

    
  )
}

export default Navbar
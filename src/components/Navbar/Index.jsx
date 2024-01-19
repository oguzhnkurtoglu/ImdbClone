import {UnorderedListOutlined} from "@ant-design/icons"
import { Input } from "antd"
import { CiBookmarkPlus } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className="   bg-navbarBg ">
    <div className="h-[100%] mx-auto p-2 md:py-2 max-w-[1080px] space-x-4 flex justify-center items-center ">

    
      {/* LOGO */}
      <div className="box-border p-0 font-Roboto cursor-pointer bg-primary w-16 h-8 font-black rounded-md justify-center flex items-center text-xl">IMDb</div>
    
    
      {/* MENU ICON */}
      <div className="  rounded-md hover:bg-buttonHover p-2 flex items-center font-black space-x-2 cursor-pointer hover:">
      <UnorderedListOutlined style={{ fontSize: '18px', color: '#fff', fontWeight:"bold" }} />
      <span className="text-white text-sm">Menu</span>
      </div>
      
      {/* INPUT FIELD */}
      <div className=" flex-1"> 

      <Input placeholder="Search IMDb" className=" placeholder:text-black" />
      </div>


      <div className="box-border cursor-pointer text-white hover:bg-buttonHover w-32 h-8 font-black rounded-md justify-center flex items-center text-l"><CiBookmarkPlus/>WatchList</div>

    </div>
</div>
    

    
  )
}

export default Navbar
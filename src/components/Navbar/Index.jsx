import {UnorderedListOutlined} from "@ant-design/icons"
import { Input } from "antd"
import { CiBookmarkPlus } from "react-icons/ci";
import { useContext, useState } from 'react';
import {  InputDataContext } from '../../context/InputData';


const Navbar = () => {
  const { setInput } = useContext(InputDataContext);
  const [tempInput, setTempInput ] = useState("");

  return (
    <div className="container ">
      <div>

    <div className="h-[100%] p-2 md:py-2 w-full space-x-4 flex justify-center items-center ">

    
      {/* LOGO */}

        <div className="box-border p-0 font-Roboto cursor-pointer bg-primary w-16 h-8 font-black rounded-md justify-center flex items-center text-xl">IMDb</div>
  
    
    
      {/* MENU ICON */}
      <div className="  rounded-md hover:bg-buttonHover p-2 flex items-center font-black space-x-2 cursor-pointer hover:">
      <UnorderedListOutlined style={{ fontSize: '18px', color: '#fff', fontWeight:"bold" }} />
      <span className="text-white text-sm">Menu</span>
      </div>
      
      {/* INPUT FIELD */}
      <div className=" flex-1"> 
        <form onSubmit={(e)=>{e.preventDefault()
        setInput(tempInput)
        setTempInput("")
      }}>
      <Input placeholder="Search IMDb" className=" placeholder:text-black" value={tempInput} onChange={(e) => setTempInput(e.target.value)} />
        </form>
      </div>


      <div className="box-border cursor-pointer text-white hover:bg-buttonHover w-32 h-8 font-black rounded-md justify-center flex items-center text-l"><CiBookmarkPlus/>WatchList</div>

    </div>
          </div>
</div>
    

    
  )
}

export default Navbar
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import Comp from "./Comp";

const WorkExp = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
      <> 
      <div  className="flex items-center cursor-pointer mx-10 my-5" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? <RiArrowDownSFill size={50}/> : <FaPlay />}
       <h1>Work Experience</h1>
      </div>
        
        {isVisible && (
            <Comp />
        )}
      </>
  
    )
}

export default WorkExp

/*
add the icons 
set visile and hodden functionality
create the visible contents
*/
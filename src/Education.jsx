import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import College from "./college";
import Senior from "./Senior";

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <> 
      <div className="flex items-center cursor-pointer mx-10 my-5" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? <RiArrowDownSFill size={50}/> : <FaPlay />}
              <h1>Education</h1>
          </div>
          
          {isVisible && (
            <><College /><Senior /></>
      )}

    </>

  )
}

export default Education

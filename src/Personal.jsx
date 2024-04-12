import  { FaPlay } from "react-icons/fa";
import  { RiArrowDownSFill } from "react-icons/ri";
import  { useState } from 'react';

const Personal = () => {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <>
          <button >
        {isVisible ? 'content Hidden' : 'content visible'}
      </button>
          <div className="flex items-center ">
              {isVisible ? <RiArrowDownSFill size={50}/> : <FaPlay />}
              <h1 onClick={() => setIsVisible(!isVisible)}>Personal Information</h1>
          </div>
          
          {isVisible && (
          <div className="input-div ">
              <label htmlFor="name">Name</label>
              <br />
              <input id="name" type="text" placeholder="Enter Name" />
              <br />
              <label htmlFor="Adress">Adress</label>
              <br />
              <input id="Adress" type="text" placeholder="Enter Adress" />
              <br />
              <label htmlFor="Phone">Phone Number</label>
              <br />
              <input id="Phone" type="text" placeholder="09032108364" />
              <br />
              <label htmlFor="Email">Email</label>
              <br />
              <input id="Email" type="text" placeholder="Example@gmail.com" />
          </div>
      )}


          </>
  )
}

export default Personal

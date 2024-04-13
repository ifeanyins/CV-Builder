import  { FaPlay } from "react-icons/fa";
import  { RiArrowDownSFill } from "react-icons/ri";
import  { useState } from 'react';

const Personal = () => {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <>
          <button >
        {isVisible ? 'content visible' : 'content Hidden'}
      </button>
          <div className="flex items-center cursor-pointer mx-10 my-5" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? <RiArrowDownSFill size={50}/> : <FaPlay />}
              <h1>Personal Information</h1>
          </div>
          
          {isVisible && (
          <div className="input-div mx-20 my-3">
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

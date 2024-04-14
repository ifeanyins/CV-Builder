import { useState } from "react"

const Comp = () => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      <div className="flex items-center cursor-pointer mx-10 my-5" onClick={() => setIsVisible(!isVisible)}>
        <h1>Company Name</h1>
      </div>
            {isVisible && (
               <div className="input-div mx-20 my-3">
               <label htmlFor="Company">Company</label>
               <br />
               <input id="Company" type="text" placeholder="Company Name" />
               <br />
               <label htmlFor="Location">Location</label>
               <br />
               <input id="Location" type="text" placeholder="Location " />
               <br />
               <label htmlFor="Position">Position </label>
               <br />
               <input id="Position" type="text" placeholder="Position" />
               <br />
               <label htmlFor="Start">Start Date</label>
               <br />
               <input id="Start" type="text" placeholder="Start Date" />
               <br />
               <label htmlFor="End">End Date</label>
               <br />
               <input id="End" type="text" placeholder="End Date" />
               <br />
               <label htmlFor="Description">Description</label>
               <br />
               <input id="Description" type="text" placeholder="Description" />
               
               <button className="block mt-4 ">Clear</button>
           </div>
           
            )}
    </div>
  )
}

export default Comp

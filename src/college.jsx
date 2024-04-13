import { useState } from "react";

const College = () => {
        const [isVisible, setIsVisible] = useState(false);
      return (
        <> 
          <div className="flex items-center cursor-pointer mx-10 my-5" onClick={() => setIsVisible(!isVisible)}>
                  
                  <h1>College</h1>
              </div>
              
              {isVisible && (
              <div className="input-div  mx-20 my-3">
                  <label htmlFor="College">Academic level</label>
                  <br />
                  <input id="College" type="text" placeholder="College" />
                  <br />
                  <label htmlFor="University">University name</label>
                  <br />
                  <input id="University" type="text" placeholder="University Name" />
                  <br />
                  <label htmlFor="Course">Course </label>
                  <br />
                  <input id="Course" type="text" placeholder="Course" />
                  <br />
                  <label htmlFor="City">City</label>
                  <br />
                  <input id="City" type="text" placeholder="City" />
                  <br />
                  <label htmlFor="Country">Country</label>
                  <br />
                  <input id="Country" type="text" placeholder="Country" />
                  <br />
                  <label htmlFor="Graduation">Graduation Date</label>
                  <br />
                  <input id="Graduation" type="text" placeholder="Graduation Date" />
              </div>
          )}
  </>
      )
}

export default College

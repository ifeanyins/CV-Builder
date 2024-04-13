import { useState } from "react";

const Senior = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <> 
        <div className="flex items-center cursor-pointer mx-10 my-5" onClick={() => setIsVisible(!isVisible)}>
                
                <h1>Senior High School</h1>
            </div>
            
            {isVisible && (
            <div className="input-div  mx-20 my-3">
                <label htmlFor="academic">Academic level</label>
                <br />
                <input id="academic" type="text" placeholder="Academic level" />
                <br />
                <label htmlFor="uni">University name</label>
                <br />
                <input id="uni" type="text" placeholder="University name" />
                <br />
                <label htmlFor="course">Course </label>
                <br />
                <input id="course" type="text" placeholder="Course" />
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

export default Senior

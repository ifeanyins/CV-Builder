import Header from './Header';
import Personal from './Personal';
import Education from './Education';
import WorkExp from './WorkExp';
import RightHS from './RightHand';


const Builder = () => {
  return (
    <div className="">
       <Header />
    <div className="flex">
       <div className="left-side">
        <Personal />
        <Education />
        <WorkExp />
      </div>
      <div className="right-side bg-white h-lvh w-lvw">
        <RightHS />
      </div>
    </div>
    
    </div>
  )
}

export default Builder

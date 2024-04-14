import Header from './Header';
import Personal from './Personal';
import Education from './Education';
import WorkExp from './WorkExp';

const Builder = () => {
  return (
    <div className="">
    <div className="bg-slate-800">
       <Header />
       <div className="left-side">
        <Personal />
        <Education />
        <WorkExp />
      </div>
    </div>
    </div>
  )
}

export default Builder

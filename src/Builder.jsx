import Header from './Header';
import Personal from './Personal';
import Education from './Education';

const Builder = () => {
  return (
    <div className="">
    <div className="bg-slate-800">
       <Header />
       <div className="left-side">
        <Personal />
        <Education />
      </div>
    </div>
    </div>
  )
}

export default Builder

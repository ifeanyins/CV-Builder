import resumeImg from './assets/resume.png'
const Header = () => {
  return (
    <div>
         <div> 
        <div className="">
      <div className='flex justify-center'><span><img src={resumeImg} /></span><h1 className='text-5xl text-white'>CV Builder</h1 ></div>
        </div>
    </div>
    </div>
  )
}

export default Header

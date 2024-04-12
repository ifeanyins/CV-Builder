import Builder from './Builder'
import Personal from './Personal'
import './App.css'

function App() {

  return (
    <div className='bg-slate-100'>
      <Builder />
      <div className="left-side">
        <Personal />
      </div>
    </div>
  )
}

export default App

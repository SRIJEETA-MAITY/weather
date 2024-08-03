import React,{ useState } from 'react'
import Weather from './compo/Weather.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Weather/>
      
    </div>
  )
}

export default App

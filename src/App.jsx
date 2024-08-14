import React from 'react'
import Nav from './assets/Components/Nav'
import Quiz from './assets/Components/Quiz' 
import img from "../public/background.jpg"
const App = () => {
  return (
    <div className=' h-screen  ' >
      <img src={img} alt="" className='w-full h-screen absolute -z-50' />
      <Nav />
      <Quiz />
    </div>
  )
}

export default App

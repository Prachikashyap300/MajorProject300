import React from 'react'
import { enqueueSnackbar } from 'notistack'

const Home = () => {
  const handleButtonClick = () => {
    enqueueSnackbar('su !')
  }
  return (
    <div className="container-fluid home-bg">
      <button className='gradient-btn'>hello</button>
    </div>
  )
}

export default Home
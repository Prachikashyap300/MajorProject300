import React from 'react'
import { enqueueSnackbar } from 'notistack'

const Home = () => {
  const handleButtonClick = () => {
    enqueueSnackbar('su !')
  }
  return (
    <div>Home
      <button onClick={ handleButtonClick }>CLICK</button>
    </div>
  )
}

export default Home
import React from 'react'
import { enqueueSnackbar } from 'notistack'


const Home = () => {
  const handleButtonClick = () => {
    enqueueSnackbar('success !')
  }
  return (
    <div className="container-fluid">
      hii
    </div>
  )
}

export default Home
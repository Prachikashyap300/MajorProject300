import React from 'react'
import { enqueueSnackbar } from 'notistack'

const Home = () => {
  const handleButtonClick = () => {
    enqueueSnackbar('su !')
  }
  return (
    <div className="container-fluid">
      hii
    </div>
  )
}

export default Home
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import SinglePage from '../components/SinglePage'
import Follower from '../components/Follower'

const AllRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage  />} />
      <Route path='/:name' element={<SinglePage />} />
      <Route path='/followers' element={<Follower/>} />
    </Routes>
  )
}

export default AllRoutes

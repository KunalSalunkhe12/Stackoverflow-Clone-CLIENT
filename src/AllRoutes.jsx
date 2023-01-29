import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Question'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/auth' element = {<Auth/>}/>
        <Route path='/questions' element = {<Questions/>}/>
        <Route path='/ask-question' element = {<AskQuestion/>}/>
        <Route path='/questions/:id' element = {<DisplayQuestion/>}/>
        <Route path='/tags' element = {<Tags/>}/>
        <Route path='/users' element = {<Users/>}/>
        <Route path='/user/:id' element = {<UserProfile/>}/>
    </Routes>
  )
}

export default AllRoutes
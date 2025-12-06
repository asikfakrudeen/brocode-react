import React from 'react'
import UserGreeting from './UserGreeting'

const App = () => {
  return (
    <div className='card'>
        <UserGreeting isLoggedIn = {true} username = "Anonymous"/>
    </div>
  )
}

export default App
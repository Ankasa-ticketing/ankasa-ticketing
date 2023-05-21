import React from 'react'
import Profile from './components/fragments/profile/Profile'
import CardProfile from './components/fragments/card_profile/CardProfile'

const App = () => {
  return (
    <div className="flex justify-between p-12">
      <CardProfile />
      <Profile />
    </div>
  )
}

export default App
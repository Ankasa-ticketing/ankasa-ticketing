import React from 'react'
import CardProfile from '../components/fragments/card_profile/CardProfile'
import Profile from '../components/fragments/profile/Profile'
import NavigationBar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'

const UserProfile = () => {
    return (
        <>
            <NavigationBar />
            <div className="flex justify-between p-12 mt-12 mb-24">
                <CardProfile />
                <Profile />
            </div>
            <Footer />
        </>

    )
}

export default UserProfile
import React from 'react'
import Header from '../components/fragments/landing_page/header/Header'
import Trending from '../components/fragments/landing_page/trending/Trending'
import Top from '../components/fragments/landing_page/top/Top'
import NavigationBar from '../components/fragments/navbar/Navbar'
import Footer from '../components/fragments/Footer'

const LandingPage = () => {
    return (
        <>
            <NavigationBar />
            <Header />
            <br />
            <Trending />
            <br />
            <Top />
            <div className="mb-24"></div>
            <Footer />
        </>
    )
}
export default LandingPage

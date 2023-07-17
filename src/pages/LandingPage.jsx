import React, { useEffect } from 'react'
import Header from '../components/fragments/landing_page/header/Header'
import Trending from '../components/fragments/landing_page/trending/Trending'
import Top from '../components/fragments/landing_page/top/Top'
import NavigationBar from '../components/fragments/navbar/Navbar'
import Footer from '../components/fragments/Footer'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const role = atob(localStorage.getItem('role'))
        console.log(role);
        if (token == null) {
            navigate('/login')
        }
        if (role == '"admin"') {
            navigate("/admin/dashboard")
        }
    })

    return (
        <>
            <NavigationBar />

            <Header />

            <Trending />

            <Top />

            <div className="mb-24"></div>

            <Footer />
        </>
    )
}
export default LandingPage

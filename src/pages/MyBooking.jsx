import React, { useEffect } from 'react'
import NavigationBar from "../components/fragments/Navbar";
import CardProfile from '../components/fragments/card_profile/CardProfile';
import Footer from '../components/fragments/Footer'
import { useNavigate } from 'react-router-dom';

const MyBooking = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        const role = atob(localStorage.getItem('role'))
        if (token == null) {
            navigate('/login')
        }
        if (role == '"admin"') {
            navigate("/admin/dashboard")
        }
    }, [])
    return (
        <>
            <NavigationBar />

            <div className="flex px-10 my-14">
                <CardProfile />

                <div className="flex flex-col ml-7">
                    <div className="flex flex-col w-screen px-3 py-3 rounded-md shadow-lg">
                        <p className='text-blue-500'>M Y  B O O K I N G</p>
                        <p className='text-xl font-semibold'>My Booking</p>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default MyBooking
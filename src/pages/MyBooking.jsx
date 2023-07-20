import React, { useEffect } from 'react'
import NavigationBar from '../components/fragments/navbar/Navbar'
import CardProfile from '../components/fragments/card_profile/CardProfile'
import Footer from '../components/fragments/Footer'
import useBooking from '../states/useBooking'
import { useNavigate } from 'react-router-dom'
import ubahFormatWaktu from '../utils/time_format'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const MyBooking = () => {
    const { myBooking, booking, message, clearerMsg } = useBooking()
    console.log(booking);
    useEffect(() => {
        myBooking(localStorage.getItem("token"))
    }, [])

    let dataKeys = Object.keys([])
    if (booking) {
        dataKeys = Object.keys(booking)
    }

    return (
        <>
            <NavigationBar />

            <div className="flex flex-col-reverse gap-3 px-10 sm:flex-row my-14">
                <CardProfile />

                <div className="flex flex-col w-full sm:ml-7">
                    <div className="flex flex-col px-3 py-3 rounded-md shadow-md">
                        <p className="text-blue-500">M Y B O O K I N G</p>
                        <p className="text-xl font-semibold">My Booking</p>
                    </div>

                    {/* Booking Card */}
                    <div className="flex flex-col space-y-3">
                        {booking && dataKeys.map(key => {
                            let item = booking[key]

                            return <BookingCard
                                id={item.id}
                                key={item.id}
                                code={item.code}
                                payment_status={item.payment_status}
                                airlines={item.name}
                                fromLocation={item.from_location}
                                destination={item.destination}
                                departureTime={item.departure_time}
                            />
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

const BookingCard = ({ payment_status, code, airlines, fromLocation, destination, departureTime, id }) => {
    const navigate = useNavigate()
    return (
        <div className="mt-4 bg-white rounded-lg shadow-md hover:cursor-pointer" onClick={() => navigate(`/detail-booking/${id}`)}>
            <div className="flex flex-col px-4 py-3 space-y-2 border-b ">
                <div className='text-sm '>Monday, 20 July ‘20 - {ubahFormatWaktu(departureTime)}</div>
                <div className='flex items-center space-x-4 text-lg font-semibold'>
                    <div>{fromLocation}</div>
                    <div> <img
                        src="/src/assets/images/plane-mini.png"
                        alt="gambar"
                    /></div>
                    <div>{destination}</div>
                </div>
                <div className='text-sm text-gray-400'>{airlines}, {code}</div>
            </div>

            <div className="flex items-center px-4 py-3 space-x-4 font-semibold">
                <div className='text-gray-400 '>Status</div>
                <div className='bg-[#FF7F23] py-2 px-3 text-white rounded-lg w-fit'>
                    {payment_status}
                </div>
            </div>
        </div>
    )
}

export default MyBooking

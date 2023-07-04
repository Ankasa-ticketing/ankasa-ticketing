import NavBrand from '../../elements/logo/NavBrand'
import { AiOutlineMail } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

function NavigationBar() {
    const { photo } = JSON.parse(localStorage.getItem('user'))
    return (

        <div
            className="flex justify-between px-3 py-3 shadow-md sm:px-5"
        >
            <NavBrand />

            <div className="flex items-center space-x-2 sm:space-x-7">
                <form className='w-fit'>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search"
                            id="default-search"
                            className="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Where you want to go?"
                            required
                        />
                    </div>
                </form>

                <Link to={"/tickets"} className="font-semibold text-black no-underline hover:cursor-pointer">Find Ticket</Link>
                <Link to={"/my-booking"} className="font-semibold text-black no-underline hover:cursor-pointer">My Booking</Link>
            </div>

            <div
                className="flex items-center justify-center space-x-4 text-2xl"
            >
                <AiOutlineMail className='hidden sm:block' />
                <IoNotificationsOutline className='hidden sm:block' />
                <div className="p-[2px] bg-blue-500 rounded-full w-fit">
                    <img
                        src={photo}
                        alt="profile"
                        width={40}
                        className='rounded-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default NavigationBar

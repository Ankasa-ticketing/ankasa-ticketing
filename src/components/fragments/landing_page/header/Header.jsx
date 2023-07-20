import React, { useState } from 'react'
import './Style.css'
import header2 from '../../../../assets/images/Group 55.png'
import header1 from '../../../../assets/images/Group 53.png'
import Vector from '../../../../assets/images/Vector.png'
import { useNavigate } from 'react-router-dom'
import { BiSolidChevronRight } from "react-icons/bi";
import { IoPaperPlane } from 'react-icons/io5'

const Header = () => {
    const [date, setDate] = useState(new Date())

    return (

        <>
            <div className="hidden sm:flex">
                {/* kiri */}
                <div className="flex flex-col justify-between w-2/3 h-screen ">
                    <div className="px-24 pt-24">
                        <p className="text-5xl font-semibold">Find Your <span className='text-[#2395FF]'>Flight</span></p>
                        <p className="text-gray-400">and explore the world with us</p>
                    </div>
                    <div className="w-[53vw]">
                        <img src={header1} alt="gambar" />
                    </div>
                </div>

                {/* kanan */}
                <div className="relative flex justify-end w-1/3">
                    <div className="w-[25vw]">
                        <img src={header2} alt="gambar" />
                    </div>

                    <div className="absolute top-14 -left-56">
                        <HeaderCard />
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-5 sm:hidden'>
                <HeaderCard />
            </div>
        </>
    )
}

const HeaderCard = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col px-4 py-4 space-y-3 bg-white rounded-lg shadow-md w-fit">
            <div className="flex flex-col">
                <div className="font-semibold">Hey,</div>
                <div className="font-semibold">Where you want to go?</div>
            </div>

            <div className="flex items-center text-[#2395FF] w-full justify-between">
                <div className="font-semibold">Recenly Searched</div>
                <BiSolidChevronRight className='text-2xl' />
            </div>

            <div className="flex px-4 py-2 space-x-16 rounded-lg shadow-md w-fit">
                <div>
                    <div className='text-sm text-gray-400'>From</div>
                    <div className='text-xl font-semibold'>Medan</div>
                    <div className='text-sm text-gray-400'>Indonesia</div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={Vector} alt="vektor" />
                </div>
                <div>
                    <div className='text-sm text-gray-400'>To</div>
                    <div className='text-xl font-semibold'>Tokyo</div>
                    <div className='text-sm text-gray-400'>Japan</div>
                </div>
            </div>

            <div className="flex justify-evenly">
                <div className=' w-fit px-3 py-1 font-semibold rounded-md text-white bg-[#2395FF]'>
                    One way
                </div>
                <div className='px-3 py-1 font-semibold text-gray-500 bg-gray-200 rounded-md w-fit'>
                    Round trip
                </div>
            </div>

            <div className="flex flex-col space-y-3">
                <div className='text-sm text-gray-500'>Departure</div>
                <div className='flex items-center justify-between px-3 border rounded-md'>
                    <input type="text" name="deperture" value={"Monday, 20 July 2020"} className='text-sm border-none focus:ring-0' />
                    <BiSolidChevronRight className='text-[#2395FF]' />
                </div>
            </div>

            <div className="flex flex-col space-y-3">
                <div className='text-sm text-gray-500'>How many person?</div>

                <div className="flex justify-between">
                    <div className='flex items-center justify-between px-3 border rounded-md w-fit'>
                        <input type="text" name="deperture" value={"2 child"} className='w-24 text-sm border-none focus:ring-0' />
                        <BiSolidChevronRight className='text-[#2395FF]' />
                    </div>

                    <div className='flex items-center justify-between px-3 border rounded-md w-fit'>
                        <input type="text" name="deperture" value={"4 adult"} className='w-24 text-sm border-none focus:ring-0' />
                        <BiSolidChevronRight className='text-[#2395FF]' />
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-3">
                <div className='text-sm text-gray-500'>Which class do you want?</div>
                <div className="flex gap-4">
                    <div className="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <span htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Economy</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <span htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Business</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <span htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">First class</span>
                    </div>
                </div>
            </div>

            {/* Button  */}
            <div
                onClick={() => navigate("/tickets")}
                className="text-white bg-[#2395FF] flex items-center justify-between px-4 py-2 rounded-lg hover:cursor-pointer">
                <div className='text-lg font-semibold'>SEARCH FLIGHT</div>
                <IoPaperPlane />
            </div>
        </div>
    )
}
export default Header

import React from 'react'
import photo from '../../../profile.png'
import { BsPlus } from "react-icons/bs";
import { HiMapPin } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const CardProfile = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-3 py-8 rounded-lg shadow-md w-fit px-7">
                <div className="p-1 bg-blue-500 rounded-full w-fit">
                    <div className="bg-white rounded-full">
                        <img src={photo} alt="gambar" className='rounded-full' />
                    </div>

                </div>

                <div className="border border-blue-500 rounded-md w-fit">
                    <button className='px-6 py-2 font-bold text-blue-500'>Select Photo</button>
                </div>

                <div className="">
                    <p className='text-xl font-bold'>Mike Kowalski</p>
                </div>

                <div className="flex items-center justify-center ">
                    <HiMapPin className='text-blue-500' />
                    <p className='text-[#6B6B6B] text-sm'>Medan, Indonesia</p>
                </div>

                <div className="flex justify-between w-full text-sm font-semibold">
                    <p>Cards</p>

                    <div className="flex items-center text-blue-500">
                        <BsPlus />
                        <p>Add</p>
                    </div>
                </div>

                <div className="px-6 text-white bg-blue-500 rounded-md w-[267px] py-3 gap-2 shadow-md shadow-blue-500">
                    <p className='text-sm'>4441 1235 5512 5551</p>

                    <div className="flex justify-between text-xs text-[#AEFAFF]">
                        <p>X Card</p>
                        <p>$ 1,440.2</p>
                    </div>
                </div>

                <div className="w-full mt-4 space-y-4 text-base">
                    <div className="flex items-center justify-between font-semibold text-blue-500">
                        <div className="flex items-center gap-5">
                            <FaUserCircle className='' />
                            <p>Profile</p>
                        </div>
                        <IoIosArrowForward />
                    </div>
                    <div className="flex items-center justify-between font-semibold text-blue-500">
                        <div className="flex items-center gap-5">
                            <FaUserCircle className='' />
                            <p>Profile</p>
                        </div>
                        <IoIosArrowForward />
                    </div>
                    <div className="flex items-center justify-between font-semibold text-blue-500">
                        <div className="flex items-center gap-5">
                            <FaUserCircle className='' />
                            <p>Profile</p>
                        </div>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProfile
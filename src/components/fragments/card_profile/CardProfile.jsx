import React from 'react'
import { BsPlus } from "react-icons/bs";
import { HiMapPin } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import ButtonSelectPhoto from '../../elements/button_select_photo/ButtonSelectPhoto';
import IconAvatar from '../../elements/icon_avatar/IconAvatar';
import CreditCard from '../../elements/credit_card/CreditCard';
import CardProfileMenu from '../../elements/card_profile_menu/CardProfileMenu';
import { useNavigate } from 'react-router-dom';
import useUser from '../../../states/useUser';

const CardProfile = () => {
    const navigate = useNavigate()
    const { photo, fullname } = JSON.parse(localStorage.getItem('user'))
    const { address } = useUser()

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-3 py-8 rounded-lg shadow-md w-fit px-7">
                {/* IconAvatar */}
                <IconAvatar src={photo} />

                <ButtonSelectPhoto>Select Photo</ButtonSelectPhoto>

                <div className="">
                    <p className='text-xl font-bold'>{fullname}</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <HiMapPin className='text-blue-500' />
                    <span className='text-[#6B6B6B] text-sm'>{address}</span>
                </div>

                <div className="flex justify-between w-full text-sm font-semibold">
                    <p>Cards</p>

                    <div className="flex items-start text-blue-500 ">
                        <BsPlus className='text-lg' />
                        <span>Add</span>
                    </div>
                </div>

                {/* CreditCard */}
                <CreditCard>4441 1235 5512 5551</CreditCard>

                <div className="w-full mt-4 space-y-4 text-base">
                    {/* CardProfileMenu */}
                    <CardProfileMenu label={'Profile'} color={'text-blue-500'}>
                        <FaUserCircle />
                    </CardProfileMenu>

                    <CardProfileMenu label={'My Review'} color={'text-[#979797]'}>
                        <AiFillStar />
                    </CardProfileMenu>

                    <CardProfileMenu label={'Settings'} color={'text-[#979797]'}>
                        <IoMdSettings />
                    </CardProfileMenu>

                    <div onClick={() => {
                        localStorage.clear()
                        navigate("/login")
                    }}>
                        <CardProfileMenu label={'Logout'} color={'text-red-500'}>
                            <HiOutlineLogout />
                        </CardProfileMenu>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProfile
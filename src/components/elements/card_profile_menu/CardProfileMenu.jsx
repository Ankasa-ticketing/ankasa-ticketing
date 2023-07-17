import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const CardProfileMenu = ({ children, label, color }) => {
    return (
        <div className={`flex items-center justify-between font-semibold ${color} hover:cursor-pointer`}>
            <Link to={'/profile'} className="flex items-center gap-5">
                {children}
                <p>{label}</p>
            </Link>
            <IoIosArrowForward />
        </div>
    )
}

export default CardProfileMenu
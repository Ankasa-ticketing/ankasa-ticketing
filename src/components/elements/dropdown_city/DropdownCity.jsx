import React, { useEffect } from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import useUser from '../../../states/useUser';

const city = [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Solo",
    "Bekasi",
    "Denpasar",
    "Medan",
    "Palembang",
    "Pekanbaru",
    "Padang",
    "Palangkaraya"
]

const DropdownCity = ({ value }) => {
    const [option, setOption] = useState(false)
    const [city, setCity] = useState(value)

    const selectCity = useUser(state => state.setCity)

    const hanldeOnClick = () => {
        setOption(!option)
    }

    const handleOptions = (newCity) => {
        selectCity(newCity)
        setCity(newCity)
        setOption(false)
        // console.log(city);
    }

    return (
        <div className="flex justify-between">
            <input type="text" value={city} className='text-base border-none focus:outline-none focus:ring-0' />
            {
                !option ?
                    <IoIosArrowDown className='text-blue-500' onClick={hanldeOnClick} />
                    : <div className="relative">
                        <Options setter={handleOptions} />
                    </div>
            }
        </div>
    )
}

const Options = ({ setter }) => {
    const hanldeOnClick = (item) => {
        setter(item)
    }

    return (
        <div className='absolute right-0 px-5 overflow-auto bg-white shadow-md touch-pan-y h-52 w-fit'>
            {
                city.map((item, index) => (
                    <p key={index} onClick={() => hanldeOnClick(item)} className='hover:cursor-pointer'>{item}</p>
                ))
            }
        </div>
    )
}

export default DropdownCity
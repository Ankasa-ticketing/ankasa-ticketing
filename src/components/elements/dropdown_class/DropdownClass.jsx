import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const city = [
    "Utama",
    "Bisnis",
    "Premium",
    "Ekonomi",
]

const DropdownClass = ({ setter }) => {
    const [option, setOption] = useState(false)
    const [city, setCity] = useState("")

    const hanldeOnClick = () => {
        setOption(!option)
    }

    const handleOptions = (newCity) => {
        setCity(newCity)
        setter(newCity)
        setOption(false)
    }

    return (
        <div className="flex justify-between">
            <input type="text" value={city} className='text-base focus:outline-none' />
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

export default DropdownClass
import React, { useEffect } from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import useAirlineState from '../../../states/useAirlineState';

const DropdownAirlines = () => {
    const [option, setOption] = useState(false)
    const [city, setCity] = useState("")

    const hanldeOnClick = () => {
        setOption(!option)
    }

    const handleOptions = (newCity) => {
        setCity(newCity)
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
    const data = useAirlineState(state => state.data)
    const fecthAirlines = useAirlineState(state => state.fecthAirlines)

    const hanldeOnClick = (item) => {
        setter(item)
    }

    useEffect(() => {
        const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZnVsbG5hbWUiOiJmYWhtaSBoYWRpIiwiZW1haWwiOiJmYWhtaUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQ5MTEzMzMsImV4cCI6MTY4NDk5NzczM30.S_bx55aLzjdT4yfwDUHMUrglUbs08wg2Np1O95T03gA'
        fecthAirlines(jwt)
    }, [])
    console.log(data);

    return (
        <div className='absolute right-0 px-5 overflow-auto bg-white shadow-md touch-pan-y h-52 w-fit'>
            {
                data.map((item) => (
                    <p key={item.id} onClick={() => hanldeOnClick(item.name)} className='hover:cursor-pointer'>{item.name}</p>
                ))
            }
        </div>
    )
}

export default DropdownAirlines
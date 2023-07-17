import React, { useState } from 'react'
import { FaPlaneDeparture } from "react-icons/fa";
import FormAddTicket from '../form_add_ticket/FormAddTicket';
import FormAddAirline from '../form_add_airline/FormAddAirline';
import AirlinesTable from '../table_airlines/AirlinesTable';
import { useNavigate } from 'react-router-dom';
import useSideBar from '../../../states/useSideBar';

const SideBar = () => {
    const [hidden, setHidden] = useState(false)
    const [ticket, setTicket] = useState(false)
    const [airline, setAirline] = useState(false)

    const { setContent } = useSideBar()

    const navigate = useNavigate()

    const handleOnclick = () => {
        setHidden(!hidden)
        // setter(<AirlinesTable />)
        setContent(<AirlinesTable />)
    }

    const handleOnclickAddTicket = () => {
        setTicket(!ticket)
        setAirline(false)
        // setter(<FormAddTicket />)
        setContent(<FormAddTicket />)
    }

    const handleOnclickAddAirline = () => {
        setTicket(false)
        setAirline(!airline)
        // setter(<FormAddAirline />)
        setContent(<FormAddAirline />)
    }

    return (
        <>
            <div className="w-[250px] px-2 py-3 h-screen bg-blue-500 shadow-md">
                <div className="flex items-center text-white justify-evenly">
                    <FaPlaneDeparture />
                    <div className="text-base font-semibold">Ankasa Ticketing</div>
                </div>
                <div className="mt-4 border"></div>

                {/* Menu */}
                <div className="flex flex-col gap-2 mt-3">
                    <div className="flex flex-col gap-2">
                        <div
                            className="px-2 py-2 text-white bg-blue-400 rounded-md hover:cursor-pointer"
                            onClick={handleOnclick}>
                            <button className=''>Ticket</button>
                        </div>

                        {
                            hidden &&
                            <>
                                <div onClick={handleOnclickAddTicket} className={`
                                    px-2
                                    py-2
                                    ml-5
                                    text-white
                                    bg-blue-400
                                    rounded-md
                                    hover:cursor-pointer
                                    `}>
                                    <button className=''>Add ticket</button>
                                </div>

                                <div onClick={handleOnclickAddAirline} className={`
                                    px-2
                                    py-2
                                    ml-5
                                    text-white
                                    bg-blue-400
                                    rounded-md
                                    hover:cursor-pointer
                                    `}>
                                    <button className=''>Add Airline</button>
                                </div>
                            </>
                        }
                    </div>
                    <div className="px-2 py-2 text-white bg-blue-400 rounded-md">
                        <button className=''>User</button>
                    </div>
                    <div
                        className="px-2 py-2 text-white bg-blue-400 rounded-md"
                        onClick={() => {
                            localStorage.clear()
                            navigate("/login")
                        }}
                    >
                        <button className=''>Logout</button>
                    </div>
                </div>
            </div>

            <div className=""></div>
        </>
    )
}

export default SideBar
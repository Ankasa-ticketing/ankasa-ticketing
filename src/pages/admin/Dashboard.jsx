import React, { useState } from 'react'
import { FaPlaneDeparture } from "react-icons/fa";
import InputFormProfile from '../../components/elements/input_form_profile/InputFormProfile';
import TimePicker from '../../components/elements/time_picker/TimePicker';
import DropdownClass from '../../components/elements/dropdown_class/DropdownClass';
import DropdownAirlines from '../../components/elements/dropdown_airlines/DropdownAirlines';
import FormAddTicket from '../../components/fragments/form_add_ticket/FormAddTicket';
import FormAddAirline from '../../components/fragments/form_add_airline/FormAddAirline';

const Dashboard = () => {
    const [hidden, setHidden] = useState(false)
    const [ticket, setTicket] = useState(false)
    const [airline, setAirline] = useState(false)

    const handleOnclick = () => {
        setHidden(!hidden)
    }

    const handleOnclickAddTicket = () => {
        setTicket(!ticket)
        setAirline(false)
    }

    const handleOnclickAddAirline = () => {
        setTicket(false)
        setAirline(!airline)
    }

    return (
        <>
            <div className="flex w-screen">
                {/* Sidebard */}
                <div className="w-[250px] px-2 py-3 h-screen bg-blue-500 shadow-lg shadow-blue-500">
                    <div className="flex items-center text-white justify-evenly">
                        <FaPlaneDeparture />
                        <div className="text-base font-semibold">Ankasa Ticketing</div>
                    </div>
                    <div className="mt-4 border"></div>

                    {/* Menu */}
                    <div className="flex flex-col gap-2 mt-3">
                        <div className="flex flex-col gap-2">
                            <div className="px-2 py-2 text-white bg-blue-400 rounded-md hover:cursor-pointer" onClick={handleOnclick}>
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
                    </div>
                </div>

                {/* Content */}
                <div className="w-full py-3 px-7">
                    {/* FromAddTicket */}
                    <div className="p-4 mt-4 rounded-lg shadow-md">
                        {
                            ticket &&
                            <>
                                <FormAddTicket />
                            </>
                        }

                        {
                            airline &&
                            <>
                                <FormAddAirline />
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
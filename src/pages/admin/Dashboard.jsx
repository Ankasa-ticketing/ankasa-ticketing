import React, { useState } from 'react'
import { FaPlaneDeparture } from "react-icons/fa";
import InputFormProfile from '../../components/elements/input_form_profile/InputFormProfile';
import TimePicker from '../../components/elements/time_picker/TimePicker';
import DropdownClass from '../../components/elements/dropdown_class/DropdownClass';
import DropdownAirlines from '../../components/elements/dropdown_airlines/DropdownAirlines';

const Dashboard = () => {
    const [hidden, setHidden] = useState(true)

    const handleOnclick = () => {
        setHidden(!hidden)
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
                                <div className={`
                                px-2
                                py-2
                                ml-5
                                text-white
                                bg-blue-400
                                rounded-md
                                `}>
                                    <button className=''>Add ticket</button>
                                </div>
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
                        <form className='flex flex-col'>
                            <div className="flex flex-wrap justify-between">
                                <InputFormProfile type={'text'} label={'From'} value={"Jakarta"} />

                                <InputFormProfile type={'text'} label={'Destination'} value={"Bandung"} />

                                <TimePicker>Departure time</TimePicker>

                                <TimePicker>Time arrived</TimePicker>

                                <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                    <p className='text-[#9B96AB] text-sm'>Class</p>
                                    <DropdownClass />
                                </div>

                                <InputFormProfile type={'number'} label={'Price'} value={"0"} />

                                <InputFormProfile type={'number'} label={'Transit'} value={"0"} />

                                <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                    <p className='text-[#9B96AB] text-sm'>Airline</p>
                                    <DropdownAirlines />
                                </div>
                            </div>

                            <div className="mt-4 border"></div>

                            <div className="flex flex-col mt-3">
                                <div className="flex flex-wrap items-center justify-between w-40">
                                    <div className='font-semibold'>Luggage</div>
                                    <input type="checkbox" name="luggage" />
                                </div>

                                <div className="flex flex-wrap items-center justify-between w-40">
                                    <div className='font-semibold'>Wi-Fi</div>
                                    <input type="checkbox" name="wifi" />
                                </div>

                                <div className="flex flex-wrap items-center justify-between w-40">
                                    <div className='font-semibold'>Meal</div>
                                    <input type="checkbox" name="meal" />
                                </div>

                                <div className="flex flex-wrap items-center justify-between w-40">
                                    <div className='font-semibold'>Refundable</div>
                                    <input type="checkbox" name="refundable" />
                                </div>


                                <div className="flex flex-wrap items-center justify-between w-40">
                                    <div className='font-semibold'>Reschedule</div>
                                    <input type="checkbox" name="reschedule" />
                                </div>
                            </div>

                            <div className="flex items-end justify-end mt-12">
                                <button className='bg-blue-500 text-white py-[13px] px-[54px] font-semibold rounded-xl shadow-md hover:bg-blue-600'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
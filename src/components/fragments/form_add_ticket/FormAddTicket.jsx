import React, { useState } from 'react'
import InputFormProfile from '../../elements/input_form_profile/InputFormProfile'
import TimePicker from '../../elements/time_picker/TimePicker'
import DropdownClass from '../../elements/dropdown_class/DropdownClass'
import DropdownAirlines from '../../elements/dropdown_airlines/DropdownAirlines'
import useTicket from '../../../states/useTicket'

const FormAddTicket = () => {
    const insertTicket = useTicket(state => state.insertTicket)
    const responseAPI = useTicket(state => state.responseAPI)
    const loading = useTicket(state => state.loading)

    const [from, setFrom] = useState('')
    const [destination, setDestination] = useState('')
    const [departureH, setDepartureH] = useState('')
    const [departureM, setDepartureM] = useState('')
    const [arrivedH, setArrivedH] = useState('')
    const [arrivedM, setArrivedM] = useState('')
    const [kelas, setkelas] = useState('')
    const [price, setPrice] = useState(0)
    const [transit, setTransit] = useState(0)
    const [airline, setAirline] = useState(0)
    const [luggage, setLuggage] = useState(false)
    const [wifi, setWifi] = useState(false)
    const [meal, setMeal] = useState(false)
    const [refundable, setRefundable] = useState(false)
    const [reschedule, setReschedule] = useState(false)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const jwt = localStorage.getItem("token")
        insertTicket(jwt, {
            airline_id: airline,
            from,
            destination,
            departure_time: `${departureH}:${departureM}`,
            time_arrived: `${arrivedH}:${arrivedM}`,
            kelas,
            price,
            luggage,
            wifi,
            meal,
            transit,
            refundable,
            reschedule
        })
    }

    if (loading) {
        return <><p>LOADING....</p></>
    }

    return (
        <>
            <p className='text-xl font-semibold text-green-400'>{responseAPI}</p>
            <form className='flex flex-col' onSubmit={handleOnSubmit}>
                <div className="flex flex-wrap justify-between">
                    <InputFormProfile type={'text'} label={'From'} value={from} setter={(e) => setFrom(e.target.value)} />

                    <InputFormProfile type={'text'} label={'Destination'} value={destination} setter={(e) => setDestination(e.target.value)} />

                    <TimePicker
                        setHour={(value) => setDepartureH(value)}
                        setMinute={(value) => setDepartureM(value)}
                    >
                        Departure time
                    </TimePicker>

                    <TimePicker
                        setHour={(value) => setArrivedH(value)}
                        setMinute={(value) => setArrivedM(value)}
                    >
                        Time arrived
                    </TimePicker>

                    <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                        <p className='text-[#9B96AB] text-sm'>Class</p>
                        <DropdownClass setter={(value) => setkelas(value)} />
                    </div>

                    <InputFormProfile type={'number'} label={'Price'} value={price} setter={(e) => setPrice(e.target.value)} />

                    <InputFormProfile type={'number'} label={'Transit'} value={transit} setter={(e) => setTransit(e.target.value)} />

                    <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                        <p className='text-[#9B96AB] text-sm'>Airline</p>
                        <DropdownAirlines setter={(value) => setAirline(value)} />
                    </div>
                </div>

                <div className="mt-4 border"></div>

                <div className="flex flex-col mt-3">
                    <div className="flex flex-wrap items-center justify-between w-40">
                        <div className='font-semibold'>Luggage</div>
                        <input type="checkbox" name="luggage" onClick={(e) => setLuggage(true)} />
                    </div>

                    <div className="flex flex-wrap items-center justify-between w-40">
                        <div className='font-semibold'>Wi-Fi</div>
                        <input type="checkbox" name="wifi" onClick={(e) => setWifi(true)} />
                    </div>

                    <div className="flex flex-wrap items-center justify-between w-40">
                        <div className='font-semibold'>Meal</div>
                        <input type="checkbox" name="meal" onClick={(e) => setMeal(true)} />
                    </div>

                    <div className="flex flex-wrap items-center justify-between w-40">
                        <div className='font-semibold'>Refundable</div>
                        <input type="checkbox" name="refundable" onClick={(e) => setRefundable(true)} />
                    </div>


                    <div className="flex flex-wrap items-center justify-between w-40">
                        <div className='font-semibold'>Reschedule</div>
                        <input type="checkbox" name="reschedule" onClick={(e) => setReschedule(true)} />
                    </div>
                </div>

                <div className="flex items-end justify-end mt-12">
                    <button className='bg-blue-500 text-white py-[13px] px-[54px] font-semibold rounded-xl shadow-md hover:bg-blue-600'>Save</button>
                </div>
            </form>
        </>
    )
}

export default FormAddTicket
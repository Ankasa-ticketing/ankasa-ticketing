import React from 'react'
import InputFormProfile from '../../elements/input_form_profile/InputFormProfile'
import TimePicker from '../../elements/time_picker/TimePicker'
import DropdownClass from '../../elements/dropdown_class/DropdownClass'
import DropdownAirlines from '../../elements/dropdown_airlines/DropdownAirlines'

const FormAddTicket = () => {
    return (
        <>
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
        </>
    )
}

export default FormAddTicket
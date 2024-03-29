import React, { useEffect, useState } from 'react'
import InputFormProfile from '../../elements/input_form_profile/InputFormProfile'
import useAirlineState from '../../../states/useAirlineState'

const FormAddAirline = () => {
    const insertAirline = useAirlineState(state => state.insertAirline)
    const msgResponse = useAirlineState(state => state.msgResponse)

    const [name, setName] = useState('')
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);

        const jwt = localStorage.getItem("token")
        insertAirline(jwt, formData)

        setName('')
        setImage('')
    }

    return (
        <>
            <p className="font-semibold text-green-500">{msgResponse}</p>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <p className="text-xl font-semibold ">Form Add Airline</p>
                <div className="flex gap-5">
                    <InputFormProfile type={'text'} label={'Name'} value={name} setter={(e) => setName(e.target.value)} />

                    <div className="">
                        <p>Image</p>
                        <input type="file" name="image" onChange={handleFileChange} />
                    </div>
                </div>

                <div className="flex items-end justify-end mt-12">
                    <button className='bg-blue-500 text-white py-[13px] px-[54px] font-semibold rounded-xl shadow-md hover:bg-blue-600'>Save</button>
                </div>
            </form>
        </>
    )
}

export default FormAddAirline
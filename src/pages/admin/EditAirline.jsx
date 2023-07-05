import React, { useState } from 'react'
import InputFormProfile from '../../components/elements/input_form_profile/InputFormProfile';
import useAirlineState from '../../states/useAirlineState';
import useSideBar from '../../states/useSideBar';
import AirlinesTable from '../../components/fragments/table_airlines/AirlinesTable';

const EditAirline = ({ id, oldName, imageURL }) => {
    const [name, setName] = useState(oldName)
    const [image, setImage] = useState(imageURL);

    const { updateAirline, fecthAirlines } = useAirlineState()
    const { setContent } = useSideBar()


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
        updateAirline(jwt, formData, id)

        setName('')
        setImage(null)

        fecthAirlines(jwt)

        setTimeout(() => {
            setContent(<AirlinesTable />)
        }, 1500)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <p className="text-xl font-semibold ">Edit Airline</p>
            <div className="h-[100px] w-[100px]">
                <img className='rounded-lg' src={imageURL} alt="airline image" />
            </div>
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
    )
}

export default EditAirline
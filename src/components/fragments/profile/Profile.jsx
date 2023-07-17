import React, { useEffect, useState } from 'react'
import DropdownCity from '../../elements/dropdown_city/DropdownCity';
import InputFormProfile from '../../elements/input_form_profile/InputFormProfile';
import useUser from '../../../states/useUser';

const Profile = () => {
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('user')).email)
    const [fullname, setFullname] = useState(JSON.parse(localStorage.getItem('user')).fullname)
    const [phone, setPhone] = useState(JSON.parse(localStorage.getItem('user')).phone)
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem('user')).address)
    const [postCode, setPostCode] = useState(JSON.parse(localStorage.getItem('user')).post_code)

    const { updateProfile, msgResponse, city } = useUser()
    console.log(city);

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const input = {
            fullname, email, phone, city, address, post_code: postCode
        }

        console.log(input);

        updateProfile(localStorage.getItem("token"), input)
    }

    return (
        <div className=''>
            <div className="py-8 shadow-md px-7">
                <p className="text-lg text-green-500">{msgResponse}</p>
                <p className="font-[500px] tracking-wide text-blue-500 uppercase">P r o f i l e</p>

                <p className='mt-1 text-2xl font-semibold'>Profile</p>

                <form className='flex flex-col mt-4' onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap sm:justify-between">
                        <div className='flex flex-col space-y-3'>
                            <p className='text-base font-semibold'>Contact</p>

                            {/* InputFormprofile */}
                            <InputFormProfile type={'text'} label={'Email'} value={email} setter={(e) => setEmail(e.target.value)} />

                            <InputFormProfile type={'number'} label={'Phone Number'} value={phone} setter={(e) => setPhone(e.target.value)} />
                        </div>

                        <div className='flex flex-col space-y-3'>
                            <p className='text-base font-semibold'>Biodata</p>

                            <InputFormProfile type={'text'} label={'Fullname'} value={fullname} setter={(e) => setFullname(e.target.value)} />

                            <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                <p className='text-[#9B96AB] text-sm'>City</p>
                                <DropdownCity value={city} />
                            </div>

                            <InputFormProfile type={'text'} label={'Address'} value={address} setter={(e) => setAddress(e.target.value)} />

                            <InputFormProfile type={'number'} label={'Post Code'} value={postCode} setter={(e) => setPostCode(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex items-end justify-end mt-12">
                        <button className='bg-blue-500 text-white py-[13px] px-[54px] font-semibold rounded-xl shadow-md hover:bg-blue-600'>Save</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Profile
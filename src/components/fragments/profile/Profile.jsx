import React from 'react'
import DropdownCity from '../../elements/dropdown_city/DropdownCity';
import InputFormProfile from '../../elements/input_form_profile/InputFormProfile';

const Profile = () => {
    return (
        <div className=''>
            <div className="py-8 shadow-lg px-7">
                <p className="font-[500px] tracking-wide text-blue-500 uppercase">P r o f i l e</p>

                <p className='mt-1 text-2xl font-semibold'>Profile</p>

                <form className='flex flex-col mt-4'>
                    <div className="flex justify-between">

                        <div className='flex flex-col space-y-3'>
                            <p className='text-base font-semibold'>Contact</p>

                            {/* InputFormprofile */}
                            <InputFormProfile type={'text'} label={'Email'} value={"user@mail.com"} />

                            <InputFormProfile type={'text'} label={'Phone Number'} value={"+62099856757"} />
                        </div>

                        <div className='flex flex-col space-y-3'>
                            <p className='text-base font-semibold'>Biodata</p>

                            <InputFormProfile type={'text'} label={'Fullname'} value={"Fahmi Hadi"} />

                            <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                <p className='text-[#9B96AB] text-sm'>City</p>
                                <DropdownCity />
                            </div>

                            <InputFormProfile type={'text'} label={'Address'} value={"Medan, Indonesi"} />

                            <InputFormProfile type={'number'} label={'Post Code'} value={"42111"} />
                        </div>
                    </div>

                    <div className="flex items-end justify-end mt-12">
                        <button className='bg-blue-500 text-white py-[13px] px-[54px] font-semibold rounded-xl'>Save</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Profile
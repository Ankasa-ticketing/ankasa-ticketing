import React from 'react'
import DropdownCity from '../../elements/dropdown_city/DropdownCity';

const Profile = () => {
    return (
        <div className=''>
            <div className="py-8 shadow-lg px-7">
                <p className="font-[500px] tracking-wide text-blue-500 uppercase">P r o f i l e</p>

                <p className='text-2xl font-semibold'>Profile</p>

                <form className='flex flex-col'>
                    <div className="flex justify-between">

                        <div className='flex flex-col space-y-3'>
                            <p className='text-base font-semibold'>Contact</p>

                            <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                <p className='text-[#9B96AB] text-sm'>Email</p>
                                <input type="text" value={"user@mail.com"} className='text-base focus:outline-none' />
                            </div>

                            <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                <p className='text-[#9B96AB] text-sm'>Phone Number</p>
                                <input type="text" value={"+62099856757"} className='text-base focus:outline-none' />
                            </div>
                        </div>

                        <div className='flex flex-col space-y-3'>
                            <p className='text-base font-semibold'>Biodata</p>

                            <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                <p className='text-[#9B96AB] text-sm'>Fullname</p>
                                <input type="text" value={"Fahmi Hadi"} className='text-base focus:outline-none' />
                            </div>

                            <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                <p className='text-[#9B96AB] text-sm'>City</p>

                                <DropdownCity />
                            </div>

                            <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                <p className='text-[#9B96AB] text-sm'>Address</p>
                                <input type="text" value={"Medan, Indonesi"} className='text-base focus:outline-none' />
                            </div>

                            <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                                <p className='text-[#9B96AB] text-sm'>Post Code</p>
                                <input type="number" value={"42111"} className='text-base focus:outline-none' />
                            </div>

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
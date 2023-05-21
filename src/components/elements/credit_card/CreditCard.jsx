import React from 'react'

const CreditCard = ({ children }) => {
    return (
        <div className="px-6 text-white bg-blue-500 rounded-md w-[267px] py-3 gap-4 flex flex-col shadow-md shadow-blue-500">
            <p className='text-sm'>{children}</p>

            <div className="flex justify-between text-xs text-[#AEFAFF]">
                <p>X Card</p>
                <p>$ 1,440.2</p>
            </div>
        </div>
    )
}

export default CreditCard
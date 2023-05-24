import React from 'react'

const InputFormProfile = ({ type, label, value, setter }) => {
    return (
        <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
            <p className='text-[#9B96AB] text-sm'>{label}</p>
            <input type={type} value={value} className='text-base focus:outline-none' onChange={setter} />
        </div>
    )
}

export default InputFormProfile
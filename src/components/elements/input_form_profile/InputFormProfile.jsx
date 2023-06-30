import React from 'react'

const InputFormProfile = ({ type, label, value, setter }) => {
    return (
        <div className="border-b border-[#D2C2FFAD] py-2 sm:w-1/2 md:w-3/4 ml-3">
            <p className="text-[#9B96AB] text-sm">{label}</p>
            <input
                type={type}
                value={value}
                onChange={setter}
                className="text-base focus:outline-none"
            />
        </div>
    )
}

export default InputFormProfile

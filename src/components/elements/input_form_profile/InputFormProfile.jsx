import React from 'react'

const InputFormProfile = ({ type, label, value, setter }) => {
    return (
        <div className="border-b border-[#D2C2FFAD] py-2 md:w-96 ml-3">
            <div className="text-[#9B96AB] text-sm">{label}</div>
            <input
                type={type}
                value={value}
                onChange={setter}
                className="text-base border-none focus:outline-none focus:ring-0"
            />
        </div>
    )
}

export default InputFormProfile

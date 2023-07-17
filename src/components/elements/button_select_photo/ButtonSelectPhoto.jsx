import React from 'react'

const ButtonSelectPhoto = ({ children }) => {
    return (
        < div className="text-blue-500 border border-blue-500 rounded-md w-fit hover:text-white hover:bg-blue-500" >
            <button className='px-6 py-2 font-bold'>{children}</button>
        </div >
    )
}

export default ButtonSelectPhoto
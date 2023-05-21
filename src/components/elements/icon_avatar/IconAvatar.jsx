import React from 'react'

const IconAvatar = ({ src }) => {
    return (
        <div className="p-1 bg-blue-500 rounded-full w-fit">
            <div className="bg-white rounded-full">
                <img src={src} alt="gambar" className='rounded-full' />
            </div>
        </div>
    )
}

export default IconAvatar
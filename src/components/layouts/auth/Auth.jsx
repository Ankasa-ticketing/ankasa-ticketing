import React from 'react'
import Hero from '../../elements/hero/Hero'

const Auth = ({ title, children }) => {
    return (
        <>
            <div className="flex w-screen">
                {/* kiri */}
                <Hero />

                {/* kanan */}
                <div className="w-1/2 flex justify-center items-center">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Auth
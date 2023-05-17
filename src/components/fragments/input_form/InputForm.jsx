import React from 'react'
import Label from '../../elements/label/Label'
import Input from '../../elements/input/Input'

const InputForm = ({ children, title }) => {
    return (
        <>
            <div className="my-2">
                {children}
            </div>
        </>
    )
}

export default InputForm
import React, { useState } from 'react'
import useTicket from '../../states/useTicket'

const CheckBoxFilter = ({ label, airliineID }) => {
    const { filter } = useTicket()
    return (
        <div className="flex items-center justify-between w-full">
            <span
                htmlFor="default-checkbox"
                className="text-base font-medium text-gray-900"
            >
                {label}</span>
            <input
                id="default-checkbox"
                type="checkbox"
                value={airliineID}
                onChange={() => filter(airliineID)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
        </div>
    )
}

export default CheckBoxFilter
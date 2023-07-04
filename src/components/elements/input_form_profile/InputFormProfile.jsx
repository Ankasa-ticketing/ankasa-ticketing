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

        // <div class="mb-6">
        //     <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
        //     <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        // </div>
    )
}

export default InputFormProfile

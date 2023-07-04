import React from 'react'
import CheckBoxFilter from '../elements/CheckBoxFilter'

const FilterMenu = () => {
    return (
        <div
            className={`sm:flex flex-col space-y-4 w-1/4 hidden
                    h-full bg-white rounded-lg px-4 py-4 shadow-md`}
        >
            {/* Transit */}
            <div className="flex flex-col px-2 py-2 space-y-3 border-b">
                <span className='font-semibold'>Transit</span>
                <CheckBoxFilter label={"Direct"} />
                <CheckBoxFilter label={"Transit"} />
                <CheckBoxFilter label={"Transit 2+"} />
            </div>
            {/* Facilities */}
            <div className="flex flex-col px-2 py-2 space-y-3 border-b">
                <span className='font-semibold'>Facilities</span>
                <CheckBoxFilter label={"Direct"} />
                <CheckBoxFilter label={"Transit"} />
                <CheckBoxFilter label={"Transit 2+"} />
            </div>
            {/* Airlines */}
            <div className="flex flex-col px-2 py-2 space-y-3 border-b">
                <span className='font-semibold'>Airlines</span>
                <CheckBoxFilter label={"Direct"} />
                <CheckBoxFilter label={"Transit"} />
                <CheckBoxFilter label={"Transit 2+"} />
            </div>
        </div>
    )
}

export default FilterMenu
import React from 'react'

const TimePicker = ({ children, setHour, setMinute }) => {
    const hour = Array.from({ length: 24 });
    const minute = Array.from({ length: 61 });

    const handleOnClickHour = (value) => {
        setHour(value)
    }

    const handleOnClickMinute = (value) => {
        setMinute(value)
    }

    return (
        <>
            <div className="flex items-center justify-between py-2 ml-3 w-96">
                <div className="">{children}</div>
                <div className="inline-flex p-2 text-lg border rounded-md">
                    <select name="" id="" className="px-2 bg-transparent outline-none appearance-none">
                        {
                            hour.map((_, i) => {
                                if (i < 10) {
                                    return <><option key={i} value={`0${i}`} onClick={() => handleOnClickHour(`0${i}`)}>0{i}</option></>
                                }
                                return <option key={i} value={i} onClick={() => handleOnClickHour(`${i}`)}>{i}</option>
                            })
                        }
                    </select>
                    <span className="px-2">:</span>
                    <select name="" id="" className="px-2 bg-transparent outline-none appearance-none">
                        {
                            minute.map((_, i) => {
                                if (i < 10) {
                                    return <><option key={i} value={`0${i}`} onClick={() => handleOnClickMinute(`0${i}`)}>0{i}</option></>
                                }
                                return <option key={i} value={i} onClick={() => handleOnClickMinute(`${i}`)}>{i}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        </>
    )
}

export default TimePicker
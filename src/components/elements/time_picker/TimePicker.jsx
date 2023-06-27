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
            <div class="flex py-2 ml-3 items-center w-96 justify-between">
                <div className="">{children}</div>
                <div class="inline-flex text-lg border rounded-md p-2">
                    <select name="" id="" class="px-2 outline-none appearance-none bg-transparent">
                        {
                            hour.map((_, i) => {
                                if (i < 10) {
                                    return <><option key={i} value={`0${i}`} onClick={() => handleOnClickHour(`0${i}`)}>0{i}</option></>
                                }
                                return <option key={i} value={i} onClick={() => handleOnClickHour(`${i}`)}>{i}</option>
                            })
                        }
                    </select>
                    <span class="px-2">:</span>
                    <select name="" id="" class="px-2 outline-none appearance-none bg-transparent">
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
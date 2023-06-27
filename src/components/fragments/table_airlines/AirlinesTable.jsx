import React, { useEffect } from 'react'
import useAirlineState from '../../../states/useAirlineState'

const AirlinesTable = () => {
    const { data, loading, error, msgResponse, fecthAirlines } = useAirlineState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        fecthAirlines(token)
    }, [])

    console.log(data);

    return (
        <>
            <div className="w-full px-5 py-3 overflow-x-auto rounded-lg shadow-md">
                <table className="table w-full">
                    <thead>
                        <tr className='text-lg text-gray-400'>
                            <th>Airline</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => <AirlineCard image={item.image} name={item.name} />)}
                    </tbody>
                </table>
            </div>

        </>
    )
}

const AirlineCard = ({ name, image }) => {
    return (
        <tr className='h-fit'>
            <td className='h-fit'>
                <div className="flex items-center space-x-3 h-fit">
                    <div className="avatar">
                        <div className="h-[100px] w-[100px]">
                            <img className='rounded-lg' src={image} alt="airline image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>

            <td>
                <div className="h-[100px] space-x-3 flex text-white items-center">
                    <div className="px-3 py-2 rounded-md bg-amber-400 h-fit">Edit</div>
                    <div className="px-3 py-2 bg-red-500 rounded-md h-fit">Delete</div>
                </div>
            </td>
        </tr>
    )
}

export default AirlinesTable
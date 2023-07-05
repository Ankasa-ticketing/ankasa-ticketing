import React, { useEffect } from 'react'
import useAirlineState from '../../../states/useAirlineState'
import useSideBar from '../../../states/useSideBar'
import EditAirline from '../../../pages/admin/EditAirline'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AirlinesTable = () => {
    const { data, loading, error, msgResponse, fecthAirlines } = useAirlineState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        fecthAirlines(token)
    }, [msgResponse, data])

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
                        {data.map(item => <AirlineCard image={item.image} name={item.name} id={item.id} />)}
                    </tbody>
                </table>
            </div>

        </>
    )
}

const AirlineCard = ({ name, image, id }) => {
    const token = localStorage.getItem('token')
    const { setContent } = useSideBar()
    const { deleteAirline } = useAirlineState()

    const notify = () => {
        toast(
            ({ closeToast }) => (
                <div>
                    <p className="text-amber-500">Yakin untuk hapus?</p>
                    <div className="flex space-x-3">
                        <button className='hover:text-red-500' onClick={() => deleteAirline(token, id)}>OK</button>
                        <button className='hover:text-blue-500' onClick={closeToast}>Close</button>
                    </div>
                </div>
            )
        )
    }

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
                    <div
                        onClick={() => setContent(<EditAirline id={id} oldName={name} imageURL={image} />)}
                        className="px-3 py-2 rounded-md bg-amber-400 h-fit hover:cursor-pointer"
                    >Edit</div>
                    <div
                        onClick={notify}
                        className="px-3 py-2 bg-red-500 rounded-md h-fit hover:cursor-pointer"
                    >Delete</div>
                    <ToastContainer />
                </div>
            </td>
        </tr>
    )
}

export default AirlinesTable
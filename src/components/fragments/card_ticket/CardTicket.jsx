import React, { useState } from 'react'
import { FormatRupiah } from "@arismun/format-rupiah";
import { Link, useNavigate } from 'react-router-dom'
import ubahFormatWaktu from '../../../utils/time_format';

const CardTicket = ({
    id,
    airline,
    from_location,
    destination,
    departure,
    arrived,
    price,
    image,
    transit
}) => {
    const [showDetail, setShowDetails] = useState(false)
    function setDetail() {
        setShowDetails(!showDetail)
    }

    const navigate = useNavigate()

    const berangat = ubahFormatWaktu(departure)
    const sampai = ubahFormatWaktu(arrived)
    return (

        <div
            onClick={() => navigate(`/flight-detail/${id}`)}
            className="sm:w-[890px] bg-white shadow-md h-auto rounded-lg 
        flex flex-col gap-[35px] lg:pl-10 sm:pl-3 pr-10 cursor-pointer">
            <div className="flex items-center pt-3 space-x-4 font-semibold">
                <img src={`${image}`} className="w-32" alt="logo airline" />
                <p>{airline}</p>
            </div>
            <div
                className="flex flex-col items-center px-3 space-y-2 sm:flex-row sm:justify-between"
            >
                <div className="flex items-center gap-3">
                    <div>
                        {from_location}
                        <div>{berangat}</div>
                    </div>
                    <div>
                        <img
                            src="/src/assets/images/plane-mini.png"
                            alt="gambar"
                        />
                    </div>
                    <div>
                        {destination}
                        <div>{sampai}</div>
                    </div>
                </div>
                <div>
                    <div>
                        {/* <div>3 hours 11 minutes</div> */}
                        {transit == 0 ? <div className="text-center">Direct</div> : <div className="text-center">{transit} transit</div>}

                    </div>
                </div>
                <div>
                    <div className="flex gap-3">
                        <img src="/src/assets/images/bag.svg" alt="gambar" />
                        <img src="/src/assets/images/food.svg" alt="gambar" />
                        <img src="/src/assets/images/wifi.svg" alt="gambar" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div><FormatRupiah value={price} /></div>
                    <div className='hidden sm:block'>
                        <button
                            onClick={() => navigate(`/flight-detail/${id}`)}
                            className="bg-blue-400 w-[130px] h-[45px] text-white font-bold shadow-xl rounded-lg">
                            Select
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <p className="px-2 m-0">View Details</p>
                    <button onClick={setDetail}>
                        <img
                            src="/src/assets/images/btnback.svg"
                            className="w-5"
                        />
                    </button>
                </div>
                {showDetail ? (
                    <div >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}

export default CardTicket

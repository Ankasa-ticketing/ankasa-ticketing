import { useEffect, useState } from 'react'
import vector2 from '../assets/logo/vector 02.svg'
import arrow from '../assets/logo/arrow.svg'
import CardTicket from '../components/fragments/card_ticket/CardTicket'
import useTicket from '../states/useTicket'
import FilterMenu from '../components/fragments/FilterMenu'

const SearchResults = () => {
    const fetchTickets = useTicket((state) => state.fetchTickets)
    const airlines = useTicket((state) => state.airlines)
    const loading = useTicket((state) => state.loading)

    const [showDetail, setShowDetails] = useState(false)
    const [showTransit, setShowTransit] = useState(false)

    function setDetail() {
        setShowDetails(!showDetail)
    }

    function transit() {
        setShowTransit(!showTransit)
    }

    return (
        <>
            <div className=" bg-[#F5F6FA]">
                {/* Header */}
                <div className="bg-blue-500 bg-[url('/src/assets/logo/blueplane.svg')] bg-no-repeat h-44 rounded-b-lg">
                    <div className="grid grid-cols-2 pt-[55px] pb-10 font-[Poppins]">
                        <div className="flex px-10">
                            <img className=" lg:ml-[140px]" src={vector2} alt="" />
                            <div className=" ml-5 lg:ml-[50px] ">
                                <h6 className="text-white">INA</h6>
                                <img src={arrow} alt="" />
                                <h6 className="text-white">JPN</h6>
                            </div>
                        </div>

                        <div className="mr-5 text-end">
                            <div>
                                <h5 className="text-white">Change search</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap px-16 py-5">

                    {/* Filter Menu */}
                    <FilterMenu />

                    {/* Card Tickets */}
                    <div className="flex flex-col px-3 space-y-4">
                        <CardTicket
                            airline={"Garuda Indonesia"}
                            arrived={"12:00"} departure={"13:00"}
                            from_location={"Bandung"}
                            destination={"Jakarta"}
                            id={1}
                            image={"image"}
                            price={200000}
                        />
                        <CardTicket
                            airline={"Garuda Indonesia"}
                            arrived={"12:00"} departure={"13:00"}
                            from_location={"Bandung"}
                            destination={"Jakarta"}
                            id={1}
                            image={"image"}
                            price={200000}
                        />
                        <CardTicket
                            airline={"Garuda Indonesia"}
                            arrived={"12:00"} departure={"13:00"}
                            from_location={"Bandung"}
                            destination={"Jakarta"}
                            id={1}
                            image={"image"}
                            price={200000}
                        />
                        <CardTicket
                            airline={"Garuda Indonesia"}
                            arrived={"12:00"} departure={"13:00"}
                            from_location={"Bandung"}
                            destination={"Jakarta"}
                            id={1}
                            image={"image"}
                            price={200000}
                        />
                    </div>

                    {/* pagination */}
                    <div className="flex items-center justify-center w-full py-3">
                        <div className="w-10 h-10 bg-gray-400 rounded-lg">

                        </div>
                        <span className="mx-2 ">1</span>
                        <div className="w-10 h-10 bg-gray-400 rounded-lg">

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SearchResults

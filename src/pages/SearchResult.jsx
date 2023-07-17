import vector2 from '../assets/logo/vector 02.svg'
import arrow from '../assets/logo/arrow.svg'
import { useEffect, useState } from 'react'
import CardTicket from '../components/fragments/card_ticket/CardTicket'
import NavigationBar from '../components/fragments/navbar/Navbar'
import useTicket from '../states/useTicket'
import FilterMenu from '../components/fragments/FilterMenu'
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

const SearchResult = () => {
    const fetchTickets = useTicket((state) => state.fetchTickets)
    const airlines = useTicket((state) => state.airlines)
    const keyword = useTicket((state) => state.keyword)
    const filterAirline = useTicket((state) => state.filterAirline)
    const loading = useTicket((state) => state.loading)

    const [page, setPage] = useState(1)
    console.log({ page });

    useEffect(() => {
        fetchTickets(localStorage.getItem('token'), keyword, filterAirline, page)
    }, [keyword, filterAirline, page])

    return (
        <>
            <NavigationBar />
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

                <div className="flex flex-wrap px-4 py-4 sm:px-16 sm:py-5">

                    {/* Filter Menu */}
                    <FilterMenu />

                    {/* Card Tickets */}
                    <div className="flex flex-col items-center px-3 space-y-4">
                        {airlines.map((item) => (
                            <>
                                <CardTicket
                                    key={item.id}
                                    id={item.id}
                                    airline={item.name}
                                    from_location={item.from_location}
                                    destination={item.destination}
                                    image={item.image}
                                    departure={item.departure_time}
                                    arrived={item.time_arrived}
                                    price={item.price}
                                    transit={item.transit}
                                />
                            </>

                        ))}
                    </div>

                    {/* pagination */}
                    <div className="flex items-center justify-center w-full gap-3 py-3">
                        <div
                            onClick={() => setPage(page - 1)} style={page <= 1 ? { display: "none" } : { display: "" }}
                            className="w-10 h-10 bg-[#2395FF] rounded-full flex items-center justify-center">
                            <TiChevronLeftOutline className='text-3xl text-white' />
                        </div>
                        <span className="mx-2 text-xl font-semibold">{page}</span>
                        <div
                            onClick={() => setPage(page + 1)}
                            className="w-10 h-10 bg-[#2395FF] rounded-full flex items-center justify-center">
                            <TiChevronRightOutline className='text-3xl text-white' />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SearchResult

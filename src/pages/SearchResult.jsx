import vector2 from '../assets/logo/vector 02.svg'
import arrow from '../assets/logo/arrow.svg'
import { useEffect, useState } from 'react'
import CardTicket from '../components/fragments/card_ticket/CardTicket'
import NavigationBar from '../components/fragments/navbar/Navbar'
import useTicket from '../states/useTicket'
import FilterMenu from '../components/fragments/FilterMenu'

const SearchResult = () => {
    const fetchTickets = useTicket((state) => state.fetchTickets)
    const airlines = useTicket((state) => state.airlines)
    const loading = useTicket((state) => state.loading)
    console.log(airlines);

    const [showDetail, setShowDetails] = useState(false)
    const [showTransit, setShowTransit] = useState(false)

    function setDetail() {
        setShowDetails(!showDetail)
    }

    function transit() {
        setShowTransit(!showTransit)
    }

    useEffect(() => {
        fetchTickets(localStorage.getItem('token'))
    }, [])

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
            {/* <div className="bg-blue-500 bg-[url('/src/assets/logo/blueplane.svg')] bg-no-repeat h-44 rounded-b-lg">
                <div className="flex w-full justify-between pt-[55px] px-10 pb-10 font-[Poppins]">
                    <div>
                        <img
                            className="absolute left-[140px]"
                            src={vector2}
                            alt=""
                        />
                        <div className="flex gap-10 ml-[170px]">
                            <h6 className="text-white">INA</h6>
                            <img src={arrow} alt="" />
                            <h6 className="text-white">JPN</h6>
                        </div>
                    </div>

                    <div className="">
                        <div>
                            <h5 className="text-white">Change search</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full pl-10 pr-10 gap-10 items-center bg-[#F5F6FA] px-6 font-[Poppins] pt-10">
                <div className="flex">
                    <div className="flex items-center gap-32">
                        <h4>Filter</h4>
                        <p className="m-0">Reset</p>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div>
                        <div className="flex items-center gap-2">
                            <h4>Select Ticket</h4>
                            <p className="m-0">(6 flight found)</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <h6 className="m-0">Sort by</h6>
                            <img src="/src/assets/logo/arrowtop.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex bg-[#F5F6FA]">
                <div className="flex flex-auto w-8 bg-[#F5F6FA] h-[1250px]">
                    <div className="rounded-2xl bg-white w-[400px] ml-24  m-[30px] shadow">
                        <div className="flex justify-between w-full pt-4 pl-5 pr-5">
                            <div className="font-bold text-[16px]">Transit</div>
                            <button onClick={transit}>
                                <img
                                    className="w-3"
                                    src="/src/assets/images/btnback.svg"
                                    alt=""
                                />
                            </button>
                        </div>


                    </div>
                </div>
                <div className="flex flex-auto w-96 pt-[30px] flex-col gap-10 bg-[#F5F6FA]">
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
                            />
                        </>

                    ))}

                </div>
            </div> */}
        </>
    )
}

export default SearchResult

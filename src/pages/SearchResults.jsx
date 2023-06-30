import { useEffect, useState } from 'react'
import vector2 from '../assets/logo/vector 02.svg'
import arrow from '../assets/logo/arrow.svg'
import CardTicket from '../components/fragments/card_ticket/CardTicket'
import NavigationBar from '../components/fragments/Navbar'
import useTicket from '../states/useTicket'

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
        <div className="container bg-[#F5F6FA]">
            <div className="bg-blue-500 bg-[url('/src/assets/logo/blueplane.svg')] bg-no-repeat h-44 rounded-b-lg">
                <div className="grid grid-cols-2   pt-[55px]  pb-10 font-[Poppins]">
                    <div className="flex px-10">
                        <img className=" lg:ml-[140px]" src={vector2} alt="" />
                        <div className=" ml-5 lg:ml-[50px] ">
                            <h6 className="text-white">INA</h6>
                            <img src={arrow} alt="" />
                            <h6 className="text-white">JPN</h6>
                        </div>
                    </div>

                    <div className="text-end mr-5">
                        <div>
                            <h5 className="text-white">Change search</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                <div className=" lg:col-span-1 md:col-span-1 sm:col-span-2  flex   lg:justify-center md:justify-center  md:mx-auto   bg-[#F5F6FA] lg:h-[1250px] md:h-[1000px]    pt-[30px]">
                    <div className="rounded-2xl bg-white w-[300px] lg:w-[350px] md:w-[200px]  shadow">
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
                        {showTransit ? (
                            <>
                                <div className="flex justify-between w-full pl-5 pr-5 mt-10">
                                    <p>Direct</p>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className="flex justify-between w-full pl-5 pr-5">
                                    <p>Direct</p>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div className="flex justify-between w-full pl-5 pr-5">
                                    <p>Direct</p>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <hr className="ml-10 mr-10" />
                            </>
                        ) : (
                            <div></div>
                        )}
                        <div className="flex justify-between w-full pt-4 pl-5 pr-5">
                            <div className="font-bold text-[16px]">Transit</div>

                            <img
                                className="w-3"
                                src="/src/assets/images/btnback.svg"
                                alt=""
                            />
                        </div>
                        <div className="flex justify-between w-full pl-5 pr-5 mt-10">
                            <p>Direct</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="flex justify-between w-full pl-5 pr-5">
                            <p>Direct</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className="flex justify-between w-full pl-5 pr-5">
                            <p>Direct</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <hr className="ml-10 mr-10" />
                    </div>
                </div>
                <div className="col-span-2   pt-[30px] ">
                    <div className="w-[387px] mx-auto md:w-[500px] md:mx-auto lg:w-[1000px] pt-10">
                        <CardTicket />
                    </div>
                    <div className="w-[387px] mx-auto md:w-[500px] md:mx-auto lg:w-[1000px] pt-10">
                        <CardTicket />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults

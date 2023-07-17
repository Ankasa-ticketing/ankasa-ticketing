import './FlightDetail.css'
import NavigationBar from '../../components/fragments/navbar/Navbar'
import Footer from '../../components/fragments/Footer'
import pesawat from '../../assets/logo/pesawat.svg'
import InputFormProfile from '../../components/elements/input_form_profile/InputFormProfile'
import { BiCheckCircle } from "react-icons/bi";
import { FormatRupiah } from "@arismun/format-rupiah";
import { AiFillWarning } from 'react-icons/ai'
import { Dropdown } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
import useBooking from '../../states/useBooking'

const FlightDetail = () => {
    let { ticket_id } = useParams();
    const navigate = useNavigate()

    const { ticket, fetchData, bookingTicket, message } = useBooking()
    console.log(message);

    const [titleP, setTitleP] = useState('Mr.')
    const [checked, setChecked] = useState(false)

    const [fullname, setFullname] = useState(JSON.parse(localStorage.getItem('user')).fullname)
    const [email, SetEmail] = useState(JSON.parse(localStorage.getItem('user')).email)
    const [phone, setPhone] = useState(JSON.parse(localStorage.getItem('user')).phone)
    const [insurance, setInsurance] = useState(false)

    useEffect(() => {
        const jwt = localStorage.getItem("token")
        fetchData(jwt, ticket_id)

    }, [ticket_id])

    const handleSubmit = (e) => {
        e.preventDefault()

        bookingTicket(localStorage.getItem("token"), { insurance: insurance }, ticket_id)
        navigate("/my-booking")
        alert("Berhasil Booking")

    }

    return (
        <div>
            <NavigationBar />

            <div className="flex flex-wrap sm:px-5">
                <div className="px-4 w-fit sm:w-[62vw]">
                    <p className='text-xl text-white'>Contact Person Details</p>

                    <div className="px-5 py-5 bg-white rounded-md shadow-md">
                        <InputFormProfile label={"Fullname"} value={fullname} setter={(e) => setFullname(e.target.value)} />
                        <InputFormProfile label={"Email"} value={email} setter={(e) => SetEmail(e.target.value)} />
                        <InputFormProfile label={"Phone"} value={phone} setter={(e) => setPhone(e.target.value)} type={'number'} />

                        <div className="flex items-center gap-2 px-3 py-2 mt-3 bg-red-200 rounded-md">
                            <div className="text-lg text-red-500">
                                <AiFillWarning />
                            </div>
                            <div className="text-[#595959]">
                                Make sure the customer data is correct.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 top-10 right-7 sm:right-20 sm:w-[30vw]">
                    <p className='text-xl text-white'>Flight Details</p>

                    <div className="bg-white rounded-md shadow-md ">
                        <div className="px-5 pt-4 pb-2 border-b">
                            <div className='flex gap-4'>
                                <img src={ticket.image} alt="airlne" />
                                <p className='text-[#595959]'>{ticket.name}</p>
                            </div>

                            <div className="flex mt-3 space-x-3 justify-evenly">
                                <p className="">{ticket.from_location}</p>
                                <img src={pesawat} alt="pesawat" />
                                <p className="">{ticket.destination}</p>
                            </div>

                            <div className="text-center">
                                <p className="text-xs text-[#595959] font-semibold">{ticket.departure_time} - {ticket.time_arrived}</p>
                            </div>

                            <div className="">
                                <div className="text-[#2395FF] flex items-center space-x-2">
                                    <BiCheckCircle />
                                    <span className=''>Refundable</span>
                                </div>
                                <div className="text-[#2395FF] flex items-center space-x-2">
                                    <BiCheckCircle />
                                    <span>Can reschedule</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-5 py-2">
                            <p className='font-semibold'>Total Payment</p>
                            <p className="text-[#2395FF] font-semibold">
                                <FormatRupiah value={ticket.price} />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-4 mt-7">
                    <p className="text-xl font-semibold">
                        Passenger Details
                    </p>
                    <div className="px-5 py-5 bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-between px-3 py-2 bg-teal-100 rounded-lg">
                            <span className='font-semibold'>Passenger</span>
                            <div className="flex space-x-2">
                                <div className="text-sm">Some as contact person</div>
                                <span className="relative inline-flex items-center cursor-pointer">
                                    {checked ?
                                        <input type="checkbox" value="" className="sr-only peer" checked /> :
                                        <input type="checkbox" value="" className="sr-only peer" />
                                    }

                                    <div onClick={() => setChecked(!checked)} className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center mt-3">
                            <div className="border-b border-[#D2C2FFAD] md:w-96 ml-3">
                                <p className="text-[#9B96AB] text-sm">Title</p>
                                <input
                                    type={"text"}
                                    value={titleP}
                                    className="text-base border-none outline-none focus:border-none" disabled
                                />
                            </div>
                            <Dropdown
                                color={'#2395FF'} className='text-gray-900'
                            >
                                <Dropdown.Item
                                    style={{ color: 'black' }}
                                    onClick={() => setTitleP('Mr.')}
                                >
                                    Mr.
                                </Dropdown.Item>
                                <Dropdown.Item
                                    style={{ color: 'black' }}
                                    onClick={() => setTitleP('Mrs.')}
                                >
                                    Mrs.
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <InputFormProfile label={"Fullname"} value={checked ? fullname : ""} />
                        <InputFormProfile label={"Nationality"} />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="px-5 py-5 mt-4 bg-white rounded-lg shadow-md">
                            <div className="flex justify-between border-b">
                                <div className="flex items-center mb-4">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value={insurance}
                                        onClick={() => setInsurance(!insurance)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <span for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Travel insurance</span>
                                </div>
                                <div className="text-sm">
                                    <FormatRupiah value={20000} />
                                    <span>/pax</span>
                                </div>
                            </div>
                        </div>

                        <button className="px-24 hover:cursor-pointer" >
                            <div className="py-2 px-4 bg-[#2395FF] text-white text-center rounded-md mt-4 font-semibold">
                                Procced to Payment
                            </div>
                        </button>

                    </form>
                </div>
            </div>

            <div className='mt-12'>
                <Footer />
            </div>
        </div>
    )
}

export default FlightDetail

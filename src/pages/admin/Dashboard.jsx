import React, { useEffect, useState } from 'react'
import { FaPlaneDeparture } from "react-icons/fa";
import InputFormProfile from '../../components/elements/input_form_profile/InputFormProfile';
import TimePicker from '../../components/elements/time_picker/TimePicker';
import DropdownClass from '../../components/elements/dropdown_class/DropdownClass';
import DropdownAirlines from '../../components/elements/dropdown_airlines/DropdownAirlines';
import FormAddTicket from '../../components/fragments/form_add_ticket/FormAddTicket';
import FormAddAirline from '../../components/fragments/form_add_airline/FormAddAirline';
import SideBar from '../../components/fragments/sidebar/SideBar';
import AirlinesTable from '../../components/fragments/table_airlines/AirlinesTable';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [content, setContent] = useState(<AirlinesTable />)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const role = atob(localStorage.getItem('role'))
        if (token == null && role != '"admin"') {
            navigate('/login')
        }
    })

    return (
        <>
            <div className="flex w-screen">
                {/* Sidebard */}
                <SideBar setter={setContent} />

                {/* Content */}
                <div className="w-full py-3 px-7">
                    {content}
                    {/* FromAddTicket */}
                    {/* <div className="p-4 mt-4 rounded-lg shadow-md">
                        {
                            ticket &&
                            <>
                                <FormAddTicket />
                            </>
                        }

                        {
                            airline &&
                            <>
                                <FormAddAirline />
                            </>
                        }
                    </div> */}

                    {/* <AirlinesTable /> */}
                </div>
            </div>
        </>
    )
}

export default Dashboard
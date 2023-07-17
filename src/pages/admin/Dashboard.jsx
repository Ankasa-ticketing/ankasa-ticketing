import React, { useEffect, useState } from 'react'
import { FaPlaneDeparture } from "react-icons/fa";
import SideBar from '../../components/fragments/sidebar/SideBar';
import { useNavigate } from 'react-router-dom';
import useSideBar from '../../states/useSideBar';

const Dashboard = () => {
    // const [content, setContent] = useState(<AirlinesTable />)

    const { content } = useSideBar()
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
                {/* <SideBar setter={setContent} /> */}
                <SideBar />

                {/* Content */}
                <div className="w-full py-3 px-7">
                    {content}
                </div>
            </div>
        </>
    )
}

export default Dashboard
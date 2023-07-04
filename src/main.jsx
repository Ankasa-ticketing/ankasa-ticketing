import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Register from './pages/Register'
import ForgotedPassword from './pages/ForgotedPassword'
import DetailBooking from './pages/DetailBooking'
import LandingPage from './pages/LandingPage'
import FlightDetail from './pages/FlightDetail/FlightDetail'
import Dashboard from './pages/admin/Dashboard'
import SearchResult from './pages/SearchResult'
import SearchResults from './pages/SearchResults'
import MyBooking from './pages/MyBooking'
import 'flowbite';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Register />,
    },
    {
        path: '/forgoted-password',
        element: <ForgotedPassword />,
    },
    {
        path: '/flight-detail/:ticket_id',
        element: <FlightDetail />,
    },
    {
        path: '/detail-booking',
        element: <DetailBooking />,
    },
    {
        path: '/my-booking',
        element: <MyBooking />,
    },
    {
        path: '/profile',
        element: <UserProfile />,
    },
    {
        path: '/tickets',
        element: <SearchResult />,
    },
    {
        path: '/ticket',
        element: <SearchResults />,
    },
    {
        path: '/home',
        element: <LandingPage />,
    },
    {
        path: '/admin/dashboard',
        element: <Dashboard />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

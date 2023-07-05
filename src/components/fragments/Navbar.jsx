// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavBrand from "../elements/logo/NavBrand";
// import iconSearch from "../../assets/logo/iconSearch.png";
// import PrimaryButton from "../elements/button/ButtonSubmit";
// import { Link } from "react-router-dom";

// function NavigationBar() {
//   return (
//     <Navbar expand="lg">
//       <Container>
//         <Navbar.Brand>
//           <NavBrand />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Form>
//               <div
//                 className="d-flex position-relative"
//                 style={{ marginLeft: "60px" }}
//               >
//                 <img
//                   src={iconSearch}
//                   alt="Search"
//                   width={15}
//                   height={15}
//                   className="position-absolute"
//                   style={{ top: "12px", left: "6px" }}
//                 />
//                 <Form.Control
//                   type="search"
//                   placeholder="Whre you want to go?"
//                   className="me-2"
//                   aria-label="Search"
//                   style={{
//                     textAlign: "center",
//                     width: "230px",
//                     backgroundColor: "#F5F5F5",
//                   }}
//                 />
//               </div>
//             </Form>
//             <Link
//               to="/tickets"
//               className="text-decoration-none fw-bold"
//               style={{ fontFamily: "Poopin", color: "#414141" }}
//             >
//               <Nav.Link as="div" style={{ marginLeft: "10rem" }}>
//                 Find Ticket
//               </Nav.Link>
//             </Link>
//             <Link
//               to="/my-booking"
//               className="text-decoration-none fw-bold"
//               style={{ fontFamily: "Poopin", color: "#414141" }}
//             >
//               <Nav.Link as="div">My Booking</Nav.Link>
//             </Link>
//           </Nav>
//           <div className="d-flex">
//             <PrimaryButton>
//               <Link
//                 to="/"
//                 className="text-decoration-none "
//                 style={{ color: "white", fontFamily: "Poppin" }}
//               >
//                 Sign Up
//               </Link>
//             </PrimaryButton>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;

import { AiOutlineMail } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import NavBrand from "../elements/logo/NavBrand";

function NavigationBar() {
  const navigate = useNavigate()
  if (!localStorage.getItem('user')) {
    return navigate('/login')
  }
  const { photo } = JSON.parse(localStorage.getItem('user'))
  return (

    <div
      className="flex justify-between px-3 py-3 shadow-md sm:px-5"
    >
      <NavBrand />

      <div className="flex items-center space-x-2 sm:space-x-7">
        <form className='w-fit'>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search"
              id="default-search"
              className="block w-full py-2 pl-10 pr-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Where you want to go?"
              required
            />
          </div>
        </form>

        <Link to={"/tickets"} className="font-semibold text-black no-underline hover:cursor-pointer">Find Ticket</Link>
        <Link to={"/my-booking"} className="font-semibold text-black no-underline hover:cursor-pointer">My Booking</Link>
      </div>

      <div
        className="flex items-center justify-center space-x-4 text-2xl"
      >
        <AiOutlineMail className='hidden sm:block' />
        <IoNotificationsOutline className='hidden sm:block' />
        <div className="p-[2px] bg-blue-500 rounded-full w-fit">
          <img
            src={photo}
            alt="profile"
            width={40}
            className='rounded-full'
          />
        </div>
      </div>
    </div>
  )
}

export default NavigationBar

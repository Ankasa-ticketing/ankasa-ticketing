// import React from 'react'
import Auth from "../components/layouts/auth/Auth";
import FormRegister from "../components/fragments/form_register/FormRegister";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    const role = atob(localStorage.getItem('role'))
    // console.log(role);
    if (token) {
      switch (role) {
        case '"admin"':
          navigate('/admin/dashboard')
          break;
        case '"user"':
          navigate('/home')
          break;
        default:
          break;
      }
    }
  },)
  return (
    <>
      <Auth title={"register"}>
        <FormRegister />
      </Auth>
    </>
  );
};

export default Register;

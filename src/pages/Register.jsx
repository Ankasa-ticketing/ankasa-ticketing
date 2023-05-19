// import React from 'react'
import Auth from "../components/layouts/auth/Auth";
import FormRegister from "../components/fragments/form_register/FormRegister";

const Register = () => {
  return (
    <>
      <Auth title={"register"}>
        <FormRegister />
      </Auth>
    </>
  );
};

export default Register;

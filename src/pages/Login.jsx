import React from 'react'
import Auth from '../components/layouts/auth/Auth'
import FormLogin from '../components/fragments/form_login/FormLogin'

const Login = () => {
    return (
        <>
            <Auth title={"login"}>
                <FormLogin />
            </Auth>
        </>
    )
}

export default Login
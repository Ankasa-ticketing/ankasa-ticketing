import Auth from "../components/layouts/auth/Auth";
import ForgotPassword from "../components/fragments/form_forgotpassword/ForgotPassword";

const ForgotedPassword = () => {
  return (
    <>
      <Auth title={"login"}>
        <ForgotPassword />
      </Auth>
    </>
  );
};

export default ForgotedPassword;

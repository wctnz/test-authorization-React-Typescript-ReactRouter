import { SignUp } from "../../components/SignUp";
import { Link } from "react-router-dom";
import cl from "./RegisterPage.module.css"

const RegisterPage = () => {
  return (
    <div className={cl.container}>
      <div className={cl.form}>
        <h1>Register</h1>
        <SignUp />
        <p>
          Already have an account? <Link
            className={cl.link}
            to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

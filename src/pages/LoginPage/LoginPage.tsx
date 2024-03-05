import { Login } from "../../components/Login/Login";
import { Link } from "react-router-dom";
import cl from "./LoginPage.module.css"

const LoginPage = () => {
  return (
    <div className={cl.container}>
      <div className={ cl.form }>
        <h1>Login</h1>
        <Login />
        <p>
          Or <Link 
          className={ cl.link }
          to="/Register">Registration</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

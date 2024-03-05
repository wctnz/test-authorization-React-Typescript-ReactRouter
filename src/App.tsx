import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom"
import MemberPage from "./pages/MemberPage/MemberPage";

function App() {
  return (
    <Routes>
     <Route path="/" element={ <HomePage /> }/>
     <Route path="/:id" element={ <MemberPage /> }/>
     <Route path="/login" element={ <LoginPage /> }/>
     <Route path="/register" element={ <RegisterPage /> }/>
    </Routes>
  );
}

export {App};
 
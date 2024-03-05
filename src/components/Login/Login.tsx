import React from "react";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }));
          navigate("/")
      })
      .catch(()=> alert("Не удалось обнаружить пользователя. Пожалуйста, проверьте электронную почту и пароль."));
  };

  return <Form title="Sign in" handleClick={handleLogin} />;
};

export { Login };

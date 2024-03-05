import { FC, useState } from "react";
import cl from "./Form.module.css"

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={cl.container}>
      <label>Электронная почта</label>
      <input
        className={cl.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <label>Пароль</label>
      <input
        className={cl.input}
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button
        className={cl.button}
        onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};

export { Form };

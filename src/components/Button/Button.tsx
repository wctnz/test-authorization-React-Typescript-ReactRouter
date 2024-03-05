import cl from "./Button.module.css"
import {FC} from "react"

interface ButtonProps {
onClick: ()=>void
children: string
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button
        onClick={ onClick }
        className={ cl.button }>
            { children }
        </button>
    );
};

export default Button;
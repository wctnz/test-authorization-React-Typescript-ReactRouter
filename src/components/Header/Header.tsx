import { useAppDispatch } from "../../hooks/redux-hooks";
import { removeUser } from "../../store/slices/userSlice";
import Button from "../Button/Button";
import cl from "./Header.module.css"

const Header = () => {
    const dispatch = useAppDispatch();

    const handleLogIut = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            dispatch(removeUser())
        }
    }

    return (
        <div className={cl.headerContainer}>
            <div className={cl.sign}>
                <h1>
                    Наша команда
                </h1>
                <h3>
                    Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеют находить выход из любых, даже самых сложных ситуаций.
                </h3>
            </div>
            <div className={cl.button}>
                <Button
                    onClick={handleLogIut}>Выход</Button>
            </div>
        </div>
    );
};

export default Header;
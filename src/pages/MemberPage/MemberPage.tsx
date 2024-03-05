import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { removeUser } from "../../store/slices/userSlice";
import { User } from "../../types/types";
import cl from "./MemberPage.module.css"

const MemberPage = () => {
    const [member, setMember] = useState<User>()
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerLogOut = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            dispatch(removeUser())
            navigate("/")
        }
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setMember(data))
    }, [id])

    return (
        <>
            {member && (
                <div className={cl.container}>
                    <div className={cl.header}>
                        <div className={`${cl.button} ${cl.back}`}>
                            <Button
                                onClick={() => navigate(-1)}>Назад</Button>
                        </div>
                        <img
                            width={200}
                            height={200}
                            className={cl.Img} src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="userImg" />
                        <div className={cl.info}>
                            <h1>{member.name.slice(0,12)}</h1>
                            <h2>{member.company.bs}</h2>
                        </div>
                        <div className={`${cl.button} ${cl.logOut}`}>
                            <Button onClick={handlerLogOut}>Выход</Button>
                        </div>
                    </div>
                    <div className={cl.main}>
                        <div className={cl.left}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum cum, nesciunt magnam exercitationem aliquam ex repudiandae numquam quae consequuntur deleniti ullam maxime sapiente sint nam ea, voluptatum in dolor doloremque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae nesciunt sit ipsam recusandae ut, expedita dignissimos qui veniam ad minus consequuntur voluptatem sequi itaque doloremque adipisci maiores, molestias inventore! Incidunt?</p>
                        </div>
                        <div className={cl.right}>
                            <p>{member.phone}</p>
                            <p>{member.email}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MemberPage;
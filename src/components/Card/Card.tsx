import { FC, useEffect, useRef, useState } from 'react';
import { User } from '../../types/types';
import cl from "./Card.module.css"
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { useAppSelector } from '../../hooks/redux-hooks';
import userSlice from '../../store/slices/userSlice';
import { teamMemberSlice } from '../../store/slices/teamMemberSlice';
import { useDispatch } from 'react-redux';
import { favouritesMembers } from '../../store/slices/favouritesMembersSlice';

interface CardProps {
    user: User
}

const Card: FC<CardProps> = ({ user }) => {
    const svgRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    const favourites = useAppSelector(state => state.favourites.favourites)

    console.log("favourites", favourites)

    const handleLikedClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        dispatch(favouritesMembers.actions.addToFavourites(user.name))
    }

    useEffect(() => {
        svgRef.current?.addEventListener("click", () => handleLikedClick);
    }, [favourites])

    return (
        <div className={cl.card}>
            <div>
                <img className={cl.Img} src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="userImg" />
            </div>
            <div>
                {user.name}
            </div>
            <div
                ref={svgRef}
                className={cl.likeButton}
                onClick={(e) => handleLikedClick(e)}
            >
                {favourites.includes(user.name) ? <IoIosHeart style={{ color: "#512689" }} /> : <IoIosHeartEmpty />}
            </div>
        </div>

    );
};

export default Card;
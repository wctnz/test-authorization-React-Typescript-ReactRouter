import { FC } from "react"
import { User } from "../../types/types";
import Card from "../Card/Card";
import cl from "./CardList.module.css"
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CardList {
    items: User[]
}

const CardList: FC<CardList> = ({ items }) => {
    return (
        <>
            <div className={cl.cardList}>
                {items.map(item => {
                    let itemWithNewProp = JSON.parse(JSON.stringify(item));
                    itemWithNewProp.liked = false;
                    Object.preventExtensions(itemWithNewProp);
                    return (
                        <Link 
                        className={ cl.link }
                        key={itemWithNewProp.id} 
                        to={`${itemWithNewProp.id}`}
                        >
                            <Card user={itemWithNewProp} />
                        </Link>
                    )
                })}
            </div>
            <div className={cl.selectContainer}>
                <button className={cl.button}>Показать еще <span className={cl.buttonSpan}><FaChevronDown /></span></button>
            </div>
        </>
    );
};

export default CardList;
import {characters} from "../utils/constants.ts";
import {NavLink} from "react-router";
import type {Props} from "../utils/types";




const Friend = ({friend, pos, itemTitle}: Props) => {

    let styles = "w-full";
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }
    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }
    return (
        <NavLink to={`/${itemTitle}/${friend}`}>
            <img className={styles} src={characters[friend].img} alt={characters[friend].name}/>
        </NavLink>
    )
}

export default Friend;
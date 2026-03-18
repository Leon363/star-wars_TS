import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const NavItem = ({itemTitle}: { itemTitle: string }) => {
const {hero, lastValidHero} = useContext(SWContext);
    const safeHero = hero ?? lastValidHero;
    return (
        <NavLink to={`/${itemTitle.toLowerCase()}/${safeHero}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
    )
}

export default NavItem;
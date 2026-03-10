import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {useParams} from "react-router";



const Header = () => {
    const {heroId} = useParams()
    const {heroContext} = useContext(SWContext);


    // let titleName: string = characters.
    // let {heroId = defaultHero} = useParams();

    return (
        <header className="rounded-t-3xl bg-gray">
            <Navigation/>

            <h1 className="text-center text-4xl py-6">{heroContext ? heroContext.name : heroId}</h1>
        </header>
    )
}

export default Header;
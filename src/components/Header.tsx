import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";


const Header = () => {
    const {hero} = useContext(SWContext);


    const headerSign = characters[hero] && characters[hero].name ? characters[hero].name : 'Something went wrong';

    return (
        <header className="rounded-t-3xl bg-gray relative z-10">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">{headerSign}</h1>
        </header>
    )
}

export default Header;

// characters[hero].name ? {characters[hero].name} : 'Something went wrong'
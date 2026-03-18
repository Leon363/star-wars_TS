import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import ErrorPage from "./ErrorPage.tsx";
// import {useValidHero} from "../hooks/customHooks.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const StarWars = () => {
    const {hero} = useContext(SWContext);

    return  hero ? <Text>{starWarsInfo}</Text> : <ErrorPage/>
}

export default StarWars;
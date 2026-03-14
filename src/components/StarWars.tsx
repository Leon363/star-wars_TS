import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {useContext, useEffect} from "react";
import ErrorPage from "./ErrorPage.tsx";
import {SWContext} from "../utils/context.ts";
import {useParams} from "react-router";

const StarWars = () => {
    const {changeHero} = useContext(SWContext);
    const {heroId = defaultHero} = useParams();
    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
    }, [])

    return  (heroId in characters) ? <Text>{starWarsInfo}</Text> : <ErrorPage/>
}

export default StarWars;
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";


export function useHero() {
    const {changeHero} = useContext(SWContext);
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if(heroId in characters) {
            changeHero(heroId)
        }
    }, [heroId]);
}
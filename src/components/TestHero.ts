import {useParams} from "react-router";
import {type ReactNode, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

interface Props {
    children: ReactNode;
}


    const TestHero = ({children}: Props) => {
        const {heroId} = useParams();
        const {changeHero} = useContext(SWContext)

        useEffect(() => {
            if(heroId && heroId !== "null" && characters[heroId]){
                changeHero(heroId);
            } else {
                changeHero(null);
            }
        }, [heroId, changeHero]);
    return (
        children
    );
};

export default TestHero;
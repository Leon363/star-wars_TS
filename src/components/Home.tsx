import OpeningCrawl from "./OpeningCrawl.tsx";
import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import { navItems} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
// import {useValidHero} from "../hooks/customHooks.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const Home = () => {

    const {hero} = useContext(SWContext);

    return  hero ? (
        <main>
            <Hero />
            <DreamTeam itemTitle={navItems[0]}/>
            <OpeningCrawl/>
        </main>
    ) : <ErrorPage/>
}

export default Home;
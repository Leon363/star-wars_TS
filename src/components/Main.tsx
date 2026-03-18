import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import Contact from "./Contact.tsx";
import StarWars from "./StarWars.tsx";
import {navItems} from "../utils/constants.ts";
import {Route, Routes} from "react-router";
import ErrorPage from "./ErrorPage.tsx";
import TestHero from "./TestHero.ts";

const Main = () => {

    return (
        <Routes>
            {[`/`, `/${navItems[0]}`, `/${navItems[0]}/:heroId`].map(path => <Route key={path} path={path} element={
                <TestHero>
                    <Home/>
                </TestHero>}/>
            )}
            {[`/${navItems[1]}`, `/${navItems[1]}/:heroId`].map(path => <Route key={path} path={path} element={
                <TestHero>
                    <AboutMe/>
                </TestHero>
            }/>)}
            <Route path={`/${navItems[2]}/:heroId`} element={
                <TestHero>
                    <StarWars/>
                </TestHero>
            }/>
            <Route path={`/${navItems[3]}/:heroId`} element={
                <TestHero>
                    <Contact/>
                </TestHero>
            }/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
}

export default Main;
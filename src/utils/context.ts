import {createContext} from "react";
import {navItems} from "./constants.ts";

export interface HeroInfo {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}



interface SWContext {
    page: string;
    changePage: (page: string) => void;
    heroContext: HeroInfo  | null;
    setHeroContext: (heroContext: HeroInfo  | null) => void;

}



export const SWContext = createContext<SWContext>({
    page: navItems[0],
    changePage: () => {},
    heroContext: null,
    setHeroContext: () => {},
});
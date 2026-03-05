import { createContext } from "react";
import type { Hero, Planets } from "../context/types.ts";

export type StarWarsContextType = {
    hero: Hero | null;
    setHero: (hero: Hero | null) => void;

    planets: Planets[] | null;
    setPlanets: (planets: Planets[] | null) => void;

    page: number;
    setPage: (page: number) => void;
};

export const StarWarsContext = createContext<StarWarsContextType | null>(null);

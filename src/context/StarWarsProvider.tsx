import { useState } from "react";
import { StarWarsContext } from "./StarWarsContext";
import type { Hero, Planets, StarWarsContextType } from "./types";
import * as React from "react";

export const StarWarsProvider = ({ children }: { children: React.ReactNode }) => {
    const [hero, setHero] = useState<Hero | null>(null);
    const [planets, setPlanets] = useState<Planets[] | null>(null);
    const [page, setPage] = useState<number>(0);

    const value: StarWarsContextType = {
        hero,
        setHero,
        planets,
        setPlanets,
        page,
        setPage
    };

    return (
        <StarWarsContext.Provider value={value}>
            {children}
        </StarWarsContext.Provider>
    );
};

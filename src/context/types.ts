import * as React from "react";

export type Hero = {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
};

export type Planets = {
    name: string;
};

export type StarWarsContextType = {
    hero: Hero | null;
    setHero: (hero: Hero | null) => void;

    planets: Planets[] | null;
    setPlanets: (planets: Planets[] | null) => void;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

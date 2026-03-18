export interface SWContextValue {
    hero: string | null;
    lastValidHero: string | null;
    changeHero: (hero: string | null) => void;
}

export interface Hero {
    name: string;
    img: string;
    url: string;
}

export interface Props {
    friend: string;
    pos: number;
    itemTitle: string;
}

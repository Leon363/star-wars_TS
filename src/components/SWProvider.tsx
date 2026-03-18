import {type ReactNode, useState} from "react";
import { SWContext } from "../utils/context.ts";
import { defaultHero, characters } from "../utils/constants";

export const SWProvider = ({ children }: { children: ReactNode }) => {
    const [hero, setHero] = useState<string | null>(defaultHero);
    const [lastValidHero, setLastValidHero] = useState<string | null>(defaultHero);

    const changeHero = (value: string | null) => {
        setHero(value);

        if (value && value in characters) {
            setLastValidHero(value);
        }
    };

    return (
        <SWContext.Provider value={{ hero, lastValidHero, changeHero }}>
            {children}
        </SWContext.Provider>
    );
};

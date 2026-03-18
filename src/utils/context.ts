import { createContext } from "react";
import { defaultHero } from "./constants.ts";
import type { SWContextValue } from "./types";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    lastValidHero: defaultHero,
    changeHero: () => {},
});

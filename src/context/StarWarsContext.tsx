import { createContext } from "react";
import type { StarWarsContextType } from "./types";

export const StarWarsContext = createContext<StarWarsContextType | null>(null);

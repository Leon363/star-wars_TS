import {starWarsInfo} from "../utils/constants.ts";
import * as React from "react";

const StarWars: React.FC = () => {
    return (
        <div className='text-2xl text-justify leading-loose'>
            {starWarsInfo}
        </div>
    )
}

export default StarWars;
import {base_url, timeLimitData} from "../utils/constants.ts";
import {useEffect, useState} from "react";


type Hero = {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
};
type LoadedInfo = {
    payload: Hero;
    loadTime: number
}
type ApiHero = Hero



const AboutMe = () => {
    const [hero, setHero] = useState<Hero | null>(() => {
        const savedData = localStorage.getItem("hero")
        if (!savedData) return null;
        try {
            const parsedHero = JSON.parse(savedData) as LoadedInfo;
            const timeLeft = Date.now() - parsedHero.loadTime;
            if (timeLeft < timeLimitData) {
                return parsedHero.payload;
            } else {
                localStorage.removeItem("hero");
                return null;
            }
        } catch (e) {
            console.log(e)
            return null;
        }
    })
    const fields: (keyof Hero)[] = [
        "name", "gender",
        "birth_year",
        "height",
        "mass",
        "hair_color",
        "skin_color",
        "eye_color"
    ];

    const formatKeys = (key: string) => {
        return key
            .replace(/_/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());
    }


    useEffect(() => {
        if (!hero) {

            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then((data: ApiHero) => {

                    const info: Hero = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color

                    };
                    const storeData: LoadedInfo = {
                        payload: info,
                        loadTime: Date.now()
                    };
                    localStorage.setItem("hero", JSON.stringify(storeData));

                    setHero(info);
                })
        }
    }, [hero]);

    return (
        <>
            {hero &&
                <div className='text-2xl leading-loose text-justify ms-20'>
                    {fields.map((key) => {
                        return (
                            <p key={key}>
                        <span className='display-3'>
                            {formatKeys(key)} :
                        </span>{' '}
                                {hero[key]}
                            </p>)
                    })
                    }

                </div>
            }
        </>
    );

}

export default AboutMe;
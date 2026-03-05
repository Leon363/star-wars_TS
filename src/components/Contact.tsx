import {useEffect, useState} from "react";
import {base_url, timeLimitData} from "../utils/constants.ts";


type Planets = { name: string };
type LoadedPlanets = {
    payload: Planets[];
    loadTime: number;
};
type ApiPlanet = {
    name: string;
}

const Contact = () => {
    const [planets, setPlanets] = useState<Planets[] | null>(() => {
        const savedPlanets = localStorage.getItem("planets");
        if (!savedPlanets) return null;

        try {
            const parsedPlanets = JSON.parse(savedPlanets) as LoadedPlanets;
            const timeLeft = Date.now() - parsedPlanets.loadTime;

            if (timeLeft < timeLimitData) {
                return parsedPlanets.payload;
            } else {
                localStorage.removeItem("planets");
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    });


    useEffect(() => {
        fetch(`${base_url}/v1/planets`)
            .then(res => res.json())
            .then((data: ApiPlanet[]) => {

                const info: Planets[] = data.map(item => ({name: item.name}));
                setPlanets(info);
                const storeData = {
                    payload: info,
                    loadTime: Date.now()
                };
                localStorage.setItem("planets", JSON.stringify(storeData));
            })
            .catch(err => console.error("Error of loading:", err));
    }, [])


    return (
        <>
            <form className='bg-white/0  p-6 rounded-lg'>

                <label htmlFor="fname">First Name</label>
                <input className='w-full p-3 border border-gray-300 rounded mt-1 mb-4 bg-transparent ' type="text"
                       name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input className='w-full p-3 border border-gray-300 rounded mt-1 mb-4 bg-transparent' type="text"
                       name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planets">Planet</label>
                <select className='w-full p-3 border border-gray-300 rounded mt-1 mb-4 bg-transparent' name="planets"
                        defaultValue=''>
                    <option className='bg-transparent' value="">Choose the planet</option>

                    {planets?.map((planet, index) => (
                        <option key={index} value={planet.name} >
                            {planet.name}
                        </option>
                    ))}

                </select>

                <label htmlFor="subject">Subject</label>

                <textarea className='w-full p-3 border border-gray-300 rounded mt-1 mb-4 bg-transparent h-48'
                          id="subject" name="subject" placeholder="Write something.."></textarea>

                <button type="submit"
                        className='bg-red-500 hover:bg-red-700 py-3 px-5 rounded cursor-pointer hover:text-white'
                        value="Submit">Submit
                </button>

            </form>
        </>
    )
}

export default Contact;
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);

    return (
        <div className={'mx-2 min-h-screen flex flex-col'}>
            <SWContext value={{hero, changeHero: setHero}}>
                <Header/>
                <main className='flex-1'>
                    <Main/>
                </main>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App

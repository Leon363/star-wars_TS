import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";
import type { HeroInfo } from "./utils/context";

function App() {
    const [page, setPage] = useState(navItems[0]);
    const [heroContext, setHeroContext] = useState<HeroInfo | null>(null);

    return (
        <div className={'mx-2 min-h-screen flex flex-col'}>
            <SWContext.Provider value={{page, changePage: setPage, heroContext, setHeroContext}}>
                <Header/>
                <main className="flex-1">
                    <Main/>
                </main>
                <Footer/>
            </SWContext.Provider>
        </div>
    )
}

export default App

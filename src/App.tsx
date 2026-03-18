import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <div className={'mx-2 min-h-screen flex flex-col'}>
            <Header/>
            <main className='flex-1'>
                <Main/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;

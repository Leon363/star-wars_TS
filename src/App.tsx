import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { StarWarsProvider } from "./context/StarWarsProvider";

function App() {
    return (
        <StarWarsProvider>
            <Header />
            <Main />
            <Footer />
        </StarWarsProvider>
    );
}

export default App;

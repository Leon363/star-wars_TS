import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import {SWProvider} from "./components/SWProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <SWProvider>
                <App/>
            </SWProvider>
        </BrowserRouter>
    </StrictMode>,
)

import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div>
            <SWContext value={{page, changePage: setPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>

    )
}

export default App

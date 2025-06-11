import Header from "./components/header/Header.jsx";
import {Outlet} from "react-router-dom";

export default function Layout(){
    return <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>
}
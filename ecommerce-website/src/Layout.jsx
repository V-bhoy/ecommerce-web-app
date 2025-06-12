import Header from "./components/header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";

export default function Layout(){
    return <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}
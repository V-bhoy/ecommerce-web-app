import Header from "./components/header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import ScrollToTop from "./pages/ScrollToTop.jsx";

export default function Layout(){
    return <>
        <ScrollToTop/>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}
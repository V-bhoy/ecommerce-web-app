import Navigation from "../navigation/Navigation.jsx";
import TopHeader from "./TopHeader.jsx";
import MainHeader from "./MainHeader.jsx";

export default function Header() {
    return <header>
        <TopHeader/>
        <MainHeader/>
        <Navigation/>
    </header>

}
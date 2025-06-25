import {Button} from "@mui/material";
import SubMenu from "./SubMenu.jsx";
import {Link} from "react-router-dom";

export default function NavigationLink({name, sublinks}){
    return  <li className={"relative navlink"}>
        <Link to={name==="Home" ? "/" : `/products/${name.toLowerCase()}`}>
            <Button color={"black"} className={"link transition !text-[13px] !font-[500] !border-primary hover:!border-b-2 hover:!border-primary !rounded-none"}>
                {name}
            </Button>
        </Link>
        {sublinks && <SubMenu category={name.toLowerCase()} items={sublinks}/>}
    </li>
}
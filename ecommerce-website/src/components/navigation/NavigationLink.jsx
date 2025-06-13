import {Button} from "@mui/material";
import SubMenu from "./SubMenu.jsx";
import {Link} from "react-router-dom";

export default function NavigationLink({link}){
    return  <li className={"relative navlink"}>
        <Link to={link.title==="Home" ? "/" : `/products/${link.id}`}>
            <Button color={"black"} className={"link transition !text-[13px] !font-[500] !border-primary hover:!border-b-2 hover:!border-primary !rounded-none"}>
                {link.title}
            </Button>
        </Link>
        {link?.subCategories && <SubMenu category={link.id} items={link?.subCategories}/>}
    </li>
}
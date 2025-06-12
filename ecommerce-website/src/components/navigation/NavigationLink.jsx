import {Button} from "@mui/material";
import SubMenu from "./SubMenu.jsx";

export default function NavigationLink({title, enableSubMenu=false, items}){
    return  <li className={"relative navlink"}>
            <Button color={"black"} className={"link transition !text-[13px] !font-[500] !border-primary hover:!border-b-2 hover:!border-primary !rounded-none"}>
                {title}
            </Button>
            {enableSubMenu && <SubMenu items={items}/>}
    </li>
}
import {Button, Drawer} from "@mui/material";
import {GiHamburgerMenu} from "react-icons/gi";
import {useState} from "react";
import PanelList from "./PanelList.jsx";

export default function CategoryPanel(){
    const [open, setOpen] = useState(false);

    return   <div className={"col-first md:max-lg:flex-0 flex-1"}>
        <Button onClick={()=>setOpen(true)} size={"small"} color={"black"} className={"gap-3 w-full md:max-lg:border-none !border-r-1 !border-gray-300 !rounded-none"}>
            <GiHamburgerMenu size={"1rem"}/><span className={"md:max-lg:hidden"}>Shop By Categories</span>
        </Button>
        <Drawer open={open} onClose={()=>setOpen(false)}>
            <PanelList toggleDrawer={setOpen}/>
        </Drawer>
    </div>
}

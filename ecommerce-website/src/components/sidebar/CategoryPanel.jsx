import {Button, Drawer} from "@mui/material";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaAngleDown} from "react-icons/fa6";
import {useState} from "react";
import PanelList from "./PanelList.jsx";

export default function CategoryPanel(){
    const [open, setOpen] = useState(false);

    return   <div className={"col-first w-[25%]"}>
        <Button onClick={()=>setOpen(true)} size={"small"} color={"black"} className={"gap-3 w-full !border-r-1 !border-gray-300 !rounded-none"}>
            <GiHamburgerMenu size={"1rem"}/> Shop By Categories
        </Button>
        <Drawer open={open} onClose={()=>setOpen(false)}>
            <PanelList toggleDrawer={setOpen}/>
        </Drawer>
    </div>
}

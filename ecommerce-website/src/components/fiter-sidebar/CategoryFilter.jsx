import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {Checkbox, Collapse, FormControlLabel} from "@mui/material";
import {useState} from "react";

export default function CategoryFilter() {
    const [open, setOpen] = useState(false);

    return <div className={"category-filter"}>
        <div onClick={() => setOpen(!open)}
             className={"flex px-5 items-center font-[500] justify-between  p-3 cursor-pointer transition"}>
            <h3 className={"text-[15px]"}>Shop By Category</h3>
            {open ? <FaAngleUp size={"0.9rem"}/> : <FaAngleDown size={"0.8rem"}/>}
        </div>
        <Collapse in={open}>
            <div className={"flex flex-col px-5"}>
                <FormControlLabel control={<Checkbox size={"small"}/>} label={"T-Shirts"} className={"w-full"}/>
                <FormControlLabel control={<Checkbox size={"small"}/>} label={"Trousers"} className={"w-full"}/>
                <FormControlLabel control={<Checkbox size={"small"}/>} label={"Formals"} className={"w-full"}/>
                <FormControlLabel control={<Checkbox size={"small"}/>} label={"Gymwear"} className={"w-full"}/>
            </div>
        </Collapse>

    </div>
}
import {useState} from "react";
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {Checkbox, Collapse, FormControlLabel} from "@mui/material";

export default function AvailabilityFilter(){
    const [open, setOpen] = useState(false);

    return <div className={"availability-filter"}>
        <div onClick={() => setOpen(!open)}
             className={"flex px-5 items-center font-[500] justify-between  p-3 cursor-pointer transition"}>
            <h3 className={"text-[14px]"}>Availability</h3>
            {open ? <FaAngleUp size={"0.9rem"}/> : <FaAngleDown size={"0.8rem"}/>}
        </div>
        <Collapse in={open}>
            <div className={"flex flex-col px-5"}>
                <FormControlLabel control={<Checkbox size={"small"}/>} label={"Available"} className={"w-full"}/>
                <FormControlLabel control={<Checkbox size={"small"}/>} label={"In Stock"} className={"w-full"}/>
                <FormControlLabel control={<Checkbox size={"small"}/>} label={"Not Available"} className={"w-full"}/>
            </div>
        </Collapse>

    </div>
}
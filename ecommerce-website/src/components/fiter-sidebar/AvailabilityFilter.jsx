import {useState} from "react";
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {Checkbox, Collapse, FormControlLabel} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setFilters} from "../../redux/features/products/productSlice.js";

export default function AvailabilityFilter(){
    const {filters: {filterBy}} = useSelector(state => state.products);
    const dispatch = useDispatch();
    const inStockChecked = filterBy?.inStock || false;
    const outOfStockChecked = filterBy?.inStock === false;
    const [open, setOpen] = useState(inStockChecked || outOfStockChecked || false);

    const handleChange =(e)=>{
        const {name, checked: isChecked} = e.target;
        if(name === "inStock" && isChecked){
            dispatch(setFilters({filterBy: {inStock: true}}));
            return;
        }
        if(name === "outOfStock" && isChecked){
            dispatch(setFilters({filterBy: {inStock: false}}));
            return;
        }
        dispatch(setFilters({filterBy: {inStock: null}}));
    }

    return <div className={"availability-filter"}>
        <div onClick={() => setOpen(!open)}
             className={"flex px-5 items-center font-[500] justify-between  p-3 cursor-pointer transition"}>
            <h3 className={"text-[14px]"}>Availability</h3>
            {open ? <FaAngleUp size={"0.9rem"}/> : <FaAngleDown size={"0.8rem"}/>}
        </div>
        <Collapse in={open}>
            <div className={"flex flex-col px-5"}>
                <FormControlLabel control={<Checkbox name={"inStock"} onChange={handleChange} checked={inStockChecked} size={"small"}/>} label={"In Stock"} className={"w-full"}/>
                <FormControlLabel control={<Checkbox name={"outOfStock"} onChange={handleChange} checked={outOfStockChecked} size={"small"}/>} label={"Out Of Stock"} className={"w-full"}/>
            </div>
        </Collapse>

    </div>
}
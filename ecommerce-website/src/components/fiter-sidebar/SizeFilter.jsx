import {useEffect, useState} from "react";
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {Checkbox, Collapse, FormControlLabel} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeFilters, setFilters} from "../../redux/features/products/productSlice.js";
import {clothingSize, footWearSize} from "../../constants/sizes.js";

export default  function SizeFilter(){
    const {category} = useParams();
    const sizes = category === "footwear" ? footWearSize : clothingSize;
    const dispatch = useDispatch();
    const {filters: {filterBy}} = useSelector((state)=>state.products);
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(filterBy?.sizes || []);

    useEffect(() => {
        if(filterBy == null){
            setChecked(filterBy?.sizes || []);
        }
    }, [filterBy]);

    const handleChange = (e) =>{
        const {name, checked: isChecked} = e.target;
        const size = filterBy?.sizes || [];
        if(isChecked){
            setChecked((prev)=>([...prev, name]));
            dispatch(setFilters({sizes: [...size, name]}));
        }else{
            setChecked((prev)=>(prev.filter(item=>item!==name)));
            dispatch(removeFilters({filterName: "sizes", data: name}));
        }
    }


    return <div className={"size-filter"}>
        <div onClick={() => setOpen(!open)}
             className={"flex px-5 items-center font-[500] justify-between  p-3 cursor-pointer transition"}>
            <h3 className={"text-[14px]"}>Size</h3>
            {open ? <FaAngleUp size={"0.9rem"}/> : <FaAngleDown size={"0.8rem"}/>}
        </div>
        <Collapse in={open}>
            <div className={"flex flex-col px-5"}>
                {sizes.map((size, index)=> <FormControlLabel key={index}
                    control={<Checkbox name={size}
                        checked={checked.includes(size)}
                                       onChange={handleChange}
                                       size={"small"}/>}
                                                             label={size} className={"w-full"}/>)}
            </div>
        </Collapse>

    </div>
}
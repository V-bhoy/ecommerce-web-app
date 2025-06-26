import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {Checkbox, Collapse, FormControlLabel} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {removeFilters, setFilters} from "../../redux/features/products/productSlice.js";

export default function CategoryFilter() {
    const {category, subCategory} = useParams();
    const dispatch = useDispatch();
    const {subCategories, filters: {filterBy}} = useSelector((state)=>state.products);
    const [open, setOpen] = useState( true);

    const handleChange = (e) =>{
        const {checked: isChecked} = e.target;
        const name = +e.target.name;
        const subCategoryIds = filterBy?.subCategoryIds || [];
        if(isChecked){
            dispatch(setFilters({filterBy: {subCategoryIds: [...subCategoryIds, name]}}));
        }else{
            dispatch(removeFilters({filterName: "subCategoryIds", data: name}));
        }
    }

    return <div className={"category-filter"}>
        <div onClick={() => setOpen(!open)}
             className={"flex px-5 items-center font-[500] justify-between  p-3 cursor-pointer transition"}>
            <h3 className={"text-[14px]"}>Shop By Category</h3>
            {open ? <FaAngleUp size={"0.9rem"}/> : <FaAngleDown size={"0.8rem"}/>}
        </div>
        <Collapse in={open}>
            <div className={"flex flex-col px-5"}>
                {subCategories?.[category.toUpperCase()]?.map((c)=>
                    <FormControlLabel key={c.id}
                                      control={<Checkbox name={c.id} checked={filterBy?.subCategoryIds?.includes(c.id) || false} onChange={handleChange}  size={"small"}/>}
                                      label={c.name}
                                      className={"w-full"}/>)}
            </div>
        </Collapse>

    </div>
}
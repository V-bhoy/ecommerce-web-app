import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {useState} from "react";
import {sortingOptions} from "../../constants/sorting-options.js";
import {removeFilters, setFilters} from "../../redux/features/products/productSlice.js";
import {useDispatch} from "react-redux";

export default function SortByFilter() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [sortItem, setSortItem] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (selectSort) => {
        if(selectSort.id === sortItem?.id){
            setSortItem(null);
            setAnchorEl(null);
            dispatch(removeFilters({filterName: "sortBy"}));
            return;
        }
        setSortItem(selectSort);
        dispatch(setFilters({sortBy: {
            name: selectSort.name,
                value: selectSort.value
            }}))
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={"!bg-white !h-[30px] !text-[13px] !font-[500] !capitalize !text-[black] !border-1 !border-gray-200 transition"}
            >
                {sortItem?.label || "Default"} {open ? <FaAngleUp size={"0.8rem"} className={"!ml-5"}/> : <FaAngleDown size={"0.8rem"} className={"!ml-5"}/>}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                {sortingOptions.map((s)=> <MenuItem
                    key={s.id}
                    name={s.name}
                    value={s.value}
                    className={`!text-[13px] !font-[500] link ${sortItem?.id == s.id ? "!bg-orange-200 !text-primary" : ""}`}
                    onClick={()=>handleClose(s)}>{s.label}</MenuItem>)}
            </Menu>
        </div>
    );
}
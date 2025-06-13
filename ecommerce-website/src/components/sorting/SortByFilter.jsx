import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";

export default function SortByFilter() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
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
                Default {open ? <FaAngleUp size={"0.8rem"} className={"!ml-5"}/> : <FaAngleDown size={"0.8rem"} className={"!ml-5"}/>}
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
                <MenuItem className={"!text-[13px] !font-[500] link"} onClick={handleClose}>Price: Low To High</MenuItem>
                <MenuItem className={"!text-[13px] !font-[500] link"} onClick={handleClose}>Price: High To Low</MenuItem>
                <MenuItem className={"!text-[13px] !font-[500] link"} onClick={handleClose}>Rating: Low To High</MenuItem>
                <MenuItem className={"!text-[13px] !font-[500] link"} onClick={handleClose}>Rating: High To Low</MenuItem>
                <MenuItem className={"!text-[13px] !font-[500] link"} onClick={handleClose}>Title: A To Z</MenuItem>
                <MenuItem className={"!text-[13px] !font-[500] link"} onClick={handleClose}>Title: Z To A</MenuItem>
            </Menu>
        </div>
    );
}
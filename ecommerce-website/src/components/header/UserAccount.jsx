import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {RiAccountCircleFill} from "react-icons/ri";
import {useNavigate} from "react-router-dom";

export default function UserAccount() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLink = (path) => {
        navigate(path);
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
                className={"gap-2 !capitalize !ml-5 hover:!underline hover:!bg-white"}
                size={"small"}>
                <RiAccountCircleFill className={"cursor-pointer !text-secondary"} size={"2rem"}/>
                Hi, Vaishali
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={()=>setAnchorEl(null)}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                <MenuItem onClick={()=>handleLink("/user/1")}>My Account</MenuItem>
                <MenuItem onClick={()=>handleLink("/orders")}>Orders</MenuItem>
                <MenuItem onClick={()=>setAnchorEl(null)}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

import {Link} from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import SearchInput from "./SearchInput.jsx";
import {Badge, IconButton, Tooltip} from "@mui/material";
import {LuGitCompareArrows, LuShoppingCart} from "react-icons/lu";
import {FaRegHeart} from "react-icons/fa6";

export default function MainHeader(){
    return  <div className={"border-b-1 border-gray-200"}>
        <div className={"container flex items-center justify-between"}>
            <div className={"col1 h-[5.2rem]"}>
                <Link to={"/"}>
                    <img className={"w-[250px] h-full cursor-pointer object-cover"} src={logo} alt={"website-logo"}/>
                </Link>
            </div>
            <div className={"col2 w-[45%]"}>
                <SearchInput/>
            </div>
            <div className={"col3 w-[30%]"}>
                <ul className={"flex items-center justify-center gap-3"}>
                    <li className={"!mr-8"}>
                        <Link to={"/login"} className={"link transition text-[14px]"}>Login</Link> &nbsp; | &nbsp;<Link
                        to={"/register"} className={"link transition text-[14px]"}>Register</Link>
                    </li>
                    <li>
                        <Tooltip title={"Compare"}>
                            <IconButton aria-label={"compare"}>
                                <Badge anchorOrigin={{vertical: "bottom"}} badgeContent={4} color={"primary"}>
                                    <LuGitCompareArrows size={"1.4rem"}/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title={"Wish List"}>
                            <IconButton aria-label={"wishlist"}>
                                <Badge anchorOrigin={{vertical: "bottom"}} badgeContent={4} color={"primary"}>
                                    <FaRegHeart size={"1.3rem"}/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title={"Cart"}>
                            <IconButton aria-label={"cart"}>
                                <Badge anchorOrigin={{vertical: "bottom"}} badgeContent={4} color={"primary"}>
                                    <LuShoppingCart size={"1.4rem"}/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
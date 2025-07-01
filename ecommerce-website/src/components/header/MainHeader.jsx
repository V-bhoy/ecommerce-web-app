import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import SearchInput from "./SearchInput.jsx";
import {Badge, IconButton, Tooltip} from "@mui/material";
import {LuGitCompareArrows, LuShoppingCart} from "react-icons/lu";
import {FaRegHeart} from "react-icons/fa6";
import UserAccount from "./UserAccount.jsx";
import {useSelector} from "react-redux";
import {FaHeart} from "react-icons/fa";

export default function MainHeader() {
    const {isLoggedIn} = useSelector(state=>state.auth);
    const {cartItems} = useSelector(state=>state.cart);
    const navigate = useNavigate();
    return <div className={"border-b-1 border-gray-200"}>
        <div className={"container flex items-center justify-between"}>
            <div className={"col1 md:h-[5rem] h-[5.2rem]"}>
                <Link to={"/"}>
                    <img className={"w-[250px] h-full cursor-pointer object-cover"} src={logo} alt={"website-logo"}/>
                </Link>
            </div>
            <div className={"col2 w-[45%]"}>
                <SearchInput/>
            </div>
            <div className={"col3 flex-1"}>
                <ul className={"flex items-center justify-center md:max-lg:gap-1 gap-3"}>
                    {isLoggedIn || <li className={"md:max-lg:!mr-0 !mr-8"}>
                        <Link to={"/login"} className={"link transition text-[14px] header-links"}>Login</Link>
                        &nbsp; | &nbsp;
                        <Link to={"/register"} className={"link transition text-[14px] header-links"}>Register</Link>
                    </li>}
                    <li className={`${!isLoggedIn ? "md:max-lg:hidden" : ""}`}>
                        <Tooltip title={"Wish List"}>
                            <IconButton onClick={()=>navigate("/products/wishlist")} aria-label={"wishlist"}>
                                    <FaHeart color={"red"} size={"1.3rem"}/>
                            </IconButton>
                        </Tooltip>
                    </li>
                    <li  className={`${!isLoggedIn ? "md:max-lg:hidden" : ""}`}>
                        <Tooltip title={"Cart"}>
                            <IconButton aria-label={"cart"} onClick={() => navigate("/cart")}>
                                <Badge anchorOrigin={{vertical: "bottom"}} badgeContent={cartItems.length} color={"primary"}>
                                    <LuShoppingCart size={"1.4rem"}/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </li>
                    {isLoggedIn &&
                        <li>
                            <UserAccount/>
                        </li>
                    }
                </ul>
            </div>
        </div>
    </div>
}
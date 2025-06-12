import {Link} from "react-router-dom";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa6";

export default function SocialLink({icon: Icon}){
    return   <li>
        <Link className={"w-[30px] h-[30px] rounded-full flex items-center justify-center border border-gray-300 group hover:border-primary transition"} to={"/"} target={"_blank"}>
            <Icon className={"group-hover:text-primary transition"} size={"1rem"}/>
        </Link>
    </li>
}
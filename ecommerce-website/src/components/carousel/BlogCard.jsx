import {Link} from "react-router-dom";
import {IoMdTime} from "react-icons/io";

export default function BlogCard(){
    return <div className={"blogCard rounded-md bg-white"}>
        <div className={"imageWrapper h-[300px] rounded-t-md relative overflow-hidden"}>
                <img className={"w-full h-full rounded-t-md overflow-hidden transition"}
                     src={"https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_1280.jpg"}
                     alt={"poster-image"}
                />
        </div>
        <div className={"info py-3 px-2 flex flex-col gap-1"}>
            <div className={"flex items-center justify-between p-1"}>
                <Link className={"link"} to={"/"}><h3 className={"text-[15px] font-[500]"}>Levis Denims</h3></Link>
                <span className={"flex items-center text-primary gap-1 text-[14px] font-[600] pr-3"}> <IoMdTime/> 5 April, 2025 </span>
            </div>
            <p className={"text-[13px] text-gray-500"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        </div>
    </div>
}
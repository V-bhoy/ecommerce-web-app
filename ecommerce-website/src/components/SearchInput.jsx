import {Button} from "@mui/material";
import {IoSearchSharp} from "react-icons/io5";

export default function SearchInput(){
   return <div className={"w-[100%] p-1 px-3 h-[40px] bg-gray-50 border-1 border-gray-100 rounded-[5px] relative"}>
       <input className={"w-full h-[30px] focus:outline-none text-[13px]"} type={"text"}
              placeholder={"Search for products..."}/>
       <Button className={"!absolute top-[2px] right-[5px] z-50 !rounded-full !text-black !w-[35px] !min-w-[35px] !h-[35px]"} size={"small"}>
          <IoSearchSharp color={"gray"} size={"1.1rem"}/>
       </Button>
   </div>
}
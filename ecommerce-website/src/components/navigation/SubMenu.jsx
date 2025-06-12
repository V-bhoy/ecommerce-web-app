import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function SubMenu({items}) {
    return <div className={"submenu transition py-2 hidden absolute min-w-[200px] top-[100%] left-[0%]"}>
        <ul className={"bg-white rounded-sm shadow-md py-1"}>
            {
                items?.map((item, index) => {
                    if (typeof item === "string") {
                        return <li key={index}>
                            <Link to={"/"} className={"link font-[500] w-full"}>
                                <Button color={"black"} size={"small"}
                                        className={"w-full !text-[13px] !pl-5 !justify-start hover:!bg-orange-50"}>{item}</Button>
                            </Link>
                        </li>
                    }
                    return <div key={index}>
                        <h3 className={"text-[13px] uppercase pl-5 font-[500] text-primary py-2"}>{item?.title}</h3>
                        {item?.subLinks?.map((item, index) => <li key={index}>
                            <Link to={"/"} className={"link text-[12px] font-[500] w-full"}>
                                <Button color={"black"} size={"small"}
                                        className={"w-full !pl-5 !justify-start hover:!bg-orange-50"}>{item}</Button>
                            </Link>
                        </li>)}
                    </div>
                })
            }
        </ul>
    </div>
}
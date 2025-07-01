import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function SubMenu({items, category}) {
    return <div className={"submenu transition py-2 hidden absolute min-w-[200px] top-[100%] left-[0%]"}>
        <ul className={"bg-white rounded-sm shadow-md py-1"}>
            {
                items?.map((item) => {
                    return <li key={item.id}>
                        <Link to={`/products/${category}/${item.name.toLowerCase()}`} className={"link font-[500] w-full"}>
                            <Button color={"black"} size={"small"} className={"w-full md:max-lg:!text-xs !text-[13px] !pl-5 !justify-start hover:!bg-orange-50"}>
                                {item.name.toLowerCase()}
                            </Button>
                        </Link>
                    </li>
                })
            }
        </ul>
    </div>
}
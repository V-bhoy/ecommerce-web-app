import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function NavigationLink({title}){
    return  <li>
        <Link to={"#"}>
            <Button color={"black"} className={"link transition !text-[13px] !font-[500] !border-primary hover:!border-b-2 hover:!border-primary !rounded-none"}>
                {title}
            </Button>
        </Link>
    </li>
}
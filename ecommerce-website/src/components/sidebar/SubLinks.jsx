import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {useState} from "react";

export default function SubLinks({links}) {
    const [innerSections, setInnerSections] = useState([]);

    const switchSection = (index) => {
        setInnerSections(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index)
            }
            return [...prev, index]
        })
    }

    return <ul className={"text-[12px] font-[500] pb-2 !mb-2 bg-orange-50 rounded-[5px] shadow-xs/20"}>
        {links?.map((link, index) => {
            const isTitle = typeof (link) === "string"
            if (isTitle) {
                return <li key={index} className={"link hover:bg-orange-100 pl-8 cursor-pointer py-1 rounded-[5px]"}>
                    <Link to={"#"}>{link}</Link>
                </li>
            }
            const isIndexPresent = innerSections?.includes(index);
            return <>
                <Link key={index} to={"#"}>
                    <Button color={"black"} onClick={() => switchSection(index)}
                            className={`link !px-8 w-full !justify-between !text-[12px] !font-[500] ${isIndexPresent ? "active" : ""}`}>
                        {link?.title}
                        {isIndexPresent ? <FaAngleUp size={"0.7rem"}/> : <FaAngleDown size={"0.7rem"}/>}
                    </Button>
                </Link>
                <ul className={"pb-2"}>
                    {isIndexPresent && link?.subLinks?.map((link, index) =>
                        <li key={index} className={"link text-[12px] hover:bg-orange-100 pl-13 cursor-pointer py-1"}>
                        <Link to={"#"}>{link}</Link>
                    </li>)}
                </ul>
            </>
        })}
    </ul>
}
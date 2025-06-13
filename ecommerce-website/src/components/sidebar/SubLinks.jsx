import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {useState} from "react";

export default function SubLinks({links, category, closeDrawer}) {
    const navigate = useNavigate();
    const [innerSections, setInnerSections] = useState([]);

    const switchSection = (index) => {
        setInnerSections(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index)
            }
            return [...prev, index]
        })
    }

    const handleNavigation = (path)=>{
        navigate(`/products/${path}`);
        closeDrawer(false);
    }

    return <ul className={"text-[12px] font-[500] pb-2 !mb-2 bg-orange-50 rounded-[5px] shadow-xs/20"}>
        {links?.map((link, index) => {
            if (link?.subCategories) {
                const isIndexPresent = innerSections?.includes(index);
                return <>
                    <Button color={"black"} onClick={() => switchSection(index)}
                            className={`link !px-8 w-full !justify-between !text-[12px] !font-[500] ${isIndexPresent ? "active" : ""}`}>
                        {link.title}
                        {isIndexPresent ? <FaAngleUp size={"0.7rem"}/> : <FaAngleDown size={"0.7rem"}/>}
                    </Button>
                    <ul className={"pb-2"}>
                        {isIndexPresent && link.subCategories?.map((link) =>
                            <li onClick={() => handleNavigation(`${category}/${link.id}`)}
                                key={link.id}
                                className={"link text-[12px] hover:bg-orange-100 pl-13 cursor-pointer py-1"}>
                                {link.title}
                            </li>
                        )
                        }
                    </ul>
                </>
            }
            return <li onClick={() => handleNavigation(category + link.href)}
                       key={link.id}
                       className={"link hover:bg-orange-100 pl-8 cursor-pointer py-1 rounded-[5px]"}>
                {link.title}
            </li>
        })}
    </ul>
}
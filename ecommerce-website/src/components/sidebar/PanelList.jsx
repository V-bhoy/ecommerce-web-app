import {Box, Button} from "@mui/material";
import {IoClose} from "react-icons/io5";
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import SubLinks from "./SubLinks.jsx";
import {useState} from "react";
import {navigation} from "../../constants/navigation.js";

export default function PanelList({toggleDrawer}) {
    const [sectionIndex, setSectionIndex] = useState([]);

    const switchSection = (index) => {

        setSectionIndex(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index)
            }
            return [...prev, index]
        })
    }

    return <Box sx={{width: 250}} role="presentation">
        <div className={"flex items-center justify-between py-4 px-2 border-b-1 border-orange-300 !mx-2 !mb-2"}>
            <h3 className={"text-[14px] font-[500] text-primary"}>
                Shop By Categories
            </h3>
            <IoClose className={"cursor-pointer hover:text-[red]"} size={"1.2rem"} onClick={() => toggleDrawer(false)}/>
        </div>
        <div>
            {
                navigation?.categories?.map((link, index) => {
                        const isIndexPresent = sectionIndex?.includes(index);
                        return <div key={link.id}>
                            <Button
                                    color={"black"}
                                    onClick={() => switchSection(index)}
                                    className={`link !px-5 w-full !justify-between !text-[12px] ${isIndexPresent ? "active" : ""}`}
                            >
                                {link?.title}
                                {isIndexPresent ? <FaAngleUp size={"0.7rem"}/> : <FaAngleDown size={"0.7rem"}/>}
                            </Button>
                            {isIndexPresent && <SubLinks links={link?.subCategories} category={link.id} closeDrawer={toggleDrawer}/>}
                        </div>
                    }
                )
            }
        </div>
    </Box>
}
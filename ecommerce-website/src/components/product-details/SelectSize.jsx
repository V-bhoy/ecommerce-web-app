import {Button} from "@mui/material";
import {useState} from "react";

export default function SelectSize(){
    const [activeSizeIndex, setActiveSizeIndex] = useState(0);
    return <div className={"flex items-center gap-4"}>
        <span className={"text-[15px] font-[500] text-primary"}>Size: </span>
        <div className={"flex items-center gap-2"}>
            <Button onClick={()=>setActiveSizeIndex(0)}
                    className={`transition sizeBtn ${activeSizeIndex===0 ? "active" : ""}`}>S</Button>
            <Button onClick={()=>setActiveSizeIndex(1)}
                    className={`transition sizeBtn ${activeSizeIndex===1 ? "active" : ""}`} >M</Button>
            <Button onClick={() =>setActiveSizeIndex(2)}
                    className={`transition sizeBtn ${activeSizeIndex===2 ? "active" : ""}`} >L</Button>
            <Button onClick={()=>setActiveSizeIndex(3)}
                    className={`transition sizeBtn ${activeSizeIndex===3? "active" : ""}`} >XL</Button>
            <Button onClick={()=>setActiveSizeIndex(4)}
                    className={`transition sizeBtn ${activeSizeIndex===4 ? "active" : ""}`} >XXL</Button>
        </div>
    </div>
}
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function MegaBanner({banner}){
    const navigate = useNavigate();
    return <div className={"w-full md:max-lg:h-[35vh] h-[48vh] rounded-[20px] relative overflow-hidden"}>
        <img
            className={"object-cover w-full h-full"}
            src={banner.imageUrl}
            alt={"banner-image-1"}
        />
        <div className={`${banner.detailsPosition === "left" ? "info-left" : "info-right"} z-50 absolute top-[0] ${banner.detailsPosition === "left" ? "-left-[100%]" : "-right-[100%]"} opacity-0 w-[50%] h-[100%] flex flex-col items-center justify-center transition-all duration-800`}>
            <h3 className={"md:max-lg:text-[22px]  text-[25px] font-[600] text-white"}>Big Saving Days Sale</h3>
            <h2 className={"md:max-lg:text-[28px] text-[40px] font-[600] text-yellow-400"}>{banner.offer}</h2>
            <h3 className={"md:max-lg:text-[22px] text-[20px] font-[400] text-white"}>Starting at only
                <span className={"text-yellow-400 font-[600]"}>&nbsp;₹{banner.startingPrice}/-</span></h3>
            <br/>
            <Button onClick={()=>navigate(banner.url)} color={"warning"} size={"small"} variant={"contained"}>Shop Now</Button>
        </div>
    </div>
}
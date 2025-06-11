import {Link} from "react-router-dom";

export default function TopHeader(){
    return <div className={"top-strip py-3 border-t-1 border-b-1 border-gray-200"}>
        <div className={"container"}>
            <div className={"flex items-center justify-between"}>
                <div className={"col1 w-[50%]"}>
                    <p className={"text-[14px] font-[500]"}>Get upto 50% off! New season styles, limited time
                        offer!</p>
                </div>
                <div className={"col2 flex items-center justify-between"}>
                    <ul className={"flex items-center gap-5"}>
                        <li className={"list-none text-[13px] font-[500]"}>
                            <Link to={"#"} className={"link"}>Help Center</Link>
                        </li>
                        <li className={"list-none text-[13px] font-[500]"}>
                            <Link to={"#"} className={"link"}>Orders</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
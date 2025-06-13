import {MdRocketLaunch} from "react-icons/md";
import CategoryPanel from "../sidebar/CategoryPanel.jsx";
import NavigationLink from "./NavigationLink.jsx";
import {links} from "../../constants/sublinks.js";

export default function Navigation(){
  return <nav className={"border-b-1 border-gray-200"}>
      <div className={"container flex items-center justify-end gap-20"}>
          <CategoryPanel/>
          <div className={"col-second w-[50%]"}>
             <ul className={"flex items-center justify-around"}>
                 <NavigationLink title={"Home"}/>
                 {links?.map((link, index)=><NavigationLink key={index} title={link?.title} enableSubMenu items={link?.subLinks}/>)}
             </ul>
          </div>
          <div className={"col-last w-[25%] flex items-center gap-2"}>
              <MdRocketLaunch/> <p className={"text-[13px] font-[500]"}>Free International Delivery</p>
          </div>
      </div>
  </nav>
}
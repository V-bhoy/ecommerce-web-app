import {MdRocketLaunch} from "react-icons/md";
import CategoryPanel from "../sidebar/CategoryPanel.jsx";
import NavigationLink from "./NavigationLink.jsx";
import {useSelector} from "react-redux";

export default function Navigation(){
    const subCategories = useSelector((state)=>state.products.subCategories);
    const categories = subCategories ? Object.keys(subCategories) : [];

    if(!subCategories){
        return <div className={"flex items-center gap-4 animate-pulse p-2 px-5"}>
            <div className={"w-1/4 h-4 bg-gray-200 rounded mb-2"}></div>
            <div className={"w-1/2 h-4 bg-gray-200 rounded mb-2"}></div>
            <div className={"w-1/4 h-4 bg-gray-200 rounded mb-2"}></div>
        </div>
    }
   return <nav className={"border-b-1 border-gray-200"}>
      <div className={"container flex items-center justify-end gap-20"}>
          <CategoryPanel/>
          <div className={"col-second w-[50%]"}>
             <ul className={"flex items-center justify-around"}>
                 <NavigationLink name={"Home"}/>
                 {categories?.map((link)=><NavigationLink key={link} name={link.toLowerCase()} sublinks={subCategories[link]}/>)}
             </ul>
          </div>
          <div className={"col-last w-[25%] flex items-center gap-2"}>
              <MdRocketLaunch/> <p className={"text-[13px] font-[500]"}>Free International Delivery</p>
          </div>
      </div>
  </nav>
}
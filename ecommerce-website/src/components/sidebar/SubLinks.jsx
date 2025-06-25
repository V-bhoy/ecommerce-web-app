import {useNavigate} from "react-router-dom";

export default function SubLinks({links, category, closeDrawer}) {
    const navigate = useNavigate();

    const handleNavigation = (path)=>{
        navigate(`/products/${path}`);
        closeDrawer(false);
    }

    return <ul className={"text-[12px] font-[500] pb-2 !mb-2 bg-orange-50 rounded-[5px] shadow-xs/20"}>
        {links?.map((link) => {
            return <li onClick={() => handleNavigation(`${category}/${link.name.toLowerCase()}`)}
                       key={link.id}
                       className={"link hover:bg-orange-100 pl-8 cursor-pointer py-1 rounded-[5px]"}>
                {link.name[0]+link.name.substring(1).toLowerCase()}
            </li>
        })}
    </ul>
}
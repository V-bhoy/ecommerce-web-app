import {Button} from "@mui/material";
import {IoSearchSharp} from "react-icons/io5";
import {useEffect, useState} from "react";
import useDebounce from "../../custom-hooks/useDebounce.js";
import {useDispatch, useSelector} from "react-redux";
import {removeFilters, setFilters} from "../../redux/features/products/productSlice.js";
import {useLocation, useNavigate} from "react-router-dom";

export default function SearchInput(){
    const {filters: {search: activeSearch}} = useSelector(state=>state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [search, setSearch] = useState("");
    const debouncedValue = useDebounce(search, 1500);

    const handleSearch = ()=>{
        if (search.trim()) {
            dispatch(setFilters({ search: search.trim() }));
            if (!pathname.includes("/products")) {
                navigate("/products");
            }
        } else {
            dispatch(removeFilters({ filterName: "search" }));
        }
    }

    useEffect(()=>{
        if (debouncedValue.trim()) {
            dispatch(setFilters({ search: debouncedValue.trim() }));
            if (!pathname.includes("/products")) {
                navigate("/products");
            }
        } else {
            dispatch(removeFilters({ filterName: "search" }));
        }
    }, [debouncedValue])

    useEffect(() => {
        if(!activeSearch){
            setSearch("");
        }
    }, [activeSearch]);

    useEffect(() => {
        if (!pathname.includes("/products") && activeSearch && !search) {
            dispatch(removeFilters({ filterName: "search" }));
        }
    }, [pathname, activeSearch, dispatch, search]);


   return <div className={"w-[100%] p-1 px-3 h-[40px] bg-gray-50 border-1 border-gray-100 rounded-[5px] relative"}>
       <input value={search} onChange={(e)=>setSearch(e.target.value)} className={"w-full h-[30px] focus:outline-none text-[13px]"} type={"text"}
              placeholder={"Search for products..."}/>
       <Button onClick={handleSearch} className={"!absolute top-[2px] right-[5px] z-50 !rounded-full !text-black !w-[35px] !min-w-[35px] !h-[35px]"} size={"small"}>
          <IoSearchSharp color={"gray"} size={"1.1rem"}/>
       </Button>
   </div>
}
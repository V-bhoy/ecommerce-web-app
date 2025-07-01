import {Link} from "react-router-dom";
import {Select, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {GiReturnArrow} from "react-icons/gi";
import {TiStarFullOutline} from "react-icons/ti";
import {IoClose} from "react-icons/io5";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {clothingSize, footWearSize} from "../../constants/sizes.js";
import {getProductVariants} from "../../redux/features/products/productThunk.js";
import {removeCartItem, updateCartItem} from "../../redux/features/cart/cartSlice.js";

export default function CartCard({item}){
    const dispatch = useDispatch();
    const {category, cartVariant, cartQty} = item;
    const sizes = category === "footwear" ? footWearSize : category === "accessories" ? null : clothingSize;

    const [variants, setVariants] = useState(null);
    const availableSizes = variants?.map((sku)=>sku?.size);
    const [size, setSize] = useState(cartVariant?.size || "");
    const [qty, setQty] = useState(cartQty);

    const getVariants = async ()=>{
        const response = await dispatch(getProductVariants(item.id));
        if(getProductVariants.fulfilled.match(response)){
            setVariants(response.payload.variants);
        }
    }

    useEffect(()=>{
        getVariants();
    }, [])

    const selectedVariantQty = cartVariant ? cartVariant.qty : null;
    const totalAvailableQty = variants?.reduce((acc, v)=>acc+(+v.qty), 0);
    const availableQty = selectedVariantQty || totalAvailableQty;

    const handleSize = (e)=>{
        setSize(e.target.value);
        const newCartVariant = variants?.find(item=>item?.size === e.target.value)
        dispatch(updateCartItem({id: item.id,
            cartVariant,
            newCartVariant,
            cartQty: qty > newCartVariant.qty ? 1 : qty
        }));
    }

    const handleQty=(e)=>{
        let value = e.target.value;
        if(value) value =  Math.max(1, Math.min(availableQty, Number(e.target.value)));
        setQty(value);
        dispatch(updateCartItem({id: item.id, cartVariant, cartQty: value}));
    }

    return <div className={"border border-gray-200 md:max-lg:h-[15vh] h-[20vh] rounded-md flex gap-4 relative bg-white"}>
        <div className={"group imageWrapper md:max-lg:w-[30%] w-[25%] rounded-l-md relative overflow-hidden"}>
            <Link to={"/products/women/tops/1"}>
                <img className={"w-full h-full rounded-l-md overflow-hidden transition"}
                     src={item.imageUrl}
                     alt={"poster-image"}
                />
            </Link>
            <span className={"discount font-[500] absolute top-2 left-2 bg-primary text-white text-[13px] p-1 rounded-md"}>
                {item.discount}% off
            </span>
        </div>
        <div className={"p-2 info px-2 flex flex-col gap-1 w-[75%]"}>
           <h3 className={"text-[15px] text-primary font-[400]"}>{item.title} ({availableQty})</h3>
            <span className={"text-[12px] font-[500]  md:max-lg:hidden"}>{item.shortInfo}</span>
            <div className={"flex gap-5 !my-2"}>
                {sizes && <div className={"flex gap-2 items-center"}>
                  <p className={"text-[13px] font-[500]"}>Size: </p>
                    <Select value={size} onChange={handleSize} className={"w-[4rem] select"} size={"small"} variant={"outlined"}>
                        {sizes.map((s, index)=><MenuItem disabled={!availableSizes?.includes(s)} key={index} value={s}>{s}</MenuItem>)}
                    </Select>
                </div>}
                <div className={"flex gap-2 items-center"}>
                    <p className={"text-[13px] font-[500]"}>Qty: </p>
                    <TextField value={qty}
                               onChange={handleQty}
                               slotProps={{htmlInput: {min: 1, max: availableQty}}}
                               className={"w-[4rem] qty-input"}
                               size={"small"}
                               type={"number"}/>
                </div>
            </div>
            <div className={"flex gap-2 items-center"}>
                <span className={"text-[13px] font-[500] !mr-1"}>Price: </span>
                <span className={"text-[14px] text-gray-500 line-through font-[500]"}>₹{item.mrp}</span>
                <span className={"text-[14px] font-[400] text-gray-800 bg-orange-100 px-2 rounded-sm"}>₹{item.priceAfterDiscount}</span>
            </div>
            <div className={"flex gap-1 items-center"}>
                <GiReturnArrow />
                <span className={"text-[12px] text-red-600 px-1"}>14 day return available</span>
            </div>
            <div className={"flex gap-2 absolute top-3 right-3 items-center"}>
                <p className={"flex items-center gap-1 text-[13px] bg-green-600  md:max-lg:p-0.5 md:max-lg:px-1  px-2 py-1 rounded-sm text-white"}>
                    4.5
                    <TiStarFullOutline/>
                </p>
                <IoClose onClick={()=>dispatch(removeCartItem({id: item.id, cartVariant}))} size={"1rem"} className={"cursor-pointer hover:text-red-600"}/>
            </div>

        </div>
    </div>
}
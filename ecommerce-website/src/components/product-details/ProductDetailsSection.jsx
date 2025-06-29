import MagnifyProduct from "../magnify-product/MagnifyProduct.jsx";
import {Button, Rating} from "@mui/material";
import {FaCartShopping, FaRegHeart} from "react-icons/fa6";
import {IoShareSocial} from "react-icons/io5";
import SelectSize from "./SelectSize.jsx";
import SelectQty from "./SelectQty.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {clothingSize, footWearSize} from "../../constants/sizes.js";
import {addToCart} from "../../redux/features/cart/cartSlice.js";
import {mapCartItem} from "../../utils/map-cart-item.js";
import {useNavigate} from "react-router-dom";
import {clearViewProductModal} from "../../redux/features/products/productSlice.js";
import {addWishlistProduct, removeWishlistProduct} from "../../redux/features/products/productThunk.js";
import {notifySuccessToast} from "../toasts/toasts.js";
import {FaHeart} from "react-icons/fa";

export default function ProductDetailsSection({details, refetch}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoggedIn} = useSelector(state=>state.auth);
    const sizes = details?.category === "FOOTWEAR" ? footWearSize : details?.category==="ACCESSORIES" ? null:  clothingSize;
    const availableSizes = details?.variants?.map((sku)=>sku?.size);
    const [cartVariant, setCartVariant] = useState(null);
    const [size, setSize] = useState(null);
    const [qty, setQty] = useState(0);

    const selectedVariantQty = cartVariant ? cartVariant.qty : null;
    const totalAvailableQty = details?.variants?.reduce((acc, v)=>acc+(+v.qty), 0);
    const availableQty = selectedVariantQty || totalAvailableQty;

    const handleSize = (e)=>{
        setSize(e.target.value);
        const sku = details?.variants?.find(sku=>sku.size === e.target.value);
        if(qty > sku.qty) setQty(1);
        setCartVariant(sku);
    }

    const handleQty = (e)=>{
        let value = e.target.value;
        if(value) value = Math.max(1, Math.min(availableQty, Number(e.target.value)));
        setQty(value);
    }

    const handleAddToCart = async()=>{
        const cartItem = mapCartItem({...details, cartVariant, cartQty: qty})
        await dispatch(clearViewProductModal());
        dispatch(addToCart(cartItem));
        navigate("/cart");
    }

    const handleWishlist = async()=>{
        if(!isLoggedIn){
            navigate("/login");
            return;
        }
        if(!details?.isWishlisted){
            const result = await dispatch(addWishlistProduct(details.id));
            if(addWishlistProduct.fulfilled.match(result)){
                notifySuccessToast("Added  to wishlist successfully!")
                refetch(details.id);
            }
        }else {
            const result = await dispatch(removeWishlistProduct(details.id));
            if(removeWishlistProduct.fulfilled.match(result)){
                notifySuccessToast("Removed from wishlist successfully!");
                refetch(details.id);
            }
        }

    }

    return  <div className={"container flex px-6 py-5 gap-4 bg-white"}>
        <MagnifyProduct imageUrl={details?.image_url}/>
        <div className={"product-details p-2 flex flex-col gap-2 w-[50%]"}>
            <div className={"py-2"}>
                <h3 className={"text-[1.8rem] text-primary font-[300]"}>{details?.title}</h3>
                <div className={"flex gap-3"}>
                    <Rating size={"small"} value={0}/>
                    <span className={"text-[13px] text-gray-400"}>Reviews (0)</span>
                </div>
            </div>
            <p className={"text-[14px] font-[500]"}>{details?.short_info}</p>
            <p className={"text-[14px] font-[400] text-gray-500"}>{details?.description}</p>
            <div className={"py-3 px-1 flex flex-col gap-2"}>
                <p className={"bg-amber-100 px-2 text-amber-700 font-bold w-[6rem] text-center rounded-xs"}>{details?.discount}% off</p>
                <div className={"flex gap-5 items-center px-1"}>
                        <span className={"text-[1.5rem] text-gray-500 line-through font-[300]"}>
                            ₹{details?.mrp}/-
                        </span>
                    <span className={"text-[1.5rem] font-[300] text-primary"}>₹{details?.priceAfterDiscount}/-</span>
                </div>
            </div>
            <div className={"px-1 py-2 flex flex-col gap-3"}>
                <div>
                    <p className={`text-center text-[13px] ${details?.inStock ? "bg-green-100 text-green-700" : "bg-red-200 text-red-600"} px-2 py-1 w-[12rem] rounded-sm`}>
                        {details?.inStock ? `In Stock - Available (${availableQty})` : "Out Of Stock"}
                    </p>
                    <span className={"text-[12px] text-gray-400 px-1"}>
                                Free Shipping - Delivery estimated in 2-3 days.
                            </span>
                </div>
                {sizes && <SelectSize size={size} handleSize={handleSize} sizes={sizes} available={availableSizes}/>}
                <SelectQty qty={qty} handleQty={handleQty}/>
            </div>
            <div className={"py-4 px-2 flex gap-4"}>
                <Button disabled={details?.inStock === false} onClick={handleAddToCart} className={"!bg-primary !text-[13px] !font-[500]"} variant={"contained"} size={"small"}>
                    <FaCartShopping className={"!mr-2"}/>Add To Cart
                </Button>
                <div onClick={handleWishlist} className={"shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] flex items-center gap-2 cursor-pointer bg-orange-100 text-primary text-[14px] p-1 px-3 rounded-md hover:bg-secondary hover:text-white transition"}>
                    {details?.isWishlisted ? <FaHeart color={"red"}/> : <FaRegHeart/>}<span>{details?.isWishlisted ? "Remove From" : "Add To"} Wishlist</span>
                </div>
                <div className={"shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] flex items-center gap-2 cursor-pointer bg-orange-100 text-primary text-[14px] p-1 px-3 rounded-md hover:bg-secondary hover:text-white transition"}>
                    <IoShareSocial/><span>Share</span>
                </div>
            </div>
        </div>
    </div>
}
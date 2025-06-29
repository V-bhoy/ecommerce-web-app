import {Link, useNavigate} from "react-router-dom";
import {Box, Button, Modal, Rating} from "@mui/material";
import {MdZoomOutMap} from "react-icons/md";
import {FaRegHeart} from "react-icons/fa6";
import ProductDetailsSection from "../product-details/ProductDetailsSection.jsx";
import {IoClose} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../redux/features/cart/cartSlice.js";
import {mapCartItem} from "../../utils/map-cart-item.js";
import {
    addWishlistProduct,
    removeWishlistProduct,
    viewProductDetailsById
} from "../../redux/features/products/productThunk.js";
import {clearViewProductModal} from "../../redux/features/products/productSlice.js";
import ProductDetailsShimmer from "../loading-skeleton/ProductDetailsShimmer.jsx";
import {FaHeart} from "react-icons/fa";

;

export default function ProductCard({product, category, refetch, enableWishlist=false}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {viewProductModal} = useSelector(state=>state.products);
    const {isLoggedIn} = useSelector(state=>state.auth);

    const handleAddToCart = ()=>{
        if(!isLoggedIn){
            navigate("/login");
            return;
        }
        const productItem = mapCartItem({...product, category});
        dispatch(addToCart(productItem));
        navigate("/cart");
    }

    const handleOpenModal = ()=>{
        dispatch(viewProductDetailsById(product.id));
    }

    const handleWishlist = async()=>{
        if(!isLoggedIn){
            navigate("/login");
            return;
        }
        if(!product?.isWishlisted){
          const result = await dispatch(addWishlistProduct(product.id));
            if(addWishlistProduct.fulfilled.match(result)){
                refetch();
            }
        }else {
            const result = await dispatch(removeWishlistProduct(product.id));
            if(removeWishlistProduct.fulfilled.match(result)){
                refetch();
            }
        }
    }

    const openModal = viewProductModal?.id === product.id;
    const isLoading =  viewProductModal === product.id;



    return <div className={"productCard rounded-md bg-orange-50 flex flex-col"}>
        <div className={"group imageWrapper h-[220px] rounded-t-md relative overflow-hidden"}>
            <Link to={`/products/details/${product.id}`}>
                <img className={"w-full h-full rounded-t-md overflow-hidden transition"}
                     src={product.image_url}
                     alt={"poster-image"}
                />
            </Link>
            <span className={"discount font-[500] absolute top-2 left-3 bg-primary text-white text-[13px] p-1 rounded-md"}>
                {product.discount}%
            </span>
            <div className={"actions absolute top-[-200px] right-3 z-50 flex flex-col items-center gap-4  transition-all duration-400 group-hover:top-3"}>
                <Button onClick={handleOpenModal} className={"!text-black hover:!text-white !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary"}>
                    <MdZoomOutMap/>
                </Button>
                <Modal open={openModal || isLoading} onClose={()=>dispatch(clearViewProductModal())}>
                    <Box className={"relative"} sx={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%"}}>
                        <IoClose onClick={()=>dispatch(clearViewProductModal())} size={"1.3rem"} className={"absolute top-3 right-15  cursor-pointer text-gray-600"}/>
                        {isLoading ? <ProductDetailsShimmer/> : <ProductDetailsSection details={viewProductModal}/>}
                    </Box>
                </Modal>
                {enableWishlist && <Button onClick={handleWishlist} className={`!text-black hover:!text-red-700 !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-orange-100`}>
                    {product?.isWishlisted ? <FaHeart  color={"red"}/> : <FaRegHeart/>}
                </Button>}
            </div>
        </div>
        <div className={"info py-3 px-2 flex-1 flex flex-col gap-4 justify-between"}>
            <div className={"flex flex-col gap-0.5"}>
                <div className={"flex items-center justify-between"}>
                    <Link className={"link"} to={`/products/details/${product.id}`}><h3 className={"text-[14px] font-[500]"}>{product.title}</h3></Link>
                    <Rating size={"small"} defaultValue={product?.rating || 0} readOnly/>
                </div>
                <p className={"text-[12px] text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis"}>{product.short_info}</p>
                <div>
                    <span className={"text-[13px] text-gray-500 line-through font-[500] !mr-2"}>₹{product.mrp}</span>
                    <span className={"text-[13px] font-[500] text-primary"}>₹{product.priceAfterDiscount}</span>
                </div>
            </div>
            {(product.inStock || product.inStock === false) && <Button disabled={!product.inStock} onClick={handleAddToCart} variant={"contained"} className={" !h-[28px] !text-[12px] !bg-primary"} size={"small"}>Add To Cart</Button>}
        </div>
    </div>
}
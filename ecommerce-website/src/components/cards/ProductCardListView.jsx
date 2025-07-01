import {Link, useNavigate} from "react-router-dom";
import {Box, Button, Modal, Rating} from "@mui/material";
import {MdZoomOutMap} from "react-icons/md";
import {FaRegHeart} from "react-icons/fa6";
import {mapCartItem} from "../../utils/map-cart-item.js";
import {addToCart} from "../../redux/features/cart/cartSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {
    addWishlistProduct,
    removeWishlistProduct,
    viewProductDetailsById
} from "../../redux/features/products/productThunk.js";
import {IoClose} from "react-icons/io5";
import {clearProductSliceError, clearViewProductModal} from "../../redux/features/products/productSlice.js";
import ProductDetailsShimmer from "../loading-skeleton/ProductDetailsShimmer.jsx";
import ProductDetailsSection from "../product-details/ProductDetailsSection.jsx";
import {FaHeart} from "react-icons/fa";
import ErrorDialog from "../error-messages/ErrorDialog.jsx";

export default function ProductCardListView({product, category, refetch, enableWishlist=false}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {viewProductModal, error} = useSelector(state=>state.products);
    const {isLoggedIn} = useSelector(state => state.auth);

    const handleAddToCart = ()=>{
        if(!isLoggedIn){
            navigate("/login");
            return;
        }
        const productItem = mapCartItem({...product, category});
        dispatch(addToCart(productItem));
        navigate("/cart");
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

    const handleOpenModal = ()=>{
        dispatch(viewProductDetailsById(product.id));
    }

    const handleCloseModal = ()=>{
        if(error) dispatch(clearProductSliceError());
        dispatch(clearViewProductModal());
    }


    const openModal = viewProductModal?.id === product.id;
    const isLoading =  viewProductModal === product.id;


    return <div className={"productCard rounded-md bg-orange-50 flex gap-3 h-[220px]"}>
        <div className={"group imageWrapper md:max-lg:w-[40%] w-[30%] rounded-l-md relative overflow-hidden"}>
            <Link to={`products/details/${product.id}`}>
                <img className={"w-full h-full rounded-l-md overflow-hidden transition"}
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
                <Modal open={openModal || isLoading} onClose={handleCloseModal}>
                    <Box className={"relative"} sx={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%"}}>
                        <IoClose onClick={handleCloseModal} size={"1.3rem"} className={"absolute top-3 right-15  cursor-pointer text-gray-600"}/>
                        {isLoading ? <ProductDetailsShimmer/> :
                            error ? <ErrorDialog error={error} clearError={handleCloseModal}/> :
                            <ProductDetailsSection details={viewProductModal}/>}
                    </Box>
                </Modal>
                {enableWishlist && <Button onClick={handleWishlist} className={`!text-black hover:!text-red-700 !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-orange-100`}>
                    {product?.isWishlisted ? <FaHeart  color={"red"}/> : <FaRegHeart/>}
                </Button>}
            </div>
        </div>
        <div className={"info px-2 py-6 md:max-lg:w-[60%] flex flex-col gap-1"}>
            <Link className={"link"} to={`/products/details/${product.id}`}><h3 className={"text-[14px] font-[500]"}>{product.title}</h3></Link>
            <p className={"text-[12px] text-primary font-[500]"}>{product.short_info}</p>
            <p className="text-[11px] text-gray-500 max-lg:whitespace-nowrap md:max-lg:overflow-hidden md:max-lg:text-ellipsis">
                {product.description}
            </p>
            <Rating size={"small"} defaultValue={product?.rating || 0} readOnly/>
            <div>
                <span className={"text-[13px] text-gray-500 line-through font-[500] !mr-2"}>₹{product.mrp}</span>
                <span className={"text-[13px] font-[500] text-primary"}>₹{product.priceAfterDiscount}</span>
            </div>
            <Button onClick={handleAddToCart} disabled={!product.inStock} variant={"contained"} className={" !h-[28px] !text-[12px] md:max-lg:!w-[40%] !w-[15%] !min-w-[15%] !bg-primary"} size={"small"}>Add To Cart</Button>
        </div>
    </div>
}
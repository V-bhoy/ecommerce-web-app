import {products} from "../mock-data/products.js";
import {Pagination} from "@mui/material";
import ProductCard from "../components/cards/ProductCard.jsx";

export default function Wishlist(){
    return <section className={"py-5"}>
        <div className={"container"}>
            <div className={"!mb-5 px-2"}>
                <h3 className={"font-[400] text-primary text-[1.5rem]"}>My Wishlist</h3>
                <p className={"text-[12px] text-gray-600"}>There are 23 products in your wishlist.</p>
            </div>
                <div className={"grid grid-cols-4 gap-5"}>
                    {
                        products?.map(product=><ProductCard key={product.id} product={product}/>)
                    }
                </div>
                <div className={"flex items-center justify-center py-5 !mt-5"}>
                    <Pagination count={10} size={"small"} variant={"text"}/>
                </div>

        </div>
    </section>
}
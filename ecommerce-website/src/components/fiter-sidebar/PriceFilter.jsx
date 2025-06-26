import ReactRangeSliderInput from "react-range-slider-input";
import 'react-range-slider-input/dist/style.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFilters} from "../../redux/features/products/productSlice.js";


export default function PriceFilter() {
    const dispatch = useDispatch();
    const {filters: {filterBy}} = useSelector(state => state.products);

    const handleChange = (val) => {
        dispatch(setFilters({filterBy: {minPrice: val[0], maxPrice: val[1]}}));
    };

    return <div className={"size-filter border-t border-t-gray-200 px-5"}>
        <h3 className={"text-[14px] font-[500] py-3"}>Price</h3>
        <div className={"py-3"}>
            <ReactRangeSliderInput className={"!h-[4px]"}
                                   min={0} max={50000}
                                   value={[filterBy?.minPrice || 0, filterBy?.maxPrice || 50000]}
                                   onInput={handleChange}
            />
            <div className={"flex items-center justify-between p-3 text-[13px] font-[500]"}>
                <p>From:&nbsp;<span className={"font-[600]"}>₹{filterBy?.minPrice || 0}</span></p>
                <p>To:&nbsp;<span className={"font-[600]"}>₹{filterBy?.maxPrice || 50000}</span></p>
            </div>
        </div>
    </div>
}
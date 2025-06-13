import ReactRangeSliderInput from "react-range-slider-input";
import 'react-range-slider-input/dist/style.css';
import {useState} from "react";


export default function PriceFilter() {
    const [priceValue, setPriceValue] = useState([0, 50000])

    const handleChange = (val) => {
        setPriceValue(val);
    };

    return <div className={"size-filter border-t border-t-gray-200 px-5"}>
        <h3 className={"text-[14px] font-[500] py-3"}>Price</h3>
        <div className={"py-3"}>
            <ReactRangeSliderInput className={"!h-[4px]"}
                                   min={0} max={50000}
                                   value={priceValue}
                                   onInput={handleChange}
            />
            <div className={"flex items-center justify-between p-3 text-[13px] font-[500]"}>
                <p>From:&nbsp;<span className={"font-[600]"}>₹{priceValue[0]}</span></p>
                <p>To:&nbsp;<span className={"font-[600]"}>₹{priceValue[1]}</span></p>
            </div>
        </div>
    </div>
}
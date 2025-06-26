import React from "react";

export default function ProductDetailsShimmer() {
    return (
        <div className="animate-pulse bg-white py-10 px-5">
            <div className="container flex flex-col md:flex-row gap-10">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 bg-gray-200 h-[400px] rounded-xl"></div>

                {/* Right Side - Details */}
                <div className="flex flex-col gap-4 w-full md:w-1/2 space-y-5">
                    {/* Title */}
                    <div className="h-6 w-3/4 bg-gray-200 rounded"></div>

                    {/* Rating */}
                    <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                    {/* Description lines */}
                    <div className="flex flex-col gap-1 space-y-2">
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                    </div>

                    {/* Price */}
                    <div className="h-6 w-1/4 bg-gray-200 rounded"></div>


                    {/* Size options */}
                    <div className="flex gap-3">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="h-8 w-12 bg-gray-200 rounded-sm"></div>
                        ))}
                    </div>

                    {/* Quantity input */}
                    <div className="h-10 w-[100px] bg-gray-200 rounded-sm"></div>

                    {/* Button */}
                    <div className="h-10 w-[200px] bg-gray-300 rounded-md"></div>
                </div>
            </div>
        </div>
    );
}
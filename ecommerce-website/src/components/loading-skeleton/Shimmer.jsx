import CardsCarouselShimmer from "./CardsCarouselShimmer.jsx";

export default function Shimmer() {
    return (
        <div className="flex flex-col gap-2 p-5 animate-pulse">
            {/* Heading */}
            <div className="w-1/3 h-6 bg-gray-300 rounded mb-2"></div>
            {/* Subheading / Line */}
            <div className="w-1/4 h-4 bg-gray-200 rounded mb-5"></div>

            {/* Carousel of Cards */}
             <CardsCarouselShimmer/>
        </div>
    );
}
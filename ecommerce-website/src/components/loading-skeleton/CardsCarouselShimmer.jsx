export default function CardsCarouselShimmer(){
    return  <div className="flex gap-4 pt-6 overflow-x-auto">
        {Array.from({ length: 6 }).map((_, index) => (
            <div
                key={index}
                className="min-w-[250px] w-[250px] h-[250px] bg-gray-200 rounded-md flex flex-col gap-2"
            >
                {/* Image placeholder */}
                <div className="h-2/3 bg-gray-300 rounded-t-md"></div>

                {/* Title */}
                <div className="w-3/4 h-4 bg-gray-300 rounded !mx-2"></div>

                {/* Subtitle */}
                <div className="w-1/2 h-3 bg-gray-200 rounded mx-2"></div>
            </div>
        ))}
    </div>
}
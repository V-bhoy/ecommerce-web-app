import {Skeleton} from "@mui/material";

export default function ProductListShimmer({view = "grid"}) {
    const skeletonArray = new Array(view === "grid" ? 12 : 6).fill(null);

    return (
        <div className="flex gap-3 container">
            {/* Left Sidebar Skeleton */}
            <div className="w-[20%]">
                <Skeleton variant="rectangular" height={40} className="mb-2" />
                {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} variant="rectangular" height={30} className="mb-2" />
                ))}
            </div>

            {/* Products Skeleton */}
            <div className="flex flex-col gap-3 w-[80%]">
                <div className="bg-orange-50 p-2 rounded-sm mb-3 flex items-center justify-between">
                    <Skeleton width={120} height={30} />
                    <Skeleton width={100} height={30} />
                </div>

                <div className={`grid ${view === "grid" ? "grid-cols-4" : "grid-cols-1"} gap-4`}>
                    {skeletonArray.map((_, i) => (
                        <div key={i} className="border border-gray-300 rounded p-3 bg-white shadow">
                            <Skeleton variant="rectangular" width="100%" height={140} />
                            <Skeleton width="80%" height={20} className="mt-2" />
                            <Skeleton width="60%" height={20} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <Skeleton variant="rectangular" width={200} height={40} />
                </div>
            </div>
        </div>
    );
}
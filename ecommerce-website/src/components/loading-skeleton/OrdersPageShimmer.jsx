export default function OrdersPageShimmer() {
    return (
        <div className="container flex flex-col gap-4 animate-pulse bg-white p-4 space-y-6">
            <div className="h-10 w-full bg-gray-200 rounded"></div>
            <div className="h-10 w-full bg-gray-200 rounded"></div>
            <div className="h-10 w-full bg-gray-200 rounded"></div>
            <div className="h-10 w-full bg-gray-200 rounded"></div>
            <div className="h-10 w-full bg-gray-200 rounded"></div>
        </div>
    );
}
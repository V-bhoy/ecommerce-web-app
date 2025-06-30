export default function AppSkeleton() {
    return (
        <div className="min-h-screen container flex flex-col gap-4 animate-pulse bg-white p-4 space-y-6">
            {/* Header / Navbar */}
            <div className="h-12 w-full bg-gray-200 rounded"></div>

            {/* Main Content */}
            <div className="flex flex-1 gap-3 space-x-6">

                {/* Main Area */}
                <div className="flex-1 flex flex-col gap-2 space-y-4">
                    <div className="h-8 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-64 bg-gray-200 rounded"></div>
                    <div className="h-64 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Footer */}
            <div className="h-30 w-full bg-gray-200 rounded"></div>
        </div>
    );
}
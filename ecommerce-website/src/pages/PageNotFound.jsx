export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl text-gray-600 mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-6">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <a
                href="/"
                className="inline-block !my-5 px-5 py-1 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                Go Home
            </a>
        </div>
    );
}
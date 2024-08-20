import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#6c06f29a] to-[#4a0a99] text-white font-poppins">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-8">Oops! Page not found.</p>
                <p className="text-lg mb-6">The page you’re looking for doesn’t exist or has been moved.</p>
                <Link href="/" className="text-lg bg-white text-[#6c06f29a] p-4 rounded-lg shadow-lg hover:bg-[#6c06f29a] hover:text-white  transition duration-300">
                    Go to Home
                </Link>
            </div>
        </div>
    )
}
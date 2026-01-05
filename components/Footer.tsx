import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Vastravihaar</h3>
                        <p className="text-gray-300">
                            Your one-stop shop for exclusive cloths, purses, and accessories.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/return-policy" className="text-gray-300 hover:text-white transition-colors">
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Vastravihaar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

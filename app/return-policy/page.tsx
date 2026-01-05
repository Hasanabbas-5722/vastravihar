export default function ReturnPolicy() {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Return Policy</h1>

                <div className="prose prose-indigo text-gray-500">
                    <p>
                        We want you to be completely satisfied with your purchase. If you are not happy with your order, we offer a hassle-free return policy.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Return Eligibility</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Items must be returned within 30 days of purchase.</li>
                        <li>Items must be unused, unwashed, and in their original condition with tags attached.</li>
                        <li>Proof of purchase is required for all returns.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Non-Returnable Items</h2>
                    <p>
                        Final sale items, intimate apparel, and gift cards are not eligible for return.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Process</h2>
                    <p>
                        To initiate a return, please contact our customer support team or visit our Returns Center on the website.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Refunds</h2>
                    <p>
                        Refunds will be processed to the original payment method within 7-10 business days after we receive your returned item.
                    </p>
                </div>
            </div>
        </div>
    );
}

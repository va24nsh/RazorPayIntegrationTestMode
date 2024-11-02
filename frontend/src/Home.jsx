import React, { useState } from 'react'
import axios from "axios";

const Home = () => {
    const [amount, setAmount] = useState('');

    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")
        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount: Number(amount)
        })
        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Vansh",
            description: "RazorPay test",
            image: "https://avatars.githubusercontent.com/u/72353067?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Vansh Maurya",
                email: "vanshmaurya17@gmail.com",
                contact: "9690****46"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        checkoutHandler(amount);
    };
    
    return (
        <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-semibold text-center text-gray-800">Enter Amount</h2>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
                    >
                        Checkout
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home
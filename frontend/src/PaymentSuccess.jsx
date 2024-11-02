import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <div className="h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4 bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h1 className="uppercase text-3xl font-bold text-gray-800">Order Successful</h1>
                    <p className="text-gray-600">Thank you for your order!</p>
                    <p className="text-gray-700 text-sm">Reference No. <span className="font-semibold text-gray-900">{referenceNum}</span></p>
                </div>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition duration-300 ease-in-out"
                >
                    Back to Home
                </button>
            </div>
        </div>

    )
}

export default PaymentSuccess
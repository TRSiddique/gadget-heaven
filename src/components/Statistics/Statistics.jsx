import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { FaBoxOpen, FaHeart, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Statistics = () => {
    const { cartItems, wishlistItems } = useContext(CartContext);

    const totalProducts = 20;
    const totalTrends = 5;

    const statData = [
        { name: 'Products', value: totalProducts },
        { name: 'Cart', value: cartItems.length },
        { name: 'Wishlist', value: wishlistItems.length },
        { name: 'Trends', value: totalTrends },
    ];

    const pieColors = ['#8b5cf6', '#10b981', '#ec4899', '#3b82f6'];

    return (
        <div className="py-10 px-4 md:px-10 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-10 text-purple-700"> Gadget Statistics Dashboard</h2>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                <StatCard icon={<FaBoxOpen />} title="Total Products" value={totalProducts} color="purple" />
                <StatCard icon={<FaShoppingCart />} title="Cart Items" value={cartItems.length} color="green" />
                <StatCard icon={<FaHeart />} title="Wishlist" value={wishlistItems.length} color="pink" />
                <StatCard icon={<FaChartLine />} title="Tech Trends" value={totalTrends} color="blue" />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Bar Chart */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">📦 Item Overview</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={statData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#8b5cf6" radius={[5, 5, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center">📈 Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={statData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                            >
                                {statData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                ))}
                            </Pie>
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

// Reusable Stat Card component
const StatCard = ({ icon, title, value, color }) => {
    const colorMap = {
        purple: 'text-purple-600',
        green: 'text-green-600',
        pink: 'text-pink-500',
        blue: 'text-blue-600',
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className={`text-4xl mx-auto mb-2 ${colorMap[color]}`}>{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className={`text-2xl font-bold mt-2 ${colorMap[color]}`}>{value}</p>
        </div>
    );
};

export default Statistics;

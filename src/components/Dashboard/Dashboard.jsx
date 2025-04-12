import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

const Dashboard = () => {
    const { cartItems, wishlistItems } = useContext(CartContext);
    const [activeTab, setActiveTab] = useState('cart');
    const [sortedCartItems, setSortedCartItems] = useState([]);

    useEffect(() => {
        setSortedCartItems(cartItems); // keep sorted items in sync with cart
    }, [cartItems]);

    const handleSort = () => {
        const sorted = [...sortedCartItems].sort((a, b) => b.price - a.price);
        setSortedCartItems(sorted);
    };

    const totalPrice = sortedCartItems.reduce((total, item) => total + item.price, 0);

    const renderItem = (item) => (
        <div key={item.product_id} className="border p-4 rounded-xl shadow-md flex gap-4 mb-4 bg-white">
            <img src={item.product_image} alt={item.product_title} className="w-24 h-24 object-cover rounded" />
            <div>
                <h2 className="font-bold text-xl">{item.product_title}</h2>
                <p className="text-sm">{item.description}</p>
                <p className="text-md font-semibold mt-1">Price: ${item.price}</p>
            </div>
        </div>
    );

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <div className="bg-purple-600 text-white text-center py-6 rounded-t-xl mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-2">Explore the latest gadgets in your cart or wishlist.</p>
            </div>

            <div className="flex justify-center gap-6 mb-6">
                <button onClick={() => setActiveTab('cart')} className={`px-6 py-2 rounded ${activeTab === 'cart' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border'}`}>Cart</button>
                <button onClick={() => setActiveTab('wishlist')} className={`px-6 py-2 rounded ${activeTab === 'wishlist' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border'}`}>Wishlist</button>
            </div>

            {activeTab === 'cart' && (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Cart Items</h2>
                        <h3 className="text-lg font-semibold mt-4">Total Price: ${totalPrice.toFixed(2)}</h3>
                       <div className='flex gap-2 justify-center'>
                       <button
                            className="mb-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                            onClick={handleSort}
                        >
                            Sort by Price ↓
                        </button>
                        <button className='btn btn-info'>Purchase</button>
                       </div>
                    </div>

                    {sortedCartItems.map(renderItem)}

                    
                </div>
            )}

            {activeTab === 'wishlist' && (
                <div>
                    <h2 className="text-xl font-bold mb-4">Wishlist Items</h2>
                    {wishlistItems.map(renderItem)}
                </div>
            )}
        </div>
    );
};

export default Dashboard;

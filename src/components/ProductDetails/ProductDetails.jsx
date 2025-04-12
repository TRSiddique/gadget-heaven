import React, { useContext } from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { CartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { productId } = useParams();
    const data = useLoaderData();
    const product = data.find((product) => product.product_id === productId);
    const { addToCart, addToWishlist, wishlistItems } = useContext(CartContext);
    const alreadyInWishlist = wishlistItems.some(item => item.product_id === product.product_id);
    const {  product_title, product_image, price, description, specifications } = product;

    const handleAddToCart = () => {
        addToCart(product);
        toast.success("✅ Added to Cart");
    };

    const handleAddToWishlist = () => {
        if (!alreadyInWishlist) {
            addToWishlist(product);
            toast.success("💖 Added to Wishlist");
        } else {
            toast.warn("⚠️ Already in Wishlist");
        }
    };

    return (
        <div>
            <div className="bg-purple-600 text-white text-center py-6 rounded-t-xl h-[300px]">
                <h1 className="text-3xl font-bold">Product Details</h1>
                <p className="mt-2">Explore the latest gadgets that will take your experience to the next level.</p>
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center w-11/12 md:w-10/12 lg:w-8/12 mx-auto border bg-yellow-50 -mt-[120px] mb-10 p-5 md:p-8 lg:p-10 rounded-xl'>
                <img className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] mb-6 lg:mb-0' src={product_image} alt="" />
                <div className='lg:pl-8 w-full'>
                    <h2 className='text-2xl font-bold'>{product_title}</h2>
                    <h4 className='text-xl font-semibold mt-2'>Price: $ {price}</h4>
                    <div className="badge badge-soft badge-success my-2">In stock</div>
                    <p className="mb-3">{description}</p>
                    <h4 className='text-xl font-bold mt-4'>Specification:</h4>
                    <ul className="list-decimal list-inside text-gray-600 mb-4 space-y-1 pl-4 md:pl-8">
                        {specifications.map((spec, index) => (
                            <li key={index}>{Object.values(spec).join(', ')}</li>
                        ))}
                    </ul>

                    <h4 className="text-lg font-semibold mb-2">Rating ⭐</h4>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <button 
                            onClick={handleAddToCart} 
                            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full flex items-center gap-2"
                        >
                            Add To Cart <FaCartPlus />
                        </button>

                        <button
                            onClick={handleAddToWishlist}
                            disabled={alreadyInWishlist}
                            className={`p-2 border rounded-full ${
                                alreadyInWishlist ? 'bg-gray-200 cursor-not-allowed text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                            }`}
                        >
                            <FaHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

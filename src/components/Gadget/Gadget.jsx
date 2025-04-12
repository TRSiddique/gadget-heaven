import React from 'react';
import {Link} from 'react-router-dom'

const Gadget = ({gadget}) => {
    const {product_id,product_title,product_image,price}= gadget;
    return (
        <div className='border p-4 bg-white text-black rounded-2xl flex flex-col justify-between'>
<div className=''>
<img className='w-[200px] h-[200px] border border-amber-200 rounded-2xl ' src={product_image} alt="no image found" />
            <h1 className='text-2xl font-bold '>{product_title}</h1>
            <p className='text-lg'>Price: {price}</p>
            
</div>
            <Link to={`/products/${product_id}`}><button className="btn btn-sm">View Details</button></Link>
            
        </div>
    );
};

export default Gadget;
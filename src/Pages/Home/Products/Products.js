import React, { useEffect, useState } from 'react';
import Porduct from './Porduct';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products);
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-yellow-400 my-4 '>Popular Products</h1>
                <h3 className='text-xl font-semibold mb-2'>Browse Our Products</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4'>
                {
                    products.map(product => <Porduct
                        product={product}
                    ></Porduct>)
                }
            </div>
            <div className='m-4 flex justify-center'>
                <button className="btn btn-outline btn-secondary">More Products</button>
            </div>
        </div>
    );
};

export default Products;
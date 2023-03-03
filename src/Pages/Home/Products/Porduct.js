import React from 'react';

const Porduct = ({ product }) => {


    const { image, details, name, ratings, price } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className=" flex justify-between">
                        <h2 className="card-title">Price:${price}</h2>
                        <h2 className="card-title">Rating:{ratings}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Porduct;
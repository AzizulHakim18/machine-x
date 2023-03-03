import React from 'react';

const Service = ({ service }) => {


    const { img, title, price, description } = service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline text-lg font-bold">Price:${price}</div>
                        <div className="badge badge-outline ">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
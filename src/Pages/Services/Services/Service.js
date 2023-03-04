import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {


    const { img, title, price, description, _id } = service;

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
                    <div className="card-actions justify-between items-center">
                        <div className="badge badge-outline text-lg font-bold">Price:${price}</div>
                        <Link to={`/checkout/${_id}`}><button className='btn btn-warning'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
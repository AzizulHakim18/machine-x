import React, { useEffect, useState } from 'react';

const Order = ({ order, handleDelete, handleStatusUpdate }) => {

    const { serviceName, phone, customer, price, email, service, _id, status } = order

    const [orderService, setOrderService] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/services/${service}`)
    //         .then(res => res.json())
    //         .then(data => setOrderService(data))
    // }, [service])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])



    return (
        <div>

            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='text-xl font-bold text-red-800'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-40 h-40">
                                {
                                    orderService?.img && <img src={orderService.img} alt="" />
                                }

                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">Price:${price}</span>
                </td>
                <td>{email}</td>
                <th>
                    <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : "Pending"}</button>
                </th>
            </tr>
        </div>
    );
};

export default Order;
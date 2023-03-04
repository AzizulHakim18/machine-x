import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContexts';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const { title, price, _id } = useLoaderData();
    console.log(useLoaderData());

    console.log(_id);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        console.log(order);


        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(er => console.error(er))

    }

    return (
        <div>
            <h1 className='text-4xl font-bold'>You are about to order: {title}</h1>
            <h3 className='text-2xl font-semibold'>Price: ${price}</h3>


            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="Frist Name" className="input input-bordered input-warning w-full" required />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-warning w-full " required />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered input-warning w-full " required />
                    <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered input-warning w-full " required />
                </div>
                <textarea name="message" className="textarea textarea-warning" placeholder="Bio" required></textarea>
                <div className='flex justify-center my-4'>  <input type="submit" value="Place Your Order" className='btn btn-outline btn-warning' /></div>
            </form>
        </div>
    );
};

export default CheckOut;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContexts';
import Order from './Order';



const Orders = () => {

    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    console.log(orders)

    const handleDelete = id => {
        const procced = window.confirm("Are you sure to delete this ?")
        if (procced) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully")
                        const remaining = orders.filter(x => x._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "Approved" })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(x => x._ic !== id)
                    const approving = orders.find(x => x._id === id)
                    approving.status = "Approved"

                    const newOrders = [...remaining, approving]
                    setOrders(newOrders)
                }
            })
    }

    return (
        <div>

            <h1 className='text-3xl font-bold text-center'>You have {orders.length} orders </h1>

            <div className="overflow w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>

                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>


                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Order
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></Order>)
                        }



                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Orders;
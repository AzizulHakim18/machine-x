import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("machineData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-yellow-400 my-4 '>Service</h1>
                <h2 className='text-xl font-semibold mb-2'>Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

            <div className='m-4 flex justify-center'><button className="btn btn-outline btn-secondary">More Services</button>
            </div>

        </div>
    );
};

export default Services;
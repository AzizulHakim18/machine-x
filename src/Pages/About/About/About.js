import React from 'react';

const About = () => {
    return (
        <div>
            <div className='lg:flex mt-10 pt-4'>
                <div className='w-full h-full mx-4 px-4'>
                    <div className='w-full h-3/5 relative'>
                        <img className='border rounded-lg' src="https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14039.jpg?w=996&t=st=1677835079~exp=1677835679~hmac=f5c6fa7e91550cd54d1f3b55f9899d4789e2ee993930c4ced9d49587186ddef3" alt="" />
                    </div>
                    <div className='w-3/5 h-3/5 relative lg:left-80 md:left-64 sm:left-48 bottom-32'>
                        <img className='border-8 border-white rounded-lg' src="https://img.freepik.com/free-photo/car-mechanist-making-car-service_1303-26907.jpg?w=996&t=st=1677835094~exp=1677835694~hmac=6ec49450f2c715110ffa65b36c802a702ac9adf348636cacafe802287f503e7d" alt="" />
                    </div>
                </div>
                <div className='lg:ml-12 lg:pl-12'>
                    <h1 className='text-3xl font-bold text-yellow-500'>About Us</h1>
                    <h3 className='text-xl font-bold my-4 py-4'>We are qualified & of experience in this field</h3>
                    <p className='font-semibold'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <p className='font-semibold my-4 py-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <button className="btn btn-outline btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
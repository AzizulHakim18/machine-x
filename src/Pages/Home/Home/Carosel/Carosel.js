import React from 'react';
import './Carosel.css'

const Carosel = () => {
    return (
        <div className='w-3/4 mx-auto my-10 py-8'>
            <div className="carousel w-full h-1/4 rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="w-full h-3/4 bg-color1"></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute ml-8 top-1/4 text-white'>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='md:text-xl lg:text-2xl mt-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="w-full h-3/4 bg-color2"></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute ml-8 top-1/4 text-white'>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='md:text-xl lg:text-2xl mt-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="w-full h-3/4 bg-color3"></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute ml-8 top-1/4 text-white'>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='md:text-xl lg:text-2xl mt-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-phohref/mechanics-repairing-car-workshop_329181-11804.jpg?w=996&t=st=1677830773~exp=1677831373~hmac=29647b26ab7a0038956e491d22be46653b836b938693898fbcaf915957cd7f67" alt='' className="w-full h-3/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Carosel;
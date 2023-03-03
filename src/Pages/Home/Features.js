import React from 'react';
import { HiOutlineUserGroup, HiOutlineClock, HiOutlineChatBubbleLeftRight, HiOutlineChevronDoubleRight, HiOutlineCurrencyEuro, HiOutlineFolderOpen } from "react-icons/hi2";
const Features = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-yellow-400 my-4'>Core Features</h1>
                <h2 className='text-xl font-semibold mb-2'>Why Choose Us</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>

            <div className='w-2/3 mx-auto lg:flex my-4 py-4'>
                <div className='w-36 h-36 border rounded-lg mx-2 flex justify-center items-center hover:bg-orange-400'>
                    <div>
                        <HiOutlineUserGroup className='w-20 h-20  ml-4'></HiOutlineUserGroup>
                        <h3 className='text-xl font-semibold '>Expert Team</h3>
                    </div>
                </div>
                <div className='w-36 h-36 border rounded-lg mx-2 flex justify-center items-center hover:bg-orange-400'>
                    <div>
                        <HiOutlineClock className='w-20 h-20  ml-4'></HiOutlineClock>
                        <h3 className='text-xl font-semibold '>Timely Delivery</h3>
                    </div>
                </div>
                <div className='w-36 h-36 border rounded-lg mx-2 flex justify-center items-center hover:bg-orange-400'>
                    <div>
                        <HiOutlineChatBubbleLeftRight className='w-20 h-20  ml-4'></HiOutlineChatBubbleLeftRight>
                        <h3 className='text-xl font-semibold '>24*7 Days</h3>
                    </div>
                </div>
                <div className='w-36 h-36 border rounded-lg mx-2 flex justify-center items-center ml-4 hover:bg-orange-400'>
                    <div>
                        <HiOutlineChevronDoubleRight className='w-20 h-20  ml-4'></HiOutlineChevronDoubleRight>
                        <h3 className='text-xl font-semibold '>Best Equipments</h3>
                    </div>
                </div>
                <div className='w-36 h-36 border rounded-lg mx-2 flex justify-center items-center hover:bg-orange-400'>
                    <div>
                        <HiOutlineCurrencyEuro className='w-20 h-20  ml-4'></HiOutlineCurrencyEuro>
                        <h3 className='text-xl font-semibold '>100% Gurannty</h3>
                    </div>
                </div>
                <div className='w-36 h-36 border rounded-lg mx-2 flex justify-center items-center hover:bg-orange-400'>
                    <div>
                        <HiOutlineFolderOpen className='w-20 h-20  ml-4'></HiOutlineFolderOpen>
                        <h3 className='text-xl font-semibold '>Timely Delivery</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Features;
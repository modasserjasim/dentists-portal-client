import React from 'react';
import chair from '../../Assets/images/chair.png';
import bg from '../../Assets/images/bg.png';

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="">
            <div className="container flex md:gap-20 flex-col p-6 mx-auto sm:py-12 lg:py-24 md:flex-row lg:justify-between">
                <div className="flex flex-col justify-center text-center rounded-sm lg:text-left md:w-1/2">
                    <h1 className="text-2xl font-semibold leading-6 sm:text-5xl">Your New Smile Starts Here
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1992
                    </p>
                    <button href="/" className="btn btn-primary text-white lg:w-3/6 bg-gradient-to-tl from-primary to-secondary text-lg font-semibold border rounded ">GET STARTED</button>
                </div>
                <div className="flex items-center justify-center mt-8 lg:mt-0 md:w-1/2">
                    <img src={chair} alt="" className="object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Home;
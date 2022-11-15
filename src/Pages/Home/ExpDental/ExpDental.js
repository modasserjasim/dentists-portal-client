import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const ExpDental = () => {
    return (
        <div className="max-w-5xl mx-auto my-16 md:py-32">
            <div className="hero-content flex-col md:gap-20 lg:flex-row">
                <img src={treatment} className="w-full md:w-2/6 rounded-lg shadow-2xl" alt='treatment' />
                <div className='w-full md:w-1/2'>
                    <h1 className="text-2xl md:text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExpDental;
import React from 'react';
import bg from '../../../assets/images/bg-contact.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const Contact = () => {
    return (

        <div style={{ backgroundImage: `url(${bg})` }} className={`relative bg-cover bg-center bg-no-repeat`}>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h4 className="text-xl text-primary font-bold text-center">Contact Us</h4>
                    <h2 className="text-4xl text-center text-white">Stay connected with us</h2>

                    <form action="" className="mt-6 mb-0 space-y-4">

                        <div>


                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter your email"
                                />

                            </div>
                        </div>

                        <div>

                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Subject"
                                />


                            </div>
                            <div className="relative mt-4">
                                <textarea
                                    type="textarea"
                                    id="subject"
                                    className="w-full h-28 rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Your message"
                                />


                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <PrimaryButton>Submit Now</PrimaryButton>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
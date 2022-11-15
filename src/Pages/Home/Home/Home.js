import React from 'react';
import Contact from '../Contact/Contact';
import ExpDental from '../ExpDental/ExpDental';
import Hero from '../Hero/Hero';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExpDental></ExpDental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;
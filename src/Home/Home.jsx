import React from 'react';


import Hero from "../Hero/Hero"
import Ourmission from "../Ourmission/OurMission"
import About from '../About/About';
import Team from '../Team/Team';
import Deliver from '../Delivery/Deliver';
import Ask from '../Ask/Ask';
import Service from '../Service/Service';
import Grow from '../Grow/Grow';
import Earn from '../Earn/Earn';

import Contact from '../Contact/Contact';
import Footer from "../Footer/Footer"



const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Ourmission></Ourmission>
            <About></About>
            <Team></Team>
            <Deliver></Deliver>
            <Ask></Ask>
            <Service></Service>
            <Grow></Grow>
            <Earn></Earn>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default Home;
import React from 'react'
import { Jumbotron } from './components/Principal/Jumbotron';
import { OurService } from './components/Principal/OurService';
import { Footer } from './components/Footer';

import 'animate.css';
import './css/principal.css'

const Principal = () => {



    return (
        <>
            <Jumbotron/>
            <OurService/>
            <div id="blank"></div>
            <Footer/>
        </>
    );
}

export default Principal
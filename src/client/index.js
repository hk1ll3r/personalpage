import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import $ from 'jquery';

// import TweenMax from 'gsap';
import TweenMax from 'TweenMax';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

import HeroImage from './images/hero.jpg'; 
import ProfessionalImage from './images/professional.jpg'; 
import SkydiveImage from './images/skydiving.jpg'; 
import MicrosoftImage from './images/microsoft.png'; 
import GoogleImage from './images/google.jpg'; 
import AliceImage from './images/alice.jpg'; 

import FacebookIcon from './images/facebook.svg'; 
import InstagramIcon from './images/instagram.svg'; 
import TwitterIcon from './images/twitter.svg'; 
import LinkedInIcon from './images/linkedin.svg'; 
//ReactDOM.render(<App />, document.getElementById('root'));
 
export default {
    images: {
        'facebook': FacebookIcon,
        'twitter': TwitterIcon,
        'instagram': InstagramIcon,
        'linkedin': LinkedInIcon,
 
        'alice': AliceImage,
        'google': GoogleImage,
        'microsoft': MicrosoftImage,
        'skydive': SkydiveImage,
        'professional': ProfessionalImage,
        'hero': HeroImage
    },
};

// global exports
window.$ = $;
window.jQuery = $;
window.ScrollMagic = ScrollMagic;
window.TweenMax = TweenMax;

import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import pic1 from './assets/media1.jpg';
import pic2 from './assets/media2.jpg';
import pic3 from './assets/media3.jpg';
import pic4 from './assets/media4.jpg';

function Home(){

    useEffect(() => {
      window.alert('Discover inspirational quotes and images on this page');
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      }, []);

      
    return(
        <>
        <div id="home-container">

        <h1 id="page-logo">Home Page</h1>
        
        <div id="head-div">
            <nav className="nav-bar">
            <ul>
                <li id="game"><Link to="/game">Game</Link></li>
                <li id="historia"><Link to="/historia">Historia</Link></li>
                <li id="media"><Link to="/media">Media</Link></li>
            </ul>
            </nav>
           
            </div>

            <div id="main-div">

              <img src={pic4} className="images"></img>
            <p>
              Children are gifts from God.❤️❤️
            </p>

            <img src={pic1} className="images"></img>
            <p>
              Black is always beautiful.❤️❤️
            </p>

            <img src={pic2} className="images"></img>
            <p>
                Inner beauty radiates <br/> the outward.❤️❤️
            </p>

            <img src={pic3} className="images"></img>
            <p>
              Man best friend <br/> they say.❤️❤️
            </p>


             </div>
            
            </div>

            </>

    )
}


export default Home;
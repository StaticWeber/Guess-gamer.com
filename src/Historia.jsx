import { useEffect  } from 'react';
import pic1 from './assets/historia1.jpg';
import pic2 from './assets/historia2.jpg';
import pic3 from './assets/historia3.jpg';

import { Link } from 'react-router-dom'

function Historia(){
   
     useEffect(() => {
             setInterval(() => {
                window.alert('Discover historical knowledge on this page');
             }, 50000)
           
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
          }, []);

    return(
          <div id="historia-container">
         <h1 id="page-logo">Historia Page</h1>
          <div id="head-div">
            <nav className="nav-bar">
            <ul>

                <li id="home"><Link to="/">Home</Link></li>
                <li id="game"><Link to="/game">Game</Link></li>
                <li id="media"><Link to="/media">Media</Link></li>
            
            </ul>
            </nav>

            </div>

            <div id="main-div">
            
               <img src={pic1} className="images"></img>
                   <p>
                     Do you know Russia is the largest country in the world in terms of land mass?
                   </p>
            
                    <img src={pic2} className="images"></img>
                     <p>
                     Do you know America was colonized by britain?
                    </p>
            
                    <img src={pic3} className="images"></img>
                     <p>
                     Do you know Nigeria is home to the largest christain and muslim population in Africa?
                     </p>
            
            
                </div>
     </div>
    )
}



export default Historia;
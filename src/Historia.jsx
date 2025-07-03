import pic1 from './assets/historia1.jpg';
import pic2 from './assets/historia2.jpg';
import pic3 from './assets/historia3.jpg';

import { Link } from 'react-router-dom'

function Historia(){
    return(
     <div id="historia-container">
        <h1 id="page-logo">Historia Page</h1>
        <div id="head-div">
            <nav className="nav-bar">
            <ul>

                <li id="home"><Link to="/">Home</Link></li>
                <li id="game"><Link to="/game">Game</Link></li>
            
            </ul>
            </nav>
           <h3 id="page-welcome"><span id="first-span">Welcome </span><span id="second-span">user</span></h3>
            </div>

            <div id="main-div">
            
               <img src={pic1} className="images"></img>
                   <p>
                     Black is always beautiful ❤️❤️
                   </p>
            
                    <img src={pic2} className="images"></img>
                     <p>
                     Inner beauty radiates <br/> the outward ❤️❤️
                    </p>
            
                    <img src={pic3} className="images"></img>
                     <p>
                     Man best friend <br/> they say ❤️❤️
                     </p>
            
            
                </div>
     </div>
    )
}



export default Historia;
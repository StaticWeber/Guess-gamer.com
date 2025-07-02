import {Link} from 'react-router-dom'

function Home(){

    function Dev(){
        window.alert('Page is under developement')
      }
      
    return(
        <>
        <div id="home-container">

        <h1 id="logo">Home Page</h1>
            <nav className="nav-bar">

            <ul>
                <li id="game"><Link to="/game">Game</Link></li>
                <li id="media"><Link to="/media">Media</Link></li>
                <li id="historia" onClick={Dev}>Historia</li>
            </ul>
             
            </nav>

            <h2 id="home-welcome">Welcome To Home Page</h2>

            <p id="tips">Dear user, our home page is still undergoing developments,<br/>
               we urge you to navigate to other pages as we work on the home page. 
               <br/> Thanks for your understanding. <br/> <br/>

               Signed: H.F.M Technology.
            </p>
            </div>

            </>

    )
}


export default Home;
import video1 from './assets/media1.mp4';
import video2 from './assets/media2.mp4';
import video3 from './assets/media3.mp4';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function Media(){

useEffect(() => {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        const videos = document.getElementsByClassName('videos')

        for (const video of videos){
    video.addEventListener('click', () => {
        video.muted = false;
    })
}


for(const video of videos){
    video.addEventListener('play', () => {
        for(const otherVideo of videos){
            if(otherVideo !== video){
                otherVideo.pause()
            }
        }
    });
}
    }, []);

     

    return(
        <>
        
        <div id="media-container">
        <h1 id="page-logo">Media</h1>

       <nav className="nav-bar">

            <ul>
                <li id="home"><Link to="/">Home</Link></li>
                <li id="game"><Link to="/game">Game</Link></li>
                <li id="historia"><Link to="/historia">Historia</Link></li>
            </ul>
             
            </nav>

            <div id="video-container">
                <p id="comments">Happiness is free.❤️</p>
                <video src={video1} className='videos' controls></video>
                <p id="comments">How time flies, soon we'll be no more.😫</p>
                <video src={video2} className='videos' controls></video>
                <p id="comments">Make America great again.💯</p>
                <video src={video3} className='videos' controls></video>
            </div>
        </div>



       
       </>
    )
}


export default Media;





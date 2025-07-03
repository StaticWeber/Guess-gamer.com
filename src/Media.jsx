// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';


// function Media(){

    

//     function Dev(){
//         window.alert('Page is under developement')
//       }
      

//     return(
//         <>
        
//         <div id="media-container">
//         <h1 id="logo">Media</h1>

//        <nav className="nav-bar">

//             <ul>
//                 <li id="home"><Link to="/">Home</Link></li>
//                 <li id="game"><Link to="/game">Game</Link></li>
//                 <li id="history" onClick={Dev}>Historia</li>
//             </ul>
             
//             </nav>
//         </div>



       
//        </>
//     )
// }


// export default Media;





 //import video1 from './assets/wife.mp4';
// import video2 from './assets/trump.mp4';

// useEffect(() => {
//         document.body.style.backgroundColor = 'white';
//         const videos = document.getElementsByClassName('videos')

//         for (const video of videos){
//     video.addEventListener('click', () => {
//         video.muted = false;
//     })
// }


// for(const video of videos){
//     video.addEventListener('play', () => {
//         for(const otherVideo of videos){
//             if(otherVideo !== video){
//                 otherVideo.pause()
//             }
//         }
//     });
// }
//     }, []);
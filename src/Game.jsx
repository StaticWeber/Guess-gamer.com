import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
let countInt;


function Game(){
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState('');
  const [isdisabled, setIsdisabled] = useState(false);
  const [color, setColor] = useState('lime');
  const [displayComponent1, setDisplayComponent1] = useState('none');
  const [displayComponent2, setDisplayComponent2] = useState('none');
  const [displayComponent3, setDisplayComponent3] = useState('none');
  let [value, setValue] = useState(0);
  let [counter, setCounter] = useState(0);


  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }, []);

    useEffect(() => {

     let startup = setTimeout(() => {
        setDisplayComponent2('inline');
      }, 3000);
   
      setTimeout(() => {
        clearTimeout(startup)
        setDisplayComponent2('none')
      }, 9000);

      setTimeout(() => {
        setDisplayComponent3('grid')
      }, 10000);


    }, [])


   function startFunction(){


    setInterval(() => {
        setValue(value += 1);
      }, 1000);
      
     if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('red')
         }  else{

         if(value % 2 === 1){
         document.body.style.backgroundColor = ('black');
          
         
         } else if(value % 3 === 0){
           document.body.style.backgroundColor = ('green');

         } else if(value % 2 === 0){
           document.body.style.backgroundColor = ('yellow');

         } 

         }

         
   }
  function Anonymous(){

    countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 500);
  
        setScore(0);
        setIsdisabled(true)
        setColor('grey');

        setDisplayComponent1('flex')

        setTimeout(() => {
        setIsdisabled(false);
        setColor('lime');
        setDisplayComponent1('none')
      }, 48000);

  }

    


    function Redfunction(){

        if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('blue')
           setResponse('Bad guess👎')

         }  else{

         if(value % 2 === 1){
          document.body.style.backgroundColor = ('yellow');
          setResponse('Bad guess👎')
         
         } else if(value % 3 === 1){
           document.body.style.backgroundColor = ('red');
           setScore(score + 5);
           setResponse('Good guess👍');

         } else if(value % 2 === 0){
           document.body.style.backgroundColor = ('green');
           setResponse('Bad guess👎')

         } 

         }
         
}


    function Bluefunction(){

        if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('red')
           setResponse('Bad guess👎')

         }  else{

         if(value % 2 === 1){
          document.body.style.backgroundColor = ('blue');
           setScore(score + 5);
          setResponse('Good guess👍')
         
         } else if(value % 3 === 0){
           document.body.style.backgroundColor = ('green');
           setResponse('Bad guess👎');

         } else if(value % 2 === 0){
           document.body.style.backgroundColor = ('yellow');
           setResponse('Bad guess👎')

         } 

         }
         
}

    function Greenfunction(){

        if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('yellow')
           setResponse('Bad guess👎')

         }  else{

         if(value % 2 === 1){
          document.body.style.backgroundColor = ('red');
          setResponse('Bad guess👎')
         
         } else if(value % 3 === 0){
           document.body.style.backgroundColor = ('blue');
           setResponse('Bad guess👎')

         } else if(value % 2 === 0){
           document.body.style.backgroundColor = ('green');
            setScore(score + 5);
           setResponse('Good guess👍');

         } 

         }
         
}



    function Yellowfunction(){

        if(value >= 3 && value < 4  || value >= 13 && value < 14 || value >= 20 && value < 21){
           document.body.style.backgroundColor = ('green')
           setResponse('Bad guess👎')

         }  else{

         if(value % 2 === 0){
          document.body.style.backgroundColor = ('green');
          setResponse('Bad guess👎')
         
         } else if(value % 3 === 1){
           document.body.style.backgroundColor = ('yellow');
            setScore(score + 5);
            setResponse('Good guess👍')

         } else if(value % 2 === 1){
           document.body.style.backgroundColor = ('green');
           setResponse('Bad guess👎')

         } 

         }
         
}


      useEffect(() => {

        if(counter === 1){
           const rounder = document.getElementById('round-Id');
           rounder.textContent = 'Round one';

        } else if(counter === 30){
          const rounder = document.getElementById('round-Id');

          setTimeout(() => {
            rounder.textContent = 'Round two';
            
          }, 1000);

        } else if(counter === 60){
           const rounder = document.getElementById('round-Id');
           
          setTimeout(() => {
            rounder.textContent = 'Round three';
            
          }, 1000);

        } else if(counter === 90){
           const rounder = document.getElementById('round-Id');
           clearInterval(countInt);

           setTimeout(() => {
            document.body.style.backgroundColor = 'white';
            rounder.textContent = 'Round over';
            setCounter(0);
            setValue(0);
          }, 1000);

          
          
        }
      });


      useEffect(() => {
        const total = document.getElementById('total');
        if(counter === 90 && score < 50 ){
          setTimeout(() => {
           total.textContent = `Your score ${score}: Poor`;
          }, 2000)
           
        } else if(counter === 90 && score > 50 && score < 100){
          setTimeout(() => {
           total.textContent = `Your score ${score}: Good`;
          }, 2000)
           
        } else if(counter === 90 && score > 100){
          setTimeout(() => {
            total.textContent = `Your score ${score}: Excellent`;
          }, 2000)
        
        } else if(score === 0){
          total.textContent = '';
        }
      })



      function Dev(){
        window.alert('Page is under developement')
      }
      


    return(

      <>
      <div id="game-container">

      <div className="intro-container" style={{ display: displayComponent2 }}>
        <h2>Color Guessing Game 😍</h2>
        <h5>Game loading...</h5>
      </div>

        <div id="responsive-container" style={{ display: displayComponent3 }}>
            <h1 id="logo">Guess Game</h1>

            <nav className="nav-bar">

            <ul>
                <li id="home"><Link to="/">Home</Link></li>
                <li id="media"><Link to="/media">Media</Link></li>
                <li id="history" onClick={Dev}>Historia</li>
            </ul>
             
            </nav>

            <div id="output-container">
                <div className="box-container" style={{display: displayComponent1 }}>
                  <h4 id="guide">Quick guide:<br/>Guess the next color.
                  <br/> Avoid tapping one color box repeatedly.
                  <br/> If this site malfunctions please reload the page.
                  </h4>
                  <h4 className="box" id="red" onClick={Redfunction}></h4>
                  <h4 className="box" id="blue" onClick={Bluefunction}></h4>
                  <h4 className="box" id="green" onClick={Greenfunction}></h4>
                  <h4 className="box" id="yellow" onClick={Yellowfunction}></h4>
                  <h4 id="round-Id"></h4>
                  <h3 id="total"></h3>
                </div>
                <button style={{ backgroundColor: color, color: 'grey'}} disabled={isdisabled} onClick={() => {

                  startFunction();
                  Anonymous();
                  // handleDisable();
                  // handleColor();

                }} id="start-button">Start</button>
                <div id="info">
                  
                <p>Score:{score}</p>
                <p>{response}</p>
                <p>Counter:{counter}</p>

                </div>
                
            </div>
        </div>

        </div>

        </>
    )
}



export default Game;

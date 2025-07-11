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
  const [displayComponent4, setDisplayComponent4] = useState('none');
  const [displayComponent5, setDisplayComponent5] = useState('none');

  let [value, setValue] = useState(0);
  let [counter, setCounter] = useState(0);

  function userStatus(){
    if(localStorage.getItem('novice', 'user')){
       setTimeout(() => {
        //  window.alert('User status: Novice');
       }, 7000);
       
    } else if(localStorage.getItem('amature', 'friend')){
      setTimeout(() => {
        // windows.alert('User status: Amature')
      }, 7000);
      
    } else if(localStorage.getItem('master', 'lord')){
      setTimeout(() => {
        // windows.alert('User status: Master')
      }, 7000);

    } else{
      localStorage.setItem('novice', 'user');
      setTimeout(() => {
        //  window.alert('User status: Novice');
       }, 7000);
    }
     
  }

  userStatus();

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
        setDisplayComponent4('inline');
      }, 10000);

      setTimeout(() => {
        setDisplayComponent3('inline');
      }, 9000);


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

 
   function Easy(){
    localStorage.setItem('easy-key', 'Easy');
    setDisplayComponent5('inline');
    setDisplayComponent4('none');
    localStorage.removeItem('medium-key');
    localStorage.removeItem('hard-key');
   }

   function Medium(){
   localStorage.setItem('medium-key', 'Medium');
    setDisplayComponent5('inline');
    setDisplayComponent4('none');
    localStorage.removeItem('easy-key');
    localStorage.removeItem('hard-key');
   }

   function Hard(){
   localStorage.setItem('hard-key', 'Hard');
   setDisplayComponent5('inline');
   setDisplayComponent4('none');
   localStorage.removeItem('easy-key');
   localStorage.removeItem('medium-key');
  }

  function Anonymous(){

    if(localStorage.getItem('easy-key')){
       countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 1000);

         setDisplayComponent1('inline');
         setDisplayComponent3('none');
         setTimeout(() => {
         setIsdisabled(false);
         setColor('lime');
         setDisplayComponent1('none');
         setDisplayComponent3('inline');
         setDisplayComponent4('inline');
      }, 93000);

    } else if(localStorage.getItem('medium-key')){
         countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 600);

         setDisplayComponent1('inline');
         setDisplayComponent3('none');
        
        setTimeout(() => {
        setIsdisabled(false);
        setColor('lime');
        setDisplayComponent1('none');
        setDisplayComponent3('inline');
        setDisplayComponent4('inline');
      }, 57000);

    } else if(localStorage.getItem('hard-key')){
          countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 400);

         setDisplayComponent1('inline');
         setDisplayComponent3('none');

        setTimeout(() => {
        setIsdisabled(false);
        setColor('lime');
        setDisplayComponent1('none');
        setDisplayComponent3('inline');
        setDisplayComponent4('inline');
      }, 39000);

    } else{
      
       countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 1000);

         setDisplayComponent1('inline');
         setDisplayComponent3('none');

         setTimeout(() => {
         setIsdisabled(false);
         setColor('lime');
         setDisplayComponent1('none');
         setDisplayComponent3('inline');
         setDisplayComponent4('inline');
      }, 93000);
      
    }
      
        setScore(0);
        setIsdisabled(true)
        setColor('red');

        setDisplayComponent1('flex')

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
        if(counter === 90 && score < 120 ){
          localStorage.setItem('novice', 'user');
          localStorage.setItem('amature', 'friend');
          localStorage.removeItem('master', 'lord');
          setTimeout(() => {
           total.textContent = `Your score ${score}: Poor`;
          }, 2000)
           
        } else if(counter === 90 && score > 120 && score < 200){
          localStorage.removeItem('novice', 'user');
          localStorage.removeItem('master', 'lord');
          localStorage.setItem('amature', 'friend');

          setTimeout(() => {
           total.textContent = `Your score ${score}: Good`;
          }, 2000)
           
        } else if(counter === 90 && score > 200){
          localStorage.removeItem('novice', 'user');
          localStorage.removeItem('amature', 'friend');
          localStorage.setItem('master', 'lord');
          setTimeout(() => {
            total.textContent = `Your score ${score}: Excellent`;
          }, 2000)
        
        } else if(score === 0){
          total.textContent = '';
        }
      });


    return(

      <>
      <div id="game-container">

      <div id="level-container" style={{ display: displayComponent4 }}>

        <p id="easy-Id" className="levels" onClick={Easy}>Easy</p>
        <p id="medium-Id" className="levels" onClick={Medium}>Med..</p>
        <p id="hard-Id" className="levels" onClick={Hard}>Hard</p>
        

      </div>

        <div id="responsive-container" style={{ display: displayComponent3 }}>
            <h1 id="game-logo">Guess Game</h1>

            <nav className="nav-bar">

            <ul>
                <li id="home"><Link to="/">Home</Link></li>
                <li id="historia"><Link to="/historia">Historia</Link></li>
        
            </ul>
             
            </nav>

            </div>

            <div className="intro-container" style={{ display: displayComponent2 }}>
            <h2>Color Guessing Game 😍</h2>
            <h5>Game loading...</h5>
            </div>

            <div id="output-container">
                <div className="box-container" style={{ display: displayComponent1 }}>
                  <h4 id="guide">Quick guide:<br/>Guess the next color.
                  <br/> Avoid tapping one color box repeatedly.
                  <br/> How good can you guess? 😍
                  </h4>
                  <h4 className="box" id="red" onClick={Redfunction}></h4>
                  <h4 className="box" id="blue" onClick={Bluefunction}></h4>
                  <h4 className="box" id="green" onClick={Greenfunction}></h4>
                  <h4 className="box" id="yellow" onClick={Yellowfunction}></h4>
                  <h3 id="total"></h3>
                </div>

                </div>

                <div id="start-container" style={{ display: displayComponent5 }}>
                <button style={{ backgroundColor: color, color: 'black'}} disabled={isdisabled} onClick={() => {

                  startFunction();
                  Anonymous();
                  // handleDisable();
                  // handleColor();

                }} id="start-button">Start</button>
                <div id="info">
                 <h4 id="round-Id"></h4>
                <p>Score:{score}</p>
                <p>{response}</p>
                <p>Counter:{counter}</p>

                </div>

                </div>
                
        </div>

        </>
    )
}



export default Game;

import { useState, useEffect } from "react";
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


    function valueCount(){
      setInterval(() => {
        setValue(value += 1);
      }, 1000);
    }


    valueCount();


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

         countInt = setInterval(() =>{
            setCounter(counter += 1)
         }, 1000);
    
        //  setRound('Round one');
        setScore(0);
        setIsdisabled(true)
        setColor('grey');

        setDisplayComponent1('flex')

        setTimeout(() => {
        setIsdisabled(false);
        setColor('lime');
        setDisplayComponent1('none')
      }, 95000);

   
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
           setResponse('Bad guess 👎')

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
           setResponse('Bad guess 👎')

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
           rounder.textContent = 'Round one ';

        } else if(counter === 30){
          const rounder = document.getElementById('round-Id');

          setTimeout(() => {
            rounder.textContent = 'Round two ';
            
          }, 1000);

        } else if(counter === 60){
           const rounder = document.getElementById('round-Id');
           
          setTimeout(() => {
            rounder.textContent = 'Round three ';
            
          }, 1000);

        } else if(counter === 90){
           const rounder = document.getElementById('round-Id');
           clearInterval(countInt);

           setTimeout(() => {
            rounder.textContent = ' game over';
            setCounter(0);
            
          }, 3000);

          setValue(0);
          console.log(value)
           
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
      <div className="intro-container" style={{ display: displayComponent2 }}>
        <h2>Color Guessing Game 😍</h2>
        <h5>Game loading...</h5>
      </div>

        <header className="head" style={{ display: displayComponent3 }}>
            <h1 id="logo">Guess Game</h1>
            <h3></h3>

            <nav className="nav-bar">

            <ul>
                <li>Home</li>
                <li id="stats" onClick={Dev}>Statics</li>
                <li id="about" onClick={Dev}>About</li>
            </ul>
             
            </nav>

            <main>
                <div className="box-container" style={{display: displayComponent1 }}>
                  <h4 id="guide">Quick guide: <br/> Guess the next color.
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
                  // handleDisable();
                  // handleColor();

                }} id="start-button">Start</button>
                <p>Score:{score}</p>
                <p>{response}</p>
                <p>Counter:{counter}</p>
            </main>
        </header>

        </>
    )
}



export default Game;

import Home from "./Home";
import Game from "./Game";
import Historia from "./Historia";
import Media from "./Media";
import { HashRouter, Routes, Route} from 'react-router-dom'


function App(){

    return(
      <>

      <HashRouter>

        <Routes>
          
         <Route path="/" element={ <Home/>}/>
        <Route path="/game" element={ <Game/>}/>
       <Route path="/historia" element={<Historia/>}/>
       <Route path="/media" element={<Media/>}/>
       
        </Routes>

      </HashRouter>
      </>
      
    )
    
}


export default App;
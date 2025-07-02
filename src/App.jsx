import Game from "./Game";
import Media from "./Media";
import Home from "./Home";
import { HashRouter, Routes, Route} from 'react-router-dom'


function App(){

    return(
      <>

      <HashRouter>

        <Routes>
         <Route path="/" element={ <Home/>}/>
        <Route path="/game" element={ <Game/>}/>
       <Route path="/media" element={<Media/>}/>
       

        </Routes>

      </HashRouter>
      </>
      
    )
    
}


export default App;
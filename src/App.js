 
 
 
 
 
 import Todos from './page/Todos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upadate from './page/Upadate';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
   
      
      <Route path='/' element={<Todos />}/>
      
         
   
    <Route path='/update' element={<Upadate />}/>
   
   
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

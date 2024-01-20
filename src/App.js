 
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './style.css';
import Login from './Login';
import ProfilePage from './component/ProfilePage';

function App() {
     

     
       

  return (
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/> 
      <Route path='/Profile' element={<ProfilePage/>}/>
     </Routes>
     </BrowserRouter>
  

  );
}

export default App;

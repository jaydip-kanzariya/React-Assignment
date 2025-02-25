import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './home';
import Addstudentdata from './addstudentdata';
import Edit from './edit';
import View from './view';


function App() {
  return (
    <div className="App">
       <h1>react-crud-op</h1>

 <BrowserRouter>
 <Link className='btn btn-primary' to='/'>Home</Link>
 <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Addstudentdata/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/view/:id' element={<View/>}></Route>

     </Routes>
 
 </BrowserRouter>

 

       
    </div>
  );
}

export default App;


import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Books from './components/books';
import Users from './components/users';
import NewUser from './components/newUser';
import NewBook from './components/newBook';
import Nav from 'react-bootstrap/Nav';
import NavBar from './components/navbar';

function App() {
  return (
    <>

<NavBar />
    <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/User' element={<Users />} />
       <Route path='/Books' element={<Books />} />
       <Route path='/NewUser' element={<NewUser />} />
       <Route path='/NewBook' element={<NewBook />} />
    </Routes>
    </>
   
  );
}

export default App;

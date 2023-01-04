
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Books from './components/books';
import Users from './components/users';
import NewUser from './components/newUser';
import NewBook from './components/newBook';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <>

      <Nav className="justify-content-center" activeKey="/">
      <Nav.Item>
        <Nav.Link as={Link} to='/'>home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/NewUser' >New User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}to='/NewBook' >New Book</Nav.Link>
      </Nav.Item>
     
      </Nav>
    
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

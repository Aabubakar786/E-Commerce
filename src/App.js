import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProducts';
import ProductListing from './Components/ProductListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />} > 
        <Route path="/" element={<h1>hi here is component</h1>} />
        <Route path="/prod" element={<ProductListing />} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/update" element={<h1>hi here is update</h1>} />
        <Route path="/logout" element={<h1>hi here is logout</h1>} />
        <Route path="/profile" element={<h1>hi here is profile</h1>} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>hi here is component</h1>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/prod" element={<h1>hi here is Product page</h1>} />
        <Route path="/add" element={<h1>hi here is add compoenent</h1>} />
        <Route path="/update" element={<h1>hi here is update</h1>} />
        <Route path="/logout" element={<h1>hi here is logout</h1>} />
        <Route path="/profile" element={<h1>hi here is profile</h1>} />

      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

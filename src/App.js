import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Product';
import Industries from './Pages/Industries';
import Partner from './Pages/Partner';
import Career from './Pages/Career';
import Contact from './Pages/Contact';

function App() {
  return (
    <>

      {/* <Home /> */}
      {/* <About /> */}


      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/company' element={< About />}></Route>
        <Route exact path='/product' element={< Products />}></Route>
        <Route exact path='/industries' element={< Industries />}></Route>
        <Route exact path='/partner' element={< Partner />}></Route>
        <Route exact path='/career' element={< Career />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
      </Routes>

    </>

  );
}

export default App;

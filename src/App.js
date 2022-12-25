import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      {/* <Home /> */}
      {/* <About /> */}


      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/company' element={< About />}></Route>
      </Routes>

    </>

  );
}

export default App;

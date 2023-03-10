import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Main Pages/Home';
import About from './Pages/Main Pages/About';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Main Pages/Product';
import Industries from './Pages/Main Pages/Industries';
import Partner from './Pages/Main Pages/Partner';
import Career from './Pages/Main Pages/Career';
import Contact from './Pages/Main Pages/Contact';
import Professional from './Pages/Professional';
import Education from './Pages/Education';
import Support from './Pages/Support';
import Cloud from './Pages/Cloud';
import Purchase_management from './Pages/Purchase_management';
import Sales_manage from './Pages/Sales_manage';
import Inventory from './Pages/Inventory';
import Production from './Pages/Production';
import Financial from './Pages/Financial';
import Fixedassets from './Pages/Fixedassets';
import Automobile from './Pages/Automobile';
import POS from './Pages/POS';
import Fleet from './Pages/Fleet';
import Property from './Pages/Property';
import Service from './Pages/Service';
import Payroll from './Pages/Payroll';
import Portfolio from './Pages/Portfolio';

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
        <Route exact path='/professional_services' element={< Professional />}></Route>
        <Route exact path='/education_services' element={< Education />}></Route>
        <Route exact path='/support_services' element={< Support />}></Route>
        <Route exact path='/cloud_services' element={< Cloud />}></Route>
        <Route exact path='/purchase_management' element={< Purchase_management />}></Route>
        <Route exact path='/sales_management' element={< Sales_manage />}></Route>
        <Route exact path='/inventory_management' element={< Inventory />}></Route>
        <Route exact path='/production_management' element={< Production />}></Route>
        <Route exact path='/financial_management' element={< Financial />}></Route>
        <Route exact path='/fixed-assets_management' element={< Fixedassets />}></Route>
        <Route exact path='/automobile_management' element={< Automobile />}></Route>
        <Route exact path='/pos_system' element={< POS />}></Route>
        <Route exact path='/fleet_management' element={< Fleet />}></Route>
        <Route exact path='/property_management' element={< Property />}></Route>
        <Route exact path='/service_management' element={< Service />}></Route>
        <Route exact path='/payroll_management' element={< Payroll />}></Route>
        <Route exact path='/portfolio_management' element={< Portfolio />}></Route>
      </Routes>

    </>

  );
}

export default App;

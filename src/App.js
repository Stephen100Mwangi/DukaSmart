import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import { ShopContextProvider } from './context/shopcontext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
        {/* Navbar will always be seen hence put outside the Routes */}
        <Navbar></Navbar>
          <Routes>
          <Route path='/cart' element={<Cart></Cart>}/>
          <Route path='/' element={<Shop></Shop>}/>
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;

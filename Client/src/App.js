import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './components/mainPage/mainPage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ProductPage from './components/productPage/productPage';
import Product from './components/productPage/product';
import Checkout from './components/accountPage/checkout/checkout';
import OrderHistory from './components/accountPage/orderHistory/orderHistory';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /> <MainPage /> <Footer /> </>} />
          <Route path='/products' element={<><Header /> <ProductPage /> <Footer /> </>} />
          <Route path='/products/1' element={<><Header /> <Product /> <Footer /> </>} />
          <Route path='/account' element={<><Header /> <OrderHistory /> <Footer /> </>} />
          <Route path='/account/checkout' element={<><Header /> <Checkout /> <Footer /> </>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
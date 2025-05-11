import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import Trousers from './pages/Trousers';
import ProductDetail from './pages/ProductDetail';
import Tshirts from './pages/t-shirts'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    <Routes>
      <Route path='/t-shirts' element={< Tshirts/>} />
    </Routes>
    <Routes>
      <Route path='/trousers' element={<Trousers />} />
    </Routes>
    <Routes>
      <Route path='/product/detail' element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;

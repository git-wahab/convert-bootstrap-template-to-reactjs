import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    <Routes>
      <Route path='/category/men' element={<CategoryPage />} />
    </Routes>
    <Routes>
      <Route path='/category/women' element={<CategoryPage />} />
    </Routes>
    <Routes>
      <Route path='/category/kids' element={<CategoryPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;

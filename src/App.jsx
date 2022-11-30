import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsTable from './ProductsTable';
import AddNewTitle from './AddNewTitle';
import EditTitle from './EditTitle';
import PreFetch from './PreFetch';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductsTable />} />
        <Route path='/prefetch' element={<PreFetch />} />
        <Route path='/add' element={<AddNewTitle />} />
        <Route path='/edit' element={<EditTitle />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

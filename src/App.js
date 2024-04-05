import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewRecipies from './components/ViewRecipies';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ViewRecipies/>} />
      <Route path='/add' element={<AddRecipe/>} />
      <Route path='/search' element={<SearchRecipe/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

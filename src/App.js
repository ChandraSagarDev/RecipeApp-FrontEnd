import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewRecipies from './components/ViewRecipies';

function App() {
  return (
    <div>
    <AddRecipe />
    <SearchRecipe/>
    <ViewRecipies/>
    </div>
  );
}

export default App;

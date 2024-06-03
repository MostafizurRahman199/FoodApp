import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Navbar from './components/Navbar';

function App() {
const [foodData, setFoodData] = useState([]);
//here created because we can pass this fooddata to others components
  return (
    <div className="App">
      <Navbar></Navbar>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <FoodList foodData={foodData}></FoodList>
    </div>
  )
}

export default App

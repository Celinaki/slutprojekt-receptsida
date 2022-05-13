import React from 'react';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import SingleRecipe from './components/SingleRecipe'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import CategoryView from './components/CategoryView';

function App() {
  return (
  <Router>
  {/* <Navbar/> */}
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/recipe/:recipeId" element={<SingleRecipe/>} />
    <Route path="/category" element={<CategoryView/>} />
    <Route path="/category/:categoryTitle" element={<CategoryView/>} />
  </Routes>
  </Router>
  );
}


export default App;

import React from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Homepage from './components/Homepage'
import SingleRecipe from './components/SingleRecipe'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <SingleRecipe/> */}
      <Homepage/>
    </div>
  );
}

export default App;

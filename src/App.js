import './App.css';
import Navbar from './Components/Navbar';
import Fullpage from './Components/Fullpage';
import Dashboard from './Components/Dashboard';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div >
      <div>
        <Navbar />
      </div>
      <BrowserRouter>
      
        <Routes>
          <Route index element={<Fullpage />} />
          <Route path="/dashboard" element={<Dashboard />}>
               
              </Route>

        </Routes>
     
      </BrowserRouter>
 
    </div>

  );
}

export default App;

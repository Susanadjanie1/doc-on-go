import './App.css'

// function App() {

//   return (
//     <>
//       <h1 className='font-bold flex justify-center text-blue-300 items-center text-9xl'>DocOnGo</h1>
//       <p className='flex items-center justify-center p-3 font-semibold italic '>Your Pocket Doctor</p>
//     </>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='dashboard' element={<Dashboard/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;


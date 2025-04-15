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
import SelectRole from "./components/SelectRole";
import DocSignup from "./pages/DocSignup";
import PatientSignup from "./pages/PatientSignup";
import DocLogin from "./pages/DocLogin";
import PatientLogin from "./pages/PatientLogin";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/signup-doctor" element={<DocSignup />} />
        <Route path="/signup-patient" element={<PatientSignup />} />
        <Route path="/login-doctor" element={<DocLogin />} />
        <Route path="/login-patient" element={<PatientLogin />} />
        <Route path='dashboard' element={<Dashboard/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;








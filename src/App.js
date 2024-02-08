
import Home from "./componet/Home";
import Login from "./componet/Login";
import SignUp from "./componet/SignUp";
import Client from "./componet/Client";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Sign" element={<SignUp/>}/>

          <Route path="/Client" element={<Client/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

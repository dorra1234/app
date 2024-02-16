
import Home from "./componet/Home";
import Login from "./componet/Login";
import SignUp from "./componet/SignUp";
import Client from "./componet/Client";
import Clothes from "./componet/Clothes";
import Food from "./componet/Food";
import Blood from "./componet/Blood";
import Leisure from "./componet/Leisure";
import VotreComposant from './VotreComposant';
import LangueSelector from './LangueSelector';
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
          <Route path="/Clothes" element={<Clothes/>}/>
          <Route path="/Food" element={<Food/>}/>
          <Route path="/Blood" element={<Blood/>}/>
          <Route path="/Leisure" element={<Leisure/>}/>
          <LangueSelector />
          <VotreComposant />



        </Routes>
      </Router>

    </div>
  );
}

export default App;

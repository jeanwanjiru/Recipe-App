import "./App.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Home from "./Home";
import Description from "./Description";
import View from "./View";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../Search";
import Instructions from "./Instructions"

        
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" exact Component={Home} />
        <Route path="/LogIn" exact Component={LogIn} />
        <Route path="/SignUP" exact Component={SignUp} />
        <Route path="/Description" exact Component={Description} />
        <Route path="/View" exact Component={View} />
        <Route  path="/Search" exact Component={Search}/>
        <Route path="/Instructions" exact Component={Instructions}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

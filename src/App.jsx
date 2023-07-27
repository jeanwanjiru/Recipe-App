import "./App.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Instructions from "./Instructions"
import { fromJSON } from "postcss";

        
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" exact Component={Home} />
        <Route path="/LogIn" exact Component={LogIn} />
        <Route path="/SignUP" exact Component={SignUp} />
        <Route path="/:mealId" exact Component={<Instructions/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;

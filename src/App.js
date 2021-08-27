import Navbar from "./components/navbar";
import  {GlobalStyle } from "./components/GlobalStyle"
import {Switch,Route}from "react-router-dom"
import Home from "./pages/Home/index"
import Informations from "./pages/Informations/index"
import PageNotFound from "./pages/PageNotFound/index"
function App() {
  // const mood = true
  return (
    <div>
      <GlobalStyle/>
      <Navbar />
      <Switch>
        <Route exact path = "/"  component = {Home}/>
<Route path = "/Informations" component = {Informations}/>
<Route path = "/PageNotFound" component = {PageNotFound}
      </Switch>
    

    </div>
  );
}

export default App;

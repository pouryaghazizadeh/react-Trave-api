import Search from "./component/Search"
// import{Router} from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
     <Search/>
     {/* <Switch>
      <Route  exact path="/" component={Search} />

      </Switch> */}
     </Router>
    </div>
  );
}

export default App;

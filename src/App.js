import Search from "./component/Search"
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
     <Search/>
     </Router>
    </div>
  );
}

export default App;

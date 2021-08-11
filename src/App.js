import Head from "./component/Head"
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
     <Head/>
     </Router>
    </div>
  );
}

export default App;

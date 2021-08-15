
import Home from "./component/Home";
import Navbar from "./component/Navbar";
// import Head from "./componentssss/z/Head";
import {useDarkMood}from "./styles/useDarkMood"
function App() {
  const [theme,toggleTheme] = useDarkMood()

  return (
    <div className="App">
     {/* <Head/> */}
     <Navbar theme={theme} toggleTheme={toggleTheme}/>
        <Home />
      
    </div>
  );
}

export default App;

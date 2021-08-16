// import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import{ Navbar} from "./components/Navbar/Navbar";
// import  {GlobalStyles}  from "./styles/GlobalStyles";
// import { useDarkMood } from "./styles/useDarkMood";
// import { lightTheme, darkTheme} from "./styles/GlobalStyles"
function App() {
//   const [theme, toggleTheme] = useDarkMood();
// const themeMood = theme === "light"?lightTheme:darkTheme;

  return (
    // <ThemeProvider theme = {themeMood}>
      <div className="App">
        {/* <GlobalStyles/> */}
        <Navbar/>
        <Home />
      </div>
    //  </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { globalStyles } from "./styles/globalStyles";
import { useDarkMood } from "./styles/useDarkMood";
import { lightTheme, darkTheme} from "./styles/globalStyles"
function App() {
  const [theme, toggleTheme] = useDarkMood();
const themeMood = theme === "light"?lightTheme:darkTheme;

  return (
    <ThemeProvider theme = {themeMood}>
      <div className="App">
        <globalStyles/>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

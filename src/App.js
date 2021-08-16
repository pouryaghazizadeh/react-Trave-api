import Navbar from "./components/navbar";
function App() {
  const mood = true
  return (
    <div>
      <Navbar mood = {mood}/>

    </div>
  );
}

export default App;

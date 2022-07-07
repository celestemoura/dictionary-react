import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
          <Dictionary />
        <footer>Coded by Celeste</footer>
      </div>
    </div>
  );
}

export default App;

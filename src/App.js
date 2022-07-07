import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <Dictionary />
      </div>
      <footer>
        <a
          href="https://github.com/celestemoura/dictionary-react"
          target="_blank"
          rel="noreferrer"
          title="GitHub repository"
        >
          <i class="fa-brands fa-github github-icon"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;

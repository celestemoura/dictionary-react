import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultQuery="dictionary" />
        <footer>
          <a
            href="https://github.com/celestemoura/dictionary-react"
            target="_blank"
            rel="noreferrer"
            title="GitHub repository"
          >
            <i className="fa-brands fa-github github-icon"></i>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

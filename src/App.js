import logo from "./logo.svg";
import "./App.css";

import version from "../package.json";

function App() {
  console.log("process.env.REACT_APP_VERSION", version.version);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Autoupdater Demo v{version.version} </p>
      </header>
    </div>
  );
}

export default App;

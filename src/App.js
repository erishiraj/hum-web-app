import logo from "./logo.svg";
import "./App.css";

// Custom
import Autocomplete from "./components/AutoComplete";

function App() {
  return (
    <div>
      <h1 className="app-header">React Autocomplete Project</h1>
      <h2 className="app-description">Type your text and get your result</h2>
      <Autocomplete
        suggestions={[
          "Angular",
          "Blitzjs",
          "Gatsby",
          "Reactjs",
          "Vuejs",
          "Svelte",
          "Nextjs",
          "Node",
          "Express",
          "Sails",
          "Loopback",
          "React-router",
          "Redux",
          "Flux",
          "Yarn",
          "Npm",
        ]}
      />
    </div>
  );
}

export default App;

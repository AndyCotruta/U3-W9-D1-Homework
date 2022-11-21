import "./App.css";
import FirstComponent from "./components/FirstComponent";
import FirstClassComponent from "./components/FirstClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent buttonLabel="Click to shuffle" />
        <FirstClassComponent
          imageSource="https://picsum.photos/500/400"
          imageAlt="Eat Code Sleep Repeat"
        />
      </header>
    </div>
  );
}

export default App;

import "./App.css";

import ColorfulText from "./components/text/Text";
import Button from "./components/button/Button";
import Title from "./components/title/Title";

function App() {
  return (
    <div className="app">
      <Title>Colorful Texts</Title>

      <ColorfulText colorCode="purple" innertext="this is my first paragraph" />
      <ColorfulText colorCode="blue" innertext="this is my second paragraph" />

      <Button label="Baixar CV" />
    </div>
  );
}

export default App;

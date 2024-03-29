import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import themes from "./theme/themes";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (mode) => {
    setDarkMode(mode);
  };

  return (
    <ThemeProvider theme={darkMode ? themes["dark"] : themes["light"]}>
      <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <About />
      <Projects />
    </ThemeProvider>
  );
};

export default App;

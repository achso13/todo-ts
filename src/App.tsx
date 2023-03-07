import { useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/imprint" element={<Home />}></Route>
                <Route path="/privacy" element={<Home />}></Route>
              </Routes>
            </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

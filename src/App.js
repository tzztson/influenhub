import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/theme";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

import Main from "./page/main";
import NotFound from "./page/notfound";
import { useState } from "react";
import Creators from "./page/creators";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

import Main from "./page/main";
import NotFound from "./page/notfound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

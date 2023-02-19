import { Routes, Route } from "react-router-dom";

import NavBar from "./component/header/nav-bar/nav-bar.component";
import Home from "./route/home/home.route";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/newin" element={<NewIn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rtw" element={<Rtw />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/bridals" element={<Bridals />} />
        <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </div>
  );
};

export default App;

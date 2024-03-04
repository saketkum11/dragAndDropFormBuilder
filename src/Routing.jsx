import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default Routing;

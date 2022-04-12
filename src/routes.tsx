import { Routes, Route } from "react-router-dom";
import { Bell } from "./components/Bell";
import CardHover from "./components/CardHover";
import { DisplayCenter } from "./components/DisplayCenter";
import Home from "./pages/Home";
// import your route components too

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/bell"
        element={
          <DisplayCenter>
            <Bell />
          </DisplayCenter>
        }
      />
      <Route
        path="/card"
        element={
          <DisplayCenter>
            <CardHover />
          </DisplayCenter>
        }
      />
    </Routes>
  );
}
export { Router };

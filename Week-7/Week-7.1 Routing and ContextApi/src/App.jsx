import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Landing } from "./Components/Landing";
import { Dashboard } from "./Components/Dashboard";
import { PropDrilling } from "./Components/PropDrilling";
const LazyLoadedComponent = React.lazy(() =>
  import("./Components/LazyLoading")
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigateButtons />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/propDrilling" element={<PropDrilling />} />
          <Route
            path="/lazy"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedComponent />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const NavigateButtons = () => {
  const navigate = useNavigate();

  const handleNavigateLanding = () => {
    navigate("/");
  };

  const handleNavigateDashboard = () => {
    navigate("/dashboard");
  };

  const handlePropDrilling = () => {
    navigate("/propDrilling");
  };

  const handleLazyLoading = () => {
    navigate("/lazy");
  }
  return (
    <div>
      <button onClick={handleNavigateLanding}>Landing</button>
      <button onClick={handleNavigateDashboard}>Dashboard</button>
      <button onClick={handlePropDrilling}>Props Drilling</button>
      <button onClick={handleLazyLoading}>lazyLoading</button>
    </div>
  );
};
export default App;

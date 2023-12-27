// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
          <Alert alert={alert} mode={Mode} />
          <div className="container my-3">
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyse"
                  mode={Mode}
                />
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </div>
        </Routes>
      </BrowserRouter>

      {/* <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={Mode} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyse"
                  mode={Mode}
                />
              }
            ></Route>
          </Switch>
        </div>
      </Router> */}
    </>
  );
}

export default App;

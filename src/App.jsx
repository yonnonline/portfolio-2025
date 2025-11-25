import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Work from "./pages/Work";
import Component from "./pages/Component";
import Project from "./pages/Project";
import { ToastProvider } from "./components/ui/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/work" element={<Work />} />
            <Route path="/component" element={<Component />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;

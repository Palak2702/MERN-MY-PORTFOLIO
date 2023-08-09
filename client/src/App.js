import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project/Project";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/Admin/AdminPanel";
import Loader from "./components/Loader/Loader";
import Timeline from "./components/Admin/Timeline";
import Projects from "./components/Admin/Projects";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home timelines={user.timeline} skills={user.skills} />}
            />
            <Route
              path="/projects"
              element={<Project projects={user.projects} />}
            />
            <Route path="/about" element={<About about={user.about} />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />

            <Route
              path="/admin/project"
              element={isAuthenticated ? <Projects /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;

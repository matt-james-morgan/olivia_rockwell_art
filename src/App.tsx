import "./App.css";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  COLLAGE,
  DRAWINGS,
  ILLUSTRATION,
  OIL_PAINTINGS,
  SCREEN_PRINTS,
  WATERCOLOR_PAINTINGS,
} from "./lib/images";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/collage"
            element={
              <Gallery
                images={Object.entries(COLLAGE).map(([label, image]) => ({
                  label,
                  image: image as string,
                }))}
              />
            }
          />
          <Route
            path="/drawings"
            element={
              <Gallery
                images={Object.entries(DRAWINGS).map(([label, image]) => ({
                  label,
                  image: image as string,
                }))}
              />
            }
          />
          <Route
            path="/illustration"
            element={
              <Gallery
                images={Object.entries(ILLUSTRATION).map(([label, image]) => ({
                  label,
                  image: image as string,
                }))}
              />
            }
          />
          <Route
            path="/oil paintings"
            element={
              <Gallery
                images={Object.entries(OIL_PAINTINGS).map(([label, image]) => ({
                  label,
                  image: image as string,
                }))}
              />
            }
          />
          <Route
            path="/screen prints"
            element={
              <Gallery
                images={Object.entries(SCREEN_PRINTS).map(([label, image]) => ({
                  label,
                  image: image as string,
                }))}
              />
            }
          />
          <Route
            path="/watercolour paintings"
            element={
              <Gallery
                images={Object.entries(WATERCOLOR_PAINTINGS).map(
                  ([label, image]) => ({
                    label,
                    image: image as string,
                  })
                )}
              />
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Nav />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

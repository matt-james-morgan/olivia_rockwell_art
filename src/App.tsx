import "./App.css";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  COLLAGE,
  DRAWINGS,
  ILLUSTRATION,
  OIL_PAINTINGS,
  SCREEN_PRINTS,
  WATERCOLOR_PAINTINGS,
} from "./lib/images";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;

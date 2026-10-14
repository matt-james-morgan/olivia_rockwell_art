import "./App.css";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
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
import PageFade from "./components/PageFade";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const SITE_URL = "https://olivia-rockwell-art.vercel.app";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Olivia Rockwell | Fine Artist — Painting, Drawing & Portraiture",
    description:
      "Olivia Rockwell is a Canadian visual artist from Yellowknife, NWT, studying at NSCAD University. Browse her watercolours, oil paintings, drawings, collage, illustration and screen prints.",
  },
  "/collage": {
    title: "Collage | Olivia Rockwell Fine Art",
    description: "Collage works by Canadian artist Olivia Rockwell.",
  },
  "/drawings": {
    title: "Drawings | Olivia Rockwell Fine Art",
    description: "Drawings and portrait studies by Canadian artist Olivia Rockwell.",
  },
  "/illustration": {
    title: "Illustration | Olivia Rockwell Fine Art",
    description: "Illustration work by Canadian artist Olivia Rockwell.",
  },
  "/oil paintings": {
    title: "Oil Paintings | Olivia Rockwell Fine Art",
    description: "Oil paintings and portraiture by Canadian artist Olivia Rockwell.",
  },
  "/screen prints": {
    title: "Screen Prints | Olivia Rockwell Fine Art",
    description: "Screen prints by Canadian artist Olivia Rockwell.",
  },
  "/watercolour paintings": {
    title: "Watercolour Paintings | Olivia Rockwell Fine Art",
    description: "Watercolour paintings by Canadian artist Olivia Rockwell, including landscapes from Nova Scotia, Scotland and England.",
  },
  "/about": {
    title: "About | Olivia Rockwell Fine Art",
    description:
      "About Olivia Rockwell, a visual artist from Yellowknife, NWT studying at NSCAD University in Halifax, whose practice centres on portraiture.",
  },
};

const setMeta = (selector: string, attr: string, value: string) => {
  document.querySelector(selector)?.setAttribute(attr, value);
};

// Per-route title, description and canonical (index.html holds the defaults)
const PageMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = decodeURIComponent(pathname);
    const meta = PAGE_META[path] ?? PAGE_META["/"];
    const url = SITE_URL + encodeURI(path);
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", url);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // Keyed by path so every page starts hidden and fades in once its pictures are ready
    <PageFade key={location.pathname}>
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
        <Route path="/about" element={<About />} />
      </Routes>
    </PageFade>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageMeta />
      <Nav />
      <AnimatedRoutes />
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;

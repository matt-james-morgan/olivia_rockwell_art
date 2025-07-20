import { loadImages } from "./utils";

export const COLLAGE = loadImages(
  import.meta.glob("../assets/COLLAGE/*.jpeg", {
    eager: true,
    import: "default",
  })
);
export const DRAWINGS = loadImages(
  import.meta.glob("../assets/DRAWINGS/*.jpeg", {
    eager: true,
    import: "default",
  })
);
export const ILLUSTRATION = loadImages(
  import.meta.glob("../assets/illustration/*.jpeg", {
    eager: true,
    import: "default",
  })
);
export const SCREEN_PRINTS = loadImages(
  import.meta.glob("../assets/screen_prints/*.jpeg", {
    eager: true,
    import: "default",
  })
);
export const OIL_PAINTINGS = loadImages(
  import.meta.glob("../assets/oil_paintings/*.jpeg", {
    eager: true,
    import: "default",
  })
);
export const WATERCOLOR_PAINTINGS = loadImages(
  import.meta.glob("../assets/watercolour_paintings/*.jpeg", {
    eager: true,
    import: "default",
  })
);

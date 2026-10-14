import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { activateOnKey } from "@/lib/a11y";

type GalleryItem = {
  image: string;
  label: string;
};

type GalleryProps = {
  images: GalleryItem[];
};

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="flex justify-center flex-wrap">
      {images.map((section, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={activateOnKey}
              aria-label={`View ${section.label} larger`}
              className="flex flex-col items-center w-full py-5 sm:w-auto sm:p-8 max-w-sm cursor-pointer"
            >
              {/* Phones: the painting fills the width at its natural shape. Larger screens keep the tidy 300×200 grid. */}
              <img
                className="w-full h-auto max-h-[70svh] sm:w-[300px] sm:h-[200px] object-contain rounded shadow-md"
                src={section.image}
                alt={section.label}
                loading="lazy"
                decoding="async"
              />
              <h2 className="pt-3 sm:pt-4 text-lg font-semibold text-center">{section.label}</h2>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[94vw] sm:max-w-[90vw] max-h-[90svh] p-3 sm:p-6">
            <img
              className="max-w-full max-h-[80vh] object-contain rounded shadow-lg"
              src={section.image}
              alt={section.label}
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Gallery;

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
            <div className="flex flex-col items-center p-8 max-w-sm cursor-pointer">
              <img
                className="w-[300px] h-[200px] object-contain rounded shadow-md"
                src={section.image}
                alt={section.label}
              />
              <h2 className="pt-4 text-lg font-semibold">{section.label}</h2>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-6">
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

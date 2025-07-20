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
        <div key={index} className="flex flex-col items-center p-8 max-w-sm">
          <img
            className="w-[300px] h-[200px] object-cover rounded shadow-md"
            src={section.image}
            alt={section.label}
          />
          <h2 className="pt-4 text-lg font-semibold">{section.label}</h2>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { OIL_PAINTINGS } from "@/lib/images";

// Custom Instagram SVG icon for better branding consistency
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const About = () => {
  const handleInstagramClick = () => {
    // Add your Instagram URL here
    window.open(
      "https://instagram.com/olivia.rockwell.art",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-background py-16 px-6 rounded-[30px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-light text-foreground mb-6">
            About Olivia
          </h1>
          <div className="w-32 h-px bg-border mx-auto"></div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row gap-16 items-start">
          {/* Portrait Section */}
          <aside className="flex-shrink-0 xl:w-2/5">
            <div className="sticky top-8">
              <div className="relative">
                <img
                  src={OIL_PAINTINGS["Baroque Self Portrait, 2024"] as string}
                  alt="Olivia Rockwell Self Portrait - Baroque style oil painting, 2024"
                  className="w-full max-w-[500px] mx-auto object-contain rounded-lg shadow-lg"
                />
                <figcaption className="text-sm text-muted-foreground text-center mt-4 italic font-light">
                  Baroque Self Portrait, 2024
                </figcaption>
              </div>
            </div>
          </aside>

          {/* Bio Content */}
          <main className="flex-1 xl:w-3/5">
            <article className="bg-card rounded-xl shadow-soft p-10 lg:p-12">
              <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
                <p className="text-xl mb-8 font-light text-foreground/90 leading-relaxed">
                  Olivia Rockwell is a visual artist currently studying at Nova
                  Scotia College of Art and Design University. She has
                  participated in "Matrix" a group exhibition held at the Anna
                  Leonowens Gallery in Halifax, and has been NACC's Artist of
                  the Month in December 2025.
                </p>

                <p className="mb-8 text-foreground/80 leading-relaxed">
                  Her work spans multiple disciplines but focuses most on
                  painting and drawing. She enjoys playing with the
                  juxtaposition between realism and conceptuality in artwork—the
                  ebb and flow of thought and representation evokes her
                  interest. How colour, form, dimension, and other principles of
                  art can convey chaos to calm or sadness to serendipity
                  fascinates her creative process.
                </p>

                <p className="mb-8 text-foreground/80 leading-relaxed">
                  Olivia is interested in people and creatures, their emotions,
                  and how she can mimic the things she sees onto a page or
                  canvas. Her artistic practice is deeply rooted in observation
                  and emotional translation.
                </p>

                <p className="mb-8 text-foreground/80 leading-relaxed">
                  Growing up in Yellowknife, Canada, her childhood was filled
                  with multidisciplinary art, music, dance, and theatre that
                  fueled her appreciation and love of the arts. The freezing
                  cold days influenced her to stay indoors to draw or sing and
                  to be creative.
                </p>

                <p className="mb-12 text-foreground/80 leading-relaxed">
                  Later on, Olivia decided to focus on visual art as it was the
                  medium she felt she had barely scratched the surface of and
                  wanted to learn more about. However, she continues to find
                  spaces in her practice to incorporate music and drama. The
                  Northwest Territories also helped her appreciate the beauty
                  and absurdity of nature—from the ethereal northern lights to
                  the awkward ptarmigan.
                </p>

                {/* Connect Section */}
                <section className="border-t border-border pt-10">
                  <h2 className="text-2xl font-light text-foreground mb-8 text-center">
                    Connect
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button
                      variant="elegant"
                      size="sm"
                      asChild
                      className="group w-48 text-sm"
                    >
                      <a
                        href="https://www.nwtarts.com/search/artists/olivia-rockwell"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                        <p>NWT Artist</p>
                      </a>
                    </Button>

                    <Button
                      variant="subtle"
                      size="sm"
                      onClick={handleInstagramClick}
                      className="group w-48 text-sm"
                    >
                      <InstagramIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      <p>Instagram</p>
                    </Button>
                  </div>
                </section>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;

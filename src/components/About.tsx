import selfPortrait from "../assets/oil_paintings/Baroque Self Portrait, 2024.jpeg";
import { Button } from "./ui/button";

// Custom Instagram SVG icon
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-4">
            About Olivia
          </h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Portrait Section */}
          <div className="flex-shrink-0 lg:w-1/3">
            <div className="sticky top-8">
              <img
                src={selfPortrait}
                alt="Olivia Rockwell Self Portrait"
                className="w-full max-w-[400px] mx-auto object-contain rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 text-center mt-3 italic">
                Baroque Self Portrait, 2024
              </p>
            </div>
          </div>

          {/* Bio Content */}
          <div className="flex-1 lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-8 lg:p-10">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-light text-gray-800">
                  Olivia Rockwell is a visual artist currently studying at Nova
                  Scotia College of Art and Design University. She has
                  participated in "Matrix" a group exhibition held at the Anna
                  Leonowens Gallery in Halifax, and has been NACC's Artist of
                  the Month in December 2025.
                </p>

                <p className="mb-6">
                  Her work spans multiple disciplines but focuses most on
                  painting and drawing. She enjoys playing with the
                  juxtaposition between realism and conceptuality in artwork—the
                  ebb and flow of thought and representation evokes her
                  interest. How colour, form, dimension, and other principles of
                  art can convey chaos to calm or sadness to serendipity
                  fascinates her creative process.
                </p>

                <p className="mb-6">
                  Olivia is interested in people and creatures, their emotions,
                  and how she can mimic the things she sees onto a page or
                  canvas. Her artistic practice is deeply rooted in observation
                  and emotional translation.
                </p>

                <p className="mb-6">
                  Growing up in Yellowknife, Canada, her childhood was filled
                  with multidisciplinary art, music, dance, and theatre that
                  fueled her appreciation and love of the arts. The freezing
                  cold days influenced her to stay indoors to draw or sing and
                  to be creative.
                </p>

                <p className="mb-8">
                  Later on, Olivia decided to focus on visual art as it was the
                  medium she felt she had barely scratched the surface of and
                  wanted to learn more about. However, she continues to find
                  spaces in her practice to incorporate music and drama. The
                  Northwest Territories also helped her appreciate the beauty
                  and absurdity of nature—from the ethereal northern lights to
                  the awkward ptarmigan.
                </p>

                {/* Connect Section */}
                <div className="border-t pt-8">
                  <h2 className="text-6xl font-light text-gray-800 mb-6 text-center">
                    Connect
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="https://www.nwtarts.com/search/artists/olivia-rockwell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium"
                    >
                      View NWT Arts Profile
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <Button onClick={()-=>handleClick}>
                      <InstagramIcon className="w-5 h-5 mr-2" />
                      Instagram
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

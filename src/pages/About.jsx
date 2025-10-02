import { Helmet, HelmetProvider } from "react-helmet-async";
import aboutImg from "../assets/about-img.jpg";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import Navbar from "../components/Navbar";
import Benefits from "../components/Benefits";

export default function About() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>NM Photography | About</title>
        <meta
          name="description"
          content="Learn more about Sarah, the photographer behind the lens. Discover her journey, inspirations, and passion for photography."
        />
      </Helmet>
      <Navbar/>
        <main>
          <section>
            <div className="wrapper">
            <div className="flex flex-col md:flex-row lg:items-center gap-12 lg:pb-8 lg:gap-24">
              <div className="relative md:w-1/2 ">
                <img src={aboutImg} alt="NM about image"/>
                <div className="bg-slate-50 h-full w-full absolute top-4 left-4 lg:top-8 lg:left-8 z-[-1]"></div>
              </div>
              <div className="md:w-1/2">
                <div className="mb-8">
                  <h2 className="mb-4">Let's introduce myself</h2>
                  <p className="uppercase text-slate-500">
                    Professional Portrait & Landscape Photographer
                  </p>
                </div>
                <p className="mb-4">Welcome to my photography portfolio!</p>
                <p className="mb-4">
                  I'm Sarah Mitchell, a passionate photographer from Atlanta,
                  Georgia. My journey began during college when I discovered
                  photography through a friend's camera. What started as a hobby
                  quickly evolved into a deep passion for capturing life's most
                  precious moments. I find inspiration in the bustling city life
                  of Atlanta and the beautiful landscapes of the Southeast,
                  always seeking to tell compelling stories through my lens.
                </p>
                <p>
                  My work spans across various genres, from intimate wedding
                  portraits to breathtaking nature photography and urban street
                  scenes. Each photograph is carefully composed with an eye for
                  detail and emotion, aiming to create images that resonate with
                  viewers long after they've seen them. Through my photography, I
                  strive to capture not just what I see, but the feelings and
                  stories that make each moment unique and unforgettable.
                </p>
              </div>
            </div>
            </div>
          </section>
          <Benefits/>
          <Cta/>
        </main>
        <Footer />
    </HelmetProvider>
  );
}

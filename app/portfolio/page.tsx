import NavBar from "../components/NavBar";
import Buttons from "../components/Buttons";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="hero" aria-label="Introduction">
        <div className="hero-content">
          <h2>Artistic Work</h2>
          <p>
            Our background in art influences how we approach every project —
            with attention to detail, balance, and visual clarity. That creative
            foundation helps us design and build websites that are not only
            functional but visually thoughtful. We aim to bring a sense of craft
            to the digital space, where form and function work together
            seamlessly.
          </p>
          <Buttons />
        </div>
      </section>
      <section className="section1">
        <Gallery />
      </section>
      <Footer />
    </>
  );
}

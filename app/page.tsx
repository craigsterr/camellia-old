import NavBar from "./NavBar";
import Collapsable from "./Collapsable";
import Footer from "./Footer";
import Image from "next/image";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>camellia</title>
        {/* meta tags */}
      </Head>
      <NavBar />
      <main>
        <section className="hero" aria-label="Introduction">
          <div className="hero-content">
            <p>
              Opening statement that will <strong>attract users</strong> and
              establish <strong>brand personality</strong>.
            </p>
          </div>
        </section>

        <section className="section1" aria-labelledby="who-we-are">
          <div className="section1-content">
            <Image
              className="who-image"
              src="https://placehold.co/1000x600/cccccc/ffffff?text=I'm+GAY"
              alt="Coming soon"
              width={1000}
              height={600}
            />
            <div className="section1-text">
              <h2 id="who-we-are">Who are we?</h2>
              <p>
                Two gay professionals dedicated to delivering gay sex to men
                (and women). Incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea.
              </p>
            </div>
          </div>
        </section>

        <section className="section2" aria-label="Company mission">
          <div className="section2-content">
            <p>
              Our mission is to create meaningful digital experiences that
              resonate with users and foster long-term relationships.
            </p>
          </div>
        </section>

        <section className="section3" aria-labelledby="services">
          <div className="section3-content">
            <Collapsable />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

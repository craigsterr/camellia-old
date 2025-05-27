import NavBar from "./components/NavBar";
import Collapsable from "./components/Collapsable";
import Footer from "./components/Footer";
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
            <h3>
              Opening statement that will <strong>attract users</strong> and
              establish <strong>brand personality</strong>.
            </h3>
          </div>
        </section>

        <section className="section1" aria-labelledby="who-we-are">
          <div className="section1-content">
            <Image
              className="who-image"
              src="https://placehold.co/1000x600/cccccc/ffffff?text=Coming+soon"
              alt="Coming soon"
              width={1000}
              height={600}
            />
            <div className="section1-text">
              <h2 id="who-we-are">Who are we?</h2>
              <p>
                We&apos;re a <strong>two-person</strong> web development team
                with a mission: to build fast, elegant, and user-focused
                websites and applications. From <strong>startups</strong> to
                <strong> established brands</strong>, we help ideas come to life
                through clean code, beautiful design, and thoughtful
                collaboration.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="section2" aria-label="Company mission">
          <div className="section2-content">
            <h3>
              Our mission is to create meaningful
              <strong> digital experiences</strong> that{" "}
              <strong>resonate</strong> with users and foster long-term
              relationships.
            </h3>
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

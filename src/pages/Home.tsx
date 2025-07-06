import { Header } from "../components/layout/Header";
import { Hero } from "../components/layout/Hero";
import { Features } from "../components/layout/Features";
import { Stats } from "../components/layout/Stats";
import { Testimonials } from "../components/layout/Testimonials";
import { CTA } from "../components/layout/CTA";
import { Footer } from "../components/layout/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;

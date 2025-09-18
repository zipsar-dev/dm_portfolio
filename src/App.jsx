import React, { useEffect, useState } from "react";
import Navbar from "./Components/Common/Navbar.jsx";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Services from "./Sections/Services.jsx";
import Project from "./Sections/Project.jsx";
import Testimonial from "./Sections/Testimonial";
import Footer from "./Sections/Footer";
import Loading from "./Sections/Loading.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated initial load — replace with your actual data / fonts ready check etc.
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loading message="Loading" subtitle="Preparing your experience..." />;

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;

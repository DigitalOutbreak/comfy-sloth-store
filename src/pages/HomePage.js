import React from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components';
const HomePage = () => {
  return (
    <main>
      <section>
        <Hero />
        <FeaturedProducts />
        <Services />
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;

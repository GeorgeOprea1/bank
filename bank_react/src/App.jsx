import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Billing from "./components/Billing";
import Business from "./components/Business";

import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import Cta from "./components/CTA";

import Footer from "./components/Footer";

import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hid">
      <div className="flex justify-center items-center sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-start bg-primary">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="flex justify-center items-start bg-primary sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

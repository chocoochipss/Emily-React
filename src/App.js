import Clients from "./component/Clients";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Header from "./component/header";
import Hero from "./component/Hero";
import Pricing from "./component/Pricing";


const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>

  );
}

export default App;

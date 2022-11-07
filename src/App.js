import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Transactions from "./components/Transactions";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className=" gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Transactions />
      </div>
      <Services />

      <Footer />
    </div>
  );
}

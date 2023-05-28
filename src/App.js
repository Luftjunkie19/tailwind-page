import "./App.css";

import { BrowserRouter } from "react-router-dom";

import AutoBahnSection from "./components/AutobahnSection";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import IntoSection from "./components/IntoSection";
import Navbar from "./components/Navbar";
import PostSection from "./components/PostSection";
import QualitySection from "./components/QualitySection";
import ReversedPostSection from "./components/ReversedPostSection";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <IntoSection />
        <QualitySection />
        <AutoBahnSection />
        <Testimonials />
        <PostSection />
        <ReversedPostSection />
        <FormSection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Accreditation from "./pages/Accreditation";
import Membership from "./pages/Membership";
import Certifications from "./pages/Certifications";
import Directory from "./pages/Directory";
import KnowledgeHub from "./pages/KnowledgeHub";
import Awards from "./pages/Awards";
import VerifyCertificate from "./pages/VerifyCertificate";
import Contact from "./pages/Contact";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import { detailPages } from "./data/siteContent";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accreditation" element={<Accreditation />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/directory/approved-institutions" element={<Directory />} />
        <Route path="/directory/accredited-courses" element={<Directory />} />
        <Route path="/directory/global-member-directory" element={<Directory />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/enquiry" element={<Contact />} />
        <Route path="/contact/support" element={<Contact />} />
        {Object.entries(detailPages).map(([path, data]) => <Route key={path} path={path} element={<DetailPage data={data} />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

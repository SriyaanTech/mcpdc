import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToSection from "./components/ScrollToSection";
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
import NotFound from "./pages/NotFound";
import { mainNav } from "./data/siteContent";

// Keep previously published detail URLs working, but show their section on
// the consolidated parent page instead of rendering a separate detail page.
const legacySectionRoutes = mainNav.flatMap((item) =>
  (item.children || []).map(([, anchor]) => {
    const [parentPath, sectionId] = anchor.split("#");
    return { oldPath: `${parentPath}/${sectionId}`, anchor };
  })
);

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accreditation" element={<Accreditation />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/contact" element={<Contact />} />
        {legacySectionRoutes.map(({ oldPath, anchor }) => (
          <Route key={oldPath} path={oldPath} element={<Navigate to={anchor} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

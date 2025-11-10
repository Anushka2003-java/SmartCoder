import React from "react";
import "./App.css";  // ✅ Make sure this stays

import Navbar from "./components/Navbar";
import CanvasBg from "./components/CanvasBg";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import ExamsSection from "./components/ExamsSection";
import CreateQuizSection from "./components/CreateQuizSection";
import AiAssistant from "./components/AiAssistant"; // ✅ Correct component name
import AboutSection from "./components/AboutSection";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CanvasBg />
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <ExamsSection />
        <CreateQuizSection />
        <AiAssistant /> {/* ✅ Not AISection */}
        <AboutSection />
      </main>
      <Footer />
      <LoginModal />
    </>
  );
}

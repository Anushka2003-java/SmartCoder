import React from "react";
import Navbar from "./components/Navbar";
import CanvasBg from "./components/CanvasBg";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import ExamsSection from "./components/ExamsSection";
import CreateQuizSection from "./components/CreateQuizSection";
import AiAssistant from "./components/AiAssistant";
import AboutSection from "./components/AboutSection";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Background animation */}
      <CanvasBg />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <CoursesSection />
        <ExamsSection />
        <CreateQuizSection />
        <AiAssistant />
        <AboutSection />
      </main>

      {/* Footer and Login */}
      <Footer />
      <LoginModal />
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import Modal from '@/components/ui/Modal'
import ResumeViewer from '@/components/ResumeViewer'
import { getCalApi } from "@calcom/embed-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "lets-talk" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#0D0D0D" },
          dark: { "cal-brand": "#F2F2F2" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  useEffect(() => {
    if (resumeOpen) {
      document.body.classList.add('cursor-auto')
    } else {
      document.body.classList.remove('cursor-auto')
    }
  }, [resumeOpen])

  return (
  <div className="navbar absolute top-0 left-0 w-full z-50">
      {/* Top Bar */}
  <div className="flex justify-end z-50 right-2 fixed top-2 p-2 sm:p-3 items-center gap-2 sm:gap-3">
        {/* Show Resume Button */}
        <button
          onClick={() => setResumeOpen(true)}
          className="up-effect border border-black md:border-white rounded-full bg-white text-black px-4 sm:px-6 text-xs sm:text-sm h-9 sm:h-10 min-w-[80px] sm:min-w-[100px] cursor-pointer shadow-sm"
        >
          <span className="initial-signtext text-black">Resume</span>
          <span className="hover-signtext text-black">Resume</span>
        </button>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="w-fit text-nowrap group hover-effect hover:shadow-lg relative overflow-hidden border border-black rounded-full p-2 px-4 sm:px-5 text-xs sm:text-sm text-white bg-black transition-all duration-500 cursor-pointer"
        >
          <span className="relative z-10 transition-all duration-500">
            <span className="initial-text text-white">Menu</span>
            <span className="absolute inset-0 flex items-center justify-center hover-text text-black opacity-0">Menu</span>
          </span>
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0D0D0D] text-[#F2F2F2] transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 items-center">
          <h2 className="text-xl font-bold">MENU</h2>
          <nav className="flex flex-col gap-6 items-center w-full">
            <a href="#home" onClick={handleLinkClick} className="menu-link">
              <span>Home</span>
            </a>
            <a href="#mission" onClick={handleLinkClick} className="menu-link">
              <span>Mission</span>
            </a>
            <a href="#how-can-i-help" onClick={handleLinkClick} className="menu-link">
              <span>Timeline</span>
            </a>
            <a href="#projects" onClick={handleLinkClick} className="menu-link">
              <span>Projects</span>
            </a>
            <a href="#achievements" onClick={handleLinkClick} className="menu-link">
              <span>Achievements</span>
            </a>
            <a href="#skills" onClick={handleLinkClick} className="menu-link">
              <span>Skills</span>
            </a>
            
            <a
              href="#contact-section"
              onClick={handleLinkClick}
              className="menu-link"
            >
              <span>Contact</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Resume Modal */}
  <Modal open={resumeOpen} onClose={() => setResumeOpen(false)}>
        <ResumeViewer fileUrl="/Aug_resume.pdf" />
      </Modal>

  {/* Removed global smooth scroll; Lenis handles scrolling */}
    </div>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section
      const sections = ["home", "about", "experience", "projects", "services", "contact"];
      let current = "home";

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) current = sec;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
  ];

  return (
    <header
      className={`
        fixed top-4 left-0 right-0 z-50 flex justify-center
        transition-all duration-500
        ${isScrolled
          ? "backdrop-blur-2xl bg-white/80 shadow-lg border border-purple-200/30 rounded-2xl mx-auto w-[92%]"
          : "bg-transparent w-full"
        }
      `}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-medium tracking-wide group transition-all duration-300"
                  style={{
                    color: isActive ? '#9333ea' : '#4b5563'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      const target = e.currentTarget as HTMLElement;
                      target.style.color = '#c4b5fd';
                      target.style.fontWeight = '600';
                      target.style.fontSize = '0.9375rem';
                      const underline = target.querySelector('span');
                      if (underline) {
                        (underline as HTMLElement).style.width = '100%';
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      const target = e.currentTarget as HTMLElement;
                      target.style.color = '#4b5563';
                      target.style.fontWeight = '500';
                      target.style.fontSize = '';
                      const underline = target.querySelector('span');
                      if (underline) {
                        (underline as HTMLElement).style.width = '0%';
                      }
                    }
                  }}
                >
                  {item.label}

                  {/* ACTIVE UNDERLINE */}
                  <span
                    className="absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? '100%' : '0%',
                      background: isActive 
                        ? '#9333ea' 
                        : '#c4b5fd'
                    }}
                  ></span>
                </button>
              );
            })}
          </nav>

          {/* CONTACT BUTTON */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="
              rounded-full px-6 py-2 text-sm font-semibold text-white
              shadow-md hover:shadow-lg
              transition-all duration-300 hover:scale-105 active:scale-95
            "
            style={{
              background: '#A0522D',
              color: '#ffffff'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#CD853F';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(160, 82, 45, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#A0522D';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.background = '#8B4513';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.background = '#A0522D';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ArrowRight, Code2, Cloud, Zap, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import resumeFile from "@/assets/Java_full_stack_pavan_FullStack.2.0.docx";
import { LINKS } from "@/config/links";

const HomeSection = () => {
  // Resume download handler
  const handleResumeDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const link = document.createElement('a');
      link.href = resumeFile;
      link.download = 'Pavan_Kumar_Resume.docx';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab if download fails
      window.open(resumeFile, '_blank');
    }
  };

  return (
    <section 
      id="home" 
      style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 50%, #e0f2fe 100%)' }}
      className="relative w-full min-h-screen flex items-center pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 overflow-hidden"
    >
      {/* ⭐ Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-14 items-start lg:items-center max-w-7xl mx-auto">
          
          {/* LEFT CONTENT - TEXT SECTION */}
          <div className="order-2 lg:order-1 flex flex-col justify-center animate-fade-in w-full lg:pr-4">
            <div className="space-y-3 md:space-y-4 max-w-full">
              
              

              {/* HEADING */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight break-words">
                Hey, There{" "}
                <span className="text-purple-600">
                  I'm Pavan Kumar Vinjamuri
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl text-justify">
                A Java Full Stack Developer with <span className="font-bold text-purple-600">6+ years</span> of
                experience building scalable, secure, and cloud-native applications using{" "}
                <span className="font-semibold text-purple-600">Spring Boot</span>,{" "}
                <span className="font-semibold text-purple-600">React</span>, and{" "}
                <span className="font-semibold text-purple-600">AWS</span> across banking, healthcare, and automotive domains.
              </p>

              {/* SKILLS PREVIEW */}
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                <SkillPill 
                  pill="Java" 
                  icon={<Code2 className="h-4 w-4" />} 
                  delay="0s"
                />
                <SkillPill 
                  pill="Spring Boot" 
                  icon={<Code2 className="h-4 w-4" />} 
                  delay="0.05s"
                />
                <SkillPill 
                  pill="AngularJS" 
                  icon={<Code2 className="h-4 w-4" />} 
                  delay="0.1s"
                />
                <SkillPill 
                  pill="React" 
                  icon={<Zap className="h-4 w-4" />} 
                  delay="0.15s"
                />
                <SkillPill 
                  pill="AWS" 
                  icon={<Cloud className="h-4 w-4" />} 
                  delay="0.2s"
                />
                <SkillPill 
                  pill="Kubernetes" 
                  icon={<Cloud className="h-4 w-4" />} 
                  delay="0.25s"
                />
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Button 
                  className="group text-white rounded-full px-7 md:px-9 py-5 md:py-6 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  style={{
                    background: '#A0522D',
                    color: '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#CD853F';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(160, 82, 45, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#A0522D';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.boxShadow = '';
                  }}
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    projectsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Projects 
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  onClick={handleResumeDownload}
                  className="group rounded-full border-2 text-gray-800 px-7 md:px-9 py-5 md:py-6 text-sm md:text-base font-semibold bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'rgba(196, 181, 253, 0.6)',
                    color: '#4b5563'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(196, 181, 253, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.8)';
                    e.currentTarget.style.color = '#6b21a8';
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(196, 181, 253, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.6)';
                    e.currentTarget.style.color = '#4b5563';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <Download className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:animate-bounce" /> 
                  Resume
                </Button>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex gap-3 md:gap-4">
                <SocialIcon 
                  href={LINKS.githubProfile}
                  icon={<Github className="h-5 w-5" />}
                  label="GitHub"
                />
                <SocialIcon 
                  href={LINKS.linkedinProfile}
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - PROFILE IMAGE */}
          <div className="order-1 lg:order-2 relative flex justify-center items-start lg:items-center lg:justify-end animate-scale-in mb-8 lg:mb-0 w-full lg:pl-4">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] xl:max-w-[420px]">
              
              {/* PROFILE IMAGE CONTAINER */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-soft-lg w-full">
                <img 
                  src={profilePhoto} 
                  alt="Pavan Kumar - Full Stack Developer" 
                  className="w-full h-auto object-cover rounded-2xl md:rounded-3xl"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-200/10 to-transparent pointer-events-none rounded-2xl md:rounded-3xl"></div>
              </div>

              {/* FLOATING BADGE - TOP LEFT */}
              <FloatingBadge
                position="top-left"
                icon={<Code2 className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />}
                value="6+"
                label="Years Exp"
                delay="0s"
              />


              {/* TITLE BANNER */}
              <div 
                className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl md:rounded-2xl px-4 md:px-6 py-2 md:py-3 shadow-soft-lg border border-white/50 backdrop-blur-md z-10 hover:scale-105 transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(196, 181, 253, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.8)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(196, 181, 253, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-purple-600" />
                  <p className="text-xs md:text-sm lg:text-base font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent whitespace-nowrap">
                    FULL STACK DEVELOPER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default HomeSection;



interface SkillPillProps {
  pill: string;
  icon: React.ReactNode;
  delay?: string;
}

const SkillPill = ({ pill, icon, delay = "0s" }: SkillPillProps) => (
  <div 
    className="group flex items-center gap-2 glass rounded-full px-4 py-2.5 shadow-soft border border-white/50 backdrop-blur-md hover:scale-105 transition-all duration-300 animate-fade-in cursor-pointer"
    style={{ animationDelay: delay }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(196, 181, 253, 0.3)';
      e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.8)';
      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(196, 181, 253, 0.3)';
      const iconEl = e.currentTarget.querySelector('div');
      const textEl = e.currentTarget.querySelector('span');
      if (iconEl) iconEl.style.color = '#6b21a8';
      if (textEl) textEl.style.color = '#6b21a8';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = '';
      e.currentTarget.style.borderColor = '';
      e.currentTarget.style.boxShadow = '';
      const iconEl = e.currentTarget.querySelector('div');
      const textEl = e.currentTarget.querySelector('span');
      if (iconEl) iconEl.style.color = '';
      if (textEl) textEl.style.color = '';
    }}
  >
    <div className="text-purple-600 transition-colors">{icon}</div>
    <span className="text-sm font-semibold text-gray-700">{pill}</span>
  </div>
);

interface FloatingBadgeProps {
  position: "top-left" | "bottom-right";
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: string;
}

const FloatingBadge = ({ position, icon, value, label, delay = "0s" }: FloatingBadgeProps) => {
  const positionClasses = position === "top-left" 
    ? "top-2 -left-2 sm:top-3 sm:-left-3 md:top-4 md:-left-4 lg:top-6 lg:-left-6" 
    : "bottom-2 -right-2 sm:bottom-3 sm:-right-3 md:bottom-4 md:-right-4 lg:bottom-6 lg:-right-6";
  
  return (
      <div 
        className={`absolute ${positionClasses} glass rounded-xl md:rounded-2xl px-2.5 md:px-4 py-2 md:py-3 shadow-soft-lg border border-white/50 backdrop-blur-md hover:scale-105 transition-all duration-300 animate-float`}
        style={{ animationDelay: delay }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(196, 181, 253, 0.3)';
          e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.8)';
          e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(196, 181, 253, 0.3)';
          const valueEl = e.currentTarget.querySelector('p:first-of-type') as HTMLElement;
          const labelEl = e.currentTarget.querySelector('p:last-of-type') as HTMLElement;
          if (valueEl) valueEl.style.color = '#6b21a8';
          if (labelEl) labelEl.style.color = '#6b21a8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '';
          e.currentTarget.style.borderColor = '';
          e.currentTarget.style.boxShadow = '';
          const valueEl = e.currentTarget.querySelector('p:first-of-type') as HTMLElement;
          const labelEl = e.currentTarget.querySelector('p:last-of-type') as HTMLElement;
          if (valueEl) valueEl.style.color = '';
          if (labelEl) labelEl.style.color = '';
        }}
      >
        <div className="flex items-center gap-1.5 md:gap-2.5">
          {icon}
          <div>
            <p className="text-xs md:text-sm font-bold text-purple-700">{value}</p>
            <p className="text-[9px] md:text-[10px] text-gray-600 font-medium">{label}</p>
          </div>
        </div>
      </div>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon = ({ href, icon, label }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3.5 glass rounded-xl shadow-soft border border-white/50 backdrop-blur-md hover:scale-110 transition-all duration-300 text-gray-700"
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(196, 181, 253, 0.3)';
      e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.8)';
      e.currentTarget.style.color = '#6b21a8';
      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(196, 181, 253, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = '';
      e.currentTarget.style.borderColor = '';
      e.currentTarget.style.color = '#374151';
      e.currentTarget.style.boxShadow = '';
    }}
  >
    {icon}
  </a>
);

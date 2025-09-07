import type { FC } from 'react';
import { Linkedin } from 'lucide-react';

const DribbbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble">
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-2.61 1.9-5.85 3.06-9.15 3.55" />
    <path d="M5.56 21.71C4.3 18.26 6.74 14.74 10.14 11.4" />
  </svg>
);

const BehanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-behance">
        <path d="M4 8.5h5.5" />
        <path d="M4 12h5.5" />
        <path d="M14.5 8.5h5" />
        <path d="M14.5 12h5" />
        <path d="M4 15.5h5.5" />
        <path d="M14.5 15.5h5" />
        <path d="M4 4h16v16H4z" />
        <path d="M9.5 4v16" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.407l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.931L18.901 1.153zM16.91 20.95h2.136L5.043 3.03H2.82l14.09 17.92z" />
    </svg>
);

const Footer: FC = () => {
  return (
    <footer className="bg-foreground text-background py-8 font-body">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/fuyaramchavda/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={28} /></a>
          <a href="https://www.behance.net/fuyaram" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="hover:text-primary transition-colors"><BehanceIcon /></a>
          <a href="https://dribbble.com/CHAVDA365" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="hover:text-primary transition-colors"><DribbbleIcon /></a>
          <a href="https://x.com/finsh365" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-primary transition-colors"><XIcon /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Fuya. All Rights Reserved.</p>
        <p>Built with purpose and make for show case digital magic</p>
      </div>
    </footer>
  );
};

export default Footer;

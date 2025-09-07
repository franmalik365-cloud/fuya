import type { FC } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-foreground text-background py-8 font-body">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={28} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={28} /></a>
          <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github size={28} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Fuya. All Rights Reserved.</p>
        <p>Built with purpose and a touch of AI magic.</p>
      </div>
    </footer>
  );
};

export default Footer;

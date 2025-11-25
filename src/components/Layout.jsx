import { Link } from "react-router-dom";
import { useState } from "react";
import ContactModal from "./modals/ContactModal";

function Layout({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full text-sm px-3 py-5 Z-50">
        <nav className="bg-secondary flex justify-between items-center w-full px-6 py-2 rounded">
          <strong>
            <Link to="/">Youngwon Kwon</Link>
          </strong>
          <ul className="flex gap-x-2">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skill">Skill</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/component">Component</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
          </ul>
          <div>
            <button onClick={() => setIsContactOpen(true)}>Contact</button>
          </div>
        </nav>
      </header>
      <main className="h-screen pt-16">{children}</main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default Layout;

import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white fixed top-0 left-0 w-full z-50">
        <nav className="flex justify-between items-center py-2 px-4">
          <h1 className="hidden"></h1>
          <div>
            <Link to="/">Home</Link>
          </div>
          <ul className="flex gap-x-2">
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/skill" className="hover:text-blue-500">
                Skill
              </Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-blue-500">
                Work
              </Link>
            </li>
            <li>
              <Link to="/component" className="hover:text-blue-500">
                Component
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-blue-500">
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 mt-20">{children}</main>
    </div>
  );
}

export default Layout;

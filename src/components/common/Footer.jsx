import { Facebook, Twitter, Instagram, Linkedin, Send, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Footer() {
  return (
    <footer
      className="text-white py-12 px-6 font-sans"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[var(--color-primary-alt)] rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded transform rotate-45"></div>
              </div>
              <span className="font-bold text-xl text-to-dark">SEAC</span>            </div>
            <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
              Lorem ipsum dolor sit amet conse ctetur adipiscing elit amet conse
              ctetur adipiscing elit elit tellus elit tellus luctus nec ullam.
            </p>
          </div>

          <div>
            <h5
              className="text-sm font-semibold mb-4"
              style={{ color: "var(--color-primary-alt)" }}
            >
              Quick Link
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                >
                  Project's
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5
              className="text-sm font-semibold mb-4"
              style={{ color: "var(--color-primary-alt)" }}
            >
              Links
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/team"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/404"
                  className="text-[var(--color-text-light)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                >
                  404 Page
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5
              className="text-sm font-semibold mb-4"
              style={{ color: "var(--color-primary-alt)" }}
            >
              Contact info
            </h5>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-[var(--color-text-light)] text-sm">
                <Phone className="w-4 h-4 mr-2" style={{ color: "var(--color-primary-alt)" }} />
                <div>
                  +234 803 954 1382 <br />
                  +234 803 954 1382
                </div>
              </div>
              <div className="flex items-center text-[var(--color-text-light)] text-xs">
                <Mail className="w-4 h-4 mr-2" style={{ color: "var(--color-primary-alt)" }} />
                <span>samlorig@email.com</span>
              </div>
              <div className="flex items-start text-[var(--color-text-light)] text-xs">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" style={{ color: "var(--color-primary-alt)" }} />
                <span> Central Business District, Abuja</span>
              </div>
            </div>

            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-primary-alt)" }}
            >
              Newsletter
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email address"
                className="flex-1 px-4 py-2 rounded-l-full bg-white text-[var(--color-text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
              />
              <Button className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] px-4 py-2 rounded-r-full transition-colors">
                <Send className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8 mb-8">
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-10 h-10 bg-[var(--color-text)] hover:bg-[var(--color-secondary)] rounded-full flex items-center justify-center transition-colors"
            >
              <Facebook className="w-5 h-5 text-[var(--color-secondary)]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[var(--color-text)] hover:bg-[var(--color-secondary)] rounded-full flex items-center justify-center transition-colors"
            >
              <Twitter className="w-5 h-5 text-[var(--color-secondary)]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[var(--color-text)] text-[var(--color-primary-alt)] hover:bg-[var(--color-secondary)] hover:text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5 text-[var(--color-secondary)]" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[var(--color-text)] hover:bg-[var(--color-secondary)] rounded-full flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5 text-[var(--color-secondary)]" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[var(--color-text)] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-text-light)]">
            <p>© Templateorbit.com</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link
                to="/privacy-policy"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                to="/terms"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
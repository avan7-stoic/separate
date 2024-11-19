import React from 'react'

const links = [
  { name: "Home", path: "/" },
  { name: "Charities", path: "/charities" },
  // { name: "Our Impact", path: "#our-mission-and-impact" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          <div>
            <h3 className="text-lg font-semibold uppercase mb-4 text-pink-400">Find us on:</h3>
            <ul className="space-y-2">
              {["Facebook", "Twitter(X)", "Instagram", "LinkedIn"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-pink-300 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4 text-pink-400">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="hover:text-pink-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4 text-pink-400">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>
                Nairobi, Kenya
              </li>
              <li>
                <i className="fas fa-phone-alt mr-2"></i>
                +254 712 345 678
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i>
                info@tuinuewasichana.org
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Social Media */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {[
              { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
              { name: "Twitter", icon: "fab fa-twitter", url: "#" },
              {
                name: "Instagram", icon: "fab fa-instagram", url: ""
              },
              { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-lg hover:text-pink-300 transition duration-300"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4 text-pink-400">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full md:w-auto rounded-lg text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8 text-gray-500">
          &copy; 2024 Tuinue Wasichana. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer




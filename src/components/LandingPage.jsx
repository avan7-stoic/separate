import React from "react";
import "/src/output.css";
import "/src/index.css";
import { Link } from 'react-router-dom';

const LandingPage = () => {

  const links = [
    { name: "Home", path: "/" },
    { name: "Charities", path: "/charities" },
    { name: "Our Impact", path: "/our-impact" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="text-[#333] flex justify-center items-center min-h-screen text-center overflow-x-hidden">
      {/* Landing Page*/}
      <div className="landing-page w-full max-w-7xl mx-auto flex flex-col items-center bg-cover bg-fixed rounded-lg shadow-lg p-5">
        {/* /* Navigation */}
        <nav className="landing-nav fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-[#2b2829] to-[#3c393a] text-white p-4 flex justify-between items-center shadow-md z-50">
          <img src="src/assets/logo.jpg" alt="Tuinue Wasichana logo" id="tuinue-logo" className="w-12 h-12" />
          <div className="logo text-2xl font-bold tracking-wide text-[#ec6083]">
            Tuinue Wasichana
          </div>
          <ul className="nav-links hidden md:flex space-x-6">
            {links.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-[#d08cc4] transition duration-300 transform hover:scale-110"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="auth-buttons flex items-center space-x-4">
            <button className="bg-[#6a5b62] text-white py-2 px-4 rounded-lg hover:bg-[#955786] transition duration-300">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-[#ec6083] to-[#d85b8c] text-white py-2 px-4 rounded-lg transform hover:scale-110 transition duration-300">
              <a href="#">Register</a>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section w-full h-[calc(100vh-60px)] flex justify-center items-center background: radial-gradient(circle at 7.5% 24%, rgb(237, 161, 193) 0%, rgb(250, 178, 172) 25.5%, rgb(190, 228, 210) 62.3%, rgb(215, 248, 247) 93.8%); bg-cover bg-center">
          <div className="hero-content max-w-lg text-center text-[#333] backdrop-blur-lg p-6 bg-white/80 rounded-lg shadow-xl animate-fade-in">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 text-[#ec6083]">
              Empower Girls Through Menstrual Hygiene Support
            </h1>
            <p className="text-lg mb-6 leading-relaxed">
              Your donation provides menstrual hygiene products and sanitation facilities to school-going girls in Sub-Saharan countries.
            </p>
            <div className="hero-buttons flex justify-center space-x-4">
              {["Donate now", "Learn More"].map((btn) => (
                <a
                  key={btn}
                  href="#"
                  className={`bg-gradient-to-r from-[#ec6083] to-[#946789] text-white py-2 px-6 rounded-full text-lg transition duration-300 transform hover:scale-110 ${btn === "Learn More" ? "hover:bg-gradient-to-r hover:from-[#6a5b62] hover:to-[#d85b8c]" : ""
                    }`}
                >
                  {btn}
                </a>
              ))}
            </div>
          </div>
          {/* Image side by side // could also be a carousel */}
          <div className="hero-image hidden md:block md:w-1/2 pl-8">
            <img src="src/assets/phase5 pic.jpg" alt="Welcome Image" id="landing-page-image" />
          </div>
        </section>



        <section className="impact-section bg-white py-16 px-8 rounded-lg shadow-lg mt-12">
          <div className="bg-purple-50 py-8 px-4 text-center">
            <h2 className="text-3xl font-bold text-purple-800">About Tuinue Wasichana</h2>
            <p className="max-w-xl mx-auto mt-4 text-gray-700 leading-relaxed">
              At <strong>Tuinue Wasichana</strong>, we are on a mission to make a
              difference, one girl at a time. Our commitment is simple yet powerful:
              to eliminate period poverty and provide comprehensive menstrual health
              and hygiene education to young girls in Kenya and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <img
                src="src/assets/group-of-happy-african-children-orphanage-in-nairobi-kenya-east-africa.jpg"
                alt="Women and girls smiling"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img
                src="src/assets/nairobi-kenya-school-students-respond-to-a-speech-made-bypresident-mwai-kibaki-who-attends-his.jpg"
                alt="Group of young women"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img
                src="src/assets/northern-kenya-february-16-2018-260nw-2346702077.jpg"
                alt="Menstrual products on a table"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img
                src="src/assets/keeping-girls-in-school.jpg"
                alt="Girl studying in a library"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="bg-pink-50 py-12 px-6">
            {/* Our Mission Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-pink-700">Our Mission</h2>
              <div className="mt-2 h-1 w-20 bg-pink-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-bold text-pink-700 mb-4">
                  Educating on Menstrual Health
                </h3>
                <p className="text-gray-700">
                  We understand that knowledge is power. That’s why we go beyond
                  distributing pads. We provide comprehensive menstrual health and
                  hygiene education, empowering girls with the knowledge they need to
                  manage their periods safely and confidently.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-bold text-pink-700 mb-4">
                  Ending Period Poverty
                </h3>
                <p className="text-gray-700">
                  We are dedicated to ensuring that no girl in Kenya has to miss
                  school, compromise her health, or face shame due to the lack of
                  access to sanitary pads. Through our initiatives, we provide free
                  sanitary pads to girls in primary schools.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-bold text-pink-700 mb-4">
                  Fostering Empowerment
                </h3>
                <p className="text-gray-700">
                  We believe that when you empower a girl, you empower a community. By
                  equipping girls with the tools and knowledge they need, we are
                  building a generation of confident, healthy, and educated young
                  women who can create a brighter future for themselves and their
                  communities.
                </p>
              </div>
            </div>

            {/* Our Impact Section */}
            <div className="text-center mt-16">
              <h2 className="text-4xl font-bold text-pink-700">Our Impact</h2>
              <div className="mt-2 h-1 w-20 bg-pink-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-pink-700">Over 2400</h3>
                <p className="text-gray-700 mt-2">Pads Distributed</p>
                <p className="text-gray-500 mt-2">
                  We have distributed thousands of sanitary pads to girls in need,
                  ensuring they have the resources to manage their periods
                  comfortably.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-pink-700">24</h3>
                <p className="text-gray-700 mt-2">Schools Reached</p>
                <p className="text-gray-500 mt-2">
                  Our programs have reached numerous primary schools across Kenya,
                  spreading awareness about menstrual health and hygiene.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-pink-700">738</h3>
                <p className="text-gray-700 mt-2">Empowered Girls</p>
                <p className="text-gray-500 mt-2">
                  Through our educational initiatives, we’ve empowered countless girls
                  with knowledge, helping them break free from the constraints of
                  period poverty and menstrual stigma.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="bg-white py-12 px-6 relative flex flex-col md:flex-row items-center md:justify-between">
          {/* Left Content */}
          <div className="md:max-w-lg text-center md:text-left">
            <h1 className="text-4xl font-bold text-purple-800 leading-snug">
              Empowering Girls, One Pad at a Time!
            </h1>
            <p className="mt-4 text-gray-600">
              Join us in the fight against period poverty and help educate girls on
              menstrual health and hygiene.
            </p>
            <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
              <button className="bg-purple-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-purple-700">
                Donate Now
              </button>
              <div className="text-center">
                <span className="text-4xl font-bold text-purple-800">$ 6,000,000</span>
                <p className="text-gray-600">Donated</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-8 md:mt-0 md:max-w-md relative">
            <div className="relative">
              <img
                src="src/assets/Kenyan-girls.png"
                alt="Kenya map showing girls"
                className="rounded-lg shadow-lg"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-transparent to-white rounded-lg"></div> */}
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}

      </div>
    </div>
  );
};

export default LandingPage;

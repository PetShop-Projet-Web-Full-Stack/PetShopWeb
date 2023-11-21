import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { to: "/", name: "Accueil" },
    { to: "/animals", name: "Nos animaux" },
    { to: "/animaleries", name: "Les animaleries" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Contactez-nous</h2>
          <p className="text-md">Email : pet-shop@gmail.com</p>
          <p className="text-md">Téléphone : +33 0 00 00 00 00</p>
        </div>

        <div className="text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-2">Visitez notre site</h2>
          <nav>
            <ul className="text-md">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-white hover:text-blue-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
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
              <li>
                <Link to="/" className="text-white hover:text-blue-500">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/animals" className="text-white hover:text-blue-500">
                  Nos animaux
                </Link>
              </li>
              <li>
                <Link
                  to="/animaleries"
                  className="text-white hover:text-blue-500"
                >
                  Les animalerie
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <p className="text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} Pet shop
      </p>
    </footer>
  );
};

export default Footer;

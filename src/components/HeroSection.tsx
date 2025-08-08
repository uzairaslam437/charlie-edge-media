import React from "react";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Text Section - Left Half */}
      <div className="w-1/2 font-montserrat px-8 lg:px-16 py-12 z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Supporting <span className="text-blue-600">Aerospace, Defence &</span>{" "}
          Security
        </h1>

        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          We are a specialist communications consultancy for the defence,
          aerospace, and security sectors.
        </p>

        <br />

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          CMS Strategic provides proven expert counsel in public, political and
          media relations, business development and reputation management.
          Working closely with our clients, offering tailored solutions to help
          our customers' businesses stand out.
        </p>

        <button className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-yellow-400 hover:to-orange-400 text-white font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
          <span>Learn More</span>
          <MoveRight
            size={20}
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Image Section - Right Half with Curved Clip */}
      <div className="w-1/2 h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('aircraft.jpg')",
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }}
        >
        </div>
      </div>
    </div>
  );
}
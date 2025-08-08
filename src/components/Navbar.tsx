import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
      {/* Logo Section - Left */}
      <div className="flex items-center">
        <img 
          src="cem-logo.png" 
          alt="Logo" 
          className="h-8 w-auto"
        />
      </div>

      {/* Navigation Menu - Center */}
      <div className="flex-1 flex justify-center">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex items-center space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 font-montserrat">
                <Link to="/home">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 font-poppins">
                <Link to="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 font-poppins">
                <Link to="/services">Market Sectors</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 font-poppins">
                <Link to="/docs">News</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center gap-1 font-poppins">
                What we do
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="grid w-[200px] gap-2 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="#" 
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 font-poppins"
                      >
                        Components
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="#" 
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 font-poppins"
                      >
                        Documentation
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="#" 
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 font-poppins"
                      >
                        Blocks
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 font-poppins">
                <Link to="/docs">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTA Button - Right */}
      <div className="flex items-center">
        <Link 
          to="/get-started" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md font-poppins"
        >
          Twitter
        </Link>
      </div>
    </nav>
  );
}
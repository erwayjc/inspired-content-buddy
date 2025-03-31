
import React from "react";
import { Wand2, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Marketing Guides", href: "#" },
        { name: "API Documentation", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { name: "Twitter", icon: <Twitter className="h-4 w-4" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="h-4 w-4" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-4 w-4" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-4 w-4" />, href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white to-gray-50"></div>
      
      {/* Main footer section */}
      <div className="pt-20 pb-10 bg-gradient-to-b from-gray-50 to-gray-900 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-70"></div>
                  <div className="relative bg-white rounded-full p-1.5">
                    <Wand2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <span className="text-xl font-bold ml-3 text-white">Inspired</span>
              </div>
              <p className="text-gray-300 mb-8 max-w-md">
                AI-powered content creation that helps marketers save time and 
                drive better results with proven winning strategies.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-base font-semibold text-white mb-6">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Inspired. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

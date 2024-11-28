import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";

const Footer = () => {
  return (
    <div className="main bg-black w-full py-8">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="one flex flex-col gap-4">
            <div className="logo">
              <p className="text-[#fc036b] text-xl italic font-bold">
                AmjadCreations
                <sub className="text-sm text-white font-thin block">
                  Shaping the Web, Beautifully
                </sub>
              </p>
            </div>
            <div className="about">
              <h2 className="text-[#fc036b] text-lg">About Us</h2>
              <p className="text-white">
                We envision a world where everyone <br /> can embrace the joy of travel.
              </p>
            </div>
            <div className="contact flex flex-col gap-2">
              <h2 className="text-[#fc036b] text-lg">Contact Us</h2>
              <p className="text-white flex items-center gap-2">
                <Phone size={20} color="white" /> +92-1234-234-2211
              </p>
              <p className="text-white flex items-center gap-2">
                <Mail size={20} color="white" /> abc@123.com
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="two flex flex-col">
            <h2 className="text-[#fc036b] text-lg mb-4">Information</h2>
            <ul className="flex flex-col text-white gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/tours">Tours</Link>
              </li>
              <li>
                <Link href="/explore">Explore</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact-Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="three flex flex-col">
            <h2 className="text-[#fc036b] text-lg mb-4">Helpful Links</h2>
            <p className="text-white">Services</p>
            <p className="text-white">Support</p>
            <p className="text-white">Terms & Conditions</p>
            <p className="text-white">Privacy Policy</p>
          </div>

          {/* Column 4 */}
          <div className="four flex flex-col">
            <h2 className="text-white text-lg mb-4">Subscribe for More Info</h2>
            <div className="relative">
              <Mail size={15} color="black" className="absolute top-2 left-3" />
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="pl-10"
              />
            </div>
            <Button variant="custom" className="w-full mt-4">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="line bg-white h-[2px] w-full my-6"></div>

        {/* Social Icons */}
        <Socials />
      </div>
    </div>
  );
};

export default Footer;

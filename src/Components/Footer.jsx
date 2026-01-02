import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full h-[80vh] not-md:h-full  relative">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center z-0 rounded-2xl bg-fixed"
        style={{ backgroundImage: "url('/public/bg_video/Bottme_bg.png')" }}
      />

      {/* GRADIENT OVERLAY FOR READABILITY */}
      <div className="absolute  " />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-20 text-white"
      >
        {/* CTA SECTION */}
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Book an Appointment with Trusted Doctors
          </h2>
          <p className="text-gray-200 max-w-xl mx-auto mb-6">
            Advanced healthcare services with modern facilities and expert doctors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                px-5 py-3 rounded-md
                bg-white/20 text-white
                placeholder:text-gray-300
                outline-none
                focus:ring-2 focus:ring-blue-500
              "
            />
            <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition">
              Get Appointment
            </button>
          </div>
        </div>

        {/* FOOTER GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="not-md:flex not-md:flex-col not-md:justify-center not-md:items-center">
            <div className="flex items-center gap-2 mb-3 not-md:justify-center">
              <HeartPulse className="text-blue-400" size={22} />
              <h2 className="text-2xl font-bold">
                MediCare<span className="text-blue-500">+</span>
              </h2>
            </div>
            <p className="text-gray-300 max-w-sm leading-relaxed  ">
              Modern healthcare services with trusted doctors and advanced medical facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              {["Home", "About", "Departments", "Contact"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:text-white transition cursor-pointer"
                >
                  <ArrowRight size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 not-md:mg-1">Services</h3>
            <ul className="space-y-3 not-md:space-y-1  text-gray-300 not-md:grid grid-cols-4 not-md:text-[14px]">
              <li>Emergency Care</li>
              <li>24/7 Ambulance</li>
              <li>Cardiology</li>
              <li>Diagnostics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Kolkata, India
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@medicare.com
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-white/20 py-4 text-center text-xs sm:text-sm text-gray-400 ">
          © 2026 MediCare+. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;

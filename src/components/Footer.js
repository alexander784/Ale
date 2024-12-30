import React from 'react';

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="h-80 mt-4 rounded-lg shadow m-4 bg-zinc-700 text-white">
        <div className="w-full mx-auto max-w-screen-xl p-6 flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          {/* Left Section: Paragraph */}
          <div className="flex-1">
            <p className="text-left text-lg leading-relaxed">
              Do you have a brilliant idea you’d love to bring to life? <br />
              Whether it’s a sleek landing page to boost your sales or a groundbreaking system, <br />
              let’s make it happen!
            </p>
          </div>

          {/* Right Section: Contact Details */}
          <div className="flex flex-col items-start md:items-end space-y-2">
            <h3 className="text-lg font-bold">Get in touch</h3>
            <a href="mailto:githinjialexander08@gmail.com" className="hover:underline">
              githinjialexander08@gmail.com
            </a>
            <a href="tel:+254796097131" className="hover:underline">
              +254 796 097 131
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-white">
          © {new Date().getFullYear()} Githinji Alexander. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

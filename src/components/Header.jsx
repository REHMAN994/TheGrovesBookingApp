import React from 'react';
import grovesLogo from '../assets/logo.png'; 
import tiktokIcon from '../assets/tiktok.png';
import instagramIcon from '../assets/inst.png';
import snapchatIcon from '../assets/schat.png';

const Header = () => {
  return (
    <header className=" top-0 left-0 right-0 z-50  flex items-center justify-between px-10 py-4">
      <div className="flex items-center">
        <img src={grovesLogo} alt="The Groves" className="h-10 w-auto" />
      </div>
      <div className="flex items-center gap-4">
        
        <div className="flex items-end gap-6 ml-4">
          <a href="#" aria-label="TikTok">
            <img src={tiktokIcon} alt="TikTok" className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Snapchat">
            <img src={snapchatIcon} alt="Snapchat" className="h-5 w-5" />
          </a>
        </div>
        <button className="bg-gradient-to-r from-yellow-700 to-yellow-400 text-white font-semibold px-6 py-2 rounded-full shadow hover:from-yellow-800 hover:to-yellow-500 transition-all">Log in</button>
        <div className="flex items-center gap-2">
          <span className="text-white">English</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
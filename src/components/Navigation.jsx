import React from 'react';

const navItems = [
  { label: 'DINE WITH US', target: 'dine' },
  { label: 'PLAN YOUR VISIT', target: 'plan' },
  { label: 'EVENTS', target: 'events' },
  { label: 'VIEW GROVES MAP', target: 'map' },
  { label: 'OUR STORY', target: 'story' },
  { label: 'CONTACT US', target: 'contact' },
];

const Navigation = () => {
  return (
    <nav className="w-full border-t border-b border-[#4b4b4b]">
      <ul className="flex flex-row flex-wrap md:flex-nowrap gap-4 md:gap-10 lg:gap-16 py-2 md:py-3 lg:py-4 justify-center items-center w-full">
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="text-white text-xs md:text-sm lg:text-base font-semibold tracking-widest px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 uppercase hover:text-yellow-400 cursor-pointer transition-colors text-center w-full md:w-auto"
            style={{letterSpacing: '0.12em'}}
            onClick={() => {
              const el = document.getElementById(item.target);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
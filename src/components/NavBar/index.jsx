import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="font-bold">Your Logo</div>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center space-x-2">
        <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
        <span>Username</span>
      </div>
    </nav>
  );
};

export default NavBar;

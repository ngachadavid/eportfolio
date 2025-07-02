import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="max-w-[1280px] mx-auto px-4 py-4 text-white">
      <Link to="/" className="text-xl font-bold hover:underline">
        Josh Name
      </Link>
    </nav>
  );
}

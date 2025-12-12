import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 pb-32 bg-black border-t border-white/5 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Dicky Adi Saputra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
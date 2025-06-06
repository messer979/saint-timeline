'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-30 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Menu button */}
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Title - centered */}
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 absolute left-1/2 transform -translate-x-1/2">
            Timeline of Saints
          </h1>

          {/* Spacer to balance the layout */}
          <div className="w-10"></div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;

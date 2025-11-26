import React from 'react';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              PLP Task Manager
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant={darkMode ? 'warning' : 'secondary'}
              size="sm"
              onClick={toggleTheme}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
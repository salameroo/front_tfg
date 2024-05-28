"use client"

import React, { useState } from "react"

const DashboardComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard
          </h1>
        </div>
        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Protected client page
          </p>
          <button
            onClick={toggleTheme}
            className="btn bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 focus:outline-none"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardComponent

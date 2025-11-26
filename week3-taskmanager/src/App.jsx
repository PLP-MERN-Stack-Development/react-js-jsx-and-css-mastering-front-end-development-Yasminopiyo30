import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import APIDataDisplay from './components/APIDataDisplay';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <Navbar />

        <main className="grow max-w-7xl mx-auto w-full py-6 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center mb-6">PLP Task Manager</h1>
            <TaskManager />
          </div>

          <APIDataDisplay />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
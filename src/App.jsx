import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/Dashboard';
import History from './pages/history&caledar';
import Challenges from './pages/challenges';
import Settings from './pages/settings';

export default function App() {
  // Application-wide view state synced directly with Sidebar button clicks
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Conditional rendering function acting as our clean, client-side router layout slot
  const renderPageContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'history':
        return <History />;
      case 'challenges':
        return <Challenges />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex bg-[#060509] antialiased">
      
      {/* 1. Persistent Left Navigation Column (Maintains state across views) */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 2. Dynamic Main Window Canvas */}
      <main className="flex-1 h-screen overflow-hidden relative">
        {renderPageContent()}
      </main>

    </div>
  );
}
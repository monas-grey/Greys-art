import React from 'react';

export default function Sidebar({ currentPage, setCurrentPage }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z' },
    { id: 'history', label: 'History & Calendar', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5' },
    { id: 'challenges', label: 'Challenges', icon: 'M16.5 18.75h-9m9 0a3 3 0 0 0 3-3V13.5a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3m9 0v1.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-1.5m6-16.5H9.75A2.25 2.25 0 0 0 7.5 4.5v1.5h9V4.5a2.25 2.25 0 0 0-2.25-2.25Z' },
    { id: 'settings', label: 'Settings', icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.767c-.3.23-.475.594-.475.982.01.074.014.147.014.221 0 .074-.004.147-.014.221.003.388.178.752.476.982l1.002.767a1.125 1.125 0 0 1 .26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.37.491l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.767c.301-.23.475-.594.475-.982 0-.074-.003-.147-.014-.22a6.4 6.4 0 0 1 0-.222c.011-.074.014-.147.014-.22 0-.388-.174-.752-.475-.982l-1.004-.767a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z' }
  ];

  return (
    <aside className="w-64 bg-[#0d0c12] border-r border-[#1a1923] flex flex-col justify-between p-4 h-screen shrink-0">
      <div className="flex flex-col gap-8">
        {/* Brand Logo Header */}
        <div className="flex items-center gap-3 px-2 pt-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9035ff] to-[#d035ff] flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <span className="text-xl font-black text-white tracking-wider">STRK<span className="text-[#a855f7]">.AI</span></span>
        </div>

        {/* Dynamic Navigation Menu Items Container */}
        <nav className="flex flex-col gap-1.5">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1b172e] text-[#b07dff] border-l-4 border-[#a855f7] pl-3'
                    : 'text-[#615f75] hover:text-white hover:bg-[#13121a]'
                }`}
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Profile/Account Card Badge Widget */}
      <div className="bg-[#13121a] border border-[#1a1923] rounded-2xl p-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff3596] to-[#a235ff] flex items-center justify-center text-white font-bold text-sm shadow-md">
          JD
        </div>
        <div className="flex flex-col truncate">
          <span className="text-sm font-semibold text-white truncate">Monas Grey</span>
          <span className="text-[11px] text-[#615f75] font-medium">Pro Level 14</span>
        </div>
      </div>
    </aside>
  );
}
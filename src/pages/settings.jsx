import React, { useState } from 'react';

export default function Settings() {
  const [profile, setProfile] = useState({
    username: 'Monas Grey',
    email: 'monas.grey@strk.ai',
  });

  const [preferences, setPreferences] = useState({
    darkMode: true,
    smartReminders: true,
    weeklyDigest: false,
    publicLeaderboard: true,
  });

  const handleTogglePref = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex-1 bg-[#060509] p-8 md:p-10 overflow-y-auto h-screen text-white font-sans">
      
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Account Settings</h1>
        <p className="text-sm text-[#615f75] font-medium">Manage your profile, data sync settings, and active app notifications.</p>
      </div>

      <div className="max-w-3xl flex flex-col gap-8">
        
        {/* Section 1: User Profile Settings Card */}
        <div className="bg-[#110f18] border border-[#1a1923] rounded-2xl p-6">
          <h2 className="text-lg font-bold tracking-tight mb-6">Profile Details</h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            {/* Massive Interactive Avatar Badge */}
            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#ff3596] to-[#a235ff] flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-purple-500/10">
                MG
              </div>
              <div className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              </div>
            </div>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#615f75] uppercase tracking-wider">Display Name</label>
                <input 
                  type="text" 
                  value={profile.username}
                  onChange={(e) => setProfile({...profile, username: e.target.value})}
                  className="bg-[#13121a] border border-[#232135] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#a855f7] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#615f75] uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="bg-[#13121a] border border-[#232135] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#a855f7] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Toggle Switches Preferences Card */}
        <div className="bg-[#110f18] border border-[#1a1923] rounded-2xl p-6">
          <h2 className="text-lg font-bold tracking-tight mb-5">Preferences</h2>
          
          <div className="flex flex-col gap-4">
            {[
              { id: 'darkMode', title: 'Amoled Dark Mode', desc: 'Optimize the app UI canvas layout with full-black interfaces.' },
              { id: 'smartReminders', title: 'Smart Streak Warnings', desc: 'Alert me right before a high streak habit is about to expire.' },
              { id: 'publicLeaderboard', title: 'Public Global Standings', desc: 'Allow other community members to inspect your overall level rankings.' },
              { id: 'weeklyDigest', title: 'Email Progress Insights', desc: 'Receive a structured performance summary digest every Sunday.' }
            ].map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleTogglePref(item.id)}
                className="flex items-center justify-between p-3 rounded-xl bg-[#13121a]/60 border border-[#1a1923] cursor-pointer hover:border-[#222033] transition-colors select-none"
              >
                <div className="max-w-xl pr-4">
                  <h4 className="text-sm font-semibold text-gray-200">{item.title}</h4>
                  <p className="text-xs text-[#615f75] mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
                
                {/* Clean Custom CSS Switch Toggle Widget Container */}
                <div className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 shrink-0 ${
                  preferences[item.id] ? 'bg-[#a855f7]' : 'bg-[#232135]'
                }`}>
                  <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-200 ${
                    preferences[item.id] ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Danger Zone Actions Block */}
        <div className="bg-[#110f18] border border-rose-950/40 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-rose-400 tracking-tight mb-2">Danger Zone</h2>
          <p className="text-xs text-[#615f75] mb-5">Irreversible administrative parameters regarding your tracker metrics profile.</p>
          
          <div className="flex flex-wrap gap-3">
            <button className="bg-transparent hover:bg-rose-950/20 text-rose-400 border border-rose-900/40 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors">
              Reset All Habit Streaks
            </button>
            <button className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-md shadow-rose-900/10">
              Delete Account
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
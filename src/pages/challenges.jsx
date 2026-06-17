import React, { useState } from 'react';

export default function Challenges() {
  const [challengeList, setChallengeList] = useState([
    {
      id: 1,
      title: 'Mind Over Matter',
      desc: 'Complete all mindful habits (Reading, Meditating) for 7 consecutive days.',
      participants: 1420,
      daysLeft: 3,
      joined: true,
      progress: 85,
      reward: '500 XP + "Zen Master" Badge',
      category: 'Mind',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 2,
      title: 'Iron Discipline',
      desc: 'Hit the gym or log any physical activity tracking every single day for 2 weeks.',
      participants: 3840,
      daysLeft: 9,
      joined: false,
      progress: 0,
      reward: '1200 XP + Premium Theme',
      category: 'Health',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Night Owl Coder',
      desc: 'Commit code or complete development tasks past 9:00 PM for 5 days straight.',
      participants: 912,
      daysLeft: 5,
      joined: true,
      progress: 40,
      reward: '350 XP',
      category: 'Work',
      color: 'from-orange-500 to-amber-600',
    }
  ]);

  const handleToggleJoin = (id) => {
    setChallengeList(challengeList.map(ch => {
      if (ch.id === id) {
        return {
          ...ch,
          joined: !ch.joined,
          progress: !ch.joined ? 10 : 0, // Mock baseline progress initialization
          participants: !ch.joined ? ch.participants + 1 : ch.participants - 1
        };
      }
      return ch;
    }));
  };

  return (
    <div className="flex-1 bg-[#060509] p-8 md:p-10 overflow-y-auto h-screen text-white font-sans">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Community Challenges</h1>
        <p className="text-sm text-[#615f75] font-medium">Join global tasks, compete with peers, and level up your habits faster.</p>
      </div>

      {/* Top Banner Stats Row Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        <div className="bg-[#110f18] border border-[#1a1923] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#615f75] uppercase">Active Standings</span>
            <span className="text-2xl font-black block mt-0.5">Rank #128</span>
          </div>
          <span className="text-xs font-semibold text-[#b07dff] bg-[#1b172e] px-2.5 py-1 rounded-xl border border-purple-500/20">Top 8%</span>
        </div>
        <div className="bg-[#110f18] border border-[#1a1923] rounded-2xl p-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#615f75] uppercase">Total Rewards Earned</span>
            <span className="text-2xl font-black block mt-0.5">4,850 XP</span>
          </div>
          <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-xl">👑 Elite Tier</span>
        </div>
        <div className="bg-[#110f18] border border-[#1a1923] rounded-2xl p-5 flex items-center justify-between sm:col-span-2 lg:col-span-1">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#615f75] uppercase">Completed Tasks</span>
            <span className="text-2xl font-black block mt-0.5">14 Challenges</span>
          </div>
        </div>
      </div>

      {/* Main Matrix Split Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Challenge Cards Container Grid */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <h2 className="text-xl font-bold tracking-tight">Available Goals</h2>
          
          <div className="flex flex-col gap-4">
            {challengeList.map((ch) => (
              <div key={ch.id} className="bg-[#110f18] border border-[#1a1923] rounded-2xl p-6 relative overflow-hidden group">
                
                {/* Visual Accent Corner Glow */}
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${ch.color}`} />

                {/* Card Top Information Strip */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <h3 className="text-lg font-bold tracking-tight">{ch.title}</h3>
                      <span className="bg-[#181622] text-[#615f75] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                        {ch.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 max-w-xl leading-relaxed">{ch.desc}</p>
                  </div>
                  
                  {/* Join / Leave Dynamic Button Toggle */}
                  <button 
                    onClick={() => handleToggleJoin(ch.id)}
                    className={`text-xs font-bold px-4 py-2 rounded-xl border transition-all shrink-0 ${
                      ch.joined
                        ? 'bg-transparent border-[#2c2a3e] text-gray-400 hover:border-rose-500 hover:text-rose-400'
                        : 'bg-white border-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {ch.joined ? 'Leave Goal' : 'Join Goal'}
                  </button>
                </div>

                {/* Micro Meta Information Row */}
                <div className="flex items-center gap-4 text-xs font-medium text-[#615f75] mb-5">
                  <span className="flex items-center gap-1">
                    👥 {ch.participants.toLocaleString()} tracking
                  </span>
                  <span>•</span>
                  <span className="text-rose-400 font-semibold">
                    ⏳ {ch.daysLeft} days remaining
                  </span>
                </div>

                {/* Conditional Reward/Progress Bottom Strip Container */}
                <div className="pt-4 border-t border-[#1a1923] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs font-semibold text-gray-300">
                    🎁 Reward: <span className="text-amber-400">{ch.reward}</span>
                  </div>
                  
                  {ch.joined && (
                    <div className="flex items-center gap-3 w-full sm:w-48">
                      <div className="flex-1 bg-[#181622] h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-300" 
                          style={{ width: `${ch.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-[#b07dff] shrink-0">{ch.progress}%</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Mini Global Competitor Leaderboard */}
        <div className="lg:col-span-4 bg-[#110f18] border border-[#1a1923] rounded-2xl p-6 h-fit">
          <h2 className="text-lg font-bold tracking-tight mb-4">Global Leaderboard</h2>
          
          <div className="flex flex-col gap-3">
            {[
              { rank: 1, name: 'Alex V.', xp: '14,250 XP', self: false, avatar: 'AV' },
              { rank: 2, name: 'Sarah K.', xp: '12,900 XP', self: false, avatar: 'SK' },
              { rank: 3, name: 'Brandon M.', xp: '11,400 XP', self: false, avatar: 'BM' },
              { rank: 128, name: 'Monas Grey (You)', xp: '4,850 XP', self: true, avatar: 'MG' },
            ].map((user) => (
              <div 
                key={user.rank} 
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  user.self 
                    ? 'bg-[#1b172e]/40 border-[#a855f7]/30' 
                    : 'bg-[#13121a] border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  {/* Rank Numeric Badge placement styling */}
                  <span className={`text-xs font-black w-5 text-center ${
                    user.rank === 1 ? 'text-amber-400' : user.rank === 2 ? 'text-gray-400' : user.rank === 3 ? 'text-amber-700' : 'text-[#615f75]'
                  }`}>
                    {user.rank}
                  </span>
                  
                  {/* Miniature Avatar badge node */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold text-white shrink-0 bg-gradient-to-tr ${
                    user.self ? 'from-[#ff3596] to-[#a235ff]' : 'from-[#2e2a47] to-[#1d1a2e]'
                  }`}>
                    {user.avatar}
                  </div>
                  
                  <span className={`text-sm font-semibold truncate ${user.self ? 'text-[#b07dff]' : 'text-gray-200'}`}>
                    {user.name}
                  </span>
                </div>

                <span className="text-xs font-bold text-[#615f75] shrink-0">
                  {user.xp}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
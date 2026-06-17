import React, { useState } from 'react';

export default function Dashboard() {
  const [newHabit, setNewHabit] = useState('');
  const [habits, setHabits] = useState([
    { id: 1, name: 'Gym & Weight Training', category: 'Health', color: 'bg-cyan-400', streak: 12, completed: true },
    { id: 2, name: 'Read 20 Pages', category: 'Mind', color: 'bg-purple-400', streak: 5, completed: false },
    { id: 3, name: 'Code / Side Project', category: 'Work', color: 'bg-orange-400', streak: 24, completed: true },
  ]);

  const handleToggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const handleCreateHabit = (e) => {
    e.preventDefault();
    if (!newHabit.trim()) return;
    setHabits([
      ...habits,
      {
        id: Date.now(),
        name: newHabit,
        category: 'General',
        color: 'bg-purple-400',
        streak: 0,
        completed: false
      }
    ]);
    setNewHabit('');
  };

  const completedCount = habits.filter(h => h.completed).length;
  const progressPercentage = habits.length ? Math.round((completedCount / habits.length) * 100) : 0;

  return (
    <div className="flex-1 bg-[#060509] p-8 md:p-10 overflow-y-auto h-screen text-white">
      {/* Top Welcome Title Grid Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Welcome back, Monas</h1>
          <p className="text-sm text-[#615f75] font-medium">Let's keep the momentum going today.</p>
        </div>
        <div className="bg-[#13121a] border border-[#1a1923] rounded-xl px-4 py-2 flex items-center gap-2.5 text-sm font-semibold text-[#8e8c9e] shadow-sm">
          <svg className="w-4 h-4 text-[#a855f7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75" />
          </svg>
          Wed, Jun 17
        </div>
      </div>

      {/* Top 3 Metric Highlight Cards Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {/* Metric Card 1: Daily Progress */}
        <div className="bg-[#110f18] border border-[#1a1923] rounded-2xl p-5 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-bold tracking-wider text-[#615f75] uppercase">Today's Progress</span>
            <span className="text-3xl font-extrabold">{progressPercentage}%</span>
            <span className="text-xs font-semibold text-[#615f75]">{completedCount} of {habits.length} completed</span>
          </div>
          {/* Radial Progress Gauge Svg Widget */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="32" cy="32" r="26" stroke="#1c1a27" strokeWidth="5" fill="transparent" />
              <circle cx="32" cy="32" r="26" stroke="#d035ff" strokeWidth="5" fill="transparent"
                strokeDasharray={2 * Math.PI * 26}
                strokeDashoffset={2 * Math.PI * 26 * (1 - progressPercentage / 100)}
                strokeLinecap="round" className="transition-all duration-500" />
            </svg>
            <span className="absolute text-[11px] font-bold text-gray-400">{completedCount}/{habits.length}</span>
          </div>
        </div>

        {/* Metric Card 2: Highest Active Streaks */}
        <div className="bg-[#110f18] border border-[#1a1923] rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#201515] flex items-center justify-center border border-[#3b1c1c] text-orange-500">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-bold tracking-wider text-[#615f75] uppercase">Longest Streak</span>
            <span className="text-3xl font-extrabold">24 Days</span>
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
              🔥 Top 5% of users this week
            </span>
          </div>
        </div>

        {/* Metric Card 3: Quick Creation Action Form */}
        <div className="bg-[#110f18] border border-[#1a1923] rounded-2xl p-5 flex flex-col justify-center">
          <span className="text-[11px] font-bold tracking-wider text-[#615f75] uppercase mb-2">Quick Create Habit</span>
          <form onSubmit={handleCreateHabit} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="E.g., Drink water..."
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
              className="flex-1 bg-[#13121a] border border-[#232135] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#a855f7] placeholder-[#434152] transition-colors"
            />
            <button type="submit" className="bg-[#8b5cf6] hover:bg-[#7c3aed] active:scale-95 text-white p-2.5 rounded-xl transition-all shadow-md shadow-purple-500/10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Main Habit Stream Section */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold tracking-tight">Active Habits</h2>
          <button className="text-xs font-semibold text-[#615f75] hover:text-white transition-colors">View Archived</button>
        </div>

        {/* Habits Dynamic List Container */}
        <div className="flex flex-col gap-3">
          {habits.map((habit) => (
            <div
              key={habit.id}
              onClick={() => handleToggleHabit(habit.id)}
              className={`border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 select-none ${
                habit.completed
                  ? 'bg-[#0f111a]/40 border-[#1c2a30] opacity-60'
                  : 'bg-[#110f18] border-[#1a1923] hover:border-[#272535]'
              }`}
            >
              {/* Left Identity Strip Combo */}
              <div className="flex items-center gap-4">
                <div className={`w-1 h-10 rounded-full ${habit.color}`} />
                <div className="flex flex-col gap-1">
                  <span className={`text-base font-semibold tracking-tight ${habit.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                    {habit.name}
                  </span>
                  <span className="bg-[#181622] text-[#615f75] text-[10px] font-bold px-2 py-0.5 rounded-md w-fit uppercase tracking-wide">
                    {habit.category}
                  </span>
                </div>
              </div>

              {/* Right Interactive Selection Combo */}
              <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                <div className="bg-[#181622] border border-[#222031] text-xs font-semibold text-[#a855f7] px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  🔥 {habit.streak}d streak
                </div>
                
                {/* Custom Styled Checkbox Circle Node */}
                <button
                  onClick={() => handleToggleHabit(habit.id)}
                  className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all border ${
                    habit.completed
                      ? 'bg-emerald-500 border-emerald-500 text-black'
                      : 'bg-[#181622] border-[#2a283b] text-transparent hover:border-purple-500'
                  }`}
                >
                  <svg className="w-4 h-4 stroke-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
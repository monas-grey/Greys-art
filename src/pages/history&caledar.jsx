import React, { useState } from 'react';

export default function History() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Simulated historic checklist logs
  const historyLogs = [
    { id: 1, name: 'Gym & Weight Training', category: 'Health', status: 'Completed', date: 'Yesterday, 6:30 PM', color: 'bg-cyan-400' },
    { id: 2, name: 'Code / Side Project', category: 'Work', status: 'Completed', date: 'Yesterday, 11:15 PM', color: 'bg-orange-400' },
    { id: 3, name: 'Read 20 Pages', category: 'Mind', status: 'Missed', date: 'June 15, 2026', color: 'bg-purple-400' },
    { id: 4, name: 'Gym & Weight Training', category: 'Health', status: 'Completed', date: 'June 15, 2026', color: 'bg-cyan-400' },
    { id: 5, name: 'Code / Side Project', category: 'Work', status: 'Completed', date: 'June 14, 2026', color: 'bg-orange-400' },
  ];

  // Render mock calendar days for June 2026
  const calendarDays = Array.from({ length: 30 }, (_, i) => {
    const dayNum = i + 1;
    // Inject custom completions for visual style variation
    let completion = 'none';
    if ([3, 5, 12, 14, 17, 24].includes(dayNum)) completion = 'partial';
    if ([4, 10, 11, 16, 22, 23].includes(dayNum)) completion = 'full';
    return { dayNum, completion };
  });

  return (
    <div className="flex-1 bg-[#060509] p-8 md:p-10 overflow-y-auto h-screen text-white font-sans">
      
      {/* Top Title Strip */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1">History & Calendar</h1>
        <p className="text-sm text-[#615f75] font-medium">Review your historical data and streak consistencies over time.</p>
      </div>

      {/* Main Grid: Calendar left / Performance insights right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        
        {/* Left Side: Custom Dark Month Grid View */}
        <div className="lg:col-span-7 bg-[#110f18] border border-[#1a1923] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold tracking-tight">June 2026</h2>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg bg-[#13121a] border border-[#232135] text-[#615f75] hover:text-white">&larr;</button>
              <button className="p-1.5 rounded-lg bg-[#13121a] border border-[#232135] text-[#615f75] hover:text-white">&rarr;</button>
            </div>
          </div>

          {/* Weekday Labels Row */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-[#615f75] uppercase tracking-wider mb-3">
            <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
          </div>

          {/* Calendar Days Matrix */}
          <div className="grid grid-cols-7 gap-2">
            {/* June 1st, 2026 starts on a Monday */}
            {calendarDays.map((day) => (
              <div 
                key={day.dayNum}
                className={`aspect-square rounded-xl flex flex-col items-center justify-between p-2 relative group cursor-pointer border transition-all ${
                  day.dayNum === 17 
                    ? 'border-[#a855f7] bg-[#1b172e]/50' // Highlight current day matching dashboard date
                    : 'border-transparent bg-[#13121a] hover:border-[#2b293a]'
                }`}
              >
                <span className={`text-xs font-bold ${day.dayNum === 17 ? 'text-[#b07dff]' : 'text-gray-400'}`}>
                  {day.dayNum}
                </span>

                {/* Micro Performance Indicators at the bottom corner of cell nodes */}
                <div className="flex gap-1 justify-center w-full mt-1">
                  {day.completion === 'full' && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/30" />
                  )}
                  {day.completion === 'partial' && (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    </>
                  )}
                  {day.completion === 'none' && <span className="w-1.5 h-1.5 rounded-full bg-transparent" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Performance Stack Chart Breakdown */}
        <div className="lg:col-span-5 bg-[#110f18] border border-[#1a1923] rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold tracking-tight mb-1">Consistency Analysis</h2>
            <p className="text-xs text-[#615f75] mb-6">Monthly consistency categorized across categories.</p>

            {/* Custom Bar Chart Rows Layout */}
            <div className="flex flex-col gap-4">
              {[
                { name: 'Health & Training', pct: '85%', color: 'bg-cyan-400', count: '17/20 days' },
                { name: 'Mind & Reading', pct: '60%', color: 'bg-purple-400', count: '12/20 days' },
                { name: 'Coding & Projects', pct: '95%', color: 'bg-orange-400', count: '19/20 days' },
              ].map((category, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-gray-300">{category.name}</span>
                    <span className="text-[#615f75]">{category.count}</span>
                  </div>
                  <div className="w-full bg-[#181622] h-2.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${category.color}`} 
                      style={{ width: category.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Summary Metric Block */}
          <div className="mt-6 pt-6 border-t border-[#1a1923] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-[#615f75] font-bold uppercase">Average Retention</span>
              <span className="text-3xl font-extrabold text-white">80%</span>
            </div>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
              +4.2% from last month
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Layout Component: Running History Timeline Log */}
      <div className="w-full bg-[#110f18] border border-[#1a1923] rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold tracking-tight">Activity Log</h2>
          
          {/* Pill Filters */}
          <div className="flex bg-[#13121a] p-1 border border-[#222031] rounded-xl text-xs font-bold text-[#615f75]">
            {['all', 'completed', 'missed'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-lg capitalize transition-colors ${
                  selectedFilter === filter 
                    ? 'bg-[#1b172e] text-[#b07dff]' 
                    : 'hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Ledger Rows Stack */}
        <div className="flex flex-col gap-3">
          {historyLogs
            .filter(log => selectedFilter === 'all' || log.status.toLowerCase() === selectedFilter)
            .map((log) => (
              <div key={log.id} className="bg-[#13121a]/60 border border-[#1a1923] rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-1 h-8 rounded-full ${log.color}`} />
                  <div>
                    <h4 className="text-sm font-semibold">{log.name}</h4>
                    <span className="text-[11px] text-[#615f75] font-medium">{log.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#615f75] bg-[#181622] px-2 py-0.5 rounded-md uppercase tracking-wide">
                    {log.category}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-xl ${
                    log.status === 'Completed' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                  }`}>
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
}
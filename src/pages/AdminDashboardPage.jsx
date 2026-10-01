import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Layers, Users, GraduationCap, 
  Video, Library as LibraryIcon, Calendar, MessageSquare, 
  Bell, BarChart3, Settings, Search, User, TrendingUp, 
  Plus, CheckCircle, Clock, ChevronRight, Menu, X, ArrowUpRight 
} from 'lucide-react';
import Logo from '../components/common/Logo';
import { adminDashboardData, popularCourses } from '../data/mockData';

export default function AdminDashboardPage() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');

  const sidebarLinks = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Courses', icon: BookOpen },
    { name: 'Lessons', icon: Layers },
    { name: 'Students', icon: Users },
    { name: 'Teachers', icon: GraduationCap },
    { name: 'Live Classes', icon: Video },
    { name: 'Library', icon: LibraryIcon },
    { name: 'Events', icon: Calendar },
    { name: 'Community', icon: MessageSquare },
    { name: 'Notifications', icon: Bell },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F7F2E9] flex flex-col md:flex-row text-left font-sans">
      
      {/* 1. Left Sidebar for Desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#2D0F08] text-[#F8EACD] flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo container */}
          <div className="p-4 border-b border-[#4E2214] flex items-center justify-between">
            <Logo size="small" showTagline={false} />
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-[#EBD7B3] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-[#E8B85C]/80">
            Admin Portal
          </div>

          {/* Navigation Links */}
          <nav className="px-2 space-y-1">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveMenu(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#5A1E0E] text-[#E8B85C] shadow-md border-l-4 border-[#C99232]'
                      : 'text-[#EBD7B3] hover:bg-[#3E170B] hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-[#4E2214] text-xs">
          <Link
            to="/"
            className="flex items-center justify-between text-[#E8B85C] font-semibold hover:underline"
          >
            <span>← View Public Website</span>
          </Link>
          <p className="text-[10px] text-[#A37B5C] mt-2">
            Sanathana Gurukulam v1.0.0
          </p>
        </div>
      </aside>

      {/* 2. Main Admin Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#EBD7B3] px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 rounded-lg text-[#5A1E0E] hover:bg-[#F3E5D0] md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="font-serif font-bold text-sm sm:text-base text-[#5A1E0E] hidden sm:block">
              {activeMenu} Overview
            </h2>
          </div>

          {/* Search in Top Bar */}
          <div className="flex-1 max-w-xs relative hidden md:block">
            <Search className="w-3.5 h-3.5 text-[#8C6D58] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search students, courses..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full bg-[#FAF3E5] border border-[#E8D2B4] focus:outline-none focus:ring-1 focus:ring-[#C99232]"
            />
          </div>

          {/* Right: Notifications & Admin Profile */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full text-[#5A1E0E] hover:bg-[#F3E5D0] relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-600"></span>
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-[#EBD7B3]">
              <div className="w-8 h-8 rounded-full bg-[#5A1E0E] text-[#FFF8E8] font-bold text-xs flex items-center justify-center">
                A
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-bold text-[#3E170B]">Pramukh Admin</p>
                <p className="text-[10px] text-[#7A3518]">Super Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Main Content */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-[#5A1E0E] to-[#3E170B] rounded-3xl p-6 text-[#FFF8E8] shadow-warm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8B85C]">
                Administrative Console
              </span>
              <h1 className="font-gurukulam-heading text-xl sm:text-2xl font-bold mt-0.5">
                Welcome back, Admin (స్వాగతం)
              </h1>
              <p className="text-xs text-[#F8EACD] mt-1">
                Everything is running smoothly. 1,248 students are actively attending live discourses today.
              </p>
            </div>

            <button
              onClick={() => alert('New Course Wizard would open here (Backend ready)')}
              className="px-4 py-2 rounded-full bg-[#E8B85C] hover:bg-[#F4D38B] text-[#2E120A] text-xs font-bold flex items-center gap-1.5 shadow"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Course</span>
            </button>
          </div>

          {/* 4 Primary KPI Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Total Students */}
            <div className="bg-[#FFFDF9] rounded-2xl p-4 border border-[#EBD7B3] shadow-warm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#7A3518]">Total Students</span>
                <div className="w-8 h-8 rounded-xl bg-[#F8EACD] text-[#5A1E0E] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#3E170B] mt-2">
                {adminDashboardData.stats.totalStudents}
              </p>
              <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> {adminDashboardData.stats.studentGrowth}
              </span>
            </div>

            {/* 2. Active Courses */}
            <div className="bg-[#FFFDF9] rounded-2xl p-4 border border-[#EBD7B3] shadow-warm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#7A3518]">Active Courses</span>
                <div className="w-8 h-8 rounded-xl bg-[#F8EACD] text-[#5A1E0E] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#3E170B] mt-2">
                {adminDashboardData.stats.activeCourses}
              </p>
              <span className="text-[10px] text-[#8C6D58] mt-1 block">
                Across 10 Knowledge Streams
              </span>
            </div>

            {/* 3. Live Classes */}
            <div className="bg-[#FFFDF9] rounded-2xl p-4 border border-[#EBD7B3] shadow-warm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#7A3518]">Live Sessions</span>
                <div className="w-8 h-8 rounded-xl bg-[#F8EACD] text-[#E53935] flex items-center justify-center">
                  <Video className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#3E170B] mt-2">
                {adminDashboardData.stats.liveClassesThisWeek}
              </p>
              <span className="text-[10px] text-red-600 font-bold flex items-center gap-1 mt-1">
                🔴 1 Streaming Live Right Now
              </span>
            </div>

            {/* 4. Total Content Streamed */}
            <div className="bg-[#FFFDF9] rounded-2xl p-4 border border-[#EBD7B3] shadow-warm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#7A3518]">Total Content</span>
                <div className="w-8 h-8 rounded-xl bg-[#F8EACD] text-[#C99232] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#3E170B] mt-2">
                {adminDashboardData.stats.totalHoursStreamed}
              </p>
              <span className="text-[10px] text-[#8C6D58] mt-1 block">
                High-fidelity audio & video
              </span>
            </div>

          </div>

          {/* Chart & Distribution Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Chart Simulation: Weekly Student Activity */}
            <div className="lg:col-span-2 bg-[#FFFDF9] rounded-3xl p-6 border border-[#EBD7B3] shadow-warm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#5A1E0E]">
                  Learner Engagement (This Week)
                </h3>
                <span className="text-xs text-[#8C6D58]">Daily Active Sadhakas</span>
              </div>

              {/* Responsive Bar Chart Visualization */}
              <div className="h-48 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-[#EBD7B3]">
                {[
                  { day: 'Mon', h: '60%', val: '4.2K' },
                  { day: 'Tue', h: '75%', val: '5.1K' },
                  { day: 'Wed', h: '70%', val: '4.8K' },
                  { day: 'Thu', h: '85%', val: '5.8K' },
                  { day: 'Fri', h: '80%', val: '5.4K' },
                  { day: 'Sat', h: '95%', val: '6.5K' },
                  { day: 'Sun', h: '100%', val: '7.2K' },
                ].map((bar) => (
                  <div key={bar.day} className="flex-1 flex flex-col items-center gap-1 group">
                    <span className="text-[10px] text-[#8C6D58] opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.val}
                    </span>
                    <div className="w-full bg-[#FAF3E5] rounded-t-lg h-36 flex items-end">
                      <div
                        className="w-full bg-[#5A1E0E] hover:bg-[#C99232] rounded-t-lg transition-all duration-500"
                        style={{ height: bar.h }}
                      ></div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#7A3518] mt-1">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Distribution by Gurukulam Age Paths */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#EBD7B3] shadow-warm flex flex-col justify-between">
              <h3 className="font-serif font-bold text-sm sm:text-base text-[#5A1E0E] mb-3">
                Students by Learning Path
              </h3>

              <div className="space-y-3">
                {adminDashboardData.learningPathDistribution.map((path) => (
                  <div key={path.name}>
                    <div className="flex justify-between text-xs font-semibold text-[#3E170B] mb-1">
                      <span>{path.name}</span>
                      <span>{path.count.toLocaleString()} ({path.percent})</span>
                    </div>
                    <div className="w-full bg-[#FAF3E5] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#C99232] h-full rounded-full"
                        style={{ width: path.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#EBD7B3]/60 text-xs text-[#8C6D58]">
                Highest enrollment in <strong>Yuva Gurukulam</strong>
              </div>
            </div>

          </div>

          {/* Tables Row: Recent Signups & Live Classes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Recent Signups Table */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#EBD7B3] shadow-warm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#5A1E0E]">
                  Recent Student Enrollments
                </h3>
                <span className="text-xs text-[#C99232] font-semibold cursor-pointer">View All</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#EBD7B3] text-[#7A3518]">
                      <th className="pb-2 font-bold">Student</th>
                      <th className="pb-2 font-bold">Course</th>
                      <th className="pb-2 font-bold">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBD7B3]/50">
                    {adminDashboardData.recentSignups.map((s, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF3E5]/50">
                        <td className="py-2.5">
                          <p className="font-semibold text-[#3E170B]">{s.name}</p>
                          <p className="text-[10px] text-[#8C6D58]">{s.email}</p>
                        </td>
                        <td className="py-2.5 text-[#5A1E0E] font-medium">{s.course}</td>
                        <td className="py-2.5 text-[#8C6D58]">{s.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Popular Courses Performance Table */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#EBD7B3] shadow-warm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#5A1E0E]">
                  Top Courses Performance
                </h3>
                <span className="text-xs text-[#C99232] font-semibold cursor-pointer">Manage</span>
              </div>

              <div className="space-y-3">
                {popularCourses.slice(0, 3).map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF3E5]/60 border border-[#E8D2B4]"
                  >
                    <div className="flex items-center gap-3">
                      <img src={c.image} alt={c.title} className="w-10 h-10 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-serif font-bold text-xs text-[#3E170B] line-clamp-1">{c.title}</h4>
                        <p className="text-[10px] text-[#7A3518]">{c.instructor} • ⭐ {c.rating}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#5A1E0E]">
                      {c.price === 0 ? 'Free' : `₹${c.price}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </main>
      </div>

    </div>
  );
}

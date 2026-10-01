import React, { useState } from 'react';
import { 
  Radio, Users, MessageSquare, Send, Clock, 
  Calendar, CheckCircle, Play, Heart, Share2, ArrowRight 
} from 'lucide-react';
import { featuredLiveClass, upcomingClasses } from '../data/mockData';
import { useLanguage } from '../../src/context/LanguageContext';

export default function LiveClassesPage() {
  const { lang, t } = useLanguage();
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Raghavan K.', text: 'హరిః ఓం ఆచార్యుల వారికి ప్రణామాలు 🙏', time: '10:02 AM' },
    { id: 2, user: 'Priyanka Sharma', text: 'Audio and video are crystal clear.', time: '10:03 AM' },
    { id: 3, user: 'Sridhar Rao', text: 'Please explain Verse 14 once again Acharya garu.', time: '10:04 AM' },
    { id: 4, user: 'Acharya Srinivas (Guru)', text: 'Blessed learners, today we dive deep into the immortality of the Atman.', time: '10:05 AM', isGuru: true },
  ]);
  const [newMsg, setNewMsg] = useState('');
  const [activeTab, setActiveTab] = useState('live'); // 'live', 'upcoming', 'completed'

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMsg.trim()) {
      setChatMessages((prev) => [
        ...prev,
        { id: Date.now(), user: 'You (Sadhaka)', text: newMsg.trim(), time: 'Just now' }
      ]);
      setNewMsg('');
    }
  };

  const completedClasses = [
    {
      id: 'comp-1',
      title: 'Bhagavad Gita Chapter 1: Arjuna Vishada Yoga Complete Discourse',
      titleTe: 'భగవద్గీత ప్రథమ అధ్యాయం: అర్జున విషాద యోగము సమగ్ర వ్యాఖ్య',
      instructor: 'Acharya Dr. Srinivas Sharma',
      views: '18,400',
      duration: '1h 45m',
      date: 'Streamed 2 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'comp-2',
      title: 'Vedic Chanting & Sandhyavandanam Mantras Pronunciation Guide',
      titleTe: 'సంధ్యావందన మంత్ర పఠన ప్రాశస్త్యం & ఉచ్చారణ',
      instructor: 'Veda Brahma Sri Ramamurthy Ghanapati',
      views: '9,200',
      duration: '1h 15m',
      date: 'Streamed last week',
      thumbnail: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'comp-3',
      title: 'Secrets of Sri Chakra Puja & Sound Resonance',
      titleTe: 'శ్రీచక్ర రహస్యాలు & నాద ఉపాసన',
      instructor: 'Sri Parthasarathy garu',
      views: '24,100',
      duration: '2h 10m',
      date: 'Streamed 2 weeks ago',
      thumbnail: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#E53935] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E53935] animate-ping"></span>
            {lang === 'te' ? 'ప్రత్యక్ష గురుకుల సత్సంగం' : 'Live Gurukulam Broadcasts'}
          </span>
          <h1 className="font-gurukulam-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#5A1E0E] mt-1">
            {lang === 'te' ? 'ప్రత్యక్ష తరగతులు & సత్సంగాలు' : 'Live Classes & Satsangs'}
          </h1>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-[#FFFDF9] border border-[#EBD7B3] rounded-full p-1 shadow-sm text-xs font-semibold">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === 'live' ? 'bg-[#5A1E0E] text-[#FFF8E8]' : 'text-[#7A3518] hover:bg-[#F8EACD]'
            }`}
          >
            🔴 Live Now
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === 'upcoming' ? 'bg-[#5A1E0E] text-[#FFF8E8]' : 'text-[#7A3518] hover:bg-[#F8EACD]'
            }`}
          >
            రాబోయేవి (Upcoming)
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === 'completed' ? 'bg-[#5A1E0E] text-[#FFF8E8]' : 'text-[#7A3518] hover:bg-[#F8EACD]'
            }`}
          >
            రికార్డింగులు (Archive)
          </button>
        </div>
      </div>

      {/* Main Broadcast Screen + Live Chat Layout */}
      {activeTab === 'live' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Live Video Player Stream (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#1A0703] border-2 border-[#7A3518] shadow-warm-lg">
              <img
                src={featuredLiveClass.bgImage}
                alt="Live class"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 p-4 sm:p-6 flex flex-col justify-between">
                
                {/* Top Overlay: Live badge & Live Viewers */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    LIVE NOW
                  </span>

                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#FFF8E8]">
                    <Users className="w-3.5 h-3.5 text-[#E8B85C]" />
                    <span>1,248 సాధకులు వీక్షిస్తున్నారు</span>
                  </div>
                </div>

                {/* Bottom Overlay: Title & Instructor */}
                <div>
                  <h2 className="font-serif font-bold text-lg sm:text-2xl text-[#FFF8E8] drop-shadow">
                    {lang === 'te' ? featuredLiveClass.titleTe : featuredLiveClass.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E8B85C] font-medium drop-shadow mt-1">
                    {featuredLiveClass.topic}
                  </p>
                  <p className="text-xs text-[#F8EACD] mt-2">
                    {featuredLiveClass.instructor} • {featuredLiveClass.instructorRole}
                  </p>
                </div>
              </div>
            </div>

            {/* Live Class Description */}
            <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#EBD7B3] shadow-warm">
              <h3 className="font-serif font-bold text-base text-[#5A1E0E]">
                ఈరోజు ప్రత్యక్ష తరగతి వివరాలు / About Today's Session
              </h3>
              <p className="text-xs sm:text-sm text-[#5C3D2E] mt-2 leading-relaxed">
                {featuredLiveClass.description} శ్లోకాల శ్రవణం మరియు ఆచార్యుల సమక్షంలో ప్రత్యక్ష ప్రశ్న-జవాబుల విశ్లేషణ.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <button className="px-4 py-1.5 rounded-full bg-[#E53935] text-white text-xs font-bold flex items-center gap-1.5 shadow">
                  <Heart className="w-3.5 h-3.5 fill-current" /> ప్రణామం (Applaud)
                </button>
                <button className="px-4 py-1.5 rounded-full bg-[#F8EACD] text-[#5A1E0E] text-xs font-bold flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5" /> షేర్ చేయండి
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Live Chat (Col 1) */}
          <div className="bg-[#FFFDF9] rounded-3xl border border-[#EBD7B3] shadow-warm flex flex-col h-[520px]">
            {/* Chat Header */}
            <div className="p-4 border-b border-[#EBD7B3] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#5A1E0E]" />
                <h3 className="font-serif font-bold text-xs sm:text-sm text-[#3E170B]">
                  సత్సంగ సంభాషణ (Live Chat)
                </h3>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {chatMessages.map((m) => (
                <div
                  key={m.id}
                  className={`p-2.5 rounded-xl ${
                    m.isGuru
                      ? 'bg-[#F8EACD] border border-[#DEBE99] text-[#3E170B]'
                      : 'bg-[#FAF3E5]/60 text-[#2E120A]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-[#5A1E0E] flex items-center gap-1">
                      {m.user} {m.isGuru && <span className="text-[9px] bg-[#5A1E0E] text-white px-1 rounded">Acharya</span>}
                    </span>
                    <span className="text-[10px] text-[#8C6D58]">{m.time}</span>
                  </div>
                  <p className="text-xs leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-[#EBD7B3] flex gap-2">
              <input
                type="text"
                value={newMsg}
                onChange={(e) => setNewMsg(e.target.value)}
                placeholder="మీ ప్రశ్న లేదా సందేశం నమోదు చేయండి..."
                className="flex-1 px-3 py-2 rounded-full bg-[#FAF3E5] border border-[#E8D2B4] text-xs text-[#2E120A] focus:outline-none focus:ring-1 focus:ring-[#C99232]"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-[#5A1E0E] text-[#FFF8E8] flex items-center justify-center hover:bg-[#3E170B] flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Upcoming Classes Tab */}
      {activeTab === 'upcoming' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingClasses.map((c) => (
            <div
              key={c.id}
              className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#EBD7B3] shadow-warm flex flex-col justify-between"
            >
              <div>
                <img
                  src={c.instructorAvatar}
                  alt={c.instructor}
                  className="w-16 h-16 rounded-2xl object-cover mb-3 border-2 border-[#C99232]"
                />
                <span className="px-2.5 py-0.5 rounded-md bg-[#F8EACD] text-[#7A3518] text-[10px] font-bold">
                  రాబోయే తరగతి
                </span>
                <h3 className="font-serif font-bold text-base text-[#3E170B] mt-2">
                  {lang === 'te' ? c.titleTe : c.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#7A3518] font-semibold mt-2">
                  <Clock className="w-3.5 h-3.5 text-[#C99232]" />
                  <span>{lang === 'te' ? c.timingTe : c.timing}</span>
                </div>
                <p className="text-xs text-[#8C6D58] mt-1">{c.instructor}</p>
                <p className="text-xs text-emerald-800 font-medium mt-2">
                  👥 {c.registered} సాధకులు నమోదు చేసుకున్నారు
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EBD7B3]/60">
                <button
                  onClick={() => alert(`Reminder set for: ${c.title}`)}
                  className="w-full py-2.5 rounded-full bg-[#5A1E0E] hover:bg-[#3E170B] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#E8B85C]" />
                  <span>రిమైండర్ సెట్ చేసుకోండి / RSVP</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Completed Archived Sessions Tab */}
      {activeTab === 'completed' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {completedClasses.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#EBD7B3] shadow-warm flex flex-col justify-between group"
            >
              <div className="relative aspect-video w-full bg-[#1A0703]">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#E8B85C] text-[#2E120A] flex items-center justify-center shadow">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px]">
                  {item.duration}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#3E170B] group-hover:text-[#5A1E0E] line-clamp-2">
                    {lang === 'te' ? item.titleTe : item.title}
                  </h4>
                  <p className="text-xs text-[#7A3518] mt-1">{item.instructor}</p>
                  <p className="text-[11px] text-[#8C6D58] mt-1">{item.date} • {item.views} views</p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#EBD7B3]/60">
                  <span className="text-xs font-bold text-[#5A1E0E] group-hover:underline">
                    పూర్తి రికార్డింగ్ వీక్షించండి →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

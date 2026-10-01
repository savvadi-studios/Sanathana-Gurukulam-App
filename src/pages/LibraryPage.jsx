import React, { useState } from 'react';
import { BookOpen, Headphones, Download, FileText, Play, Search, Bookmark, Sparkles } from 'lucide-react';
import { libraryResources } from '../data/mockData';
import { useLanguage } from '../../src/context/LanguageContext';

export default function LibraryPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');
  const [playingItem, setPlayingItem] = useState(null);

  const tabs = ['All', 'Books', 'Audio', 'Shlokas', 'Stotras', 'Puranas', 'Scriptures'];

  const filteredItems = libraryResources.filter((item) => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.titleTe.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-left">
      
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C99232]">
          {lang === 'te' ? 'జ్ఞాన భాండాగారం' : 'Digital Vedic Archives'}
        </span>
        <h1 className="font-gurukulam-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#5A1E0E] mt-1">
          {lang === 'te' ? 'సనాతన గ్రంథాలయం & శ్రవణ నిధి' : 'Sacred Digital Library'}
        </h1>
        <p className="text-xs sm:text-sm text-[#7A3518] mt-1 max-w-2xl">
          {lang === 'te'
            ? 'ప్రాచీన తాళపత్ర గ్రంథాలు, సంస్కృత శాస్త్రాలు, స్తోత్ర రత్నాలు మరియు ధ్యాన నాదాలు ఉచితంగా చదవండి, వినండి.'
            : 'Explore rare commentaries, authentic Sanskrit manuscripts, high-fidelity stotra audio, and scripture translations.'}
        </p>

        {/* Search */}
        <div className="mt-6 max-w-md relative">
          <Search className="w-4 h-4 text-[#7A3518] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={lang === 'te' ? 'గ్రంథం, స్తోత్రం లేదా ఆడియో పేరు వెతకండి...' : 'Search books, stotras, audio tracks...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FFFDF9] border border-[#EBD7B3] text-sm text-[#3E170B] placeholder-[#8C6D58] focus:outline-none focus:ring-2 focus:ring-[#C99232]"
          />
        </div>

        {/* Tabs Row */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-[#5A1E0E] text-[#FFF8E8] shadow-sm'
                  : 'bg-[#FFFDF9] text-[#5A1E0E] border border-[#EBD7B3] hover:bg-[#F8EACD]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Library Resources Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3E5D0]">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#5A1E0E]/90 text-[#F8EACD] text-[10px] font-bold">
                  {item.category}
                </div>
                {item.category === 'Audio' && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => setPlayingItem(playingItem === item.id ? null : item.id)}
                      className="w-12 h-12 rounded-full bg-[#E8B85C] text-[#2E120A] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
                    >
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-serif font-bold text-sm text-[#3E170B] group-hover:text-[#5A1E0E] transition-colors leading-snug line-clamp-2">
                  {lang === 'te' ? item.titleTe : item.title}
                </h3>
                <p className="text-[11px] text-[#7A3518] mt-1 font-medium">
                  {item.author}
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#8C6D58] mt-3 pt-2 border-t border-[#EBD7B3]/60">
                  <span>{item.format}</span>
                  <span>📥 {item.downloads} downloads</span>
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button
                onClick={() => alert(`Downloading: ${item.title}`)}
                className="w-full py-2 rounded-xl bg-[#F8EACD] hover:bg-[#5A1E0E] text-[#5A1E0E] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>ఉచిత డౌన్‌లోడ్ / Read</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

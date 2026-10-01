import React, { useState } from 'react';
import { MessageSquare, Heart, Share2, Sparkles, CheckCircle, Plus, Send } from 'lucide-react';
import { communityTopics } from '../data/mockData';
import { useLanguage } from '../../src/context/LanguageContext';

export default function CommunityPage() {
  const { lang } = useLanguage();
  const [topics, setTopics] = useState(communityTopics);
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTag, setNewTag] = useState('Bhagavad Gita');

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (newTitle.trim()) {
      const newPost = {
        id: `post-${Date.now()}`,
        author: 'You (Sadhaka)',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        tag: newTag,
        title: newTitle,
        titleTe: newTitle,
        time: 'Just now',
        likes: 1,
        replies: 0,
        verifiedAnswer: false,
      };
      setTopics([newPost, ...topics]);
      setNewTitle('');
      setShowNewPostModal(false);
    }
  };

  const handleLike = (id) => {
    setTopics(topics.map((t) => (t.id === id ? { ...t, likes: t.likes + 1 } : t)));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C99232]">
            {lang === 'te' ? 'ధర్మ జిజ్ఞాస' : 'Satsang Discussion Forum'}
          </span>
          <h1 className="font-gurukulam-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#5A1E0E] mt-1">
            {lang === 'te' ? 'గురుకుల సత్సంగ వేదిక' : 'Gurukulam Community'}
          </h1>
          <p className="text-xs sm:text-sm text-[#7A3518] mt-1">
            {lang === 'te'
              ? 'సాధకులతో మీ సందేహాలను చర్చించండి మరియు ఆచార్యుల నుండి ధార్మిక సమాధానాలు పొందండి.'
              : 'Ask spiritual questions, discuss Vedic philosophies, and read verified answers from Acharyas.'}
          </p>
        </div>

        <button
          onClick={() => setShowNewPostModal(true)}
          className="px-5 py-2.5 rounded-full bg-[#5A1E0E] hover:bg-[#3E170B] text-white text-xs font-bold flex items-center gap-2 shadow-warm transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4 text-[#E8B85C]" />
          <span>కొత్త ప్రశ్న అడగండి / Ask Question</span>
        </button>
      </div>

      {/* Discussion List */}
      <div className="space-y-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <img
                  src={topic.avatar}
                  alt={topic.author}
                  className="w-8 h-8 rounded-full object-cover border border-[#DEBE99]"
                />
                <div>
                  <h4 className="font-bold text-xs text-[#3E170B]">{topic.author}</h4>
                  <span className="text-[10px] text-[#8C6D58]">{topic.time}</span>
                </div>
              </div>

              <span className="px-2.5 py-0.5 rounded-full bg-[#F8EACD] text-[#7A3518] text-[10px] font-bold">
                {topic.tag}
              </span>
            </div>

            <h3 className="font-serif font-bold text-sm sm:text-base text-[#5A1E0E] mt-2">
              {lang === 'te' ? topic.titleTe : topic.title}
            </h3>

            {/* Acharya Verified Answer Box */}
            {topic.verifiedAnswer && topic.acharyaAnswer && (
              <div className="mt-3 p-3.5 rounded-xl bg-[#FAF3E5] border border-[#DEBE99] text-xs text-[#3E170B]">
                <div className="flex items-center gap-1.5 font-bold text-[#5A1E0E] mb-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>ఆచార్యుల సమాధానం / Verified Acharya Response</span>
                </div>
                <p className="italic text-[#5C3D2E] leading-relaxed">
                  "{topic.acharyaAnswer}"
                </p>
              </div>
            )}

            {/* Actions: Likes & Replies */}
            <div className="mt-4 pt-3 border-t border-[#EBD7B3]/60 flex items-center justify-between text-xs text-[#7A3518]">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleLike(topic.id)}
                  className="flex items-center gap-1 hover:text-[#E53935] active:scale-95 transition-all"
                >
                  <Heart className="w-4 h-4" />
                  <span>{topic.likes}</span>
                </button>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4 text-[#C99232]" />
                  <span>{topic.replies} సమాధానాలు</span>
                </div>
              </div>

              <span className="text-xs font-semibold text-[#5A1E0E] cursor-pointer hover:underline">
                చర్చలో పాల్గొనండి →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* New Question Modal */}
      {showNewPostModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowNewPostModal(false)}
        >
          <div 
            className="bg-[#FFFDF9] border border-[#EBD7B3] rounded-3xl max-w-lg w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif font-bold text-lg text-[#5A1E0E] mb-4">
              మీ సందేహం లేదా ప్రశ్నను పంచుకోండి
            </h3>

            <form onSubmit={handleCreatePost} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#3E170B] mb-1">విభాగం / Category</label>
                <select
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#E8D2B4] bg-[#FAF3E5] text-[#2E120A]"
                >
                  <option>Bhagavad Gita</option>
                  <option>Sanskrit Grammar</option>
                  <option>Bala Gurukulam</option>
                  <option>Yoga & Pranayama</option>
                  <option>Vedas & Mantras</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#3E170B] mb-1">ప్రశ్న వివరాలు / Question</label>
                <textarea
                  required
                  rows={4}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="మీ సందేహాన్ని స్పష్టంగా ఇక్కడ రాయండి..."
                  className="w-full p-3 rounded-xl border border-[#E8D2B4] bg-[#FAF3E5] text-[#2E120A] focus:outline-none focus:ring-1 focus:ring-[#C99232]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewPostModal(false)}
                  className="px-4 py-2 rounded-full border border-[#DEBE99] text-[#7A3518] font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#5A1E0E] text-[#FFF8E8] font-bold"
                >
                  ప్రశ్నను పంపండి (Post)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

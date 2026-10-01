import React, { useState } from 'react';
import { 
  User, Award, BookOpen, Bookmark, Settings, Flame, 
  Clock, ShieldCheck, Download, Edit3, CheckCircle, ExternalLink 
} from 'lucide-react';
import { userProfileData } from '../data/mockData';
import { useLanguage } from '../../src/context/LanguageContext';

export default function ProfilePage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('courses'); // 'courses', 'certificates', 'bookmarks', 'settings'

  const certificates = [
    {
      id: 'cert-1',
      title: 'Bhagavad Gita Foundational Competency Certificate',
      titleTe: 'శ్రీమద్భగవద్గీత ప్రాథమిక జ్ఞాన ప్రమాణపత్రం',
      date: 'Issued on August 15, 2026',
      issuer: 'Sanathana Gurukulam Academic Board',
      grade: 'Distinction (A+)',
    },
    {
      id: 'cert-2',
      title: 'Vedic Chanting & Pronunciation Level 1',
      titleTe: 'వేద మంత్రోచ్ఛారణ ప్రథమ శ్రేణి ధ్రువీకరణ',
      date: 'Issued on September 10, 2026',
      issuer: 'Veda Pathashala Samiti',
      grade: 'Distinction (A+)',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-left">
      
      {/* Profile Header Card */}
      <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#EBD7B3] shadow-warm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="relative">
            <img
              src={userProfileData.avatar}
              alt={userProfileData.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#C99232] shadow"
            />
            <div className="absolute -bottom-1 -right-1 bg-[#5A1E0E] text-[#E8B85C] p-1.5 rounded-full border border-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#F8EACD] text-[#7A3518] text-xs font-bold">
              {userProfileData.gurukulamStage}
            </span>
            <h1 className="font-gurukulam-heading text-xl sm:text-2xl font-bold text-[#5A1E0E] mt-1">
              {userProfileData.name}
            </h1>
            <p className="text-xs text-[#8C6D58] mt-0.5">
              {userProfileData.email} • సభ్యత్వం: {userProfileData.memberSince}
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-4 bg-[#FAF3E5] p-3 rounded-2xl border border-[#EBD7B3] self-stretch md:self-auto justify-around">
          <div className="text-center px-2">
            <p className="text-base sm:text-lg font-bold text-[#5A1E0E] flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 text-amber-500 fill-current" />
              {userProfileData.streakDays}
            </p>
            <p className="text-[10px] text-[#7A3518] uppercase">సాధన దీక్ష</p>
          </div>
          <div className="w-px h-8 bg-[#EBD7B3]"></div>
          <div className="text-center px-2">
            <p className="text-base sm:text-lg font-bold text-[#5A1E0E]">{userProfileData.hoursLearned}h</p>
            <p className="text-[10px] text-[#7A3518] uppercase">గంటలు</p>
          </div>
          <div className="w-px h-8 bg-[#EBD7B3]"></div>
          <div className="text-center px-2">
            <p className="text-base sm:text-lg font-bold text-[#5A1E0E]">{userProfileData.certificatesEarned}</p>
            <p className="text-[10px] text-[#7A3518] uppercase">సర్టిఫికెట్లు</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex items-center gap-2 border-b border-[#EBD7B3] pb-2 text-xs font-bold">
        <button
          onClick={() => setActiveTab('courses')}
          className={`px-4 py-2 rounded-t-xl transition-all ${
            activeTab === 'courses' ? 'bg-[#5A1E0E] text-white' : 'text-[#7A3518] hover:bg-[#F8EACD]'
          }`}
        >
          నా కోర్సులు (My Courses)
        </button>
        <button
          onClick={() => setActiveTab('certificates')}
          className={`px-4 py-2 rounded-t-xl transition-all ${
            activeTab === 'certificates' ? 'bg-[#5A1E0E] text-white' : 'text-[#7A3518] hover:bg-[#F8EACD]'
          }`}
        >
          సర్టిఫికెట్లు (Certificates)
        </button>
        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`px-4 py-2 rounded-t-xl transition-all ${
            activeTab === 'bookmarks' ? 'bg-[#5A1E0E] text-white' : 'text-[#7A3518] hover:bg-[#F8EACD]'
          }`}
        >
          బుక్‌మార్క్‌లు (Saved Verses)
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded-t-xl transition-all ${
            activeTab === 'settings' ? 'bg-[#5A1E0E] text-white' : 'text-[#7A3518] hover:bg-[#F8EACD]'
          }`}
        >
          సెట్టింగులు (Settings)
        </button>
      </div>

      {/* Tab 1: Enrolled Courses */}
      {activeTab === 'courses' && (
        <div className="mt-6 space-y-4">
          {userProfileData.enrolledCourses.map((c) => (
            <div
              key={c.id}
              className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 border border-[#EBD7B3] shadow-warm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#3E170B]">
                  {c.title}
                </h3>
                <p className="text-xs text-[#7A3518] mt-0.5">
                  ప్రస్తుత పాఠం: <strong>{c.currentLesson}</strong>
                </p>
                <div className="mt-2 max-w-md">
                  <div className="flex justify-between text-[11px] font-semibold text-[#5A1E0E] mb-1">
                    <span>ప్రగతి</span>
                    <span>{c.progress}%</span>
                  </div>
                  <div className="w-full bg-[#FAF3E5] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#5A1E0E] h-full rounded-full" style={{ width: `${c.progress}%` }}></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => alert(`Opening: ${c.title}`)}
                className="px-4 py-2 rounded-full bg-[#5A1E0E] text-white text-xs font-bold hover:bg-[#3E170B]"
              >
                కొనసాగించు →
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Certificates */}
      {activeTab === 'certificates' && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#EBD7B3] shadow-warm flex flex-col justify-between"
            >
              <div>
                <Award className="w-10 h-10 text-[#C99232] mb-2" />
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#5A1E0E]">
                  {lang === 'te' ? cert.titleTe : cert.title}
                </h4>
                <p className="text-xs text-[#7A3518] mt-1">{cert.issuer}</p>
                <p className="text-[11px] text-[#8C6D58] mt-2">{cert.date} • {cert.grade}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EBD7B3]/60 flex items-center justify-between">
                <button
                  onClick={() => alert(`Downloading Certificate: ${cert.title}`)}
                  className="px-3 py-1.5 rounded-lg bg-[#F8EACD] text-[#5A1E0E] text-xs font-bold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> PDF డౌన్‌లోడ్
                </button>
                <span className="text-[11px] text-emerald-800 font-bold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-600" /> వెరిఫైడ్
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Bookmarks */}
      {activeTab === 'bookmarks' && (
        <div className="mt-6 space-y-3">
          <div className="bg-[#FFFDF9] rounded-2xl p-4 border border-[#EBD7B3] shadow-warm">
            <h4 className="font-serif font-bold text-sm text-[#5A1E0E]">
              కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన (భగవద్గీత 2.47)
            </h4>
            <p className="text-xs text-[#5C3D2E] mt-1">
              నీకు కర్తవ్యము చేయడానికే అధికారం, ఫలితంపై మాత్రం ఆశవద్దు.
            </p>
            <span className="text-[10px] text-[#8C6D58] mt-2 block">సేవ్ చేసిన తేదీ: 2 రోజుల క్రితం</span>
          </div>
        </div>
      )}

      {/* Tab 4: Settings Mockup */}
      {activeTab === 'settings' && (
        <div className="mt-6 bg-[#FFFDF9] rounded-2xl p-6 border border-[#EBD7B3] shadow-warm max-w-lg space-y-4 text-xs">
          <h3 className="font-serif font-bold text-base text-[#5A1E0E]">ఖాతా సెట్టింగులు (Account Settings)</h3>
          <div>
            <label className="block text-[#3E170B] font-semibold mb-1">పేరు</label>
            <input type="text" defaultValue={userProfileData.name} className="w-full p-2.5 rounded-xl border border-[#E8D2B4] bg-[#FAF3E5]" />
          </div>
          <div>
            <label className="block text-[#3E170B] font-semibold mb-1">ఈమెయిల్</label>
            <input type="email" defaultValue={userProfileData.email} className="w-full p-2.5 rounded-xl border border-[#E8D2B4] bg-[#FAF3E5]" />
          </div>
          <div>
            <label className="block text-[#3E170B] font-semibold mb-1">ఆధ్యాత్మిక అభ్యసన విభాగం</label>
            <select defaultValue={userProfileData.gurukulamStage} className="w-full p-2.5 rounded-xl border border-[#E8D2B4] bg-[#FAF3E5]">
              <option>Bala Gurukulam (Ages 5–12)</option>
              <option>Yuva Gurukulam (Ages 13–25)</option>
              <option>Sadhaka Gurukulam (Ages 26–55)</option>
              <option>Jnana Gurukulam (Ages 56+)</option>
            </select>
          </div>
          <button
            onClick={() => alert('Settings saved locally!')}
            className="px-5 py-2.5 rounded-full bg-[#5A1E0E] text-white font-bold"
          >
            మార్పులను భద్రపరచండి (Save Changes)
          </button>
        </div>
      )}

    </div>
  );
}

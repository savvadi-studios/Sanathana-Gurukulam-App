import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Clock, Award, Flame, CheckCircle, ArrowRight } from 'lucide-react';
import { userProfileData, popularCourses } from '../data/mockData';
import { useLanguage } from '../../src/context/LanguageContext';

export default function LearnPage() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-left">
      
      {/* Top Welcome & Daily Streak Banner */}
      <div className="bg-gradient-to-r from-[#3E170B] via-[#5A1E0E] to-[#2E0F07] rounded-3xl p-6 sm:p-8 text-[#FFF8E8] shadow-warm-lg border border-[#C99232]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#E8B85C]">
            {lang === 'te' ? 'శుభోదయం, సాధక' : 'Welcome back, Sadhaka'}
          </span>
          <h1 className="font-gurukulam-heading text-2xl sm:text-3xl font-bold mt-1">
            {userProfileData.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#F8EACD] mt-1 max-w-xl">
            {lang === 'te'
              ? 'మీ ఆధ్యాత్మిక అభ్యాసంలో స్థిరత్వం ఎంతో ముఖ్యం. నేటి అధ్యాయాన్ని పూర్తి చేసుకోండి.'
              : 'Consistency in sadhana builds clarity. Continue where you left off today.'}
          </p>
        </div>

        {/* Streak & Hours Counter */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15">
          <div className="flex items-center gap-2 text-[#E8B85C]">
            <Flame className="w-6 h-6 fill-current animate-bounce" />
            <div>
              <p className="text-lg font-bold leading-tight">{userProfileData.streakDays} Days</p>
              <p className="text-[10px] text-[#F8EACD] uppercase tracking-wider">నిత్య సాధన దీక్ష</p>
            </div>
          </div>
          <div className="w-px h-8 bg-white/20 mx-1"></div>
          <div>
            <p className="text-lg font-bold leading-tight text-[#FFF8E8]">{userProfileData.hoursLearned} hrs</p>
            <p className="text-[10px] text-[#F8EACD] uppercase tracking-wider">అధ్యయన సమయం</p>
          </div>
        </div>
      </div>

      {/* 1. Continue Learning Featured Hero Card */}
      <div className="mt-8">
        <h2 className="font-gurukulam-heading text-lg sm:text-xl font-bold text-[#5A1E0E] mb-4">
          {lang === 'te' ? 'అభ్యసన కొనసాగించండి (Continue Learning)' : 'Continue Learning'}
        </h2>

        <div className="bg-[#FFFDF9] rounded-3xl p-5 sm:p-6 border border-[#EBD7B3] shadow-warm flex flex-col md:flex-row items-center gap-6">
          <div className="relative aspect-video w-full md:w-72 rounded-2xl overflow-hidden bg-[#240B04] flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80"
              alt="Bhagavad Gita"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#E8B85C] flex items-center justify-center text-[#2E120A] shadow">
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
              </div>
            </div>
          </div>

          <div className="flex-1 w-full text-left">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#C99232]">
              ప్రస్తుత కోర్సు • Active Course
            </span>
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#3E170B] mt-0.5">
              Bhagavad Gita for Beginners
            </h3>
            <p className="text-xs text-[#7A3518] mt-1">
              తదుపరి పాఠం: <strong>Chapter 4: Jnana Karma Sannyasa Yoga (శ్లోకం 1-12)</strong>
            </p>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs font-semibold text-[#5A1E0E] mb-1">
                <span>పూర్తయిన ప్రగతి / Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-[#F3E5D0] h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#5A1E0E] h-full rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[11px] text-[#8C6D58]">చివరిగా చూసింది: నిన్న సాయంత్రం</span>
              <Link
                to="/courses/bhagavad-gita-beginners"
                className="px-5 py-2 rounded-full bg-[#5A1E0E] hover:bg-[#3E170B] text-[#FFF8E8] text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>పాఠం ప్రారంభించు →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. My Enrolled Courses Section */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-gurukulam-heading text-lg sm:text-xl font-bold text-[#5A1E0E]">
            {lang === 'te' ? 'నా కోర్సులు (My Courses)' : 'My Courses'}
          </h2>
          <Link to="/courses" className="text-xs font-semibold text-[#C99232] hover:underline">
            అన్ని కోర్సులు బ్రౌజ్ చేయండి →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userProfileData.enrolledCourses.map((c) => (
            <div
              key={c.id}
              className="bg-[#FFFDF9] rounded-2xl p-4 border border-[#EBD7B3] shadow-warm flex flex-col justify-between"
            >
              <div>
                <h4 className="font-serif font-bold text-sm text-[#3E170B] leading-snug">
                  {c.title}
                </h4>
                <p className="text-xs text-[#7A3518] mt-1 line-clamp-1">
                  {c.currentLesson}
                </p>

                <div className="mt-3">
                  <div className="flex justify-between text-[11px] text-[#5A1E0E] font-medium mb-1">
                    <span>ప్రగతి</span>
                    <span>{c.progress}%</span>
                  </div>
                  <div className="w-full bg-[#F3E5D0] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#C99232] h-full rounded-full"
                      style={{ width: `${c.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EBD7B3]/60 flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#8C6D58]">{c.lastAccessed}</span>
                <Link
                  to={`/courses/${c.id}`}
                  className="font-bold text-[#5A1E0E] hover:text-[#C99232]"
                >
                  కొనసాగించు →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Recommended For You */}
      <div className="mt-10">
        <h2 className="font-gurukulam-heading text-lg sm:text-xl font-bold text-[#5A1E0E] mb-4">
          {lang === 'te' ? 'మీ సాధనకు సిఫార్సు చేసినవి (Recommended Courses)' : 'Recommended Courses'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularCourses.slice(2, 6).map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="bg-[#FFFDF9] rounded-2xl p-3 border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover transition-all flex flex-col justify-between"
            >
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-2 bg-[#F3E5D0]">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs text-[#3E170B] line-clamp-1">
                  {course.title}
                </h4>
                <p className="text-[10px] text-[#7A3518] mt-0.5">{course.instructor}</p>
              </div>
              <div className="mt-2 pt-2 border-t border-[#EBD7B3]/60 flex items-center justify-between text-[11px] font-bold text-[#5A1E0E]">
                <span>{course.type}</span>
                <span>వివరాలు →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

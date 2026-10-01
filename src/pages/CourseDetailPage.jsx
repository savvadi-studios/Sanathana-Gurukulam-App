import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Play, Star, BookOpen, Clock, Users, Award, 
  ChevronDown, ChevronUp, CheckCircle, ArrowLeft, Share2, Heart, ShieldCheck 
} from 'lucide-react';
import { popularCourses } from '../data/mockData';
import { useLanguage } from '../../src/context/LanguageContext';

export default function CourseDetailPage() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const [expandedChapter, setExpandedChapter] = useState(0);
  const [enrolled, setEnrolled] = useState(false);
  const [activeVideo, setActiveVideo] = useState(false);

  // Find course or default to first
  const course = popularCourses.find((c) => c.id === id) || popularCourses[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-left">
      
      {/* Back Button */}
      <Link
        to="/courses"
        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#5A1E0E] hover:text-[#C99232] mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{lang === 'te' ? 'కోర్సుల జాబితాకు తిరిగి వెళ్లండి' : 'Back to All Courses'}</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Main Course Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Header Title Section */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E8B85C]/20 border border-[#E8B85C]/40 text-[#7A3518] uppercase">
                {course.category}
              </span>
              <span className="text-xs text-[#8C6D58] font-semibold">
                {course.level} Level
              </span>
            </div>

            <h1 className="font-gurukulam-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#5A1E0E] leading-tight">
              {lang === 'te' ? course.titleTe : course.title}
            </h1>

            <p className="text-sm sm:text-base text-[#5C3D2E] mt-3 leading-relaxed">
              {course.description}
            </p>

            {/* Ratings and Stats row */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-[#EBD7B3] text-xs sm:text-sm text-[#7A3518]">
              <div className="flex items-center gap-1 text-[#3E170B] font-bold">
                <Star className="w-4 h-4 fill-[#C99232] text-[#C99232]" />
                <span>{course.rating}</span>
                <span className="text-xs font-normal text-[#8C6D58]">({course.reviewsCount} సమీక్షలు)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-[#C99232]" />
                <span>12,450 సాధకులు చేరారు</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#C99232]" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-[#C99232]" />
                <span>{course.lessonsCount} పాఠాలు</span>
              </div>
            </div>
          </div>

          {/* Interactive Video Player Mockup */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#240B04] border border-[#7A3518] shadow-warm-lg flex items-center justify-center">
            {activeVideo ? (
              <div className="w-full h-full bg-[#1A0703] p-4 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center text-xs text-[#E8B85C]">
                  <span>పాఠం 1: ప్రారంభ పరిచయం (Streaming HD)</span>
                  <button onClick={() => setActiveVideo(false)} className="hover:underline">Close</button>
                </div>
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#E53935] mx-auto flex items-center justify-center animate-pulse">
                    <Play className="w-7 h-7 text-white fill-current translate-x-0.5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[#F8EACD]">
                    {course.title} - ప్రత్యక్ష వీడియో పాఠం ప్లే అవుతోంది
                  </p>
                  <p className="text-xs text-[#CBB79F] mt-1">ఆచార్య వ్యాఖ్యానం కొనసాగుతోంది...</p>
                </div>
                <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                  <div className="w-1/3 bg-[#E8B85C] h-full"></div>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E8B85C] hover:bg-[#F4D38B] active:scale-95 text-[#2E120A] flex items-center justify-center shadow-2xl transition-all group"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-1" />
                  </button>
                  <p className="mt-3 text-xs sm:text-sm font-bold text-[#FFF8E8] tracking-wider uppercase drop-shadow">
                    Preview Sample Discourse (ఉచిత నమూనా)
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Curriculum Section Accordion */}
          <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#EBD7B3] shadow-warm">
            <div className="flex items-center justify-between pb-4 border-b border-[#EBD7B3]">
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#5A1E0E]">
                  {lang === 'te' ? 'పాఠ్య ప్రణాళిక (సిలబస్)' : 'Course Curriculum'}
                </h3>
                <p className="text-xs text-[#7A3518] mt-0.5">
                  {course.curriculum ? course.curriculum.length : 6} అధ్యాయాలు • మొత్తం {course.duration}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {(course.curriculum || [
                { id: 1, title: 'Introduction & Context', duration: '30m' },
                { id: 2, title: 'Foundational Concepts & Terminology', duration: '45m' },
                { id: 3, title: 'Core Philosophy & Applied Shlokas', duration: '50m' },
              ]).map((chap, idx) => {
                const isOpen = expandedChapter === idx;
                return (
                  <div
                    key={chap.id}
                    className="rounded-2xl border border-[#E8D2B4] overflow-hidden bg-[#FAF3E5]/40 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedChapter(isOpen ? -1 : idx)}
                      className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-[#F8EACD]/60 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#5A1E0E] text-[#FFF8E8] text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-serif font-semibold text-xs sm:text-sm text-[#3E170B]">
                          {chap.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#7A3518]">
                        <span>{chap.duration}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 py-3 bg-[#FFFDF9] border-t border-[#E8D2B4] text-xs text-[#5C3D2E] space-y-2">
                        <div className="flex items-center justify-between py-1 hover:text-[#5A1E0E]">
                          <span className="flex items-center gap-2">
                            <Play className="w-3 h-3 text-[#C99232]" /> 1.1 శ్లోక పారాయణం & ప్రాథమిక వివరణ
                          </span>
                          <span className="text-[11px] text-[#8C6D58]">15 నిమిషాలు</span>
                        </div>
                        <div className="flex items-center justify-between py-1 hover:text-[#5A1E0E]">
                          <span className="flex items-center gap-2">
                            <BookOpen className="w-3 h-3 text-[#C99232]" /> 1.2 ప్రతిపదార్థ తాత్పర్యం (PDF నోట్స్)
                          </span>
                          <span className="text-[11px] text-[#8C6D58]">డౌన్‌లోడ్</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructor Bio Box */}
          <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#EBD7B3] shadow-warm flex flex-col sm:flex-row gap-5 items-center sm:items-start">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
              alt={course.instructor}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#C99232]"
            />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C99232]">
                బోధకులు / Lead Acharya
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#5A1E0E]">
                {course.instructor}
              </h3>
              <p className="text-xs text-[#7A3518] font-medium mt-0.5">
                {course.instructorTitle || 'Dean of Vedantic Studies'}
              </p>
              <p className="text-xs text-[#5C3D2E] mt-2 leading-relaxed">
                25 సంవత్సరాలకు పైగా వేదాంత, సంస్కృత శాస్త్రాలను అధ్యయనం చేసిన విద్వాంసులు. దేశ విదేశాల్లో వేలాది సాధకులకు ధర్మ సందేశాన్ని అందించారు.
              </p>
            </div>
          </div>

        </div>

        {/* Right 1 Col: Enrollment Card & Features Sticky */}
        <div className="space-y-6">
          <div className="sticky top-20 bg-[#FFFDF9] rounded-3xl p-6 border border-[#EBD7B3] shadow-warm-lg">
            
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <span className="text-xs text-[#7A3518] block font-medium">రుసుము / Price:</span>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-[#5A1E0E]">
                  {course.price === 0 ? 'ఉచితం (Free)' : `₹${course.price}`}
                </span>
                {course.originalPrice && (
                  <span className="text-xs line-through text-[#8C6D58] ml-2">
                    ₹{course.originalPrice}
                  </span>
                )}
              </div>

              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                లైఫ్‌టైమ్ యాక్సెస్
              </span>
            </div>

            {/* Primary Action Button: Start Learning */}
            <button
              type="button"
              onClick={() => setEnrolled(true)}
              className="w-full py-3.5 rounded-full bg-[#5A1E0E] hover:bg-[#3E170B] active:scale-95 text-[#FFF8E8] font-bold text-sm tracking-wide shadow-warm transition-all flex items-center justify-center gap-2"
            >
              {enrolled ? (
                <>
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>చేరడం పూర్తయింది! తరగతికి వెళ్లండి</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current text-[#E8B85C]" />
                  <span>అభ్యసించడం ప్రారంభించండి (Start Learning)</span>
                </>
              )}
            </button>

            {enrolled && (
              <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs">
                మీరు విజయవంతంగా ఈ కోర్సులో చేరారు. <Link to="/learn" className="font-bold underline">అభ్యసన విభాగానికి వెళ్ళండి →</Link>
              </div>
            )}

            {/* Course Features Guarantee */}
            <div className="mt-6 pt-5 border-t border-[#EBD7B3] space-y-3 text-xs text-[#5C3D2E]">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#C99232]" />
                <span>పూర్తి HD వీడియోలు & ఆడియో లెక్చర్లు</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#C99232]" />
                <span>డౌన్‌లోడ్ చేసుకోదగిన సంస్కృత శ్లోక PDFలు</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#C99232]" />
                <span>ఆచార్యుల ప్రశ్న-జవాబుల చర్చా వేదిక</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#C99232]" />
                <span>గురుకుల అధికారిక పూర్తి ధృవీకరణ పత్రం</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C99232]" />
                <span>మొబైల్, టాబ్లెట్, డెస్క్‌టాప్ మద్దతు</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EBD7B3] flex items-center justify-around text-xs text-[#7A3518]">
              <button className="flex items-center gap-1.5 hover:text-[#5A1E0E]">
                <Heart className="w-4 h-4" /> సేవ్ చేయండి
              </button>
              <button className="flex items-center gap-1.5 hover:text-[#5A1E0E]">
                <Share2 className="w-4 h-4" /> షేర్ చేయండి
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

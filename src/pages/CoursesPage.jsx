import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, BookOpen, Check } from 'lucide-react';
import { popularCourses, knowledgeCategories } from '../data/mockData';
import { useLanguage } from '../../src/context/LanguageContext';

export default function CoursesPage() {
  const { lang, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';
  const initialFilter = searchParams.get('filter') || 'all';

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [typeFilter, setTypeFilter] = useState(initialFilter); // 'all', 'free', 'paid'
  const [levelFilter, setLevelFilter] = useState('all'); // 'all', 'Beginner', 'Intermediate', 'Advanced'

  const filteredCourses = useMemo(() => {
    return popularCourses.filter((course) => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.titleTe.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        categoryFilter === 'all' || course.category === categoryFilter;

      const matchesType = 
        typeFilter === 'all' || 
        (typeFilter === 'free' && course.type === 'Free') ||
        (typeFilter === 'paid' && course.type === 'Paid');

      const matchesLevel = 
        levelFilter === 'all' || course.level === levelFilter;

      return matchesSearch && matchesCategory && matchesType && matchesLevel;
    });
  }, [searchTerm, categoryFilter, typeFilter, levelFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* Page Title & Search Bar */}
      <div className="text-left mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C99232]">
          {lang === 'te' ? 'జ్ఞాన భాండాగారం' : 'Vedic Course Catalog'}
        </span>
        <h1 className="font-gurukulam-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#5A1E0E] mt-1">
          {lang === 'te' ? 'సనాతన గురుకుల కోర్సులు' : 'Explore All Sacred Courses'}
        </h1>
        <p className="text-xs sm:text-sm text-[#7A3518] mt-1 max-w-2xl">
          {lang === 'te' 
            ? 'వేదాలు, ఉపనిషత్తులు, సంస్కృతం, భగవద్గీత మరియు భారతీయ చరిత్రపై ప్రామాణికమైన కోర్సులు.'
            : 'Authentic knowledge grounded in sacred texts, taught by experienced traditional Acharyas.'}
        </p>

        {/* Search and Filters Header Row */}
        <div className="mt-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#7A3518] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'te' ? 'కోర్సు లేదా ఆచార్యుల పేరు వెతకండి...' : 'Search courses, subjects, or teachers...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FFFDF9] border border-[#EBD7B3] text-sm text-[#3E170B] placeholder-[#8C6D58] focus:outline-none focus:ring-2 focus:ring-[#C99232]"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7A3518] hover:text-[#5A1E0E]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-semibold text-[#7A3518] whitespace-nowrap flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> ఫిల్టర్:
            </span>

            {/* Price Filter */}
            {['all', 'free', 'paid'].map((f) => (
              <button
                key={f}
                onClick={() => setTypeFilter(f)}
                className={`px-3 py-1 rounded-full text-xs font-semibold capitalize whitespace-nowrap transition-all ${
                  typeFilter === f
                    ? 'bg-[#5A1E0E] text-[#FFF8E8]'
                    : 'bg-[#FFFDF9] text-[#5A1E0E] border border-[#EBD7B3] hover:bg-[#F8EACD]'
                }`}
              >
                {f === 'all' ? (lang === 'te' ? 'అన్నీ' : 'All') : f === 'free' ? (lang === 'te' ? 'ఉచితం' : 'Free') : (lang === 'te' ? 'రుసుము' : 'Paid')}
              </button>
            ))}

            {/* Difficulty Level */}
            {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevelFilter(levelFilter === lvl ? 'all' : lvl)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  levelFilter === lvl
                    ? 'bg-[#C99232] text-[#2E120A]'
                    : 'bg-[#FFFDF9] text-[#7A3518] border border-[#EBD7B3] hover:bg-[#F8EACD]'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

        </div>

        {/* Category Horizontal Scroll Pills */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              categoryFilter === 'all'
                ? 'bg-[#5A1E0E] text-[#FFF8E8] shadow-sm'
                : 'bg-[#EBD7B3]/60 text-[#3E170B] hover:bg-[#EBD7B3]'
            }`}
          >
            {lang === 'te' ? 'అన్ని విభాగాలు' : 'All Categories'}
          </button>
          {knowledgeCategories.filter(c => c.id !== 'more').map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                categoryFilter === cat.id
                  ? 'bg-[#5A1E0E] text-[#FFF8E8] shadow-sm'
                  : 'bg-[#FFFDF9] text-[#5A1E0E] border border-[#EBD7B3] hover:bg-[#F8EACD]'
              }`}
            >
              <span>{cat.symbol}</span>
              <span>{lang === 'te' ? cat.nameTe : cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="bg-[#FFFDF9] rounded-2xl p-12 text-center border border-[#EBD7B3] shadow-warm my-8">
          <p className="text-base text-[#5A1E0E] font-serif font-bold">
            {lang === 'te' ? 'మీ అన్వేషణకు సరిపోయే కోర్సులు కనిపించలేదు.' : 'No courses found matching your criteria.'}
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setCategoryFilter('all');
              setTypeFilter('all');
              setLevelFilter('all');
            }}
            className="mt-4 px-4 py-2 rounded-full bg-[#5A1E0E] text-[#FFF8E8] text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="group flex flex-col bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3E5D0]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#2E0F07]/80 text-[#FFF8E8] backdrop-blur-sm">
                  {course.level}
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#3E170B] group-hover:text-[#5A1E0E] transition-colors leading-snug line-clamp-2">
                    {lang === 'te' ? course.titleTe : course.title}
                  </h3>

                  <p className="text-[11px] text-[#7A3518] mt-1 font-medium truncate">
                    {course.instructor}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        course.type === 'Free'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-[#F8EACD] text-[#7A3518] border border-[#DEBE99]'
                      }`}
                    >
                      {lang === 'te' ? course.typeTe : course.type}
                    </span>

                    <span className="text-[11px] text-[#7A3518] font-medium flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-[#C99232]" />
                      {course.lessonsCount} Lessons
                    </span>

                    <span className="text-[11px] text-[#7A3518] font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C99232]" />
                      {course.duration}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EBD7B3]/60 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#3E170B]">
                    <Star className="w-3.5 h-3.5 fill-[#C99232] text-[#C99232]" />
                    <span>{course.rating}</span>
                    <span className="text-[10px] text-[#8C6D58] font-normal">
                      ({course.reviewsCount})
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#5A1E0E] group-hover:text-[#C99232]">
                    {course.price === 0 ? 'ఉచితం' : `₹${course.price}`}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
}

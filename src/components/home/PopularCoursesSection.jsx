import React from 'react';
import { Link } from 'react-router-dom';
import { Star, BookOpen, ArrowRight } from 'lucide-react';
import { popularCourses } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function PopularCoursesSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl mx-auto">
      {/* Header Row: Title & View All Link */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-gurukulam-heading text-xl sm:text-2xl font-bold text-[#5A1E0E]">
          {t.courses.title}
        </h2>

        <Link
          to="/courses"
          className="text-xs sm:text-sm font-semibold text-[#5A1E0E] hover:text-[#C99232] flex items-center gap-1 group transition-colors"
        >
          <span>{t.courses.viewAll}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid: 2 columns on mobile, 4 columns on desktop (strictly matching reference image) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {popularCourses.slice(0, 4).map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="group flex flex-col bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#EBD7B3] shadow-warm hover:shadow-warm-hover hover:-translate-y-1 transition-all duration-300 text-left"
          >
            {/* Course Image */}
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#F3E5D0]">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Course Details */}
            <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-serif font-bold text-xs sm:text-sm md:text-base text-[#3E170B] group-hover:text-[#5A1E0E] transition-colors leading-snug line-clamp-2 min-h-[2.5rem]">
                  {lang === 'te' ? course.titleTe : course.title}
                </h3>

                {/* Badges Row: Free/Paid Badge + Lesson Count */}
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold ${
                      course.type === 'Free'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-[#F8EACD] text-[#7A3518] border border-[#DEBE99]'
                    }`}
                  >
                    {lang === 'te' ? course.typeTe : course.type}
                  </span>

                  <span className="text-[10px] sm:text-[11px] text-[#7A3518] font-medium flex items-center gap-1">
                    {course.lessonsCount} {t.courses.lessons}
                  </span>
                </div>
              </div>

              {/* Bottom Row: Rating */}
              <div className="mt-3 pt-2 border-t border-[#EBD7B3]/60 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#3E170B]">
                  <Star className="w-3.5 h-3.5 fill-[#C99232] text-[#C99232]" />
                  <span>{course.rating}</span>
                  <span className="text-[10px] text-[#8C6D58] font-normal">
                    ({course.reviewsCount})
                  </span>
                </div>

                <div className="text-[10px] font-bold text-[#C99232] group-hover:translate-x-0.5 transition-transform">
                  వివరాలు →
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

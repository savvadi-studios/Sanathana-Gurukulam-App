import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LearningPathSection from '../components/home/LearningPathSection';
import CategoryScroll from '../components/home/CategoryScroll';
import LiveClassesSection from '../components/home/LiveClassesSection';
import PopularCoursesSection from '../components/home/PopularCoursesSection';
import QuickAccessSection from '../components/home/QuickAccessSection';
import FeaturedTeachersSection from '../components/home/FeaturedTeachersSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full pb-4 md:pb-8">
      {/* Sections 1 to 6: Exactly matching the uploaded mobile screenshot */}
      <HeroSection />
      <LearningPathSection />
      <CategoryScroll />
      <LiveClassesSection />
      <PopularCoursesSection />
      <QuickAccessSection />

      {/* Desktop-only extended sections (hidden on mobile to match the exact mobile screen reference) */}
      <div className="hidden md:block">
        <FeaturedTeachersSection />
        <TestimonialsSection />
        <UpcomingEventsSection />
        <NewsletterSection />
      </div>
    </div>
  );
}

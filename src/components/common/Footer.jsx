import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useLanguage } from '../../context/LanguageContext';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-[#2E0F07] text-[#F8EACD] border-t border-[#4E2214] mt-12 pb-24 lg:pb-12 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Blessing Shloka Banner */}
        <div className="text-center pb-8 border-b border-white/10 mb-10">
          <p className="font-serif text-sm sm:text-base text-[#E8B85C] tracking-widest font-semibold">
            ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाః ।<br className="sm:hidden" /> सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥
          </p>
          <p className="text-[11px] sm:text-xs text-[#EBD7B3]/80 mt-1 font-telugu">
            అందరూ సుఖంగా ఉండాలి • అందరూ ఆరోగ్యంగా ఉండాలి • ఎవరికీ ఎటువంటి దుఃఖం కలగకూడదు
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
          
          {/* Col 1: Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="brightness-125">
              <Logo size="large" />
            </div>
            
            <p className="text-xs sm:text-sm text-[#EBD7B3]/80 leading-relaxed max-w-sm">
              {lang === 'te'
                ? 'సనాతన ధర్మం, వేదాలు, భగవద్గీత, సంస్కృతం మరియు భారతీయ సంస్కృతిని నేటి తరానికి అందించే సమగ్ర డిజిటల్ గురుకులం.'
                : 'A modern online Gurukulam preserving and propagating Sanatana Dharma, the Vedas, Sanskrit linguistics, and Bharatiya heritage for learners of all ages worldwide.'}
            </p>

            <div className="space-y-1.5 text-xs text-[#EBD7B3]/90 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E8B85C]" />
                <span>Bharatiya Vidya Kendra, Hyderabad / Online Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E8B85C]" />
                <span>acharya@sanathanagurukulam.org</span>
              </div>
            </div>
          </div>

          {/* Col 2: Learning Paths */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#E8B85C] uppercase tracking-wider mb-3">
              {lang === 'te' ? 'అభ్యసన మార్గాలు' : 'Learning Paths'}
            </h4>
            <ul className="space-y-2 text-xs text-[#EBD7B3]/80">
              <li>
                <Link to="/courses?path=bala" className="hover:text-white transition-colors">
                  {lang === 'te' ? 'బాల గురుకులం (5–12 సం॥)' : 'Bala Gurukulam (Ages 5–12)'}
                </Link>
              </li>
              <li>
                <Link to="/courses?path=yuva" className="hover:text-white transition-colors">
                  {lang === 'te' ? 'యువ గురుకులం (13–25 సం॥)' : 'Yuva Gurukulam (Ages 13–25)'}
                </Link>
              </li>
              <li>
                <Link to="/courses?path=sadhaka" className="hover:text-white transition-colors">
                  {lang === 'te' ? 'సాధక గురుకులం (26–55 సం॥)' : 'Sadhaka Gurukulam (Ages 26–55)'}
                </Link>
              </li>
              <li>
                <Link to="/courses?path=jnana" className="hover:text-white transition-colors">
                  {lang === 'te' ? 'జ్ఞాన గురుకులం (56+ సం॥)' : 'Jnana Gurukulam (Ages 56+)'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#E8B85C] uppercase tracking-wider mb-3">
              {lang === 'te' ? 'ముఖ్య విభాగాలు' : 'Platform Links'}
            </h4>
            <ul className="space-y-2 text-xs text-[#EBD7B3]/80">
              <li><Link to="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
              <li><Link to="/live" className="hover:text-white transition-colors">Live Classes</Link></li>
              <li><Link to="/library" className="hover:text-white transition-colors">Digital Library</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events & Satsangs</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Community Forum</Link></li>
              <li><Link to="/dashboard" className="text-[#E8B85C] font-semibold hover:underline">Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#E8B85C] uppercase tracking-wider mb-3">
              {lang === 'te' ? 'నియమాలు & సహాయం' : 'Policies & Help'}
            </h4>
            <ul className="space-y-2 text-xs text-[#EBD7B3]/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About Gurukulam</Link></li>
              <li><Link to="/teachers" className="hover:text-white transition-colors">Our Acharyas</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EBD7B3]/60 gap-3">
          <p>© {new Date().getFullYear()} Sanathana Gurukulam. All sacred wisdom preserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-[#E53935] fill-current" /> for Indian Heritage
          </p>
        </div>

      </div>
    </footer>
  );
}

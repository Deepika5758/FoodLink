import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/Layout';
import { motion } from 'framer-motion';
import { 
  Heart, Truck, Building2, Award, Leaf, 
  ArrowRight, Users, Globe, Sparkles 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { t, language } = useLanguage();

  const stats = [
    { value: '50K+', label: language === 'en' ? 'Meals Donated' : language === 'hi' ? 'भोजन दान किया' : 'ಊಟ ದಾನ', icon: Heart },
    { value: '200+', label: language === 'en' ? 'Partner NGOs' : language === 'hi' ? 'साझेदार एनजीओ' : 'ಪಾಲುದಾರ ಎನ್‌ಜಿಒಗಳು', icon: Building2 },
    { value: '500+', label: language === 'en' ? 'Active Volunteers' : language === 'hi' ? 'सक्रिय स्वयंसेवक' : 'ಸಕ್ರಿಯ ಸ್ವಯಂಸೇವಕರು', icon: Truck },
    { value: '10K kg', label: language === 'en' ? 'CO₂ Saved' : language === 'hi' ? 'CO₂ बचाया' : 'CO₂ ಉಳಿಸಲಾಗಿದೆ', icon: Leaf },
  ];

  const features = [
    {
      icon: Heart,
      title: language === 'en' ? 'Donate Food' : language === 'hi' ? 'भोजन दान करें' : 'ಆಹಾರ ದಾನ ಮಾಡಿ',
      description: language === 'en' ? 'Connect your surplus food with those who need it most' : language === 'hi' ? 'अपने अतिरिक्त भोजन को जरूरतमंदों से जोड़ें' : 'ನಿಮ್ಮ ಹೆಚ್ಚುವರಿ ಆಹಾರವನ್ನು ಅಗತ್ಯವಿರುವವರಿಗೆ ಸಂಪರ್ಕಿಸಿ'
    },
    {
      icon: Truck,
      title: language === 'en' ? 'Volunteer' : language === 'hi' ? 'स्वयंसेवक बनें' : 'ಸ್ವಯಂಸೇವಕರಾಗಿ',
      description: language === 'en' ? 'Help deliver food and make a real difference' : language === 'hi' ? 'भोजन पहुंचाने में मदद करें' : 'ಆಹಾರ ತಲುಪಿಸಲು ಸಹಾಯ ಮಾಡಿ'
    },
    {
      icon: Building2,
      title: language === 'en' ? 'NGO Partner' : language === 'hi' ? 'एनजीओ भागीदार' : 'ಎನ್‌ಜಿಒ ಪಾಲುದಾರ',
      description: language === 'en' ? 'Receive food donations efficiently for your community' : language === 'hi' ? 'अपने समुदाय के लिए भोजन दान प्राप्त करें' : 'ನಿಮ್ಮ ಸಮುದಾಯಕ್ಕೆ ಆಹಾರ ದಾನ ಸ್ವೀಕರಿಸಿ'
    },
    {
      icon: Award,
      title: language === 'en' ? 'Earn Rewards' : language === 'hi' ? 'पुरस्कार अर्जित करें' : 'ಬಹುಮಾನಗಳನ್ನು ಗಳಿಸಿ',
      description: language === 'en' ? 'Get recognized with badges and redeem CIP points' : language === 'hi' ? 'बैज प्राप्त करें और CIP पॉइंट भुनाएं' : 'ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಪಡೆಯಿರಿ ಮತ್ತು CIP ಪಾಯಿಂಟ್‌ಗಳನ್ನು ರಿಡೀಮ್ ಮಾಡಿ'
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl float-animation" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/80">
                {language === 'en' ? 'Join the movement to end food waste' : language === 'hi' ? 'खाद्य अपशिष्ट समाप्त करने में शामिल हों' : 'ಆಹಾರ ವ್ಯರ್ಥವನ್ನು ಕೊನೆಗೊಳಿಸಲು ಸೇರಿ'}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">FoodLink</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              {t.tagline}
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'A revolutionary platform connecting food donors with NGOs, volunteers, orphanages, and homeless shelters in real-time. Together, we can eliminate food waste and feed those in need.'
                : language === 'hi'
                ? 'खाद्य दाताओं को एनजीओ, स्वयंसेवकों, अनाथालयों और बेघर आश्रयों से रीयल-टाइम में जोड़ने वाला एक क्रांतिकारी मंच।'
                : 'ಆಹಾರ ದಾನಿಗಳನ್ನು ಎನ್‌ಜಿಒಗಳು, ಸ್ವಯಂಸೇವಕರು, ಅನಾಥಾಲಯಗಳು ಮತ್ತು ನಿರಾಶ್ರಿತರ ಆಶ್ರಯಗಳೊಂದಿಗೆ ನೈಜ-ಸಮಯದಲ್ಲಿ ಸಂಪರ್ಕಿಸುವ ಕ್ರಾಂತಿಕಾರಿ ವೇದಿಕೆ.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('DonorDashboard')}>
                <Button className="glass-btn px-8 py-6 text-lg rounded-xl group glow-cyan hover:glow-mint transition-all duration-300">
                  <Heart className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Start Donating' : language === 'hi' ? 'दान शुरू करें' : 'ದಾನ ಪ್ರಾರಂಭಿಸಿ'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Features')}>
                <Button variant="outline" className="glass-btn px-8 py-6 text-lg rounded-xl border-white/30 hover:border-cyan-400">
                  <Globe className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Explore Features' : language === 'hi' ? 'विशेषताएं देखें' : 'ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-1">{stat.value}</h3>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'How It Works' : language === 'hi' ? 'यह कैसे काम करता है' : 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ'}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Simple steps to make a real impact in reducing food waste'
              : language === 'hi'
              ? 'खाद्य अपशिष्ट को कम करने में वास्तविक प्रभाव डालने के सरल कदम'
              : 'ಆಹಾರ ವ್ಯರ್ಥವನ್ನು ಕಡಿಮೆ ಮಾಡುವಲ್ಲಿ ನಿಜವಾದ ಪ್ರಭಾವ ಬೀರಲು ಸರಳ ಹಂತಗಳು'}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
                <feature.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10" />
          <div className="relative z-10">
            <Users className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' ? 'Join Our Community' : language === 'hi' ? 'हमारे समुदाय से जुड़ें' : 'ನಮ್ಮ ಸಮುದಾಯಕ್ಕೆ ಸೇರಿ'}
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              {language === 'en' 
                ? 'Whether you\'re a restaurant, individual donor, NGO, or volunteer - there\'s a place for you in our mission to eliminate food waste.'
                : language === 'hi'
                ? 'चाहे आप एक रेस्तरां, व्यक्तिगत दाता, एनजीओ, या स्वयंसेवक हों - खाद्य अपशिष्ट को समाप्त करने के हमारे मिशन में आपके लिए जगह है।'
                : 'ನೀವು ರೆಸ್ಟೋರೆಂಟ್, ವೈಯಕ್ತಿಕ ದಾನಿ, ಎನ್‌ಜಿಒ ಅಥವಾ ಸ್ವಯಂಸೇವಕರಾಗಿರಲಿ - ಆಹಾರ ವ್ಯರ್ಥವನ್ನು ತೊಡೆದುಹಾಕುವ ನಮ್ಮ ಮಿಷನ್‌ನಲ್ಲಿ ನಿಮಗೆ ಸ್ಥಳವಿದೆ.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('DonorDashboard')}>
                <Button className="glass-btn px-6 py-4 rounded-xl glow-cyan">
                  <Heart className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Register as Donor' : language === 'hi' ? 'दाता के रूप में पंजीकरण करें' : 'ದಾನಿಯಾಗಿ ನೋಂದಾಯಿಸಿ'}
                </Button>
              </Link>
              <Link to={createPageUrl('NGODashboard')}>
                <Button className="glass-btn px-6 py-4 rounded-xl glow-mint">
                  <Building2 className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Register as NGO' : language === 'hi' ? 'एनजीओ के रूप में पंजीकरण करें' : 'ಎನ್‌ಜಿಒ ಆಗಿ ನೋಂದಾಯಿಸಿ'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

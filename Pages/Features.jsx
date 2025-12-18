import React from 'react';
import { useLanguage } from '@/Layout';
import { motion } from 'framer-motion';
import { 
  MapPin, Truck, LayoutDashboard, Trophy, Leaf, Bell, 
  FileText, AlertTriangle, Tag, Globe, Award, Zap,
  Heart, Sparkles, Users, Clock
} from 'lucide-react';

export default function Features() {
  const { language } = useLanguage();

  const features = [
    {
      icon: MapPin,
      title: language === 'en' ? 'Real-Time Donor-NGO Matching' : language === 'hi' ? 'रीयल-टाइम दाता-एनजीओ मिलान' : 'ನೈಜ-ಸಮಯ ದಾನಿ-ಎನ್‌ಜಿಒ ಹೊಂದಾಣಿಕೆ',
      description: language === 'en' 
        ? 'Smart matching based on location, food quantity, and pickup time. Our AI algorithm ensures the best matches for efficient food distribution.'
        : language === 'hi' 
        ? 'स्थान, खाद्य मात्रा और पिकअप समय के आधार पर स्मार्ट मिलान।'
        : 'ಸ್ಥಳ, ಆಹಾರ ಪ್ರಮಾಣ ಮತ್ತು ಪಿಕಪ್ ಸಮಯದ ಆಧಾರದ ಮೇಲೆ ಸ್ಮಾರ್ಟ್ ಹೊಂದಾಣಿಕೆ.',
      color: 'from-cyan-500 to-blue-500',
      features: ['Location-based', 'Time-optimized', 'Quantity matching']
    },
    {
      icon: Truck,
      title: language === 'en' ? 'Live Volunteer Tracking' : language === 'hi' ? 'लाइव स्वयंसेवक ट्रैकिंग' : 'ಲೈವ್ ಸ್ವಯಂಸೇವಕ ಟ್ರ್ಯಾಕಿಂಗ್',
      description: language === 'en' 
        ? 'Track volunteer GPS routes in real-time. Know exactly when your donation will arrive at its destination.'
        : language === 'hi' 
        ? 'वास्तविक समय में स्वयंसेवक जीपीएस मार्गों को ट्रैक करें।'
        : 'ನೈಜ-ಸಮಯದಲ್ಲಿ ಸ್ವಯಂಸೇವಕ ಜಿಪಿಎಸ್ ಮಾರ್ಗಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.',
      color: 'from-emerald-500 to-green-500',
      features: ['GPS tracking', 'ETA updates', 'Route optimization']
    },
    {
      icon: LayoutDashboard,
      title: language === 'en' ? 'NGO Dashboard' : language === 'hi' ? 'एनजीओ डैशबोर्ड' : 'ಎನ್‌ಜಿಒ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      description: language === 'en' 
        ? 'Comprehensive dashboard showing total donations received, completed deliveries, pending pickups, and monthly analytics charts.'
        : language === 'hi' 
        ? 'कुल प्राप्त दान, पूर्ण डिलीवरी, लंबित पिकअप और मासिक चार्ट दिखाने वाला व्यापक डैशबोर्ड।'
        : 'ಒಟ್ಟು ಸ್ವೀಕರಿಸಿದ ದಾನಗಳು, ಪೂರ್ಣಗೊಂಡ ಡೆಲಿವರಿಗಳು, ಬಾಕಿ ಇರುವ ಪಿಕಪ್‌ಗಳು ಮತ್ತು ಮಾಸಿಕ ಚಾರ್ಟ್‌ಗಳನ್ನು ತೋರಿಸುವ ಸಮಗ್ರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್.',
      color: 'from-purple-500 to-pink-500',
      features: ['Analytics', 'Reports', 'Charts']
    },
    {
      icon: Trophy,
      title: language === 'en' ? 'Donor Leaderboard' : language === 'hi' ? 'दाता लीडरबोर्ड' : 'ದಾನಿ ಲೀಡರ್‌ಬೋರ್ಡ್',
      description: language === 'en' 
        ? 'Rank donors by food saved and donation count. Recognize top contributors with "Donor of the Month" awards.'
        : language === 'hi' 
        ? 'बचाए गए भोजन और दान गिनती के आधार पर दाताओं की रैंकिंग। "महीने के दाता" पुरस्कार।'
        : 'ಉಳಿಸಿದ ಆಹಾರ ಮತ್ತು ದಾನ ಎಣಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ದಾನಿಗಳನ್ನು ಶ್ರೇಣೀಕರಿಸಿ.',
      color: 'from-yellow-500 to-orange-500',
      features: ['Rankings', 'Monthly awards', 'Recognition']
    },
    {
      icon: Leaf,
      title: language === 'en' ? 'Carbon Footprint Calculator' : language === 'hi' ? 'कार्बन फुटप्रिंट कैलकुलेटर' : 'ಕಾರ್ಬನ್ ಫೂಟ್‌ಪ್ರಿಂಟ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      description: language === 'en' 
        ? 'See your environmental impact: "You saved ___ kg of CO₂ by reducing food waste this month."'
        : language === 'hi' 
        ? 'अपना पर्यावरणीय प्रभाव देखें: "इस महीने खाद्य अपशिष्ट कम करके आपने ___ किलो CO₂ बचाया।"'
        : 'ನಿಮ್ಮ ಪರಿಸರ ಪ್ರಭಾವವನ್ನು ನೋಡಿ.',
      color: 'from-green-500 to-teal-500',
      features: ['CO₂ tracking', 'Impact reports', 'Green badges']
    },
    {
      icon: Bell,
      title: language === 'en' ? 'Instant Alerts' : language === 'hi' ? 'तत्काल अलर्ट' : 'ತ್ವರಿತ ಎಚ್ಚರಿಕೆಗಳು',
      description: language === 'en' 
        ? 'Get notified instantly about new donations, pickup approvals, and delivery updates.'
        : language === 'hi' 
        ? 'नए दान, पिकअप स्वीकृति और डिलीवरी अपडेट के बारे में तुरंत सूचना प्राप्त करें।'
        : 'ಹೊಸ ದಾನಗಳು, ಪಿಕಪ್ ಅನುಮೋದನೆಗಳು ಮತ್ತು ಡೆಲಿವರಿ ಅಪ್‌ಡೇಟ್‌ಗಳ ಬಗ್ಗೆ ತಕ್ಷಣ ಸೂಚನೆ ಪಡೆಯಿರಿ.',
      color: 'from-red-500 to-pink-500',
      features: ['Push notifications', 'Email alerts', 'SMS updates']
    },
    {
      icon: FileText,
      title: language === 'en' ? 'Digital Donation Receipt' : language === 'hi' ? 'डिजिटल दान रसीद' : 'ಡಿಜಿಟಲ್ ದಾನ ರಸೀದಿ',
      description: language === 'en' 
        ? 'Auto-generate receipts with complete donation details. Download certificates when delivery is confirmed.'
        : language === 'hi' 
        ? 'पूर्ण दान विवरण के साथ रसीदें स्वतः उत्पन्न करें।'
        : 'ಸಂಪೂರ್ಣ ದಾನ ವಿವರಗಳೊಂದಿಗೆ ರಸೀದಿಗಳನ್ನು ಸ್ವಯಂ-ಉತ್ಪಾದಿಸಿ.',
      color: 'from-blue-500 to-indigo-500',
      features: ['PDF export', 'Auto-generate', 'Digital storage']
    },
    {
      icon: AlertTriangle,
      title: language === 'en' ? 'Emergency Food Request' : language === 'hi' ? 'आपातकालीन भोजन अनुरोध' : 'ತುರ್ತು ಆಹಾರ ವಿನಂತಿ',
      description: language === 'en' 
        ? 'NGOs can request volunteers immediately with the "Request a Volunteer Now" emergency button.'
        : language === 'hi' 
        ? 'एनजीओ "अभी एक स्वयंसेवक का अनुरोध करें" आपातकालीन बटन से तुरंत स्वयंसेवकों का अनुरोध कर सकते हैं।'
        : 'ಎನ್‌ಜಿಒಗಳು "ಈಗ ಸ್ವಯಂಸೇವಕರನ್ನು ವಿನಂತಿಸಿ" ತುರ್ತು ಬಟನ್‌ನೊಂದಿಗೆ ತಕ್ಷಣ ಸ್ವಯಂಸೇವಕರನ್ನು ವಿನಂತಿಸಬಹುದು.',
      color: 'from-orange-500 to-red-500',
      features: ['One-click request', 'Priority matching', 'Fast response']
    },
    {
      icon: Tag,
      title: language === 'en' ? 'Food Category Tagging' : language === 'hi' ? 'खाद्य श्रेणी टैगिंग' : 'ಆಹಾರ ವರ್ಗ ಟ್ಯಾಗಿಂಗ್',
      description: language === 'en' 
        ? 'Categorize donations: Veg, Non-Veg, Packaged, Fruits, Bakery, Meals for better matching.'
        : language === 'hi' 
        ? 'दान को वर्गीकृत करें: शाकाहारी, मांसाहारी, पैकेज्ड, फल, बेकरी, भोजन।'
        : 'ದಾನಗಳನ್ನು ವರ್ಗೀಕರಿಸಿ: ಶಾಕಾಹಾರಿ, ಮಾಂಸಾಹಾರಿ, ಪ್ಯಾಕೇಜ್ಡ್, ಹಣ್ಣುಗಳು, ಬೇಕರಿ, ಊಟಗಳು.',
      color: 'from-violet-500 to-purple-500',
      features: ['6 categories', 'Smart filters', 'Dietary preferences']
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Multi-Language Support' : language === 'hi' ? 'बहु-भाषा समर्थन' : 'ಬಹು-ಭಾಷಾ ಬೆಂಬಲ',
      description: language === 'en' 
        ? 'Switch between English, Hindi, and Kannada for a localized experience.'
        : language === 'hi' 
        ? 'स्थानीय अनुभव के लिए अंग्रेजी, हिंदी और कन्नड़ के बीच स्विच करें।'
        : 'ಸ್ಥಳೀಯ ಅನುಭವಕ್ಕಾಗಿ ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ ಮತ್ತು ಕನ್ನಡ ನಡುವೆ ಬದಲಾಯಿಸಿ.',
      color: 'from-cyan-500 to-teal-500',
      features: ['3 languages', 'Easy switch', 'Full translation']
    },
    {
      icon: Award,
      title: language === 'en' ? 'Reward Badges System' : language === 'hi' ? 'पुरस्कार बैज प्रणाली' : 'ಬಹುಮಾನ ಬ್ಯಾಡ್ಜ್ ವ್ಯವಸ್ಥೆ',
      description: language === 'en' 
        ? 'Earn badges like ⭐ Gold Donor, ❤️ Community Helper, and 🚀 Fastest Volunteer for your contributions.'
        : language === 'hi' 
        ? 'अपने योगदान के लिए ⭐ गोल्ड डोनर, ❤️ कम्युनिटी हेल्पर, और 🚀 फास्टेस्ट वालंटियर जैसे बैज अर्जित करें।'
        : 'ನಿಮ್ಮ ಕೊಡುಗೆಗಳಿಗಾಗಿ ⭐ ಗೋಲ್ಡ್ ಡೋನರ್, ❤️ ಕಮ್ಯುನಿಟಿ ಹೆಲ್ಪರ್ ಮತ್ತು 🚀 ಫಾಸ್ಟೆಸ್ಟ್ ವಾಲಂಟಿಯರ್ ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಗಳಿಸಿ.',
      color: 'from-yellow-400 to-amber-500',
      features: ['Achievement badges', 'Progress tracking', 'Social sharing']
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Instant Volunteer Request' : language === 'hi' ? 'तत्काल स्वयंसेवक अनुरोध' : 'ತ್ವರಿತ ಸ್ವಯಂಸೇವಕ ವಿನಂತಿ',
      description: language === 'en' 
        ? 'NGOs can call volunteers immediately with one click for urgent pickup needs.'
        : language === 'hi' 
        ? 'एनजीओ तत्काल पिकअप आवश्यकताओं के लिए एक क्लिक से स्वयंसेवकों को तुरंत बुला सकते हैं।'
        : 'ತುರ್ತು ಪಿಕಪ್ ಅಗತ್ಯಗಳಿಗಾಗಿ ಎನ್‌ಜಿಒಗಳು ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಸ್ವಯಂಸೇವಕರನ್ನು ತಕ್ಷಣ ಕರೆಯಬಹುದು.',
      color: 'from-amber-500 to-orange-500',
      features: ['One-click', 'Priority queue', 'Instant match']
    },
  ];

  const rewardFeatures = [
    {
      icon: Heart,
      title: language === 'en' ? 'Community Impact Points (CIP)' : language === 'hi' ? 'सामुदायिक प्रभाव अंक (CIP)' : 'ಸಮುದಾಯ ಪ್ರಭಾವ ಪಾಯಿಂಟ್‌ಗಳು (CIP)',
      description: language === 'en' 
        ? 'Earn 10 CIP per kg of food donated. Emergency donations earn +5 bonus CIP. Redeem for café vouchers, bakery discounts, and NGO appreciation gifts.'
        : language === 'hi' 
        ? 'दान किए गए प्रति किलो भोजन के लिए 10 CIP अर्जित करें। आपातकालीन दान से +5 बोनस CIP मिलते हैं।'
        : 'ದಾನ ಮಾಡಿದ ಪ್ರತಿ ಕೆಜಿ ಆಹಾರಕ್ಕೆ 10 CIP ಗಳಿಸಿ.',
      points: ['1 kg food = 10 CIP', 'Emergency donation = +5 CIP', 'Redeem for vouchers'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Leaf,
      title: language === 'en' ? 'EcoSave Credits (ESC)' : language === 'hi' ? 'इकोसेव क्रेडिट (ESC)' : 'ಎಕೋಸೇವ್ ಕ್ರೆಡಿಟ್ಸ್ (ESC)',
      description: language === 'en' 
        ? 'Earn credits based on CO₂ saved and waste reduced. Unlock eco-badges like "Eco Hero" and "Green Donor" as you make an environmental impact.'
        : language === 'hi' 
        ? 'बचाई गई CO₂ और कम किए गए कचरे के आधार पर क्रेडिट अर्जित करें।'
        : 'ಉಳಿಸಿದ CO₂ ಮತ್ತು ಕಡಿಮೆ ಮಾಡಿದ ತ್ಯಾಜ್ಯದ ಆಧಾರದ ಮೇಲೆ ಕ್ರೆಡಿಟ್‌ಗಳನ್ನು ಗಳಿಸಿ.',
      points: ['CO₂ tracking', '"Eco Hero" badge', '"Green Donor" badge'],
      color: 'from-emerald-500 to-green-500'
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white/80">
              {language === 'en' ? 'Powerful Features' : language === 'hi' ? 'शक्तिशाली विशेषताएं' : 'ಶಕ್ತಿಶಾಲಿ ವೈಶಿಷ್ಟ್ಯಗಳು'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'en' ? 'Everything You Need' : language === 'hi' ? 'आपको जो चाहिए वह सब कुछ' : 'ನಿಮಗೆ ಬೇಕಾದ ಎಲ್ಲವೂ'}
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'Comprehensive tools for donors, volunteers, and NGOs to make food rescue efficient and rewarding.'
              : language === 'hi' 
              ? 'दाताओं, स्वयंसेवकों और एनजीओ के लिए व्यापक उपकरण।'
              : 'ದಾನಿಗಳು, ಸ್ವಯಂಸೇವಕರು ಮತ್ತು ಎನ್‌ಜಿಒಗಳಿಗೆ ಸಮಗ್ರ ಉಪಕರಣಗಳು.'}
          </p>
        </motion.div>
      </section>

      {/* Main Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/60 text-sm mb-4">{feature.description}</p>
            <div className="flex flex-wrap gap-2">
              {feature.features.map((f, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Reward System Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            {language === 'en' ? 'Unique Reward System' : language === 'hi' ? 'अनूठी पुरस्कार प्रणाली' : 'ವಿಶಿಷ್ಟ ಬಹುಮಾನ ವ್ಯವಸ್ಥೆ'}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Get recognized and rewarded for your contributions to reducing food waste'
              : language === 'hi' 
              ? 'खाद्य अपशिष्ट को कम करने में अपने योगदान के लिए पहचान और पुरस्कार प्राप्त करें'
              : 'ಆಹಾರ ವ್ಯರ್ಥವನ್ನು ಕಡಿಮೆ ಮಾಡುವಲ್ಲಿ ನಿಮ್ಮ ಕೊಡುಗೆಗಳಿಗಾಗಿ ಗುರುತಿಸಲ್ಪಡಿ ಮತ್ತು ಬಹುಮಾನ ಪಡೆಯಿರಿ'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rewardFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-20 rounded-full blur-2xl`} />
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/60 mb-6">{feature.description}</p>
              <div className="space-y-2">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                    <span className="text-sm text-white/80">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

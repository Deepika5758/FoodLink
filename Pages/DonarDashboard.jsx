import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useLanguage } from '@/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, Heart, Package, Leaf, Award, Star, 
  Clock, CheckCircle, Loader2, Gift, TrendingUp, FileText
} from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import DonationCard from '@/components/dashboard/DonationCard';
import DonationForm from '@/components/forms/DonationForm';
import CertificateModal from '@/components/dashboard/CertificateModal';
import CertificateCard from '@/components/certificates/CertificateCard';

export default function DonorDashboard() {
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [user, setUser] = useState(null);
  const [donorProfile, setDonorProfile] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await base44.auth.me();
      setUser(currentUser);
    };
    loadUser();
  }, []);

  // Fetch donor profile
  const { data: profiles = [] } = useQuery({
    queryKey: ['donorProfile', user?.email],
    queryFn: () => base44.entities.DonorProfile.filter({ user_email: user?.email }),
    enabled: !!user?.email,
  });

  useEffect(() => {
    if (profiles.length > 0) {
      setDonorProfile(profiles[0]);
    }
  }, [profiles]);

  // Fetch donations
  const { data: donations = [], isLoading: donationsLoading } = useQuery({
    queryKey: ['donations', user?.email],
    queryFn: () => base44.entities.Donation.filter({ donor_email: user?.email }, '-created_date'),
    enabled: !!user?.email,
  });

  // Create donation mutation
  const createDonation = useMutation({
    mutationFn: async (data) => {
      const cipEarned = Math.round(data.quantity_kg * 10);
      const co2Saved = Math.round(data.quantity_kg * 2.5);
      
      await base44.entities.Donation.create({
        ...data,
        donor_email: user.email,
        donor_name: user.full_name || donorProfile?.name || 'Anonymous',
        status: 'pending',
        cip_earned: cipEarned,
        co2_saved: co2Saved,
        certificate_id: `FL-${Date.now()}`
      });

      // Update donor profile
      if (donorProfile) {
        await base44.entities.DonorProfile.update(donorProfile.id, {
          total_donations: (donorProfile.total_donations || 0) + 1,
          total_food_saved_kg: (donorProfile.total_food_saved_kg || 0) + data.quantity_kg,
          cip_balance: (donorProfile.cip_balance || 0) + cipEarned,
          co2_saved_total: (donorProfile.co2_saved_total || 0) + co2Saved
        });
      } else {
        await base44.entities.DonorProfile.create({
          user_email: user.email,
          name: user.full_name || 'Donor',
          total_donations: 1,
          total_food_saved_kg: data.quantity_kg,
          cip_balance: cipEarned,
          co2_saved_total: co2Saved,
          badges: []
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donations'] });
      queryClient.invalidateQueries({ queryKey: ['donorProfile'] });
      setShowDonationForm(false);
    }
  });

  const pendingDonations = donations.filter(d => ['pending', 'matched', 'in_transit'].includes(d.status));
  const completedDonations = donations.filter(d => d.status === 'delivered');

  const stats = {
    totalDonations: donorProfile?.total_donations || donations.length,
    foodSaved: donorProfile?.total_food_saved_kg || donations.reduce((sum, d) => sum + (d.quantity_kg || 0), 0),
    cipBalance: donorProfile?.cip_balance || 0,
    co2Saved: donorProfile?.co2_saved_total || 0
  };

  const handleViewCertificate = (donation) => {
    setSelectedDonation(donation);
    setShowCertificate(true);
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            {language === 'en' ? 'Donor Dashboard' : language === 'hi' ? 'दाता डैशबोर्ड' : 'ದಾನಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್'}
          </h1>
          <p className="text-white/60 mt-1">
            {language === 'en' 
              ? `Welcome back, ${user?.full_name || 'Donor'}!` 
              : language === 'hi' 
              ? `स्वागत है, ${user?.full_name || 'दाता'}!`
              : `ಸ್ವಾಗತ, ${user?.full_name || 'ದಾನಿ'}!`}
          </p>
        </div>
        <Button 
          onClick={() => setShowDonationForm(true)}
          className="glass-btn glow-cyan px-6 py-6"
        >
          <Plus className="w-5 h-5 mr-2" />
          {language === 'en' ? 'New Donation' : language === 'hi' ? 'नया दान' : 'ಹೊಸ ದಾನ'}
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          icon={Heart} 
          title={language === 'en' ? 'Total Donations' : language === 'hi' ? 'कुल दान' : 'ಒಟ್ಟು ದಾನಗಳು'} 
          value={stats.totalDonations} 
          color="rose" 
        />
        <StatsCard 
          icon={Package} 
          title={language === 'en' ? 'Food Saved' : language === 'hi' ? 'भोजन बचाया' : 'ಆಹಾರ ಉಳಿಸಲಾಗಿದೆ'} 
          value={`${stats.foodSaved} kg`} 
          color="cyan" 
        />
        <StatsCard 
          icon={Award} 
          title={language === 'en' ? 'CIP Balance' : language === 'hi' ? 'CIP बैलेंस' : 'CIP ಬ್ಯಾಲೆನ್ಸ್'} 
          value={stats.cipBalance} 
          subtitle={language === 'en' ? 'Community Impact Points' : 'CIP'} 
          color="amber" 
        />
        <StatsCard 
          icon={Leaf} 
          title={language === 'en' ? 'CO₂ Saved' : language === 'hi' ? 'CO₂ बचाया' : 'CO₂ ಉಳಿಸಲಾಗಿದೆ'} 
          value={`${stats.co2Saved} kg`} 
          color="emerald" 
        />
      </div>

      {/* Badges Section */}
      {donorProfile?.badges?.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400" />
            {language === 'en' ? 'Your Badges' : language === 'hi' ? 'आपके बैज' : 'ನಿಮ್ಮ ಬ್ಯಾಡ್ಜ್‌ಗಳು'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {donorProfile.badges.map((badge, i) => (
              <div key={i} className="glass-card px-4 py-2 rounded-full text-sm flex items-center gap-2">
                {badge === 'gold_donor' && <span>⭐</span>}
                {badge === 'community_helper' && <span>❤️</span>}
                {badge === 'eco_hero' && <span>🌱</span>}
                <span className="capitalize">{badge.replace('_', ' ')}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Donations Tabs */}
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="glass-card bg-white/5 p-1">
          <TabsTrigger value="pending" className="data-[state=active]:bg-white/10 data-[state=active]:text-cyan-400">
            <Clock className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Pending' : language === 'hi' ? 'लंबित' : 'ಬಾಕಿ'} ({pendingDonations.length})
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-white/10 data-[state=active]:text-emerald-400">
            <CheckCircle className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Completed' : language === 'hi' ? 'पूर्ण' : 'ಪೂರ್ಣಗೊಂಡಿದೆ'} ({completedDonations.length})
          </TabsTrigger>
          <TabsTrigger value="certificates" className="data-[state=active]:bg-white/10 data-[state=active]:text-amber-400">
            <FileText className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Certificates' : language === 'hi' ? 'प्रमाणपत्र' : 'ಪ್ರಮಾಣಪತ್ರಗಳು'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-6">
          {donationsLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
            </div>
          ) : pendingDonations.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <Package className="w-16 h-16 mx-auto mb-4 text-white/30" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'en' ? 'No pending donations' : language === 'hi' ? 'कोई लंबित दान नहीं' : 'ಯಾವುದೇ ಬಾಕಿ ದಾನಗಳಿಲ್ಲ'}
              </h3>
              <p className="text-white/60 mb-6">
                {language === 'en' ? 'Create a donation to start making an impact!' : language === 'hi' ? 'प्रभाव डालना शुरू करने के लिए दान बनाएं!' : 'ಪ್ರಭಾವ ಬೀರಲು ದಾನ ರಚಿಸಿ!'}
              </p>
              <Button onClick={() => setShowDonationForm(true)} className="glass-btn glow-cyan">
                <Plus className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Create Donation' : language === 'hi' ? 'दान बनाएं' : 'ದಾನ ರಚಿಸಿ'}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingDonations.map((donation) => (
                <DonationCard 
                  key={donation.id} 
                  donation={donation} 
                  showNGO 
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          {completedDonations.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <Gift className="w-16 h-16 mx-auto mb-4 text-white/30" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'en' ? 'No completed donations yet' : language === 'hi' ? 'अभी तक कोई पूर्ण दान नहीं' : 'ಇನ್ನೂ ಯಾವುದೇ ಪೂರ್ಣಗೊಂಡ ದಾನಗಳಿಲ್ಲ'}
              </h3>
              <p className="text-white/60">
                {language === 'en' ? 'Completed donations will appear here with downloadable certificates' : language === 'hi' ? 'पूर्ण दान डाउनलोड करने योग्य प्रमाणपत्रों के साथ यहां दिखाई देंगे' : 'ಪೂರ್ಣಗೊಂಡ ದಾನಗಳು ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದಾದ ಪ್ರಮಾಣಪತ್ರಗಳೊಂದಿಗೆ ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {completedDonations.map((donation) => (
                <DonationCard 
                  key={donation.id} 
                  donation={donation} 
                  showNGO
                  onViewCertificate={handleViewCertificate}
                />
              ))}
            </div>
          )}
        </TabsContent>

        {/* Certificates Tab */}
        <TabsContent value="certificates" className="mt-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' ? 'Your Donation Certificates' : language === 'hi' ? 'आपके दान प्रमाणपत्र' : 'ನಿಮ್ಮ ದಾನ ಪ್ರಮಾಣಪತ್ರಗಳು'}
            </h3>
            <p className="text-white/60 text-sm">
              {language === 'en' 
                ? 'Certificates are unlocked when NGO confirms delivery' 
                : language === 'hi'
                ? 'जब एनजीओ डिलीवरी की पुष्टि करता है तब प्रमाणपत्र अनलॉक होते हैं'
                : 'ಎನ್‌ಜಿಒ ಡೆಲಿವರಿ ದೃಢೀಕರಿಸಿದಾಗ ಪ್ರಮಾಣಪತ್ರಗಳು ಅನ್‌ಲಾಕ್ ಆಗುತ್ತವೆ'}
            </p>
          </div>
          
          {donations.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 text-white/30" />
              <h3 className="text-lg font-semibold mb-2">
                {language === 'en' ? 'No certificates yet' : language === 'hi' ? 'अभी तक कोई प्रमाणपत्र नहीं' : 'ಇನ್ನೂ ಯಾವುದೇ ಪ್ರಮಾಣಪತ್ರಗಳಿಲ್ಲ'}
              </h3>
              <p className="text-white/60">
                {language === 'en' ? 'Make a donation to get your first certificate' : 'अपना पहला प्रमाणपत्र पाने के लिए दान करें'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pending Certificates */}
              {pendingDonations.length > 0 && (
                <div className="md:col-span-2 mb-4">
                  <h4 className="text-sm font-medium text-white/50 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {language === 'en' ? 'Pending Certificates' : language === 'hi' ? 'लंबित प्रमाणपत्र' : 'ಬಾಕಿ ಇರುವ ಪ್ರಮಾಣಪತ್ರಗಳು'} ({pendingDonations.length})
                  </h4>
                </div>
              )}
              {pendingDonations.map((donation) => (
                <CertificateCard 
                  key={donation.id} 
                  donation={donation}
                  onDownload={handleViewCertificate}
                />
              ))}
              
              {/* Completed Certificates */}
              {completedDonations.length > 0 && (
                <div className="md:col-span-2 mb-4 mt-6">
                  <h4 className="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {language === 'en' ? 'Completed Certificates' : language === 'hi' ? 'पूर्ण प्रमाणपत्र' : 'ಪೂರ್ಣಗೊಂಡ ಪ್ರಮಾಣಪತ್ರಗಳು'} ({completedDonations.length})
                  </h4>
                </div>
              )}
              {completedDonations.map((donation) => (
                <CertificateCard 
                  key={donation.id} 
                  donation={donation}
                  onDownload={handleViewCertificate}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Carbon Footprint Summary */}
      {stats.co2Saved > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
              <Leaf className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400">
                {language === 'en' ? 'Your Environmental Impact' : language === 'hi' ? 'आपका पर्यावरणीय प्रभाव' : 'ನಿಮ್ಮ ಪರಿಸರ ಪ್ರಭಾವ'}
              </h3>
              <p className="text-white/70">
                {language === 'en' 
                  ? `You saved ${stats.co2Saved} kg of CO₂ by reducing food waste this month!`
                  : language === 'hi'
                  ? `इस महीने खाद्य अपशिष्ट कम करके आपने ${stats.co2Saved} किलो CO₂ बचाया!`
                  : `ಈ ತಿಂಗಳು ಆಹಾರ ವ್ಯರ್ಥವನ್ನು ಕಡಿಮೆ ಮಾಡುವ ಮೂಲಕ ನೀವು ${stats.co2Saved} ಕೆಜಿ CO₂ ಉಳಿಸಿದ್ದೀರಿ!`}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-emerald-400 ml-auto hidden md:block" />
          </div>
        </motion.div>
      )}

      {/* Donation Form Modal */}
      <DonationForm 
        isOpen={showDonationForm}
        onClose={() => setShowDonationForm(false)}
        onSubmit={(data) => createDonation.mutate(data)}
        isLoading={createDonation.isPending}
      />

      {/* Certificate Modal */}
      <CertificateModal
        donation={selectedDonation}
        isOpen={showCertificate}
        onClose={() => setShowCertificate(false)}
      />
    </div>
  );
}

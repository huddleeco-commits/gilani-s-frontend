import React, { useState } from 'react';
import { ScrollReveal, AnimatedCounter, TiltCard, GlowEffect } from '../effects';
import { Gift, Crown, Star, Wine, Utensils, Calendar, Award, ChevronRight, Clock, Sparkles } from 'lucide-react';

const THEME = {
  colors: { 
    primary: '#722F37', 
    accent: '#C9A961', 
    background: '#F5F0E6', 
    dark: '#1A1A1A',
    text: '#f5f5f5' 
  },
  fonts: { heading: "Playfair Display, Georgia, serif", body: "Lato, system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

const RewardsPage = () => {
  const [currentPoints, setCurrentPoints] = useState(1250);
  const [currentTier, setCurrentTier] = useState('Gold');
  const [isBirthdayMonth, setIsBirthdayMonth] = useState(true);

  const tiers = [
    { name: 'Bronze', threshold: 0, color: '#CD7F32' },
    { name: 'Silver', threshold: 500, color: '#C0C0C0' },
    { name: 'Gold', threshold: 1000, color: '#C9A961' },
    { name: 'VIP', threshold: 2000, color: '#722F37' }
  ];

  const availableRewards = [
    {
      id: 1,
      title: 'Amuse-Bouche Selection',
      description: 'Chef\'s signature appetizer trio',
      points: 500,
      category: 'appetizer',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
      available: true
    },
    {
      id: 2,
      title: '$15 Off Premium Entree',
      description: 'Valid on steaks $45 and above',
      points: 750,
      category: 'discount',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800',
      available: true
    },
    {
      id: 3,
      title: 'Sommelier Wine Pairing',
      description: 'Three wines paired with your course',
      points: 900,
      category: 'wine',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800',
      available: true
    },
    {
      id: 4,
      title: 'Signature Dessert',
      description: 'French chocolate soufflé or crème brûlée',
      points: 400,
      category: 'dessert',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
      available: true
    },
    {
      id: 5,
      title: 'Chef\'s Table Experience',
      description: 'Exclusive 5-course tasting menu',
      points: 2000,
      category: 'experience',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800',
      available: currentTier === 'VIP'
    },
    {
      id: 6,
      title: 'Private Wine Cellar Tour',
      description: 'Personal sommelier and rare vintage tasting',
      points: 1500,
      category: 'experience',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
      available: currentTier === 'Gold' || currentTier === 'VIP'
    }
  ];

  const redeemHistory = [
    { date: '2024-01-15', reward: 'Signature Dessert', points: 400 },
    { date: '2024-01-08', reward: '$15 Off Premium Entree', points: 750 },
    { date: '2023-12-20', reward: 'Sommelier Wine Pairing', points: 900 }
  ];

  const nextTier = tiers.find(tier => tier.threshold > currentPoints);
  const pointsToNext = nextTier ? nextTier.threshold - currentPoints : 0;
  const progressPercentage = nextTier ? 
    ((currentPoints - tiers.find(t => t.name === currentTier).threshold) / 
     (nextTier.threshold - tiers.find(t => t.name === currentTier).threshold)) * 100 : 100;

  const redeemReward = (rewardId) => {
    const reward = availableRewards.find(r => r.id === rewardId);
    if (reward && currentPoints >= reward.points) {
      setCurrentPoints(prev => prev - reward.points);
      alert(`Successfully redeemed: ${reward.title}`);
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: THEME.colors.background,
      fontFamily: THEME.fonts.body
    },
    hero: {
      background: `linear-gradient(135deg, ${THEME.colors.dark} 0%, ${THEME.colors.primary} 100%)`,
      padding: '60px 20px 40px',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    heroPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A961' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    },
    tierBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: THEME.colors.accent,
      color: THEME.colors.dark,
      padding: '12px 24px',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '20px',
      boxShadow: '0 4px 20px rgba(201, 169, 97, 0.3)'
    },
    pointsDisplay: {
      fontSize: '48px',
      fontFamily: THEME.fonts.heading,
      fontWeight: 'bold',
      marginBottom: '10px',
      color: THEME.colors.accent
    },
    progressContainer: {
      maxWidth: '400px',
      margin: '20px auto 0',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '20px',
      padding: '4px',
      backdropFilter: 'blur(10px)'
    },
    progressBar: {
      height: '12px',
      backgroundColor: THEME.colors.accent,
      borderRadius: '16px',
      width: `${progressPercentage}%`,
      transition: 'width 0.5s ease',
      position: 'relative'
    },
    progressText: {
      marginTop: '10px',
      fontSize: '14px',
      opacity: 0.9
    },
    birthdayBanner: {
      background: `linear-gradient(90deg, ${THEME.colors.accent}, #E6D76C)`,
      color: THEME.colors.dark,
      padding: '16px 20px',
      margin: '0 -20px 30px',
      textAlign: 'center',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    section: {
      padding: '40px 20px'
    },
    sectionTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '32px',
      color: THEME.colors.dark,
      marginBottom: '30px',
      textAlign: 'center'
    },
    rewardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    rewardCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    rewardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    rewardContent: {
      padding: '24px'
    },
    rewardTitle: {
      fontFamily: THEME.fonts.heading,
      fontSize: '20px',
      color: THEME.colors.dark,
      marginBottom: '8px'
    },
    rewardDescription: {
      color: '#666',
      lineHeight: 1.6,
      marginBottom: '20px'
    },
    rewardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    pointsBadge: {
      backgroundColor: THEME.colors.primary,
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontWeight: 'bold',
      fontSize: '14px'
    },
    redeemButton: {
      backgroundColor: THEME.colors.accent,
      color: THEME.colors.dark,
      border: 'none',
      padding: '12px 24px',
      borderRadius: '25px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '14px'
    },
    disabledButton: {
      backgroundColor: '#ccc',
      color: '#888',
      cursor: 'not-allowed'
    },
    vipSection: {
      background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.dark} 100%)`,
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center',
      position: 'relative'
    },
    vipPerks: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      maxWidth: '800px',
      margin: '40px auto 0'
    },
    perkCard: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      padding: '30px 20px',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)'
    },
    perkIcon: {
      width: '48px',
      height: '48px',
      color: THEME.colors.accent,
      margin: '0 auto 16px'
    },
    historySection: {
      backgroundColor: '#f8f9fa',
      padding: '50px 20px'
    },
    historyItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid #eee'
    },
    historyDate: {
      color: '#666',
      fontSize: '14px'
    },
    historyReward: {
      fontWeight: 'bold',
      color: THEME.colors.dark
    },
    historyPoints: {
      color: THEME.colors.primary,
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroPattern}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={styles.tierBadge}>
            <Crown size={20} />
            {currentTier} Member
          </div>
          
          <div style={styles.pointsDisplay}>
            <AnimatedCounter end={currentPoints} suffix=" Points" duration={2} />
          </div>
          
          <p style={{ opacity: 0.9, marginBottom: '20px' }}>
            Your culinary journey rewards
          </p>
          
          {nextTier && (
            <div style={styles.progressContainer}>
              <div style={styles.progressBar}></div>
              <div style={styles.progressText}>
                {pointsToNext} points to {nextTier.name}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Birthday Banner */}
      {isBirthdayMonth && (
        <div style={styles.birthdayBanner}>
          <Gift size={24} />
          <span>🎉 Birthday Month Special! Enjoy complimentary dessert on your next visit</span>
        </div>
      )}

      {/* Available Rewards */}
      <ScrollReveal>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Redeem Your Rewards</h2>
          
          <div style={styles.rewardsGrid}>
            {availableRewards.map((reward) => (
              <TiltCard key={reward.id}>
                <div style={{
                  ...styles.rewardCard,
                  opacity: reward.available ? 1 : 0.7
                }}>
                  <img 
                    src={reward.image} 
                    alt={reward.title}
                    style={styles.rewardImage}
                  />
                  <div style={styles.rewardContent}>
                    <h3 style={styles.rewardTitle}>{reward.title}</h3>
                    <p style={styles.rewardDescription}>{reward.description}</p>
                    
                    <div style={styles.rewardFooter}>
                      <div style={styles.pointsBadge}>
                        {reward.points} pts
                      </div>
                      
                      <GlowEffect color={THEME.colors.accent}>
                        <button
                          style={{
                            ...styles.redeemButton,
                            ...(currentPoints < reward.points || !reward.available ? styles.disabledButton : {})
                          }}
                          onClick={() => redeemReward(reward.id)}
                          disabled={currentPoints < reward.points || !reward.available}
                        >
                          {reward.available ? 'Redeem' : 'Tier Locked'}
                        </button>
                      </GlowEffect>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* VIP Perks */}
      <section style={styles.vipSection}>
        <h2 style={{ ...styles.sectionTitle, color: 'white', marginBottom: '20px' }}>
          Exclusive Member Benefits
        </h2>
        <p style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto 40px' }}>
          Enjoy these premium privileges as a valued member of Gilani's
        </p>
        
        <div style={styles.vipPerks}>
          <div style={styles.perkCard}>
            <Calendar style={styles.perkIcon} />
            <h3 style={{ marginBottom: '12px' }}>Priority Reservations</h3>
            <p style={{ opacity: 0.9, fontSize: '14px' }}>Skip the wait with exclusive booking windows</p>
          </div>
          
          <div style={styles.perkCard}>
            <Wine style={styles.perkIcon} />
            <h3 style={{ marginBottom: '12px' }}>Sommelier Access</h3>
            <p style={{ opacity: 0.9, fontSize: '14px' }}>Personal wine consultations and rare vintages</p>
          </div>
          
          <div style={styles.perkCard}>
            <Utensils style={styles.perkIcon} />
            <h3 style={{ marginBottom: '12px' }}>Chef\'s Table</h3>
            <p style={{ opacity: 0.9, fontSize: '14px' }}>Exclusive kitchen experience and custom menu</p>
          </div>
        </div>
      </section>

      {/* Redemption History */}
      <ScrollReveal>
        <section style={styles.historySection}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={styles.sectionTitle}>Recent Redemptions</h2>
            
            {redeemHistory.map((item, index) => (
              <div key={index} style={styles.historyItem}>
                <div>
                  <div style={styles.historyReward}>{item.reward}</div>
                  <div style={styles.historyDate}>{item.date}</div>
                </div>
                <div style={styles.historyPoints}>-{item.points} pts</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Earn More Points CTA */}
      <section style={{ 
        ...styles.section, 
        backgroundColor: THEME.colors.accent,
        textAlign: 'center',
        color: THEME.colors.dark
      }}>
        <h2 style={{ ...styles.sectionTitle, color: THEME.colors.dark, marginBottom: '20px' }}>
          Earn More Points
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 30px', fontSize: '18px' }}>
          Dine with us to earn 1 point per $1 spent. Special events and wine tastings earn bonus points!
        </p>
        <button style={{
          backgroundColor: THEME.colors.primary,
          color: 'white',
          border: 'none',
          padding: '16px 32px',
          borderRadius: '30px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'transform 0.3s ease'
        }}>
          Make Reservation <ChevronRight size={20} />
        </button>
      </section>
    </div>
  );
};

export default RewardsPage;
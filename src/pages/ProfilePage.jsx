import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Crown, 
  Star, 
  Gift, 
  MapPin, 
  Calendar, 
  Utensils, 
  Heart, 
  Settings, 
  Share, 
  Award,
  Clock,
  Phone,
  Bell,
  CreditCard,
  ChevronRight,
  Coffee,
  Wine,
  Cake
} from 'lucide-react';
import { ScrollReveal, TiltCard, GlowEffect } from '../effects';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const profileData = {
    name: 'Isabella Moreau',
    memberSince: '2021',
    tier: 'Platinum Elite',
    tierColor: '#C9A961',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    stats: {
      totalVisits: 47,
      lifetimePoints: 12450,
      rewardsRedeemed: 8,
      favoriteLocation: 'Main Dining Room'
    },
    preferences: {
      dietary: ['Gluten-Free Options', 'No Shellfish'],
      seating: 'Window Table Preferred',
      allergies: 'Shellfish',
      occasions: [
        { type: 'Anniversary', date: 'March 15' },
        { type: 'Birthday', date: 'August 22' }
      ]
    },
    favoriteOrders: [
      { 
        name: 'Dry-Aged Ribeye', 
        details: '32oz, Medium-Rare, Truffle Butter',
        wine: 'Cabernet Sauvignon 2018',
        price: '$145'
      },
      { 
        name: 'Wagyu Tenderloin', 
        details: '8oz, Medium, Béarnaise Sauce',
        wine: 'Bordeaux Blend 2019',
        price: '$185'
      },
      { 
        name: 'Chef\'s Tasting Menu', 
        details: '7-Course with Wine Pairing',
        wine: 'Sommelier Selection',
        price: '$275'
      }
    ],
    recentVisits: [
      { date: 'Dec 18, 2024', occasion: 'Business Dinner', rating: 5 },
      { date: 'Nov 25, 2024', occasion: 'Anniversary', rating: 5 },
      { date: 'Oct 14, 2024', occasion: 'Wine Tasting', rating: 5 }
    ]
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0A0A0A',
      color: '#F5F0E6',
      fontFamily: 'Lato, sans-serif'
    },
    header: {
      background: 'linear-gradient(135deg, #722F37 0%, #1A1A1A 100%)',
      padding: '40px 20px 30px',
      borderBottom: '2px solid #C9A961'
    },
    profileInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      maxWidth: '400px',
      margin: '0 auto'
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      border: '3px solid #C9A961',
      objectFit: 'cover'
    },
    profileText: {
      flex: 1
    },
    name: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '5px',
      fontFamily: 'Playfair Display, serif'
    },
    tier: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '16px',
      color: '#C9A961',
      marginBottom: '5px'
    },
    memberSince: {
      fontSize: '14px',
      opacity: 0.8
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      padding: '30px 20px',
      maxWidth: '400px',
      margin: '0 auto'
    },
    statCard: {
      backgroundColor: '#1A1A1A',
      padding: '20px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid #333'
    },
    statNumber: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#C9A961',
      marginBottom: '5px'
    },
    statLabel: {
      fontSize: '12px',
      opacity: 0.8,
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    tabNav: {
      display: 'flex',
      backgroundColor: '#1A1A1A',
      margin: '0 20px',
      borderRadius: '12px',
      padding: '4px',
      marginBottom: '20px'
    },
    tab: {
      flex: 1,
      padding: '12px 8px',
      textAlign: 'center',
      fontSize: '14px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: 'transparent',
      color: '#F5F0E6',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    activeTab: {
      backgroundColor: '#722F37',
      color: '#F5F0E6'
    },
    content: {
      padding: '0 20px 100px',
      maxWidth: '400px',
      margin: '0 auto'
    },
    section: {
      marginBottom: '30px'
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#C9A961',
      fontFamily: 'Playfair Display, serif'
    },
    card: {
      backgroundColor: '#1A1A1A',
      border: '1px solid #333',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '15px'
    },
    orderCard: {
      backgroundColor: '#1A1A1A',
      border: '1px solid #333',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '15px',
      position: 'relative'
    },
    orderName: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#F5F0E6'
    },
    orderDetails: {
      fontSize: '14px',
      opacity: 0.8,
      marginBottom: '5px'
    },
    orderPrice: {
      fontSize: '16px',
      color: '#C9A961',
      fontWeight: 'bold',
      position: 'absolute',
      top: '20px',
      right: '20px'
    },
    reorderBtn: {
      backgroundColor: '#722F37',
      color: '#F5F0E6',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '12px',
      marginTop: '10px',
      cursor: 'pointer'
    },
    preference: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #333'
    },
    visitCard: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1A1A1A',
      border: '1px solid #333',
      borderRadius: '12px',
      padding: '15px',
      marginBottom: '10px'
    },
    stars: {
      display: 'flex',
      gap: '2px'
    },
    settingsItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px',
      backgroundColor: '#1A1A1A',
      border: '1px solid #333',
      borderRadius: '12px',
      marginBottom: '10px',
      cursor: 'pointer'
    },
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#1A1A1A',
      borderTop: '2px solid #722F37',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '15px 0',
      zIndex: 100
    },
    navItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '5px',
      fontSize: '12px',
      color: '#F5F0E6',
      textDecoration: 'none'
    },
    referralCard: {
      background: 'linear-gradient(135deg, #722F37 0%, #C9A961 100%)',
      borderRadius: '16px',
      padding: '25px',
      textAlign: 'center',
      marginBottom: '20px'
    },
    referralCode: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: '15px',
      borderRadius: '12px',
      fontSize: '20px',
      fontWeight: 'bold',
      letterSpacing: '3px',
      marginBottom: '15px'
    },
    shareBtn: {
      backgroundColor: '#F5F0E6',
      color: '#722F37',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '25px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      margin: '0 auto'
    }
  };

  const renderOverview = () => (
    <div style={styles.content}>
      <ScrollReveal>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Dining Preferences</h3>
          <div style={styles.card}>
            <div style={styles.preference}>
              <span>Dietary Restrictions</span>
              <span style={{ color: '#C9A961' }}>Gluten-Free, No Shellfish</span>
            </div>
            <div style={styles.preference}>
              <span>Preferred Seating</span>
              <span style={{ color: '#C9A961' }}>Window Table</span>
            </div>
            <div style={styles.preference}>
              <span>Favorite Location</span>
              <span style={{ color: '#C9A961' }}>Main Dining Room</span>
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Special Occasions</h3>
          <TiltCard>
            <div style={styles.card}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Cake size={20} color="#C9A961" />
                <span>Birthday - August 22nd</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Heart size={20} color="#C9A961" />
                <span>Anniversary - March 15th</span>
              </div>
            </div>
          </TiltCard>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Recent Visits</h3>
          {profileData.recentVisits.map((visit, index) => (
            <div key={index} style={styles.visitCard}>
              <div>
                <div style={{ fontWeight: 'bold' }}>{visit.date}</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>{visit.occasion}</div>
              </div>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#C9A961" color="#C9A961" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );

  const renderFavorites = () => (
    <div style={styles.content}>
      <ScrollReveal>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Your Signature Orders</h3>
          {profileData.favoriteOrders.map((order, index) => (
            <TiltCard key={index}>
              <div style={styles.orderCard}>
                <div style={styles.orderPrice}>{order.price}</div>
                <div style={styles.orderName}>{order.name}</div>
                <div style={styles.orderDetails}>{order.details}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
                  <Wine size={16} color="#C9A961" />
                  <span style={{ fontSize: '14px', color: '#C9A961' }}>{order.wine}</span>
                </div>
                <button style={styles.reorderBtn}>Quick Reorder</button>
              </div>
            </TiltCard>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );

  const renderRewards = () => (
    <div style={styles.content}>
      <ScrollReveal>
        <div style={styles.referralCard}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Refer a Friend</h3>
          <p style={{ marginBottom: '15px', opacity: 0.9 }}>Share your love for exceptional dining</p>
          <div style={styles.referralCode}>BELLA2024</div>
          <button style={styles.shareBtn}>
            <Share size={16} />
            Share Code
          </button>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Available Rewards</h3>
          <TiltCard>
            <div style={styles.card}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Gift size={24} color="#C9A961" />
                <div>
                  <div style={{ fontWeight: 'bold' }}>Complimentary Appetizer</div>
                  <div style={{ fontSize: '14px', opacity: 0.8 }}>2,500 points</div>
                </div>
              </div>
            </div>
          </TiltCard>
          <TiltCard>
            <div style={styles.card}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Wine size={24} color="#C9A961" />
                <div>
                  <div style={{ fontWeight: 'bold' }}>Wine Tasting for Two</div>
                  <div style={{ fontSize: '14px', opacity: 0.8 }}>7,500 points</div>
                </div>
              </div>
            </div>
          </TiltCard>
          <TiltCard>
            <div style={styles.card}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Award size={24} color="#C9A961" />
                <div>
                  <div style={{ fontWeight: 'bold' }}>Private Chef Experience</div>
                  <div style={{ fontSize: '14px', opacity: 0.8 }}>15,000 points</div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </ScrollReveal>
    </div>
  );

  const renderSettings = () => (
    <div style={styles.content}>
      <ScrollReveal>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Account Settings</h3>
          <div style={styles.settingsItem}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Bell size={20} color="#C9A961" />
              <span>Notifications</span>
            </div>
            <ChevronRight size={20} />
          </div>
          <div style={styles.settingsItem}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <CreditCard size={20} color="#C9A961" />
              <span>Payment Methods</span>
            </div>
            <ChevronRight size={20} />
          </div>
          <div style={styles.settingsItem}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Calendar size={20} color="#C9A961" />
              <span>Reservation Preferences</span>
            </div>
            <ChevronRight size={20} />
          </div>
          <div style={styles.settingsItem}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Utensils size={20} color="#C9A961" />
              <span>Dietary Preferences</span>
            </div>
            <ChevronRight size={20} />
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Support</h3>
          <div style={styles.settingsItem}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Phone size={20} color="#C9A961" />
              <span>Contact Concierge</span>
            </div>
            <ChevronRight size={20} />
          </div>
          <div style={styles.settingsItem}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <MapPin size={20} color="#C9A961" />
              <span>Find Locations</span>
            </div>
            <ChevronRight size={20} />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Profile Header */}
      <div style={styles.header}>
        <div style={styles.profileInfo}>
          <img 
            src={profileData.avatar} 
            alt={profileData.name}
            style={styles.avatar}
          />
          <div style={styles.profileText}>
            <h1 style={styles.name}>{profileData.name}</h1>
            <div style={styles.tier}>
              <Crown size={18} color="#C9A961" />
              <span>{profileData.tier}</span>
            </div>
            <div style={styles.memberSince}>
              Member since {profileData.memberSince}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <TiltCard>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{profileData.stats.totalVisits}</div>
            <div style={styles.statLabel}>Total Visits</div>
          </div>
        </TiltCard>
        <TiltCard>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{profileData.stats.lifetimePoints.toLocaleString()}</div>
            <div style={styles.statLabel}>Lifetime Points</div>
          </div>
        </TiltCard>
        <TiltCard>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{profileData.stats.rewardsRedeemed}</div>
            <div style={styles.statLabel}>Rewards Used</div>
          </div>
        </TiltCard>
        <TiltCard>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>★ 4.9</div>
            <div style={styles.statLabel}>Avg Rating Given</div>
          </div>
        </TiltCard>
      </div>

      {/* Tab Navigation */}
      <div style={styles.tabNav}>
        <button 
          style={{...styles.tab, ...(activeTab === 'overview' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'favorites' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('favorites')}
        >
          Favorites
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'rewards' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('rewards')}
        >
          Rewards
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 'settings' ? styles.activeTab : {})}}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'favorites' && renderFavorites()}
      {activeTab === 'rewards' && renderRewards()}
      {activeTab === 'settings' && renderSettings()}

      {/* Bottom Navigation */}
      <div style={styles.bottomNav}>
        <Link to="/" style={styles.navItem}>
          <Utensils size={20} />
          <span>Menu</span>
        </Link>
        <Link to="/reservations" style={styles.navItem}>
          <Calendar size={20} />
          <span>Reserve</span>
        </Link>
        <Link to="/rewards" style={styles.navItem}>
          <Gift size={20} />
          <span>Rewards</span>
        </Link>
        <Link to="/profile" style={{...styles.navItem, color: '#C9A961'}}>
          <User size={20} />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
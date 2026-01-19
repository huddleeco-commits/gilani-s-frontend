import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Star, 
  Gift, 
  ChefHat, 
  Wine, 
  MapPin, 
  Phone, 
  Crown, 
  Award,
  Plus,
  Eye,
  RotateCw,
  Users,
  Heart,
  Utensils,
  CheckCircle
} from 'lucide-react';
import { ScrollReveal, AnimatedCounter } from '../effects';

const THEME = {
  colors: { 
    primary: '#722F37', 
    accent: '#C9A961', 
    background: '#F5F0E6', 
    surface: '#1A1A1A', 
    text: '#1A1A1A',
    textLight: '#F5F0E6'
  },
  fonts: { 
    heading: "Playfair Display, Georgia, serif", 
    body: "Lato, system-ui, sans-serif" 
  },
  spacing: { sectionPadding: '80px' }
};

const DashboardPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTab, setSelectedTab] = useState('home');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock user data
  const userData = {
    name: "Charlotte",
    memberSince: "2023",
    loyaltyPoints: 2847,
    nextRewardAt: 3000,
    totalVisits: 23,
    pointsEarned: 4250,
    rewardsRedeemed: 8,
    nextReservation: {
      date: "March 15, 2024",
      time: "7:30 PM",
      party: 4,
      table: "Chef's Table"
    }
  };

  const recentOrders = [
    {
      id: 1,
      date: "March 2, 2024",
      items: ["Wagyu Ribeye", "Lobster Bisque", "Château Margaux '15"],
      total: "$285",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300"
    },
    {
      id: 2,
      date: "February 14, 2024",
      items: ["Filet Mignon", "Truffle Risotto", "Dom Pérignon"],
      total: "$340",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?w=300"
    },
    {
      id: 3,
      date: "January 28, 2024",
      items: ["Dry-Aged Tomahawk", "Oysters Rockefeller"],
      total: "$195",
      image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300"
    }
  ];

  const favoriteDishes = [
    {
      name: "Wagyu Ribeye",
      price: "$85",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300"
    },
    {
      name: "Lobster Thermidor",
      price: "$65",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300"
    },
    {
      name: "Truffle Risotto",
      price: "$45",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=300"
    },
    {
      name: "Duck Confit",
      price: "$55",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300"
    }
  ];

  const specialOffers = [
    {
      title: "Birthday Celebration",
      description: "Complimentary dessert tasting menu",
      expires: "Valid until March 20",
      type: "birthday"
    },
    {
      title: "Wine Pairing Experience",
      description: "20% off our sommelier's selection",
      expires: "This weekend only",
      type: "limited"
    }
  ];

  const progressPercentage = (userData.loyaltyPoints / userData.nextRewardAt) * 100;

  const MainContent = () => {
    switch(selectedTab) {
      case 'reservations':
        return (
          <div style={{ padding: '20px', paddingBottom: '100px' }}>
            <h2 style={{ 
              fontFamily: THEME.fonts.heading, 
              fontSize: '28px', 
              color: THEME.colors.primary,
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Réservations
            </h2>
            
            {/* Current Reservation */}
            <div style={{
              background: 'linear-gradient(135deg, #722F37, #8B3A42)',
              borderRadius: '16px',
              padding: '24px',
              color: 'white',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <Crown size={24} style={{ color: THEME.colors.accent, marginRight: '12px' }} />
                <span style={{ fontSize: '18px', fontWeight: '600' }}>Upcoming Reservation</span>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
                  {userData.nextReservation.date}
                </div>
                <div style={{ fontSize: '18px', opacity: 0.9 }}>
                  {userData.nextReservation.time} • Party of {userData.nextReservation.party}
                </div>
                <div style={{ fontSize: '16px', opacity: 0.8, marginTop: '4px' }}>
                  {userData.nextReservation.table}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{
                  flex: 1,
                  background: THEME.colors.accent,
                  color: THEME.colors.surface,
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Modify
                </button>
                <button style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Cancel
                </button>
              </div>
            </div>

            <button style={{
              width: '100%',
              background: THEME.colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              padding: '20px',
              fontSize: '18px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '32px'
            }}>
              <Plus size={20} />
              Make New Reservation
            </button>

            {/* Reservation History */}
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: THEME.colors.primary
            }}>
              Recent Visits
            </h3>
            
            {[1,2,3].map(i => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
                border: `1px solid ${THEME.colors.accent}20`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: '600', color: THEME.colors.primary }}>
                      February {28-i}, 2024
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                      7:30 PM • Party of 2
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: THEME.colors.accent, fontWeight: '600' }}>
                      ${180 + i*20}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      +{18 + i*2} points
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'rewards':
        return (
          <div style={{ padding: '20px', paddingBottom: '100px' }}>
            <h2 style={{ 
              fontFamily: THEME.fonts.heading, 
              fontSize: '28px', 
              color: THEME.colors.primary,
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Rewards & Offers
            </h2>

            {/* Available Rewards */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
                Available Rewards
              </h3>
              
              {[
                { title: "Complimentary Appetizer", points: 500, available: true },
                { title: "Wine Pairing for Two", points: 1200, available: true },
                { title: "Private Dining Experience", points: 3000, available: false },
                { title: "Chef's Tasting Menu", points: 2500, available: true }
              ].map((reward, i) => (
                <div key={i} style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '12px',
                  border: `1px solid ${reward.available ? THEME.colors.accent : '#ddd'}`,
                  opacity: reward.available ? 1 : 0.6
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ 
                        fontWeight: '600', 
                        fontSize: '16px',
                        color: THEME.colors.primary,
                        marginBottom: '4px'
                      }}>
                        {reward.title}
                      </div>
                      <div style={{ 
                        fontSize: '14px', 
                        color: THEME.colors.accent,
                        fontWeight: '600'
                      }}>
                        {reward.points} points
                      </div>
                    </div>
                    <button style={{
                      background: reward.available ? THEME.colors.primary : '#ccc',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '600'
                    }} disabled={!reward.available}>
                      {reward.available ? 'Redeem' : 'Locked'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offers */}
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Special Offers
            </h3>
            
            {specialOffers.map((offer, i) => (
              <div key={i} style={{
                background: offer.type === 'birthday' 
                  ? 'linear-gradient(135deg, #C9A961, #D4B76A)' 
                  : 'linear-gradient(135deg, #722F37, #8B3A42)',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '16px',
                color: 'white'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Gift size={24} style={{ color: 'white', marginTop: '4px' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                      {offer.title}
                    </div>
                    <div style={{ fontSize: '15px', opacity: 0.9, marginBottom: '8px' }}>
                      {offer.description}
                    </div>
                    <div style={{ fontSize: '13px', opacity: 0.8 }}>
                      {offer.expires}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'menu':
        return (
          <div style={{ padding: '20px', paddingBottom: '100px' }}>
            <h2 style={{ 
              fontFamily: THEME.fonts.heading, 
              fontSize: '28px', 
              color: THEME.colors.primary,
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Le Menu
            </h2>

            {/* Menu Categories */}
            {[
              { name: 'Signature Steaks', items: [
                { name: 'Wagyu Ribeye', price: '$85', description: 'A5 grade, 14oz' },
                { name: 'Dry-Aged Filet', price: '$68', description: '28-day aged, 8oz' },
                { name: 'Tomahawk Steak', price: '$95', description: '32oz, for sharing' }
              ]},
              { name: 'Appetizers', items: [
                { name: 'Oysters Rockefeller', price: '$24', description: 'Half dozen, spinach & pernod' },
                { name: 'Foie Gras Terrine', price: '$32', description: 'Brioche, cherry gastrique' },
                { name: 'Lobster Bisque', price: '$18', description: 'Cognac cream, chive oil' }
              ]},
              { name: 'Wine Selection', items: [
                { name: 'Château Margaux 2015', price: '$280', description: 'Bordeaux, Premier Grand Cru' },
                { name: 'Caymus Cabernet', price: '$85', description: 'Napa Valley, 2020' },
                { name: 'Dom Pérignon', price: '$320', description: 'Champagne, Vintage 2012' }
              ]}
            ].map((category, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontSize: '22px', 
                  fontWeight: '700',
                  color: THEME.colors.primary,
                  marginBottom: '20px',
                  fontFamily: THEME.fonts.heading,
                  borderBottom: `2px solid ${THEME.colors.accent}`,
                  paddingBottom: '8px'
                }}>
                  {category.name}
                </h3>
                
                {category.items.map((item, j) => (
                  <div key={j} style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '16px',
                    border: `1px solid ${THEME.colors.accent}20`
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          fontSize: '18px', 
                          fontWeight: '600',
                          color: THEME.colors.primary,
                          marginBottom: '4px'
                        }}>
                          {item.name}
                        </div>
                        <div style={{ 
                          fontSize: '14px', 
                          color: '#666',
                          fontStyle: 'italic'
                        }}>
                          {item.description}
                        </div>
                      </div>
                      <div style={{ 
                        fontSize: '18px', 
                        fontWeight: '700',
                        color: THEME.colors.accent,
                        marginLeft: '16px'
                      }}>
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );

      case 'profile':
        return (
          <div style={{ padding: '20px', paddingBottom: '100px' }}>
            <h2 style={{ 
              fontFamily: THEME.fonts.heading, 
              fontSize: '28px', 
              color: THEME.colors.primary,
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Profile
            </h2>

            {/* Profile Header */}
            <div style={{
              background: 'linear-gradient(135deg, #722F37, #8B3A42)',
              borderRadius: '16px',
              padding: '24px',
              color: 'white',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: THEME.colors.accent,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '36px',
                fontWeight: '700'
              }}>
                C
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
                {userData.name} Dubois
              </h3>
              <div style={{ opacity: 0.9 }}>
                Premier Member since {userData.memberSince}
              </div>
            </div>

            {/* Profile Details */}
            {[
              { label: 'Email', value: 'charlotte.dubois@email.com', icon: null },
              { label: 'Phone', value: '+1 (469) 555-0123', icon: Phone },
              { label: 'Preferred Seating', value: 'Quiet corner table', icon: null },
              { label: 'Dietary Preferences', value: 'No seafood allergies', icon: null },
              { label: 'Anniversary Date', value: 'June 15th', icon: Heart }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '12px',
                border: `1px solid ${THEME.colors.accent}20`,
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                {item.icon && <item.icon size={20} style={{ color: THEME.colors.accent }} />}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: THEME.colors.primary }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button style={{
                background: THEME.colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '16px',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                Edit Profile
              </button>
              <button style={{
                background: 'white',
                color: THEME.colors.primary,
                border: `1px solid ${THEME.colors.primary}`,
                borderRadius: '12px',
                padding: '16px',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                Notification Settings
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div style={{ padding: '20px', paddingBottom: '100px' }}>
            {/* Welcome Header */}
            <div style={{
              background: 'linear-gradient(135deg, #722F37, #8B3A42)',
              borderRadius: '20px',
              padding: '24px',
              color: 'white',
              marginBottom: '24px'
            }}>
              <div style={{ fontSize: '16px', opacity: 0.9, marginBottom: '8px' }}>
                Bonsoir, {userData.name}
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
                Welcome to Gilani's
              </div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>

            {/* Loyalty Points Card */}
            <ScrollReveal>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '24px',
                marginBottom: '24px',
                border: `2px solid ${THEME.colors.accent}40`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <Crown size={24} style={{ color: THEME.colors.accent, marginRight: '12px' }} />
                  <span style={{ fontSize: '18px', fontWeight: '700', color: THEME.colors.primary }}>
                    Loyalty Points
                  </span>
                </div>
                
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto' }}>
                    <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke={`${THEME.colors.accent}30`}
                        strokeWidth="8"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke={THEME.colors.accent}
                        strokeWidth="8"
                        strokeDasharray={`${progressPercentage * 3.14} 314`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center'
                    }}>
                      <AnimatedCounter 
                        end={userData.loyaltyPoints} 
                        duration={2}
                        style={{ 
                          fontSize: '20px', 
                          fontWeight: '700', 
                          color: THEME.colors.primary 
                        }} 
                      />
                      <div style={{ fontSize: '12px', color: '#666' }}>points</div>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '16px' }}>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      {userData.nextRewardAt - userData.loyaltyPoints} points to next reward
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats Row */}
            <ScrollReveal>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '12px',
                marginBottom: '24px'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'center',
                  border: `1px solid ${THEME.colors.accent}20`
                }}>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: THEME.colors.primary }}>
                    <AnimatedCounter end={userData.totalVisits} duration={1.5} />
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    Total Visits
                  </div>
                </div>
                
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'center',
                  border: `1px solid ${THEME.colors.accent}20`
                }}>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: THEME.colors.primary }}>
                    <AnimatedCounter end={userData.pointsEarned} duration={1.5} />
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    Points Earned
                  </div>
                </div>
                
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'center',
                  border: `1px solid ${THEME.colors.accent}20`
                }}>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: THEME.colors.primary }}>
                    <AnimatedCounter end={userData.rewardsRedeemed} duration={1.5} />
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    Rewards Used
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Next Reservation */}
            <div style={{
              background: THEME.colors.accent,
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '24px',
              color: THEME.colors.surface
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <Calendar size={20} style={{ marginRight: '12px' }} />
                <span style={{ fontSize: '16px', fontWeight: '600' }}>Next Reservation</span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
                {userData.nextReservation.date}
              </div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>
                {userData.nextReservation.time} • Party of {userData.nextReservation.party}
              </div>
              <button style={{
                background: THEME.colors.surface,
                color: THEME.colors.accent,
                border: 'none',
                borderRadius: '12px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: '600',
                marginTop: '12px'
              }}>
                View Details
              </button>
            </div>

            {/* Quick Actions */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginBottom: '32px'
            }}>
              {[
                { label: 'Make Reservation', icon: Calendar, color: THEME.colors.primary },
                { label: 'View Menu', icon: Utensils, color: THEME.colors.primary },
                { label: 'Redeem Reward', icon: Gift, color: THEME.colors.accent },
                { label: 'Wine List', icon: Wine, color: THEME.colors.accent }
              ].map((action, i) => (
                <button key={i} style={{
                  background: action.color,
                  color: 'white',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '20px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  <action.icon size={24} />
                  {action.label}
                </button>
              ))}
            </div>

            {/* Recent Orders */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '700', 
                marginBottom: '16px',
                color: THEME.colors.primary
              }}>
                Recent Orders
              </h3>
              
              {recentOrders.slice(0, 2).map((order) => (
                <div key={order.id} style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '16px',
                  marginBottom: '12px',
                  border: `1px solid ${THEME.colors.accent}20`,
                  display: 'flex',
                  gap: '16px'
                }}>
                  <img
                    src={order.image}
                    alt="Dish"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>
                      {order.date}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '600', color: THEME.colors.primary, marginBottom: '4px' }}>
                      {order.items[0]} +{order.items.length - 1} more
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: THEME.colors.accent }}>
                      {order.total}
                    </div>
                  </div>
                  <button style={{
                    background: 'none',
                    border: `1px solid ${THEME.colors.primary}`,
                    borderRadius: '20px',
                    padding: '8px 16px',
                    fontSize: '12px',
                    color: THEME.colors.primary,
                    fontWeight: '600'
                  }}>
                    <RotateCw size={14} style={{ marginRight: '4px' }} />
                    Reorder
                  </button>
                </div>
              ))}
            </div>

            {/* Favorite Dishes */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '700', 
                marginBottom: '16px',
                color: THEME.colors.primary
              }}>
                Your Favorites
              </h3>
              
              <div style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '16px',
                paddingBottom: '8px'
              }}>
                {favoriteDishes.map((dish, i) => (
                  <div key={i} style={{
                    minWidth: '140px',
                    background: 'white',
                    borderRadius: '16px',
                    padding: '12px',
                    border: `1px solid ${THEME.colors.accent}20`
                  }}>
                    <img
                      src={dish.image}
                      alt={dish.name}
                      style={{
                        width: '100%',
                        height: '80px',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        marginBottom: '12px'
                      }}
                    />
                    <div style={{ fontSize: '14px', fontWeight: '600', color: THEME.colors.primary, marginBottom: '4px' }}>
                      {dish.name}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: THEME.colors.accent }}>
                      {dish.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offers */}
            <div>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '700', 
                marginBottom: '16px',
                color: THEME.colors.primary
              }}>
                Special Offers
              </h3>
              
              {specialOffers.map((offer, i) => (
                <div key={i} style={{
                  background: offer.type === 'birthday' 
                    ? 'linear-gradient(135deg, #C9A961, #D4B76A)' 
                    : 'linear-gradient(135deg, #722F37, #8B3A42)',
                  borderRadius: '16px',
                  padding: '20px',
                  marginBottom: '16px',
                  color: 'white'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Gift size={24} style={{ color: 'white', marginTop: '4px' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>
                        {offer.title}
                      </div>
                      <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '6px' }}>
                        {offer.description}
                      </div>
                      <div style={{ fontSize: '12px', opacity: 0.8 }}>
                        {offer.expires}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: THEME.colors.background,
      fontFamily: THEME.fonts.body
    }}>
      {/* Header */}
      <div style={{
        background: THEME.colors.surface,
        padding: '16px 20px',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              margin: 0,
              fontFamily: THEME.fonts.heading,
              color: THEME.colors.accent
            }}>
              Gilani's
            </h1>
            <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '2px' }}>
              Prosper, TX • Fine Dining
            </div>
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            background: THEME.colors.accent,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: '700',
            color: THEME.colors.surface
          }}>
            C
          </div>
        </div>
      </div>

      {/* Main Content */}
      <MainContent />

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        borderTop: `1px solid ${THEME.colors.accent}20`,
        padding: '12px 0 8px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        {[
          { id: 'home', icon: Utensils, label: 'Home' },
          { id: 'menu', icon: Users, label: 'Menu' },
          { id: 'reservations', icon: Calendar, label: 'Tables' },
          { id: 'rewards', icon: Crown, label: 'Rewards' },
          { id: 'profile', icon: Users, label: 'Profile' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 12px',
              color: selectedTab === tab.id ? THEME.colors.primary : '#666',
              fontSize: '11px',
              fontWeight: selectedTab === tab.id ? '600' : '400'
            }}
          >
            <tab.icon size={20} />
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
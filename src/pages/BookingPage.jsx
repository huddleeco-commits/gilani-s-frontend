import React, { useState } from 'react';
import { Calendar, Clock, Users, Wine, Star, Check, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, VideoBackground } from '../effects';

const THEME = {
  colors: { 
    primary: '#722F37', 
    accent: '#C9A961', 
    background: '#F5F0E6', 
    text: '#1A1A1A', 
    surface: '#1A1A1A' 
  },
  fonts: { heading: "Playfair Display, Georgia, serif", body: "Lato, system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    name: '',
    email: '',
    phone: '',
    requests: ''
  });

  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showOccasions, setShowOccasions] = useState(false);

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const occasions = [
    'Romantic Dinner', 'Business Meeting', 'Anniversary', 
    'Birthday Celebration', 'Special Occasion', 'Casual Dining'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', formData);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${THEME.colors.surface} 0%, #2A1A1D 100%)`,
      color: '#ffffff'
    }}>
      {/* Hero Section with Video Background */}
      <VideoBackground
        videoSrc="https://videos.pexels.com/video-files/4253001/4253001-uhd_2560_1440_25fps.mp4"
        posterImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
        overlay="linear-gradient(rgba(26, 26, 26, 0.75), rgba(114, 47, 55, 0.6))"
        height="60vh"
      >
        <div style={{ 
          textAlign: 'center', 
          color: 'white', 
          maxWidth: '800px', 
          padding: '0 20px',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          <h1 style={{ 
            fontSize: window.innerWidth < 768 ? '36px' : '56px', 
            marginBottom: '20px',
            fontFamily: THEME.fonts.heading,
            letterSpacing: '2px',
            fontWeight: '400'
          }}>
            Réservations
          </h1>
          <p style={{ 
            fontSize: '20px', 
            opacity: 0.95, 
            marginBottom: '30px',
            fontStyle: 'italic'
          }}>
            Secure your table at Prosper's most distinguished steakhouse
          </p>
          <div style={{
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <AnimatedCounter end={15} suffix=" Years" duration={2} />
              <p style={{ opacity: 0.8, fontSize: '14px', marginTop: '5px' }}>Culinary Excellence</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <AnimatedCounter end={2800} suffix="+" duration={2.5} />
              <p style={{ opacity: 0.8, fontSize: '14px', marginTop: '5px' }}>Satisfied Guests</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <AnimatedCounter end={98} suffix="%" duration={2} />
              <p style={{ opacity: 0.8, fontSize: '14px', marginTop: '5px' }}>Guest Satisfaction</p>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* Main Booking Section */}
      <ScrollReveal>
        <section style={{
          padding: window.innerWidth < 768 ? '60px 20px' : THEME.spacing.sectionPadding,
          background: THEME.colors.background,
          color: THEME.colors.text
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* Booking Form */}
            <div>
              <h2 style={{
                fontSize: window.innerWidth < 768 ? '32px' : '42px',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '20px',
                letterSpacing: '1px'
              }}>
                Reserve Your Table
              </h2>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.8,
                marginBottom: '40px'
              }}>
                Experience the finest steaks, curated wines, and impeccable French service. 
                Book your reservation for an unforgettable evening.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {/* Date & Time Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                  gap: '20px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: THEME.colors.primary
                    }}>
                      Preferred Date
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        style={{
                          width: '100%',
                          padding: '16px',
                          border: `2px solid ${THEME.colors.accent}40`,
                          borderRadius: '12px',
                          fontSize: '16px',
                          background: 'rgba(255,255,255,0.95)',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          outline: 'none'
                        }}
                        onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                        onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}40`}
                        required
                      />
                      <Calendar style={{
                        position: 'absolute',
                        right: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: THEME.colors.accent,
                        pointerEvents: 'none'
                      }} size={20} />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: THEME.colors.primary
                    }}>
                      Preferred Time
                    </label>
                    <div style={{ position: 'relative' }}>
                      <button
                        type="button"
                        onClick={() => setShowTimeSlots(!showTimeSlots)}
                        style={{
                          width: '100%',
                          padding: '16px',
                          border: `2px solid ${THEME.colors.accent}40`,
                          borderRadius: '12px',
                          fontSize: '16px',
                          background: 'rgba(255,255,255,0.95)',
                          backdropFilter: 'blur(10px)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        {formData.time || 'Select time'}
                        <ChevronDown style={{
                          transform: showTimeSlots ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }} size={20} />
                      </button>
                      
                      {showTimeSlots && (
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          background: 'white',
                          border: `1px solid ${THEME.colors.accent}40`,
                          borderRadius: '12px',
                          marginTop: '4px',
                          zIndex: 10,
                          maxHeight: '200px',
                          overflowY: 'auto',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                        }}>
                          {timeSlots.map((time, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                handleInputChange('time', time);
                                setShowTimeSlots(false);
                              }}
                              style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: 'none',
                                background: formData.time === time ? `${THEME.colors.accent}20` : 'transparent',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '16px',
                                color: THEME.colors.text,
                                transition: 'background 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                if (formData.time !== time) {
                                  e.target.style.background = `${THEME.colors.accent}10`;
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (formData.time !== time) {
                                  e.target.style.background = 'transparent';
                                }
                              }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Guests & Occasion Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                  gap: '20px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: THEME.colors.primary
                    }}>
                      Number of Guests
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        value={formData.guests}
                        onChange={(e) => handleInputChange('guests', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '16px',
                          border: `2px solid ${THEME.colors.accent}40`,
                          borderRadius: '12px',
                          fontSize: '16px',
                          background: 'rgba(255,255,255,0.95)',
                          backdropFilter: 'blur(10px)',
                          appearance: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {[...Array(12)].map((_, i) => (
                          <option key={i} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                        ))}
                        <option value="12+">12+ Guests (Private Dining)</option>
                      </select>
                      <Users style={{
                        position: 'absolute',
                        right: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: THEME.colors.accent,
                        pointerEvents: 'none'
                      }} size={20} />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: THEME.colors.primary
                    }}>
                      Occasion (Optional)
                    </label>
                    <div style={{ position: 'relative' }}>
                      <button
                        type="button"
                        onClick={() => setShowOccasions(!showOccasions)}
                        style={{
                          width: '100%',
                          padding: '16px',
                          border: `2px solid ${THEME.colors.accent}40`,
                          borderRadius: '12px',
                          fontSize: '16px',
                          background: 'rgba(255,255,255,0.95)',
                          backdropFilter: 'blur(10px)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        {formData.occasion || 'Select occasion'}
                        <ChevronDown style={{
                          transform: showOccasions ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }} size={20} />
                      </button>
                      
                      {showOccasions && (
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          background: 'white',
                          border: `1px solid ${THEME.colors.accent}40`,
                          borderRadius: '12px',
                          marginTop: '4px',
                          zIndex: 10,
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                        }}>
                          {occasions.map((occasion, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                handleInputChange('occasion', occasion);
                                setShowOccasions(false);
                              }}
                              style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: 'none',
                                background: formData.occasion === occasion ? `${THEME.colors.accent}20` : 'transparent',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '16px',
                                color: THEME.colors.text,
                                transition: 'background 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                if (formData.occasion !== occasion) {
                                  e.target.style.background = `${THEME.colors.accent}10`;
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (formData.occasion !== occasion) {
                                  e.target.style.background = 'transparent';
                                }
                              }}
                            >
                              {occasion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                  gap: '20px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: THEME.colors.primary
                    }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      style={{
                        width: '100%',
                        padding: '16px',
                        border: `2px solid ${THEME.colors.accent}40`,
                        borderRadius: '12px',
                        fontSize: '16px',
                        background: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(10px)',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                      onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}40`}
                      required
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: THEME.colors.primary
                    }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      style={{
                        width: '100%',
                        padding: '16px',
                        border: `2px solid ${THEME.colors.accent}40`,
                        borderRadius: '12px',
                        fontSize: '16px',
                        background: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(10px)',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                      onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}40`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: THEME.colors.primary
                  }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    style={{
                      width: '100%',
                      padding: '16px',
                      border: `2px solid ${THEME.colors.accent}40`,
                      borderRadius: '12px',
                      fontSize: '16px',
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(10px)',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}40`}
                    required
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: THEME.colors.primary
                  }}>
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={formData.requests}
                    onChange={(e) => handleInputChange('requests', e.target.value)}
                    placeholder="Dietary restrictions, seating preferences, wine pairings..."
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '16px',
                      border: `2px solid ${THEME.colors.accent}40`,
                      borderRadius: '12px',
                      fontSize: '16px',
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(10px)',
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '100px'
                    }}
                    onFocus={(e) => e.target.style.borderColor = THEME.colors.accent}
                    onBlur={(e) => e.target.style.borderColor = `${THEME.colors.accent}40`}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, #8B4049 100%)`,
                    color: 'white',
                    padding: '18px 40px',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '10px',
                    boxShadow: '0 4px 15px rgba(114, 47, 55, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(114, 47, 55, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(114, 47, 55, 0.3)';
                  }}
                >
                  Reserve Your Table
                </button>
              </form>
            </div>

            {/* Booking Information & Highlights */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(201, 169, 97, 0.2)',
              borderRadius: '20px',
              padding: '40px',
              height: 'fit-content',
              position: 'sticky',
              top: '20px'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '30px',
                letterSpacing: '1px'
              }}>
                Reservation Details
              </h3>

              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <Clock style={{ color: THEME.colors.accent }} size={24} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Operating Hours</h4>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>Dinner Service: Tuesday - Sunday</p>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>5:00 PM - 10:00 PM</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <MapPin style={{ color: THEME.colors.accent }} size={24} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Location</h4>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>Historic Downtown Prosper</p>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>Complimentary Valet Parking</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <Users style={{ color: THEME.colors.accent }} size={24} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Dress Code</h4>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>Smart Elegant Attire</p>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>Business casual or formal</p>
                  </div>
                </div>
              </div>

              <div style={{
                borderTop: `1px solid ${THEME.colors.accent}40`,
                paddingTop: '25px'
              }}>
                <h4 style={{
                  fontSize: '18px',
                  fontFamily: THEME.fonts.heading,
                  marginBottom: '15px',
                  color: THEME.colors.accent
                }}>
                  Experience Highlights
                </h4>
                
                {[
                  'Prime dry-aged steaks',
                  'Curated wine pairings',
                  'Chef\'s tasting menu available',
                  'Private dining rooms',
                  'Sommelier wine service'
                ].map((highlight, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px'
                  }}>
                    <Check style={{ color: THEME.colors.accent }} size={16} />
                    <span style={{ fontSize: '14px', opacity: 0.9 }}>{highlight}</span>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '25px',
                padding: '20px',
                background: `${THEME.colors.accent}15`,
                borderRadius: '12px',
                border: `1px solid ${THEME.colors.accent}30`
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <Star style={{ color: THEME.colors.accent }} size={20} />
                  <span style={{ fontWeight: '600', color: THEME.colors.accent }}>Special Note</span>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: '1.5',
                  opacity: 0.9
                }}>
                  For parties of 8 or more, please call directly for our private dining experience. 
                  We'll create a customized menu with our chef.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <section style={{
        background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, #5A252B 100%)`,
        color: 'white',
        padding: window.innerWidth < 768 ? '60px 20px' : THEME.spacing.sectionPadding,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: window.innerWidth < 768 ? '28px' : '36px',
            fontFamily: THEME.fonts.heading,
            marginBottom: '20px',
            letterSpacing: '1px'
          }}>
            Need Assistance?
          </h2>
          <p style={{
            fontSize: '18px',
            opacity: 0.9,
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Our reservation team is standing by to help create your perfect dining experience
          </p>

          <div style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '16px'
            }}>
              <Phone style={{ color: THEME.colors.accent }} size={20} />
              <span>(469) 555-STEAK</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '16px'
            }}>
              <Mail style={{ color: THEME.colors.accent }} size={20} />
              <span>reservations@gilanis.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
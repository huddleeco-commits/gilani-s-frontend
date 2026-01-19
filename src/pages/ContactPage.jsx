import React, { useState } from 'react';
import { ScrollReveal, AnimatedCounter } from '../effects';
import { MapPin, Phone, Mail, Clock, Car, Calendar, Send, Star, Wine, ChefHat, Users } from 'lucide-react';

const THEME = {
  colors: { 
    primary: '#722F37', 
    accent: '#C9A961', 
    background: '#1A1A1A', 
    text: '#F5F0E6', 
    surface: '#F5F0E6',
    cream: '#F5F0E6',
    charcoal: '#1A1A1A'
  },
  fonts: { 
    heading: "Playfair Display, Georgia, serif", 
    body: "Lato, system-ui, sans-serif" 
  },
  spacing: { sectionPadding: '80px' }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    party: '',
    occasion: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    border: `2px solid ${THEME.colors.accent}`,
    borderRadius: '4px',
    fontSize: '16px',
    fontFamily: THEME.fonts.body,
    backgroundColor: THEME.colors.cream,
    color: THEME.colors.charcoal,
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: THEME.colors.charcoal,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  return (
    <div style={{ backgroundColor: THEME.colors.cream, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(114, 47, 55, 0.8)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 20px' }}>
          <h1 style={{
            fontSize: '48px',
            fontFamily: THEME.fonts.heading,
            marginBottom: '20px',
            letterSpacing: '2px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Réservations & Contact
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            fontStyle: 'italic',
            letterSpacing: '1px'
          }}>
            Where French tradition meets modern elegance
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding} 20px`,
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '80px',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr',
              gap: '60px'
            }
          }}>
            
            {/* Reservation Form */}
            <div style={{
              backgroundColor: 'white',
              padding: '60px 50px',
              borderRadius: '8px',
              boxShadow: '0 20px 40px rgba(114, 47, 55, 0.15)',
              border: `1px solid ${THEME.colors.accent}`
            }}>
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <ChefHat style={{ 
                  width: '48px', 
                  height: '48px', 
                  color: THEME.colors.accent, 
                  margin: '0 auto 20px' 
                }} />
                <h2 style={{
                  fontSize: '32px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '10px',
                  letterSpacing: '1px'
                }}>
                  Reserve Your Table
                </h2>
                <p style={{ 
                  color: THEME.colors.charcoal, 
                  opacity: 0.8,
                  fontSize: '16px'
                }}>
                  Experience culinary excellence at Gilani's
                </p>
              </div>

              {isSubmitted ? (
                <div style={{
                  textAlign: 'center',
                  padding: '40px',
                  backgroundColor: THEME.colors.cream,
                  borderRadius: '8px',
                  border: `2px solid ${THEME.colors.accent}`
                }}>
                  <Star style={{ 
                    width: '64px', 
                    height: '64px', 
                    color: THEME.colors.accent, 
                    margin: '0 auto 20px' 
                  }} />
                  <h3 style={{
                    fontSize: '24px',
                    color: THEME.colors.primary,
                    marginBottom: '15px',
                    fontFamily: THEME.fonts.heading
                  }}>
                    Merci beaucoup!
                  </h3>
                  <p style={{ color: THEME.colors.charcoal, lineHeight: '1.6' }}>
                    Your reservation request has been received. Our maître d' will contact you within 2 hours to confirm your table.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '25px',
                    marginBottom: '25px'
                  }}>
                    <div>
                      <label style={labelStyle}>Prénom</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Nom</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '20px',
                    marginBottom: '25px'
                  }}>
                    <div>
                      <label style={labelStyle}>Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Heure</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                      >
                        <option value="">Select</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Guests</label>
                      <select
                        name="party"
                        value={formData.party}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                      >
                        <option value="">Select</option>
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <label style={labelStyle}>Occasion (Optional)</label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      style={inputStyle}
                    >
                      <option value="">Select an occasion</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="birthday">Birthday</option>
                      <option value="business">Business Dinner</option>
                      <option value="date">Date Night</option>
                      <option value="celebration">Special Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '35px' }}>
                    <label style={labelStyle}>Special Requests</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{
                        ...inputStyle,
                        minHeight: '120px',
                        resize: 'vertical'
                      }}
                      placeholder="Dietary restrictions, wine preferences, seating requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '18px 0',
                      backgroundColor: isSubmitting ? THEME.colors.charcoal : THEME.colors.primary,
                      color: 'white',
                      border: 'none',
                      borderRadius: '9999px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: THEME.fonts.body,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}
                  >
                    {isSubmitting ? 'Processing...' : 'Request Reservation'}
                    {!isSubmitting && <Send style={{ width: '18px', height: '18px' }} />}
                  </button>
                </form>
              )}
            </div>

            {/* Business Information */}
            <div>
              <div style={{
                backgroundColor: THEME.colors.charcoal,
                padding: '60px 50px',
                borderRadius: '8px',
                marginBottom: '40px',
                color: 'white'
              }}>
                <h3 style={{
                  fontSize: '28px',
                  fontFamily: THEME.fonts.heading,
                  marginBottom: '30px',
                  color: THEME.colors.accent,
                  letterSpacing: '1px'
                }}>
                  Gilani's Steakhouse
                </h3>

                <div style={{ marginBottom: '35px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    marginBottom: '20px'
                  }}>
                    <MapPin style={{ 
                      width: '24px', 
                      height: '24px', 
                      color: THEME.colors.accent,
                      marginTop: '2px',
                      flexShrink: 0
                    }} />
                    <div>
                      <p style={{ 
                        fontWeight: '600',
                        marginBottom: '5px',
                        fontSize: '16px'
                      }}>
                        1851 Legacy Drive, Suite 140
                      </p>
                      <p style={{ 
                        opacity: 0.9,
                        lineHeight: '1.6'
                      }}>
                        Prosper, Texas 75078<br />
                        Legacy West District
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '20px'
                  }}>
                    <Phone style={{ 
                      width: '24px', 
                      height: '24px', 
                      color: THEME.colors.accent
                    }} />
                    <div>
                      <p style={{ fontWeight: '600', fontSize: '16px' }}>
                        (972) 555-0128
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <Mail style={{ 
                      width: '24px', 
                      height: '24px', 
                      color: THEME.colors.accent
                    }} />
                    <div>
                      <p style={{ fontWeight: '600', fontSize: '16px' }}>
                        reservations@gilanisteakhouse.com
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                  borderTop: `1px solid ${THEME.colors.accent}`,
                  paddingTop: '30px',
                  marginTop: '30px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '15px'
                  }}>
                    <Clock style={{ 
                      width: '24px', 
                      height: '24px', 
                      color: THEME.colors.accent
                    }} />
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '600'
                    }}>
                      Hours of Operation
                    </h4>
                  </div>
                  
                  <div style={{ paddingLeft: '39px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span>Tuesday - Thursday</span>
                      <span style={{ color: THEME.colors.accent }}>5:00 PM - 10:00 PM</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span>Friday - Saturday</span>
                      <span style={{ color: THEME.colors.accent }}>5:00 PM - 11:00 PM</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span>Sunday</span>
                      <span style={{ color: THEME.colors.accent }}>5:00 PM - 9:00 PM</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <span>Monday</span>
                      <span style={{ opacity: 0.6 }}>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information Cards */}
              <div style={{
                display: 'grid',
                gap: '20px'
              }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '8px',
                  border: `1px solid ${THEME.colors.accent}`,
                  textAlign: 'center'
                }}>
                  <Car style={{ 
                    width: '32px', 
                    height: '32px', 
                    color: THEME.colors.accent,
                    margin: '0 auto 15px'
                  }} />
                  <h4 style={{
                    fontSize: '18px',
                    color: THEME.colors.primary,
                    marginBottom: '8px',
                    fontFamily: THEME.fonts.heading
                  }}>
                    Complimentary Valet
                  </h4>
                  <p style={{ 
                    color: THEME.colors.charcoal,
                    opacity: 0.8,
                    fontSize: '14px'
                  }}>
                    Available Tuesday - Sunday
                  </p>
                </div>

                <div style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '8px',
                  border: `1px solid ${THEME.colors.accent}`,
                  textAlign: 'center'
                }}>
                  <Users style={{ 
                    width: '32px', 
                    height: '32px', 
                    color: THEME.colors.accent,
                    margin: '0 auto 15px'
                  }} />
                  <h4 style={{
                    fontSize: '18px',
                    color: THEME.colors.primary,
                    marginBottom: '8px',
                    fontFamily: THEME.fonts.heading
                  }}>
                    Dress Code
                  </h4>
                  <p style={{ 
                    color: THEME.colors.charcoal,
                    opacity: 0.8,
                    fontSize: '14px'
                  }}>
                    Smart Elegant Attire
                  </p>
                </div>

                <div style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '8px',
                  border: `1px solid ${THEME.colors.accent}`,
                  textAlign: 'center'
                }}>
                  <Wine style={{ 
                    width: '32px', 
                    height: '32px', 
                    color: THEME.colors.accent,
                    margin: '0 auto 15px'
                  }} />
                  <h4 style={{
                    fontSize: '18px',
                    color: THEME.colors.primary,
                    marginBottom: '8px',
                    fontFamily: THEME.fonts.heading
                  }}>
                    Wine Cellar Events
                  </h4>
                  <p style={{ 
                    color: THEME.colors.charcoal,
                    opacity: 0.8,
                    fontSize: '14px'
                  }}>
                    Private dining for 12-18 guests
                  </p>
                </div>
              </div>

              {/* Statistics */}
              <ScrollReveal>
                <div style={{
                  backgroundColor: THEME.colors.primary,
                  padding: '40px 30px',
                  borderRadius: '8px',
                  marginTop: '40px',
                  textAlign: 'center',
                  color: 'white'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '30px'
                  }}>
                    <div>
                      <AnimatedCounter end={15} suffix="+ Years" duration={2} />
                      <p style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: THEME.colors.accent,
                        marginBottom: '5px',
                        fontFamily: THEME.fonts.heading
                      }}>
                        <AnimatedCounter end={15} suffix=" Years" duration={2} />
                      </p>
                      <p style={{ fontSize: '14px', opacity: 0.9 }}>
                        Culinary Excellence
                      </p>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: THEME.colors.accent,
                        marginBottom: '5px',
                        fontFamily: THEME.fonts.heading
                      }}>
                        <AnimatedCounter end={2500} suffix="+" duration={2.5} />
                      </p>
                      <p style={{ fontSize: '14px', opacity: 0.9 }}>
                        Distinguished Guests
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Map Section */}
      <section style={{
        backgroundColor: THEME.colors.charcoal,
        padding: `60px 20px`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '32px',
            color: THEME.colors.accent,
            marginBottom: '20px',
            fontFamily: THEME.fonts.heading
          }}>
            Visit Us in Legacy West
          </h3>
          <p style={{
            color: 'white',
            opacity: 0.9,
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Located in the heart of Prosper's premier shopping and dining district, 
            just minutes from Frisco and Plano.
          </p>
          <div style={{
            height: '300px',
            backgroundColor: THEME.colors.accent,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: THEME.colors.charcoal,
            fontSize: '16px',
            fontWeight: '600'
          }}>
            Interactive Map Coming Soon
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
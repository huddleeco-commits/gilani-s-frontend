import React from 'react';
import { Link } from 'react-router-dom';
import { Award, MapPin, Clock, Users, Star, ChevronRight, Wine, Utensils } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, ParallaxSection, VideoBackground } from '../effects';

const THEME = {
  colors: { 
    primary: '#722F37', 
    accent: '#C9A961', 
    background: '#F5F0E6', 
    dark: '#1A1A1A',
    text: '#f5f5f5', 
    surface: '#f8fafc' 
  },
  fonts: { heading: "Playfair Display, Georgia, serif", body: "Lato, system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

function AboutPage() {
  return (
    <div style={{ backgroundColor: THEME.colors.background }}>
      {/* Hero Section with Video Background */}
      <VideoBackground
        videoSrc="https://videos.pexels.com/video-files/4253001/4253001-uhd_2560_1440_25fps.mp4"
        posterImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
        overlay="linear-gradient(rgba(114, 47, 55, 0.8), rgba(26, 26, 26, 0.85))"
        height="100vh"
      >
        <div style={{ 
          textAlign: 'center', 
          color: 'white', 
          maxWidth: '900px', 
          padding: '0 20px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          <h1 style={{ 
            fontSize: window.innerWidth <= 768 ? '36px' : '64px', 
            fontFamily: THEME.fonts.heading,
            marginBottom: '24px',
            letterSpacing: '2px',
            fontWeight: '300'
          }}>
            Notre Histoire
          </h1>
          <p style={{ 
            fontSize: window.innerWidth <= 768 ? '18px' : '24px', 
            opacity: 0.95, 
            marginBottom: '40px',
            fontStyle: 'italic',
            color: THEME.colors.accent
          }}>
            Where French tradition meets modern elegance
          </p>
          <div style={{
            width: '80px',
            height: '2px',
            background: `linear-gradient(90deg, ${THEME.colors.accent}, transparent)`,
            margin: '0 auto 40px auto'
          }} />
          <Link 
            to="/reservations" 
            style={{ 
              padding: '18px 45px', 
              fontSize: '18px',
              backgroundColor: 'transparent',
              color: 'white',
              border: `2px solid ${THEME.colors.accent}`,
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s ease',
              fontFamily: THEME.fonts.body,
              letterSpacing: '1px'
            }}
          >
            Réservations <ChevronRight size={20} />
          </Link>
        </div>
      </VideoBackground>

      {/* Our Story Section */}
      <ScrollReveal>
        <section style={{ 
          padding: `${THEME.spacing.sectionPadding} 0`,
          backgroundColor: THEME.colors.background 
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 20px',
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ 
                fontSize: window.innerWidth <= 768 ? '36px' : '48px',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '30px',
                lineHeight: '1.2'
              }}>
                A Culinary Journey <em style={{ color: THEME.colors.accent }}>Born in Paris</em>
              </h2>
              <p style={{ 
                fontSize: '18px',
                lineHeight: '1.8',
                color: THEME.colors.dark,
                marginBottom: '25px',
                fontFamily: THEME.fonts.body
              }}>
                Our story begins in the heart of Montparnasse, where Chef Laurent Gilani honed his craft under the tutelage of Michelin-starred masters. After two decades perfecting the art of French cuisine, he brought his passion to Prosper, Texas, creating an intimate sanctuary where culinary excellence meets Texas hospitality.
              </p>
              <p style={{ 
                fontSize: '18px',
                lineHeight: '1.8',
                color: THEME.colors.dark,
                marginBottom: '35px',
                fontFamily: THEME.fonts.body
              }}>
                At Gilani's, every dish tells a story of tradition reimagined. We source the finest dry-aged beef, partner with local Texas ranchers, and combine time-honored French techniques with the bold flavors of our adopted home.
              </p>
              <div style={{
                padding: '30px',
                backgroundColor: 'white',
                borderLeft: `4px solid ${THEME.colors.accent}`,
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <blockquote style={{
                  fontSize: '24px',
                  fontStyle: 'italic',
                  color: THEME.colors.primary,
                  margin: 0,
                  fontFamily: THEME.fonts.heading,
                  lineHeight: '1.4'
                }}>
                  "Cuisine is not just about feeding the body—it's about nourishing the soul and creating moments that last a lifetime."
                </blockquote>
                <cite style={{
                  fontSize: '16px',
                  color: THEME.colors.accent,
                  marginTop: '15px',
                  display: 'block',
                  fontFamily: THEME.fonts.body
                }}>
                  — Chef Laurent Gilani, Founder
                </cite>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800"
                alt="Chef Laurent Gilani"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: '600px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(114, 47, 55, 0.2)'
                }}
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values Section */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 0`,
        background: `linear-gradient(135deg, ${THEME.colors.dark}, ${THEME.colors.primary})`,
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ 
              fontSize: window.innerWidth <= 768 ? '36px' : '48px',
              fontFamily: THEME.fonts.heading,
              marginBottom: '20px',
              color: THEME.colors.accent
            }}>
              Our Philosophy
            </h2>
            <div style={{
              width: '100px',
              height: '2px',
              background: THEME.colors.accent,
              margin: '0 auto'
            }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
            gap: '50px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: THEME.colors.accent,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px auto'
              }}>
                <Award size={40} color="white" />
              </div>
              <h3 style={{
                fontSize: '24px',
                fontFamily: THEME.fonts.heading,
                marginBottom: '20px',
                color: THEME.colors.accent
              }}>
                Excellence
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.9,
                fontFamily: THEME.fonts.body
              }}>
                Every cut of beef is hand-selected, dry-aged to perfection, and prepared with the precision that defines French culinary tradition.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: THEME.colors.accent,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px auto'
              }}>
                <Wine size={40} color="white" />
              </div>
              <h3 style={{
                fontSize: '24px',
                fontFamily: THEME.fonts.heading,
                marginBottom: '20px',
                color: THEME.colors.accent
              }}>
                Authenticity
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.9,
                fontFamily: THEME.fonts.body
              }}>
                From our wine cellar's carefully curated French vintages to our locally-sourced ingredients, authenticity drives every decision.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: THEME.colors.accent,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px auto'
              }}>
                <Users size={40} color="white" />
              </div>
              <h3 style={{
                fontSize: '24px',
                fontFamily: THEME.fonts.heading,
                marginBottom: '20px',
                color: THEME.colors.accent
              }}>
                Hospitality
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.9,
                fontFamily: THEME.fonts.body
              }}>
                Texas warmth meets French elegance in every interaction, creating an atmosphere where guests become family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <ScrollReveal>
        <section style={{ 
          padding: `${THEME.spacing.sectionPadding} 0`,
          backgroundColor: 'white'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '70px' }}>
              <h2 style={{ 
                fontSize: window.innerWidth <= 768 ? '36px' : '48px',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '20px'
              }}>
                Meet Our Team
              </h2>
              <p style={{
                fontSize: '18px',
                color: THEME.colors.dark,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                A passionate team of culinary artists dedicated to creating extraordinary dining experiences
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px'
            }}>
              <div style={{
                textAlign: 'center',
                backgroundColor: THEME.colors.background,
                padding: '30px',
                borderRadius: '12px',
                border: `1px solid ${THEME.colors.accent}20`
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800"
                  alt="Chef Laurent Gilani"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 20px auto',
                    border: `3px solid ${THEME.colors.accent}`
                  }}
                />
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '8px'
                }}>
                  Chef Laurent Gilani
                </h3>
                <p style={{
                  color: THEME.colors.accent,
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}>
                  Executive Chef & Founder
                </p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: THEME.colors.dark,
                  opacity: 0.8
                }}>
                  Trained at Le Cordon Bleu Paris, 20+ years of Michelin-starred experience
                </p>
              </div>

              <div style={{
                textAlign: 'center',
                backgroundColor: THEME.colors.background,
                padding: '30px',
                borderRadius: '12px',
                border: `1px solid ${THEME.colors.accent}20`
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800"
                  alt="Isabella Moreau"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 20px auto',
                    border: `3px solid ${THEME.colors.accent}`
                  }}
                />
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '8px'
                }}>
                  Isabella Moreau
                </h3>
                <p style={{
                  color: THEME.colors.accent,
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}>
                  Sommelier & Wine Director
                </p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: THEME.colors.dark,
                  opacity: 0.8
                }}>
                  Master Sommelier with expertise in French Bordeaux and Burgundy regions
                </p>
              </div>

              <div style={{
                textAlign: 'center',
                backgroundColor: THEME.colors.background,
                padding: '30px',
                borderRadius: '12px',
                border: `1px solid ${THEME.colors.accent}20`
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800"
                  alt="Marcus Thompson"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 20px auto',
                    border: `3px solid ${THEME.colors.accent}`
                  }}
                />
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '8px'
                }}>
                  Marcus Thompson
                </h3>
                <p style={{
                  color: THEME.colors.accent,
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}>
                  Sous Chef
                </p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: THEME.colors.dark,
                  opacity: 0.8
                }}>
                  Specialist in dry-aging and butchery, former protégé of James Beard winners
                </p>
              </div>

              <div style={{
                textAlign: 'center',
                backgroundColor: THEME.colors.background,
                padding: '30px',
                borderRadius: '12px',
                border: `1px solid ${THEME.colors.accent}20`
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800"
                  alt="Sophia Martinez"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 20px auto',
                    border: `3px solid ${THEME.colors.accent}`
                  }}
                />
                <h3 style={{
                  fontSize: '22px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.primary,
                  marginBottom: '8px'
                }}>
                  Sophia Martinez
                </h3>
                <p style={{
                  color: THEME.colors.accent,
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}>
                  Maître d'hôtel
                </p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: THEME.colors.dark,
                  opacity: 0.8
                }}>
                  15 years in luxury hospitality, fluent in French and Spanish service traditions
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Statistics Section */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920" 
        height="60vh"
      >
        <div style={{
          backgroundColor: 'rgba(114, 47, 55, 0.9)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            padding: '0 20px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: window.innerWidth <= 768 ? '32px' : '42px',
              fontFamily: THEME.fonts.heading,
              color: 'white',
              marginBottom: '50px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Our Legacy in Numbers
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: '40px'
            }}>
              <div>
                <div style={{
                  fontSize: window.innerWidth <= 768 ? '36px' : '48px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.accent,
                  marginBottom: '10px'
                }}>
                  <AnimatedCounter end={3} suffix=" Years" duration={2} />
                </div>
                <p style={{ 
                  color: 'white', 
                  fontSize: '16px',
                  opacity: 0.9,
                  fontFamily: THEME.fonts.body
                }}>
                  Culinary Excellence
                </p>
              </div>
              <div>
                <div style={{
                  fontSize: window.innerWidth <= 768 ? '36px' : '48px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.accent,
                  marginBottom: '10px'
                }}>
                  <AnimatedCounter end={2500} suffix="+" duration={2.5} />
                </div>
                <p style={{ 
                  color: 'white', 
                  fontSize: '16px',
                  opacity: 0.9,
                  fontFamily: THEME.fonts.body
                }}>
                  Satisfied Guests
                </p>
              </div>
              <div>
                <div style={{
                  fontSize: window.innerWidth <= 768 ? '36px' : '48px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.accent,
                  marginBottom: '10px'
                }}>
                  <AnimatedCounter end={98} suffix="%" duration={2} />
                </div>
                <p style={{ 
                  color: 'white', 
                  fontSize: '16px',
                  opacity: 0.9,
                  fontFamily: THEME.fonts.body
                }}>
                  Guest Satisfaction
                </p>
              </div>
              <div>
                <div style={{
                  fontSize: window.innerWidth <= 768 ? '36px' : '48px',
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.accent,
                  marginBottom: '10px'
                }}>
                  <AnimatedCounter end={8} suffix=" Team" duration={1.5} />
                </div>
                <p style={{ 
                  color: 'white', 
                  fontSize: '16px',
                  opacity: 0.9,
                  fontFamily: THEME.fonts.body
                }}>
                  Culinary Artists
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Location & Experience */}
      <section style={{ 
        padding: `${THEME.spacing.sectionPadding} 0`,
        backgroundColor: THEME.colors.background
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: window.innerWidth <= 768 ? '32px' : '42px',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '30px'
              }}>
                Prosper's Premier <em style={{ color: THEME.colors.accent }}>Destination</em>
              </h2>
              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <MapPin size={24} color={THEME.colors.accent} />
                  <span style={{
                    fontSize: '18px',
                    color: THEME.colors.dark,
                    fontFamily: THEME.fonts.body
                  }}>
                    1847 N Preston Rd, Prosper, TX 75078
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <Clock size={24} color={THEME.colors.accent} />
                  <span style={{
                    fontSize: '18px',
                    color: THEME.colors.dark,
                    fontFamily: THEME.fonts.body
                  }}>
                    Dinner Service: Tuesday-Sunday, 5:00 PM - 10:00 PM
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <Utensils size={24} color={THEME.colors.accent} />
                  <span style={{
                    fontSize: '18px',
                    color: THEME.colors.dark,
                    fontFamily: THEME.fonts.body
                  }}>
                    Smart Elegant Attire Required
                  </span>
                </div>
              </div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: THEME.colors.dark,
                marginBottom: '25px',
                fontFamily: THEME.fonts.body
              }}>
                Nestled in the heart of Prosper's vibrant culinary district, Gilani's occupies a beautifully restored 1920s mansion, where original hardwood floors and crystal chandeliers create an atmosphere of timeless elegance.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: THEME.colors.dark,
                fontFamily: THEME.fonts.body,
                fontStyle: 'italic'
              }}>
                Complimentary valet parking • Private dining rooms available • Wine cellar tours by appointment
              </p>
            </div>
            <div style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
                alt="Gilani's restaurant interior"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '30px'
                }}
              />
              <h3 style={{
                fontSize: '24px',
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.primary,
                marginBottom: '20px'
              }}>
                An Intimate Setting
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: THEME.colors.dark,
                fontFamily: THEME.fonts.body
              }}>
                With only 45 seats, every guest receives our undivided attention. Reserve your table for an unforgettable evening of culinary artistry.
              </p>
              <Link 
                to="/reservations"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '25px',
                  padding: '15px 30px',
                  backgroundColor: THEME.colors.primary,
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontFamily: THEME.fonts.body,
                  transition: 'all 0.3s ease'
                }}
              >
                Make Reservation <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
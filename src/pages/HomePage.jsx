import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Phone, Star, ChevronRight, Wine, Clock, Award } from 'lucide-react';
import { ScrollReveal, AnimatedCounter, VideoBackground } from '../effects';

const THEME = {
  colors: { 
    primary: '#722F37', 
    accent: '#C9A961', 
    background: '#F5F0E6', 
    text: '#1A1A1A', 
    surface: '#FFFFFF' 
  },
  fonts: { heading: "Playfair Display, Georgia, serif", body: "Lato, system-ui, sans-serif" },
  spacing: { sectionPadding: '80px' }
};

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
    overflow: 'hidden'
  },
  heroContent: {
    maxWidth: '900px',
    padding: '0 20px',
    zIndex: 2
  },
  heroTitle: {
    fontFamily: THEME.fonts.heading,
    fontSize: '72px',
    fontWeight: 400,
    letterSpacing: '3px',
    marginBottom: '24px',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    lineHeight: 1.1
  },
  heroSubtitle: {
    fontSize: '24px',
    letterSpacing: '1px',
    marginBottom: '40px',
    opacity: 0.95,
    fontWeight: 300
  },
  reservationBtn: {
    background: THEME.colors.accent,
    color: '#1A1A1A',
    padding: '18px 48px',
    fontSize: '18px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  },
  services: {
    padding: `${THEME.spacing.sectionPadding} 20px`,
    background: THEME.colors.background,
    textAlign: 'center'
  },
  sectionTitle: {
    fontFamily: THEME.fonts.heading,
    fontSize: '48px',
    color: THEME.colors.primary,
    marginBottom: '60px',
    letterSpacing: '2px'
  },
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  menuCard: {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '40px',
    borderRadius: '8px',
    textAlign: 'left',
    transition: 'all 0.3s ease'
  },
  menuTitle: {
    fontFamily: THEME.fonts.heading,
    fontSize: '28px',
    color: THEME.colors.primary,
    marginBottom: '20px',
    fontStyle: 'italic'
  },
  menuPrice: {
    fontSize: '24px',
    color: THEME.colors.accent,
    fontWeight: 600,
    marginBottom: '20px'
  },
  about: {
    padding: `${THEME.spacing.sectionPadding} 20px`,
    background: THEME.colors.primary,
    color: '#ffffff'
  },
  aboutContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center'
  },
  aboutText: {
    fontSize: '18px',
    lineHeight: 1.8,
    marginBottom: '30px'
  },
  aboutTitle: {
    fontFamily: THEME.fonts.heading,
    fontSize: '48px',
    marginBottom: '30px',
    color: THEME.colors.accent,
    letterSpacing: '2px'
  },
  aboutImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  testimonials: {
    padding: `${THEME.spacing.sectionPadding} 20px`,
    background: THEME.colors.background,
    textAlign: 'center'
  },
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  testimonialCard: {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '40px',
    borderRadius: '8px',
    textAlign: 'left'
  },
  stats: {
    padding: `${THEME.spacing.sectionPadding} 20px`,
    background: THEME.colors.primary,
    color: '#ffffff',
    textAlign: 'center'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '60px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  statItem: {
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '48px',
    fontWeight: 700,
    color: THEME.colors.accent,
    marginBottom: '10px',
    fontFamily: THEME.fonts.heading
  },
  statLabel: {
    fontSize: '18px',
    opacity: 0.9,
    letterSpacing: '1px'
  },
  cta: {
    padding: `${THEME.spacing.sectionPadding} 20px`,
    background: `linear-gradient(rgba(${parseInt(THEME.colors.primary.slice(1,3), 16)}, ${parseInt(THEME.colors.primary.slice(3,5), 16)}, ${parseInt(THEME.colors.primary.slice(5,7), 16)}, 0.95), rgba(${parseInt(THEME.colors.primary.slice(1,3), 16)}, ${parseInt(THEME.colors.primary.slice(3,5), 16)}, ${parseInt(THEME.colors.primary.slice(5,7), 16)}, 0.95)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
    textAlign: 'center'
  },
  ctaTitle: {
    fontFamily: THEME.fonts.heading,
    fontSize: '48px',
    marginBottom: '20px',
    letterSpacing: '2px'
  },
  ctaText: {
    fontSize: '20px',
    marginBottom: '40px',
    opacity: 0.95,
    maxWidth: '600px',
    margin: '0 auto 40px'
  },
  contact: {
    padding: `${THEME.spacing.sectionPadding} 20px`,
    background: THEME.colors.background
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    fontSize: '18px'
  },
  contactIcon: {
    marginRight: '15px',
    color: THEME.colors.accent
  },
  mobile: {
    '@media (max-width: 768px)': {
      heroTitle: {
        fontSize: '48px'
      },
      aboutContent: {
        gridTemplateColumns: '1fr',
        gap: '40px'
      },
      contactGrid: {
        gridTemplateColumns: '1fr'
      },
      menuGrid: {
        gridTemplateColumns: '1fr'
      }
    }
  }
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Video Background */}
      <VideoBackground
        videoSrc="https://videos.pexels.com/video-files/4253001/4253001-uhd_2560_1440_25fps.mp4"
        posterImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
        overlay="linear-gradient(rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.7))"
        height="100vh"
      >
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Gilani's</h1>
          <p style={styles.heroSubtitle}>Where French tradition meets modern elegance</p>
          <button 
            style={styles.reservationBtn}
            onMouseEnter={(e) => {
              e.target.style.background = '#d4b36e';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = THEME.colors.accent;
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Calendar style={{ marginRight: '10px', display: 'inline' }} size={20} />
            Réservations
          </button>
        </div>
      </VideoBackground>

      {/* Le Menu Section */}
      <ScrollReveal>
        <section style={styles.services}>
          <h2 style={styles.sectionTitle}>Le Menu</h2>
          <div style={styles.menuGrid}>
            <div 
              style={styles.menuCard}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.border = `1px solid ${THEME.colors.accent}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.border = '1px solid rgba(255,255,255,0.2)';
              }}
            >
              <h3 style={styles.menuTitle}>Menu Dégustation</h3>
              <p style={styles.menuPrice}>$175</p>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: THEME.colors.text }}>
                Eight-course chef's tasting menu featuring seasonal ingredients, dry-aged steaks, and wine pairings from our sommelier.
              </p>
            </div>

            <div 
              style={styles.menuCard}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.border = `1px solid ${THEME.colors.accent}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.border = '1px solid rgba(255,255,255,0.2)';
              }}
            >
              <h3 style={styles.menuTitle}>Prix Fixe Classique</h3>
              <p style={styles.menuPrice}>$125</p>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: THEME.colors.text }}>
                Three-course experience with choice of appetizer, our signature dry-aged ribeye or filet mignon, and dessert.
              </p>
            </div>

            <div 
              style={styles.menuCard}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.border = `1px solid ${THEME.colors.accent}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.border = '1px solid rgba(255,255,255,0.2)';
              }}
            >
              <h3 style={styles.menuTitle}>Table du Chef</h3>
              <p style={styles.menuPrice}>$225</p>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: THEME.colors.text }}>
                Exclusive chef's table experience with personalized menu, wine pairings, and behind-the-scenes kitchen access.
              </p>
            </div>

            <div 
              style={styles.menuCard}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.border = `1px solid ${THEME.colors.accent}`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.border = '1px solid rgba(255,255,255,0.2)';
              }}
            >
              <h3 style={styles.menuTitle}>Wagyu Experience</h3>
              <p style={styles.menuPrice}>$285</p>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: THEME.colors.text }}>
                Ultra-premium Japanese A5 Wagyu beef presentation with truffle accompaniments and vintage wine selection.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Notre Histoire Section */}
      <section style={styles.about}>
        <div style={styles.aboutContent}>
          <div>
            <h2 style={styles.aboutTitle}>Notre Histoire</h2>
            <p style={styles.aboutText}>
              Chef Laurent Moreau brings three decades of classical French training to the heart of Prosper, Texas. 
              Trained at Le Cordon Bleu and seasoned in Michelin-starred kitchens across Lyon and Paris, Chef Moreau 
              has mastered the art of dry-aging and the precision of French culinary technique.
            </p>
            <p style={styles.aboutText}>
              Our philosophy centers on sourcing the finest cuts from Texas ranches, aging them in our custom-built 
              temperature-controlled room for 28-45 days, and preparing them with classical French methods. Every dish 
              tells a story of tradition, craftsmanship, and unwavering attention to detail.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
              <Award style={{ marginRight: '15px', color: THEME.colors.accent }} size={24} />
              <span style={{ fontSize: '18px' }}>James Beard Award Nominee 2023</span>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800" 
            alt="Chef Laurent Moreau"
            style={styles.aboutImage}
          />
        </div>
      </section>

      {/* Statistics Section */}
      <ScrollReveal>
        <section style={styles.stats}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={15} suffix="+" duration={2} />
              </div>
              <div style={styles.statLabel}>Years Excellence</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={28} suffix="" duration={2.5} />
              </div>
              <div style={styles.statLabel}>Days Dry-Aged</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={98} suffix="%" duration={2} />
              </div>
              <div style={styles.statLabel}>Guest Satisfaction</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>
                <AnimatedCounter end={450} suffix="+" duration={3} />
              </div>
              <div style={styles.statLabel}>Wine Selections</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
        <h2 style={styles.sectionTitle}>Guest Experiences</h2>
        <div style={styles.testimonialGrid}>
          <div style={styles.testimonialCard}>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={THEME.colors.accent} color={THEME.colors.accent} />
              ))}
            </div>
            <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>
              "The dry-aged ribeye was perfection. Chef Moreau's technique rivals the finest steakhouses in Paris. 
              An unforgettable evening of culinary artistry."
            </p>
            <p style={{ fontWeight: 600, color: THEME.colors.primary }}>— Catherine M.</p>
          </div>

          <div style={styles.testimonialCard}>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={THEME.colors.accent} color={THEME.colors.accent} />
              ))}
            </div>
            <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>
              "The wine pairings were extraordinary. Our sommelier guided us through a journey of flavors 
              that elevated every course. Impeccable service and ambiance."
            </p>
            <p style={{ fontWeight: 600, color: THEME.colors.primary }}>— Robert K.</p>
          </div>

          <div style={styles.testimonialCard}>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={THEME.colors.accent} color={THEME.colors.accent} />
              ))}
            </div>
            <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>
              "The chef's table experience exceeded all expectations. Watching the precision and artistry 
              in the kitchen while enjoying each course was magical."
            </p>
            <p style={{ fontWeight: 600, color: THEME.colors.primary }}>— Michelle D.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Reserve Your Table</h2>
        <p style={styles.ctaText}>
          Experience the finest in French culinary tradition. Our intimate dining room accommodates 
          only 40 guests per evening, ensuring personalized service and attention to detail.
        </p>
        <button 
          style={{
            ...styles.reservationBtn,
            fontSize: '20px',
            padding: '20px 50px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#d4b36e';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = THEME.colors.accent;
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Book Your Experience
          <ChevronRight style={{ marginLeft: '10px', display: 'inline' }} size={20} />
        </button>
      </section>

      {/* Contact Section */}
      <section style={styles.contact}>
        <div style={styles.contactGrid}>
          <div>
            <h2 style={{ ...styles.sectionTitle, textAlign: 'left', marginBottom: '40px' }}>Visit Us</h2>
            
            <div style={styles.contactInfo}>
              <MapPin style={styles.contactIcon} size={24} />
              <span>1847 Legacy Drive, Prosper, TX 75078</span>
            </div>

            <div style={styles.contactInfo}>
              <Phone style={styles.contactIcon} size={24} />
              <span>(214) 555-0189</span>
            </div>

            <div style={styles.contactInfo}>
              <Clock style={styles.contactIcon} size={24} />
              <div>
                <div>Tuesday - Sunday: 5:00 PM - 10:00 PM</div>
                <div style={{ fontSize: '14px', opacity: 0.7, marginTop: '5px' }}>Closed Mondays</div>
              </div>
            </div>

            <div style={styles.contactInfo}>
              <Wine style={styles.contactIcon} size={24} />
              <span>Smart Elegant Attire Required</span>
            </div>

            <div style={{ 
              marginTop: '30px', 
              padding: '20px', 
              background: 'rgba(199, 169, 97, 0.1)', 
              borderRadius: '8px',
              border: `1px solid ${THEME.colors.accent}`
            }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Complimentary Valet Parking</p>
              <p style={{ margin: '5px 0 0', fontSize: '14px', opacity: 0.8 }}>
                Available Tuesday through Sunday from 4:30 PM
              </p>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.123!2d-96.801!3d33.234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE0JzAyLjQiTiA5NsKwNDgnMDMuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
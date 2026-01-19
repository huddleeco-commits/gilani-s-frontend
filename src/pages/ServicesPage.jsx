import React from 'react';
import { ScrollReveal, AnimatedCounter, ParallaxSection, TiltCard, GlowEffect } from '../effects';
import { Wine, Clock, Users, Award, ChevronRight, Star, Calendar, MapPin } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Prix Fixe Experience",
      subtitle: "Curated Multi-Course Journey",
      price: "$125",
      description: "Our signature five-course tasting menu featuring seasonal French classics with modern innovation. Each course thoughtfully paired with premium wine selections from our sommelier.",
      features: [
        "Amuse-bouche welcome",
        "Five expertly crafted courses", 
        "Wine pairing recommendations",
        "Artisanal bread service",
        "Petit fours finale"
      ],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
    },
    {
      title: "Chef's Table Experience",
      subtitle: "Intimate Culinary Theater",
      price: "$225",
      description: "An exclusive seven-course journey at our chef's counter, where culinary artistry unfolds before your eyes. Limited to eight guests per evening for the ultimate intimate dining experience.",
      features: [
        "Front-row kitchen seating",
        "Seven-course surprise menu",
        "Direct chef interaction",
        "Premium wine pairings",
        "Signed menu keepsake"
      ],
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
    },
    {
      title: "Private Wine Cellar",
      subtitle: "Exclusive Group Dining",
      price: "From $175pp",
      description: "Our historic wine cellar accommodates 12-20 guests for unforgettable celebrations. Features rare vintage selections and customized menu planning with our culinary team.",
      features: [
        "Private cellar access",
        "Customized menu planning",
        "Dedicated sommelier service",
        "Vintage wine selections",
        "Personal event coordinator"
      ],
      image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800"
    },
    {
      title: "À La Carte Excellence",
      subtitle: "Classic French Mastery",
      price: "Market Price",
      description: "Select from our carefully curated menu of French classics, featuring the finest ingredients sourced from local farms and premium purveyors across France.",
      features: [
        "Seasonal market selections",
        "Traditional French techniques",
        "Farm-to-table ingredients",
        "Expert preparation",
        "Flexible dining experience"
      ],
      image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800"
    },
    {
      title: "Corporate & Events",
      subtitle: "Business Entertainment",
      price: "Custom Packages",
      description: "Elevate your corporate gatherings with sophisticated French cuisine and impeccable service. Our team crafts memorable experiences for business dinners and special occasions.",
      features: [
        "Corporate group menus",
        "Private dining spaces",
        "AV equipment available",
        "Flexible seating arrangements",
        "Professional event planning"
      ],
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800"
    },
    {
      title: "Wine Education",
      subtitle: "Sommelier-Led Tastings",
      price: "$85",
      description: "Join our master sommelier for an educational journey through French wine regions. Perfect for enthusiasts seeking to deepen their appreciation for fine wines.",
      features: [
        "Expert sommelier guidance",
        "Five premium tastings",
        "Regional wine education",
        "Artisanal cheese pairings",
        "Take-home tasting notes"
      ],
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800"
    }
  ];

  const testimonials = [
    {
      text: "The Chef's Table experience was absolutely transcendent. Every course was a masterpiece, and watching the culinary artistry unfold was magical.",
      author: "Sophie M.",
      rating: 5
    },
    {
      text: "Our private wine cellar dinner was the highlight of our anniversary celebration. The sommelier's knowledge and the vintage selections were extraordinary.",
      author: "James D.",
      rating: 5
    },
    {
      text: "Gilani's sets the gold standard for French cuisine in Texas. The attention to detail and authentic flavors transport you straight to Paris.",
      author: "Catherine L.",
      rating: 5
    }
  ];

  const stats = [
    { number: 15, suffix: "+ Years", label: "Culinary Excellence" },
    { number: 2800, suffix: "+ Guests", label: "Served Monthly" },
    { number: 98, suffix: "%", label: "Satisfaction Rate" },
    { number: 12, suffix: " Team", label: "Expert Staff" }
  ];

  return (
    <div style={{ 
      fontFamily: 'Lato, system-ui, sans-serif',
      lineHeight: 1.6,
      color: '#1A1A1A'
    }}>
      {/* Hero Section */}
      <ParallaxSection
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
        height="60vh"
        overlay="linear-gradient(rgba(114, 47, 55, 0.8), rgba(26, 26, 26, 0.9))"
      >
        <div style={{
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '56px',
            fontWeight: 700,
            letterSpacing: '2px',
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Nos Services
          </h1>
          <p style={{
            fontSize: '22px',
            opacity: 0.95,
            marginBottom: '30px',
            fontWeight: 300,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Where French tradition meets modern elegance in every curated experience
          </p>
          <button style={{
            background: 'linear-gradient(135deg, #C9A961, #D4B76A)',
            color: '#1A1A1A',
            padding: '18px 45px',
            fontSize: '18px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            boxShadow: '0 4px 15px rgba(201, 169, 97, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            Make Reservation
          </button>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <ScrollReveal>
        <section style={{
          background: '#722F37',
          padding: '60px 20px',
          color: 'white'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            {stats.map((stat, index) => (
              <div key={index}>
                <div style={{
                  fontSize: '42px',
                  fontWeight: 700,
                  color: '#C9A961',
                  marginBottom: '8px'
                }}>
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    duration={2 + index * 0.2} 
                  />
                </div>
                <p style={{
                  fontSize: '16px',
                  opacity: 0.9,
                  fontWeight: 300,
                  letterSpacing: '1px'
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Services Grid */}
      <ScrollReveal>
        <section style={{
          background: '#F5F0E6',
          padding: '100px 20px'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '80px'
            }}>
              <h2 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '48px',
                fontWeight: 700,
                color: '#722F37',
                marginBottom: '20px',
                letterSpacing: '1px'
              }}>
                Exquisite Dining Experiences
              </h2>
              <p style={{
                fontSize: '20px',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto',
                fontWeight: 300
              }}>
                Each service is meticulously crafted to deliver an unforgettable culinary journey
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: '40px'
            }}>
              {services.map((service, index) => (
                <TiltCard key={index}>
                  <div style={{
                    background: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(201, 169, 97, 0.2)',
                    transition: 'all 0.3s ease',
                    height: '100%'
                  }}>
                    <div style={{
                      position: 'relative',
                      height: '280px',
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'linear-gradient(135deg, #C9A961, #D4B76A)',
                        color: '#1A1A1A',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        fontSize: '18px',
                        fontWeight: 700,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                      }}>
                        {service.price}
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(26, 26, 26, 0.8))',
                        padding: '40px 30px 25px',
                        color: 'white'
                      }}>
                        <h3 style={{
                          fontFamily: 'Playfair Display, Georgia, serif',
                          fontSize: '28px',
                          fontWeight: 700,
                          marginBottom: '8px',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}>
                          {service.title}
                        </h3>
                        <p style={{
                          fontSize: '16px',
                          opacity: 0.9,
                          fontStyle: 'italic',
                          textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                        }}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <div style={{
                      padding: '35px'
                    }}>
                      <p style={{
                        fontSize: '16px',
                        lineHeight: 1.8,
                        color: '#555',
                        marginBottom: '25px'
                      }}>
                        {service.description}
                      </p>

                      <div style={{
                        marginBottom: '30px'
                      }}>
                        <h4 style={{
                          fontSize: '18px',
                          fontWeight: 600,
                          color: '#722F37',
                          marginBottom: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <Award size={20} />
                          Included Features
                        </h4>
                        <ul style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0
                        }}>
                          {service.features.map((feature, idx) => (
                            <li key={idx} style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '8px 0',
                              fontSize: '15px',
                              color: '#666'
                            }}>
                              <div style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #C9A961, #D4B76A)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <ChevronRight size={12} color="#1A1A1A" />
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <GlowEffect color="#C9A961">
                        <button style={{
                          width: '100%',
                          background: 'linear-gradient(135deg, #722F37, #8A3A44)',
                          color: 'white',
                          padding: '16px 24px',
                          fontSize: '16px',
                          fontWeight: 600,
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          letterSpacing: '0.5px'
                        }}>
                          <Calendar size={18} />
                          Reserve This Experience
                          <ChevronRight size={18} />
                        </button>
                      </GlowEffect>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <section style={{
        background: '#1A1A1A',
        padding: '100px 20px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '42px',
            fontWeight: 700,
            color: '#C9A961',
            marginBottom: '20px',
            letterSpacing: '1px'
          }}>
            Guest Testimonials
          </h2>
          <p style={{
            fontSize: '18px',
            opacity: 0.8,
            marginBottom: '60px',
            maxWidth: '500px',
            margin: '0 auto 60px'
          }}>
            What our distinguished guests say about their experiences
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index}>
                <div style={{
                  background: 'rgba(245, 240, 230, 0.05)',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '1px solid rgba(201, 169, 97, 0.2)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'left'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '4px',
                    marginBottom: '20px',
                    justifyContent: 'center'
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#C9A961" color="#C9A961" />
                    ))}
                  </div>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: 1.8,
                    marginBottom: '25px',
                    fontStyle: 'italic',
                    opacity: 0.9
                  }}>
                    "{testimonial.text}"
                  </p>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#C9A961'
                  }}>
                    — {testimonial.author}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <ScrollReveal>
        <section style={{
          background: 'linear-gradient(135deg, #722F37, #8A3A44)',
          padding: '80px 20px',
          textAlign: 'center',
          color: 'white'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: '42px',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '1px'
            }}>
              Ready to Experience Excellence?
            </h2>
            <p style={{
              fontSize: '20px',
              opacity: 0.9,
              marginBottom: '40px',
              fontWeight: 300
            }}>
              Reserve your table and embark on an unforgettable culinary journey
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '30px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '16px'
              }}>
                <Clock size={20} color="#C9A961" />
                Dinner: Tue-Sun, 5pm-10pm
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '16px'
              }}>
                <MapPin size={20} color="#C9A961" />
                Prosper, Texas
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '16px'
              }}>
                <Users size={20} color="#C9A961" />
                Smart Elegant Attire
              </div>
            </div>

            <button style={{
              background: 'linear-gradient(135deg, #C9A961, #D4B76A)',
              color: '#1A1A1A',
              padding: '20px 50px',
              fontSize: '18px',
              fontWeight: 700,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: '0 6px 20px rgba(201, 169, 97, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              Make Your Reservation
            </button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default ServicesPage;
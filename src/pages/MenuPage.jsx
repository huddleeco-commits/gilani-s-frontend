import React, { useState, useEffect } from 'react';
import { ScrollReveal, ParallaxSection, TiltCard, GlowEffect } from '../effects';
import { Star, Wine, ChefHat, Clock, MapPin, Phone, Loader2 } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://gilani-s-backend.up.railway.app';

const MenuPage = () => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const THEME = {
    colors: {
      primary: '#722F37',
      accent: '#C9A961',
      background: '#F5F0E6',
      dark: '#1A1A1A',
      text: '#1A1A1A'
    },
    fonts: {
      heading: "Playfair Display, Georgia, serif",
      body: "Lato, system-ui, sans-serif"
    },
    spacing: { sectionPadding: '80px' }
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/menu`);
        if (!response.ok) throw new Error('Failed to fetch menu');
        const data = await response.json();
        setMenuData(data);
      } catch (err) {
        console.error('Error fetching menu:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Extract categories from menu data
  const getCategory = (id) => {
    if (!menuData?.menu?.categories) return null;
    return menuData.menu.categories.find(cat => cat.id === id);
  };

  const prixFixeCategory = getCategory('prix-fixe');
  const steaksCategory = getCategory('steaks');
  const startersCategory = getCategory('starters');
  const sidesCategory = getCategory('sides');
  const dessertsCategory = getCategory('desserts');

  // Map prix-fixe items for display
  const prixFixeMenus = prixFixeCategory?.items?.map(item => ({
    name: item.name,
    price: item.price,
    courses: item.courses ? `${item.courses} Courses` : 'Multi-Course',
    description: item.description,
    note: item.courses === 7 ? "Chef's tasting menu changes seasonally" : null,
    highlight: item.courses === 7 ? "Includes premium wine pairings" : null
  })) || [];

  // Map steaks for display
  const steakSelection = steaksCategory?.items?.map(item => ({
    name: item.name,
    cut: item.description?.split(',')[0] || '',
    price: item.price,
    description: item.description?.split(',').slice(1).join(',').trim() || item.description,
    aging: item.aging || ''
  })) || [];

  // Wine pairings (static for now, could be added to brain.json)
  const wines = [
    {
      name: "Châteauneuf-du-Pape",
      vintage: "2018",
      region: "Rhône Valley",
      price: 95,
      pairing: "Perfect with our Côte de Bœuf"
    },
    {
      name: "Château Margaux",
      vintage: "2016",
      region: "Bordeaux",
      price: 325,
      pairing: "Exceptional with Filet Wellington"
    },
    {
      name: "Barolo Brunate",
      vintage: "2017",
      region: "Piedmont",
      price: 125,
      pairing: "Complements our dry-aged selections"
    }
  ];

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.colors.background
      }}>
        <div style={{ textAlign: 'center' }}>
          <Loader2
            style={{
              width: 48,
              height: 48,
              color: THEME.colors.primary,
              animation: 'spin 1s linear infinite'
            }}
          />
          <p style={{
            marginTop: 16,
            fontFamily: THEME.fonts.heading,
            color: THEME.colors.primary
          }}>
            Loading Menu...
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); }}`}</style>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.colors.background
      }}>
        <div style={{ textAlign: 'center', padding: 40 }}>
          <p style={{ color: THEME.colors.primary, fontSize: '1.2rem' }}>
            Unable to load menu. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero Section */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
        height="60vh"
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(26, 26, 26, 0.8), rgba(114, 47, 55, 0.7))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', padding: '0 20px', color: 'white' }}>
            <h1 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '3.5rem',
              fontWeight: '400',
              letterSpacing: '2px',
              marginBottom: '20px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Le Menu
            </h1>
            <p style={{
              fontSize: '1.3rem',
              opacity: 0.9,
              fontStyle: 'italic',
              letterSpacing: '1px',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Where French culinary artistry meets the finest steaks
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Prix Fixe Menus */}
      <ScrollReveal>
        <section style={{ 
          padding: `${THEME.spacing.sectionPadding} 20px`,
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '2.5rem',
              color: THEME.colors.primary,
              marginBottom: '15px',
              letterSpacing: '1px'
            }}>
              Menus Prix Fixe
            </h2>
            <div style={{
              width: '80px',
              height: '2px',
              background: THEME.colors.accent,
              margin: '0 auto 25px'
            }} />
            <p style={{
              fontSize: '1.1rem',
              color: THEME.colors.text,
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Curated dining experiences showcasing the finest ingredients and classical techniques
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {prixFixeMenus.map((menu, index) => (
              <TiltCard key={index}>
                <GlowEffect color={THEME.colors.accent}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    padding: '40px 30px',
                    borderRadius: '12px',
                    border: `1px solid ${THEME.colors.accent}20`,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{
                      color: THEME.colors.accent,
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      letterSpacing: '1px',
                      marginBottom: '10px',
                      textTransform: 'uppercase'
                    }}>
                      {menu.courses}
                    </div>
                    
                    <h3 style={{
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.8rem',
                      color: THEME.colors.primary,
                      marginBottom: '15px'
                    }}>
                      {menu.name}
                    </h3>

                    <div style={{
                      fontSize: '2.2rem',
                      fontWeight: '300',
                      color: THEME.colors.accent,
                      marginBottom: '20px'
                    }}>
                      ${menu.price}
                    </div>

                    <p style={{
                      fontSize: '1rem',
                      color: THEME.colors.text,
                      fontStyle: 'italic',
                      marginBottom: '25px',
                      flex: 1
                    }}>
                      {menu.description}
                    </p>

                    {menu.appetizer && (
                      <div style={{ textAlign: 'left', flex: 1 }}>
                        <div style={{
                          fontSize: '0.85rem',
                          color: THEME.colors.accent,
                          fontWeight: '500',
                          marginBottom: '8px'
                        }}>AMUSE-BOUCHE</div>
                        <div style={{ marginBottom: '15px', fontSize: '0.95rem' }}>{menu.appetizer}</div>

                        <div style={{
                          fontSize: '0.85rem',
                          color: THEME.colors.accent,
                          fontWeight: '500',
                          marginBottom: '8px'
                        }}>POTAGE</div>
                        <div style={{ marginBottom: '15px', fontSize: '0.95rem' }}>{menu.soup}</div>

                        <div style={{
                          fontSize: '0.85rem',
                          color: THEME.colors.accent,
                          fontWeight: '500',
                          marginBottom: '8px'
                        }}>PLAT PRINCIPAL</div>
                        <div style={{ marginBottom: '15px', fontSize: '0.95rem' }}>{menu.main}</div>

                        {menu.cheese && (
                          <>
                            <div style={{
                              fontSize: '0.85rem',
                              color: THEME.colors.accent,
                              fontWeight: '500',
                              marginBottom: '8px'
                            }}>FROMAGE</div>
                            <div style={{ marginBottom: '15px', fontSize: '0.95rem' }}>{menu.cheese}</div>
                          </>
                        )}

                        <div style={{
                          fontSize: '0.85rem',
                          color: THEME.colors.accent,
                          fontWeight: '500',
                          marginBottom: '8px'
                        }}>DESSERT</div>
                        <div style={{ fontSize: '0.95rem' }}>{menu.dessert}</div>
                      </div>
                    )}

                    {menu.note && (
                      <div style={{
                        background: `${THEME.colors.accent}10`,
                        padding: '15px',
                        borderRadius: '8px',
                        marginTop: '20px',
                        fontSize: '0.9rem',
                        fontStyle: 'italic'
                      }}>
                        {menu.note}
                        {menu.highlight && (
                          <div style={{
                            color: THEME.colors.accent,
                            fontWeight: '500',
                            marginTop: '5px'
                          }}>
                            {menu.highlight}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </GlowEffect>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Steak Selection */}
      <section style={{
        padding: `${THEME.spacing.sectionPadding} 20px`,
        background: THEME.colors.dark,
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '2.5rem',
              marginBottom: '15px',
              letterSpacing: '1px'
            }}>
              Sélection de Steaks
            </h2>
            <div style={{
              width: '80px',
              height: '2px',
              background: THEME.colors.accent,
              margin: '0 auto 25px'
            }} />
            <p style={{
              fontSize: '1.1rem',
              opacity: 0.9,
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Dry-aged to perfection in our temperature-controlled aging room
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {steakSelection.map((steak, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '30px',
                  borderRadius: '12px',
                  border: '1px solid rgba(201, 169, 97, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px'
                  }}>
                    <h3 style={{
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.4rem',
                      color: THEME.colors.accent,
                      margin: 0
                    }}>
                      {steak.name}
                    </h3>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '300',
                      color: 'white'
                    }}>
                      ${steak.price}
                    </div>
                  </div>

                  <div style={{
                    fontSize: '0.9rem',
                    color: THEME.colors.accent,
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    {steak.cut}
                  </div>

                  <p style={{
                    fontSize: '0.95rem',
                    opacity: 0.9,
                    lineHeight: 1.6,
                    marginBottom: '15px'
                  }}>
                    {steak.description}
                  </p>

                  <div style={{
                    fontSize: '0.85rem',
                    color: THEME.colors.accent,
                    background: 'rgba(201, 169, 97, 0.1)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    display: 'inline-block'
                  }}>
                    {steak.aging}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <ScrollReveal>
        <section style={{
          padding: `${THEME.spacing.sectionPadding} 20px`,
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Wine style={{ 
              width: '50px', 
              height: '50px', 
              color: THEME.colors.accent,
              margin: '0 auto 20px'
            }} />
            <h2 style={{
              fontFamily: THEME.fonts.heading,
              fontSize: '2.5rem',
              color: THEME.colors.primary,
              marginBottom: '15px',
              letterSpacing: '1px'
            }}>
              Sélection de Vins
            </h2>
            <div style={{
              width: '80px',
              height: '2px',
              background: THEME.colors.accent,
              margin: '0 auto 25px'
            }} />
            <p style={{
              fontSize: '1.1rem',
              color: THEME.colors.text,
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Carefully curated wines from renowned French vineyards
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px'
          }}>
            {wines.map((wine, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '8px',
                border: `1px solid ${THEME.colors.accent}30`,
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.3rem',
                      color: THEME.colors.primary,
                      marginBottom: '5px'
                    }}>
                      {wine.name}
                    </h3>
                    <div style={{
                      fontSize: '0.9rem',
                      color: THEME.colors.accent,
                      fontWeight: '500'
                    }}>
                      {wine.vintage} • {wine.region}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '1.3rem',
                    fontWeight: '300',
                    color: THEME.colors.accent
                  }}>
                    ${wine.price}
                  </div>
                </div>
                
                <p style={{
                  fontSize: '0.9rem',
                  color: THEME.colors.text,
                  fontStyle: 'italic',
                  opacity: 0.8
                }}>
                  {wine.pairing}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Reservation CTA */}
      <section style={{
        padding: `60px 20px`,
        background: `linear-gradient(135deg, ${THEME.colors.primary}, ${THEME.colors.dark})`,
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2rem',
            marginBottom: '20px',
            letterSpacing: '1px'
          }}>
            Réservations
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '30px',
            opacity: 0.9
          }}>
            Experience culinary excellence. Reserve your table today.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={20} color={THEME.colors.accent} />
              <span>Tuesday - Sunday: 5:00 PM - 10:00 PM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={20} color={THEME.colors.accent} />
              <span>(972) 555-0123</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={20} color={THEME.colors.accent} />
              <span>1234 Legacy Drive, Prosper, TX</span>
            </div>
          </div>

          <button style={{
            background: `linear-gradient(135deg, ${THEME.colors.accent}, #D4B86A)`,
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            fontSize: '1.1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(201, 169, 97, 0.3)'
          }}>
            Make a Reservation
          </button>

          <div style={{
            marginTop: '20px',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            opacity: 0.8
          }}>
            Smart elegant attire required • Complimentary valet parking
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
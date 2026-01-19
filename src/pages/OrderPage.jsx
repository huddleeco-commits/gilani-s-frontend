import React, { useState } from 'react';
import { ScrollReveal } from '../effects';
import { ShoppingBag, Plus, Minus, Check, Clock, MapPin, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderPage = () => {
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
    }
  };

  const [cart, setCart] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const menuData = {
    categories: [
      {
        name: 'Signature Steaks',
        items: [
          { id: 1, name: 'Filet de Boeuf Wellington', description: '8oz Prime Filet wrapped in pate and puff pastry', price: 52, popular: true },
          { id: 2, name: 'Cote de Boeuf', description: '16oz Prime Ribeye, bone-in, herb compound butter', price: 48, popular: true },
          { id: 3, name: 'Entrecote Bordelaise', description: '14oz NY Strip with shallot red wine reduction', price: 45 },
          { id: 4, name: 'Tomahawk Wagyu', description: '32oz A5 Japanese Wagyu, carved tableside', price: 185 }
        ]
      },
      {
        name: 'Prix Fixe',
        items: [
          { id: 5, name: 'Le Menu Classique', description: 'Four course French culinary journey', price: 85, popular: true },
          { id: 6, name: 'Le Menu Signature', description: 'Five course chef interpretation with wine', price: 125 },
          { id: 7, name: 'Le Menu Degustation', description: 'Seven course seasonal tasting with pairings', price: 175 }
        ]
      },
      {
        name: 'Starters',
        items: [
          { id: 8, name: 'Escargots de Bourgogne', description: 'Classic snails with garlic herb butter', price: 18 },
          { id: 9, name: 'French Onion Soup', description: 'Gruyere gratinee, caramelized onions', price: 14 },
          { id: 10, name: 'Foie Gras', description: 'Pan-seared with fig compote', price: 28, popular: true },
          { id: 11, name: 'Lobster Bisque', description: 'Rich cream soup with cognac', price: 16 }
        ]
      },
      {
        name: 'Sides',
        items: [
          { id: 12, name: 'Truffle Pommes Frites', description: 'Hand-cut fries with black truffle', price: 14 },
          { id: 13, name: 'Creamed Spinach', description: 'Classic steakhouse preparation', price: 12 },
          { id: 14, name: 'Gratin Dauphinois', description: 'Potato gratin with Gruyere', price: 14 },
          { id: 15, name: 'Haricots Verts', description: 'French green beans with shallots', price: 10 }
        ]
      },
      {
        name: 'Desserts',
        items: [
          { id: 16, name: 'Creme Brulee', description: 'Classic vanilla bean custard', price: 12, popular: true },
          { id: 17, name: 'Chocolate Souffle', description: 'With Grand Marnier, 20 min prep', price: 16 },
          { id: 18, name: 'Tarte Tatin', description: 'Caramelized apple tart', price: 14 },
          { id: 19, name: 'Cheese Selection', description: 'Artisanal French cheeses', price: 22 }
        ]
      }
    ]
  };

  const addToCart = (item) => setCart(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
  const removeFromCart = (item) => setCart(prev => {
    const newCart = { ...prev };
    if (newCart[item.id] > 1) newCart[item.id]--;
    else delete newCart[item.id];
    return newCart;
  });

  const getCartCount = () => Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const getCartTotal = () => {
    let total = 0;
    menuData.categories.forEach(cat => cat.items.forEach(item => {
      if (cart[item.id]) total += item.price * cart[item.id];
    }));
    return total;
  };
  const getCartItems = () => {
    const items = [];
    menuData.categories.forEach(cat => cat.items.forEach(item => {
      if (cart[item.id]) items.push({ ...item, qty: cart[item.id] });
    }));
    return items;
  };

  if (orderPlaced) {
    const pointsEarned = Math.floor(getCartTotal() * 2);
    return (
      <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh', paddingTop: '60px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${THEME.colors.accent}, #D4B86A)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px'
          }}>
            <Check size={50} color="white" />
          </div>

          <h1 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '2.5rem',
            color: THEME.colors.primary,
            marginBottom: '16px'
          }}>
            Order Confirmed
          </h1>

          <p style={{ fontSize: '1.1rem', color: THEME.colors.text, marginBottom: '32px', opacity: 0.8 }}>
            Your order from Gilani's will be ready for pickup soon
          </p>

          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px',
            textAlign: 'left',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{
              fontSize: '0.85rem',
              color: THEME.colors.accent,
              letterSpacing: '1px',
              marginBottom: '16px',
              fontWeight: '600'
            }}>ORDER SUMMARY</h3>

            {getCartItems().map(item => (
              <div key={item.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: '1px solid rgba(0,0,0,0.08)'
              }}>
                <span style={{ color: THEME.colors.text }}>{item.qty}x {item.name}</span>
                <span style={{ fontWeight: '500' }}>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '16px 0 0',
              fontWeight: '600',
              fontSize: '1.2rem',
              color: THEME.colors.primary
            }}>
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </div>

          <div style={{
            background: `linear-gradient(135deg, ${THEME.colors.primary}15, ${THEME.colors.accent}15)`,
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '32px',
            border: `1px solid ${THEME.colors.accent}30`
          }}>
            <span style={{ color: THEME.colors.accent, fontWeight: '600', fontSize: '1.1rem' }}>
              +{pointsEarned} loyalty points earned!
            </span>
          </div>

          <Link to="/" style={{
            display: 'inline-block',
            padding: '16px 48px',
            background: `linear-gradient(135deg, ${THEME.colors.accent}, #D4B86A)`,
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: THEME.colors.background, minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, ${THEME.colors.primary}, ${THEME.colors.dark})`,
        padding: '100px 20px 60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <ShoppingBag size={48} style={{ marginBottom: '20px', color: THEME.colors.accent }} />
        <h1 style={{
          fontFamily: THEME.fonts.heading,
          fontSize: '2.5rem',
          marginBottom: '12px',
          letterSpacing: '1px'
        }}>
          Order Online
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '500px', margin: '0 auto' }}>
          Fine French steakhouse cuisine, ready for pickup
        </p>
      </section>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px 140px' }}>
        {/* Category Tabs */}
        <ScrollReveal>
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            marginBottom: '32px',
            paddingBottom: '8px'
          }}>
            {menuData.categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  background: activeCategory === idx ? THEME.colors.primary : 'white',
                  color: activeCategory === idx ? 'white' : THEME.colors.text,
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  boxShadow: activeCategory === idx ? `0 4px 15px ${THEME.colors.primary}40` : '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'all 0.2s'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {menuData.categories[activeCategory].items.map((item) => (
            <ScrollReveal key={item.id}>
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '20px',
                border: cart[item.id] ? `2px solid ${THEME.colors.accent}` : '2px solid transparent',
                transition: 'all 0.2s'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <h3 style={{
                      fontFamily: THEME.fonts.heading,
                      fontSize: '1.2rem',
                      color: THEME.colors.primary,
                      margin: 0
                    }}>
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span style={{
                        background: THEME.colors.accent,
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        Popular
                      </span>
                    )}
                  </div>
                  <p style={{
                    fontSize: '0.95rem',
                    color: THEME.colors.text,
                    opacity: 0.7,
                    margin: '0 0 12px 0'
                  }}>
                    {item.description}
                  </p>
                  <div style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: THEME.colors.accent
                  }}>
                    ${item.price}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {cart[item.id] > 0 ? (
                    <>
                      <button
                        onClick={() => removeFromCart(item)}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          border: `1px solid ${THEME.colors.primary}30`,
                          background: 'transparent',
                          color: THEME.colors.primary,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <Minus size={18} />
                      </button>
                      <span style={{
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        minWidth: '24px',
                        textAlign: 'center',
                        color: THEME.colors.primary
                      }}>
                        {cart[item.id]}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          border: 'none',
                          background: THEME.colors.primary,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <Plus size={18} />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => addToCart(item)}
                      style={{
                        padding: '12px 24px',
                        borderRadius: '30px',
                        border: 'none',
                        background: `linear-gradient(135deg, ${THEME.colors.accent}, #D4B86A)`,
                        color: 'white',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: `0 4px 15px ${THEME.colors.accent}40`
                      }}
                    >
                      <Plus size={18} /> Add
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Info Section */}
        <div style={{
          marginTop: '48px',
          padding: '24px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
        }}>
          <h3 style={{
            fontFamily: THEME.fonts.heading,
            fontSize: '1.2rem',
            color: THEME.colors.primary,
            marginBottom: '16px'
          }}>
            Pickup Information
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: THEME.colors.text }}>
              <Clock size={20} color={THEME.colors.accent} />
              <span>Pickup available Tuesday - Sunday, 5:00 PM - 9:30 PM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: THEME.colors.text }}>
              <MapPin size={20} color={THEME.colors.accent} />
              <span>1234 Legacy Drive, Prosper, TX</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: THEME.colors.text }}>
              <Phone size={20} color={THEME.colors.accent} />
              <span>(972) 555-0123</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cart */}
      {getCartCount() > 0 && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
          zIndex: 100
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <button
              onClick={() => setOrderPlaced(true)}
              style={{
                width: '100%',
                padding: '18px',
                background: `linear-gradient(135deg, ${THEME.colors.primary}, ${THEME.colors.dark})`,
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                boxShadow: `0 8px 25px ${THEME.colors.primary}40`
              }}
            >
              <ShoppingBag size={22} />
              Place Order
              <span style={{ margin: '0 8px', opacity: 0.6 }}>|</span>
              ${getCartTotal().toFixed(2)}
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'}
              </span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;

import React, { useState } from 'react';
import { ScrollReveal, ParallaxSection, TiltCard, GlowEffect } from '../effects';
import { X, ChevronLeft, ChevronRight, Wine, Utensils, Award } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
      category: 'steaks',
      title: 'Wagyu Ribeye Perfection',
      description: 'Japanese A5 Wagyu, dry-aged 28 days, flame-kissed to perfection'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800',
      category: 'ambiance',
      title: 'Private Wine Cellar',
      description: 'Our temperature-controlled cellar houses over 800 carefully curated bottles'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800',
      category: 'steaks',
      title: 'Tomahawk for Two',
      description: '32oz bone-in ribeye, served on heated volcanic stone'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
      category: 'ambiance',
      title: 'Candlelit Elegance',
      description: 'Intimate dining with crystal chandeliers and French table service'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800',
      category: 'presentations',
      title: 'Chef\'s Artistry',
      description: 'Each plate is a masterpiece, crafted with precision and passion'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
      category: 'presentations',
      title: 'Tableside Service',
      description: 'White-gloved service and tableside preparations elevate every moment'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      category: 'ambiance',
      title: 'Grand Dining Hall',
      description: 'Our main dining room exudes Parisian sophistication'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
      category: 'steaks',
      title: 'Prime Filet Mignon',
      description: 'Center-cut tenderloin, butter-basted with fresh herbs'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800',
      category: 'presentations',
      title: 'Sommelier Selection',
      description: 'Expert wine pairings to complement each culinary creation'
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les Photos', icon: Award },
    { id: 'steaks', name: 'Nos Steaks', icon: Utensils },
    { id: 'ambiance', name: 'L\'Ambiance', icon: Wine },
    { id: 'presentations', name: 'Présentation', icon: Award }
  ];

  const filteredImages = currentCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: '#F5F0E6'
    },
    hero: {
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(rgba(26, 26, 26, 0.8), rgba(114, 47, 55, 0.7))',
      position: 'relative'
    },
    heroContent: {
      textAlign: 'center',
      color: 'white',
      maxWidth: '800px',
      padding: '0 20px'
    },
    heroTitle: {
      fontFamily: 'Playfair Display, serif',
      fontSize: window.innerWidth > 768 ? '64px' : '42px',
      fontWeight: 400,
      letterSpacing: '2px',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '20px',
      opacity: 0.9,
      fontStyle: 'italic',
      letterSpacing: '1px'
    },
    categoryNav: {
      padding: '80px 20px 60px',
      background: '#1A1A1A',
      borderTop: '1px solid #C9A961'
    },
    categoryContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      flexWrap: 'wrap'
    },
    categoryButton: {
      background: 'transparent',
      border: '2px solid #C9A961',
      color: '#C9A961',
      padding: '15px 30px',
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px',
      letterSpacing: '1px',
      transition: 'all 0.3s ease',
      fontFamily: 'Lato, sans-serif'
    },
    categoryButtonActive: {
      background: '#C9A961',
      color: '#1A1A1A',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(201, 169, 97, 0.3)'
    },
    gallerySection: {
      padding: '80px 20px',
      background: '#F5F0E6'
    },
    galleryContainer: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 1200 ? 'repeat(3, 1fr)' : 
                          window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
      gap: '30px',
      marginTop: '40px'
    },
    galleryItem: {
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.4s ease'
    },
    galleryItemHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 60px rgba(114, 47, 55, 0.2)'
    },
    galleryImage: {
      width: '100%',
      height: '320px',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    galleryOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(transparent, rgba(26, 26, 26, 0.9))',
      padding: '40px 25px 25px',
      color: 'white',
      transform: 'translateY(100%)',
      transition: 'transform 0.4s ease'
    },
    galleryOverlayVisible: {
      transform: 'translateY(0)'
    },
    galleryTitle: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '22px',
      marginBottom: '8px',
      letterSpacing: '1px'
    },
    galleryDescription: {
      fontSize: '14px',
      opacity: 0.9,
      lineHeight: 1.5
    },
    lightbox: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px'
    },
    lightboxImage: {
      maxWidth: '90%',
      maxHeight: '80%',
      objectFit: 'contain',
      borderRadius: '8px'
    },
    lightboxClose: {
      position: 'absolute',
      top: '30px',
      right: '30px',
      background: 'rgba(201, 169, 97, 0.9)',
      color: '#1A1A1A',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '20px'
    },
    lightboxNav: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(201, 169, 97, 0.9)',
      color: '#1A1A1A',
      border: 'none',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '24px'
    },
    lightboxPrev: {
      left: '30px'
    },
    lightboxNext: {
      right: '30px'
    },
    lightboxInfo: {
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      color: 'white',
      maxWidth: '600px'
    },
    lightboxTitle: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '28px',
      marginBottom: '10px',
      letterSpacing: '1px'
    },
    lightboxDescription: {
      fontSize: '16px',
      opacity: 0.9,
      lineHeight: 1.6
    }
  };

  return (
    <div style={styles.page}>
      <ParallaxSection
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
        height="60vh"
      >
        <div style={styles.hero}>
          <ScrollReveal>
            <div style={styles.heroContent}>
              <h1 style={styles.heroTitle}>Galerie Culinaire</h1>
              <p style={styles.heroSubtitle}>Un voyage visuel à travers notre excellence gastronomique</p>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      <section style={styles.categoryNav}>
        <div style={styles.categoryContainer}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = currentCategory === category.id;
            return (
              <button
                key={category.id}
                style={{
                  ...styles.categoryButton,
                  ...(isActive ? styles.categoryButtonActive : {})
                }}
                onClick={() => setCurrentCategory(category.id)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.background = 'rgba(201, 169, 97, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                <IconComponent size={20} />
                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      <section style={styles.gallerySection}>
        <div style={styles.galleryContainer}>
          <ScrollReveal>
            <div style={styles.galleryGrid}>
              {filteredImages.map((image, index) => (
                <TiltCard key={image.id}>
                  <GlowEffect color="#C9A961">
                    <div
                      style={styles.galleryItem}
                      onClick={() => openLightbox(image)}
                      onMouseEnter={(e) => {
                        const item = e.currentTarget;
                        const img = item.querySelector('img');
                        const overlay = item.querySelector('[data-overlay]');
                        
                        Object.assign(item.style, styles.galleryItemHover);
                        if (img) img.style.transform = 'scale(1.1)';
                        if (overlay) Object.assign(overlay.style, styles.galleryOverlayVisible);
                      }}
                      onMouseLeave={(e) => {
                        const item = e.currentTarget;
                        const img = item.querySelector('img');
                        const overlay = item.querySelector('[data-overlay]');
                        
                        item.style.transform = 'translateY(0)';
                        item.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        if (img) img.style.transform = 'scale(1)';
                        if (overlay) overlay.style.transform = 'translateY(100%)';
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        style={styles.galleryImage}
                        loading="lazy"
                      />
                      <div style={styles.galleryOverlay} data-overlay>
                        <h3 style={styles.galleryTitle}>{image.title}</h3>
                        <p style={styles.galleryDescription}>{image.description}</p>
                      </div>
                    </div>
                  </GlowEffect>
                </TiltCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {selectedImage && (
        <div style={styles.lightbox} onClick={closeLightbox}>
          <button style={styles.lightboxClose} onClick={closeLightbox}>
            <X />
          </button>
          
          <button
            style={{ ...styles.lightboxNav, ...styles.lightboxPrev }}
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <ChevronLeft />
          </button>
          
          <button
            style={{ ...styles.lightboxNav, ...styles.lightboxNext }}
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <ChevronRight />
          </button>
          
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            style={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
          
          <div style={styles.lightboxInfo}>
            <h2 style={styles.lightboxTitle}>{selectedImage.title}</h2>
            <p style={styles.lightboxDescription}>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
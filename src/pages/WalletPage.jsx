import React, { useState } from 'react';
import { CreditCard, Plus, DollarSign, Clock, Gift, Settings, Eye, EyeOff } from 'lucide-react';

const WalletPage = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [giftCardCode, setGiftCardCode] = useState('');

  const giftCards = [
    { id: 1, name: 'Gilani\'s Gift Card', balance: 250.00, code: '****7892', type: 'gift' },
    { id: 2, name: 'Dining Rewards', balance: 75.50, code: '****4321', type: 'reward' }
  ];

  const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiry: '12/26', isDefault: true },
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '08/25', isDefault: false }
  ];

  const recentTransactions = [
    { id: 1, restaurant: 'Gilani\'s', amount: -125.00, date: '2024-01-15', type: 'dinner' },
    { id: 2, restaurant: 'Gift Card Reload', amount: +100.00, date: '2024-01-10', type: 'reload' },
    { id: 3, restaurant: 'Gilani\'s', amount: -85.00, date: '2024-01-08', type: 'lunch' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#1A1A1A',
      color: '#F5F0E6',
      fontFamily: 'Lato, sans-serif'
    },
    header: {
      padding: '60px 20px 40px 20px',
      background: 'linear-gradient(135deg, #722F37 0%, #1A1A1A 100%)',
      textAlign: 'center',
      position: 'relative'
    },
    headerTitle: {
      fontSize: '32px',
      fontFamily: 'Playfair Display, serif',
      color: '#F5F0E6',
      marginBottom: '8px',
      fontWeight: '700',
      letterSpacing: '1px'
    },
    headerSubtitle: {
      fontSize: '16px',
      color: '#C9A961',
      opacity: 0.9
    },
    section: {
      padding: '32px 20px'
    },
    sectionTitle: {
      fontSize: '24px',
      fontFamily: 'Playfair Display, serif',
      color: '#F5F0E6',
      marginBottom: '20px',
      fontWeight: '600'
    },
    balanceCard: {
      background: 'linear-gradient(135deg, #722F37 0%, #8B3A42 100%)',
      borderRadius: '20px',
      padding: '24px',
      marginBottom: '24px',
      position: 'relative',
      overflow: 'hidden'
    },
    balanceCardBg: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100px',
      height: '100px',
      background: 'radial-gradient(circle, rgba(201, 169, 97, 0.1) 0%, transparent 70%)',
      borderRadius: '50%'
    },
    balanceAmount: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#F5F0E6',
      marginBottom: '8px'
    },
    balanceLabel: {
      fontSize: '14px',
      color: '#C9A961',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    eyeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(245, 240, 230, 0.1)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#F5F0E6',
      cursor: 'pointer'
    },
    giftCard: {
      background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      border: '1px solid rgba(201, 169, 97, 0.2)',
      position: 'relative'
    },
    giftCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px'
    },
    giftCardName: {
      fontSize: '16px',
      color: '#F5F0E6',
      fontWeight: '600'
    },
    giftCardBalance: {
      fontSize: '18px',
      color: '#C9A961',
      fontWeight: 'bold'
    },
    giftCardCode: {
      fontSize: '14px',
      color: 'rgba(245, 240, 230, 0.6)',
      fontFamily: 'monospace'
    },
    paymentCard: {
      background: '#2A2A2A',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '12px',
      border: '1px solid rgba(201, 169, 97, 0.2)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    cardInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    cardIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: '#722F37',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardDetails: {
      display: 'flex',
      flexDirection: 'column'
    },
    cardType: {
      fontSize: '16px',
      color: '#F5F0E6',
      fontWeight: '600'
    },
    cardNumber: {
      fontSize: '14px',
      color: 'rgba(245, 240, 230, 0.6)'
    },
    defaultBadge: {
      backgroundColor: '#C9A961',
      color: '#1A1A1A',
      fontSize: '12px',
      padding: '4px 8px',
      borderRadius: '12px',
      fontWeight: '600'
    },
    transaction: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid rgba(201, 169, 97, 0.1)'
    },
    transactionInfo: {
      display: 'flex',
      flexDirection: 'column'
    },
    transactionName: {
      fontSize: '16px',
      color: '#F5F0E6',
      fontWeight: '600',
      marginBottom: '4px'
    },
    transactionDate: {
      fontSize: '14px',
      color: 'rgba(245, 240, 230, 0.6)'
    },
    transactionAmount: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    addButton: {
      background: 'linear-gradient(135deg, #C9A961 0%, #B8984F 100%)',
      color: '#1A1A1A',
      border: 'none',
      borderRadius: '12px',
      padding: '16px',
      fontSize: '16px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: '100%',
      marginBottom: '20px',
      cursor: 'pointer'
    },
    input: {
      backgroundColor: '#2A2A2A',
      border: '1px solid rgba(201, 169, 97, 0.3)',
      borderRadius: '12px',
      padding: '16px',
      fontSize: '16px',
      color: '#F5F0E6',
      width: '100%',
      marginBottom: '16px'
    },
    inputLabel: {
      fontSize: '14px',
      color: '#C9A961',
      marginBottom: '8px',
      display: 'block'
    },
    settingsButton: {
      background: 'rgba(201, 169, 97, 0.1)',
      border: '1px solid rgba(201, 169, 97, 0.3)',
      borderRadius: '12px',
      padding: '16px',
      fontSize: '16px',
      color: '#C9A961',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: '100%',
      cursor: 'pointer'
    },
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(26, 26, 26, 0.95)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(201, 169, 97, 0.2)',
      padding: '12px 20px 20px 20px'
    }
  };

  const handleAddGiftCard = () => {
    if (giftCardCode.trim()) {
      alert(`Gift card ${giftCardCode} added successfully!`);
      setGiftCardCode('');
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Mon Portefeuille</h1>
        <p style={styles.headerSubtitle}>Your Gilani's Dining Wallet</p>
      </div>

      {/* Total Balance */}
      <div style={styles.section}>
        <div style={styles.balanceCard}>
          <div style={styles.balanceCardBg}></div>
          <button style={styles.eyeButton} onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
          <div style={styles.balanceAmount}>
            {showBalance ? '$325.50' : '••••••'}
          </div>
          <div style={styles.balanceLabel}>Total Balance</div>
        </div>
      </div>

      {/* Gift Cards */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Cartes Cadeaux</h2>
        {giftCards.map(card => (
          <div key={card.id} style={styles.giftCard}>
            <div style={styles.giftCardHeader}>
              <div style={styles.giftCardName}>{card.name}</div>
              <div style={styles.giftCardBalance}>${card.balance.toFixed(2)}</div>
            </div>
            <div style={styles.giftCardCode}>{card.code}</div>
          </div>
        ))}
        
        <label style={styles.inputLabel}>Add New Gift Card</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter gift card code"
          value={giftCardCode}
          onChange={(e) => setGiftCardCode(e.target.value)}
        />
        <button style={styles.addButton} onClick={handleAddGiftCard}>
          <Plus size={20} />
          Add Gift Card
        </button>
      </div>

      {/* Payment Methods */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Payment Methods</h2>
        {paymentMethods.map(card => (
          <div key={card.id} style={styles.paymentCard}>
            <div style={styles.cardInfo}>
              <div style={styles.cardIcon}>
                <CreditCard size={20} color="#F5F0E6" />
              </div>
              <div style={styles.cardDetails}>
                <div style={styles.cardType}>{card.type} ••••{card.last4}</div>
                <div style={styles.cardNumber}>Expires {card.expiry}</div>
              </div>
            </div>
            {card.isDefault && <div style={styles.defaultBadge}>Default</div>}
          </div>
        ))}
        
        <button style={styles.addButton}>
          <Plus size={20} />
          Add Payment Method
        </button>
      </div>

      {/* Recent Transactions */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Recent Transactions</h2>
        {recentTransactions.map(transaction => (
          <div key={transaction.id} style={styles.transaction}>
            <div style={styles.transactionInfo}>
              <div style={styles.transactionName}>{transaction.restaurant}</div>
              <div style={styles.transactionDate}>
                {new Date(transaction.date).toLocaleDateString()}
              </div>
            </div>
            <div style={{
              ...styles.transactionAmount,
              color: transaction.amount > 0 ? '#4CAF50' : '#F5F0E6'
            }}>
              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Settings */}
      <div style={styles.section}>
        <button style={styles.settingsButton}>
          <Settings size={20} />
          Payment Settings
        </button>
      </div>

      {/* Bottom spacing for mobile */}
      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default WalletPage;
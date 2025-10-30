import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/floating.css';

function FloatingWhatsApp() {
  const phoneNumber = '6285888657743'; // tanpa tanda +
  const message = 'Halo, saya ingin bertanya tentang layanan Anda.';

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="floating-whatsapp" onClick={handleClick}>
      <div className="whatsapp-icon">
        <i className="bi bi-whatsapp"></i>
      </div>
    </div>
  );
}

export default FloatingWhatsApp;

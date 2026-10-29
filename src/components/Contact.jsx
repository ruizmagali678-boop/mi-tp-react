import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${formData.nombre}! Tu mensaje ha sido enviado exitosamente.`);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Tercera Página - Contacto y Ubicación</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Inicio (API)</Link>
        <Link to="/local" style={{ marginRight: '15px' }}>Segunda Página (Local)</Link>
        <Link to="/contact">Contacto y Mapa</Link>
      </nav>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

        <form onSubmit={handleSubmit} style={{ flex: '1', minWidth: '280px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h2>Envíanos un mensaje</h2>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Nombre:</label>
            <input 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Correo Electrónico:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Mensaje:</label>
            <textarea 
              name="mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
              rows="4" 
              required 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            ></textarea>
          </div>

          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Enviar Mensaje
          </button>
        </form>

        <div style={{ flex: '1', minWidth: '280px' }}>
          <h2>Nuestra Ubicación</h2>
          <iframe 
            title="Mapa de ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115938.30739268884!2d-65.41908565000001!3d-24.7821262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35151b7f7%3A0x3348123282b5883a!2sSalta%2C%20Capital%2C%20Salta!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar" 
            width="100%" 
            height="320" 
            style={{ border: 0, borderRadius: '8px' }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contact;
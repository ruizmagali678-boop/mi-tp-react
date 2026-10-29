import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((data) => {
                setItems(data.slice(0, 4));
                setLoading(false);
            })
            .catch((error) => console.log(error));
        }, []
      );

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Página Principal - Consumo de API Pública</h1>
            <nav style={{ marginBottom: '20px' }}>
            <Link to="/" style={{ marginRight: '15px' }}>Inicio (API)</Link>
            <Link to="/local" style={{ marginRight: '15px' }}>Segunda Página (Local)</Link>
            <Link to="/contact">Contacto y Mapa</Link>
      </nav>
           {loading ? (
        <p>cargando datos...</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {items.map((user) => (
            <div key={user.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
            
              <img 
                src={`https://picsum.photos/seed/${user.id}/150/150`} 
                alt={user.name} 
                style={{ width: '100%', borderRadius: '5px' }}
              />
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
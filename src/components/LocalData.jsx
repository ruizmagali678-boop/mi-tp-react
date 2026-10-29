import React from 'react';
import { Link } from 'react-router-dom';    
import ft1 from '../imagenes/ft1.jpg';
import ft2 from '../imagenes/ft2.webp';
import ft3 from '../imagenes/ft3.webp';

function LocalData() {
    const datosLocales = [
        { id: 1,
            titulo: "Love Tourself:Tear",
            descripcion: "Lanzado el 18 de mayo de 2018, 'Love Yourself: Tear' es el tercer álbum de estudio del grupo surcoreano BTS. Este álbum marcó un hito en la carrera del grupo, consolidando su presencia en la escena musical internacional. Con una mezcla de géneros que van desde el pop hasta el hip-hop y el R&B, 'Love Yourself: Tear' explora temas de amor, pérdida y autodescubrimiento. El álbum incluye éxitos como 'Fake Love', que se convirtió en un fenómeno global, y 'The Truth Untold', una balada emotiva que muestra la versatilidad vocal del grupo. La producción del álbum es sofisticada, con arreglos musicales complejos y letras introspectivas que resonaron con los fans de todo el mundo.",
            imagen: ft1,
        },
        { id: 2,
            titulo: "Love Yourself: Answer",
            descripcion: "Lanzado el 24 de agosto de 2018, 'Love Yourself: Answer' es un álbum recopilatorio que cierra la serie 'Love Yourself' de BTS. Este álbum incluye canciones de los anteriores lanzamientos 'Love Yourself: Her' y 'Love Yourself: Tear', así como nuevas pistas que complementan la narrativa del amor propio y la aceptación. 'Love Yourself: Answer' destaca por su diversidad musical, abarcando desde el pop y el hip-hop hasta baladas conmovedoras. Canciones como 'Idol' y 'Euphoria' se convirtieron en himnos para los fans, mientras que las letras continúan explorando temas de identidad, relaciones y crecimiento personal. La producción del álbum es pulida y refleja la evolución artística del grupo.",
            imagen: ft2,
        },
        { id: 3,
            titulo: "Map of the Soul: 7",
            descripcion: "Lanzado el 20 de septiembre de 2019, 'Map of the Soul: 7' es el cuarto álbum de estudio del grupo surcoreano BTS. Este álbum explora temas de identidad, propósito y el viaje interior del grupo. Con una sound que combina elementos de pop, rock y R&B, 'Map of the Soul: 7' presenta una narrativa más introspectiva y emocional que en sus anteriores lanzamientos. Canciones como 'Blood Sweat & Tears' y 'Fake Love' (versión acústica) se convirtieron en grandes éxitos, mientras que las letras profundizan en las experiencias personales del grupo.",
            imagen: ft3,
        }
    ];

    return (
        <div>
            {datosLocales.map((dato) => (
                <div key={dato.id}>
                    <h2>{dato.titulo}</h2>
                    <p>{dato.descripcion}</p>
                    <img 
  src={dato.imagen} 
  alt={dato.titulo} 
  style={{ 
    width: '100%', 
    height: '500px', 
    objectFit: 'cover', 
    borderRadius: '5px' 
  }} 
/>
                </div>
            ))}
        </div>
    );
}

export default LocalData;
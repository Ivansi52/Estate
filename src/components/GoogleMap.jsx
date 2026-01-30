'use client';

import { useEffect, useRef, useState } from 'react';
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import styles from '@/styles/CityBlocks.module.css';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);

  // Данные офисов
  const offices = [
    {
      id: 1,
      name: 'Gdansk',
      address: '45 Długa Street, 80-831 Gdańsk',
      phone: '+48 58 234 5678',
      position: { lat: 54.3520, lng: 18.6466 }
    },
    {
      id: 2,
      name: 'Lodz',
      address: '210 Piotrkowska Street, 90-368 Łódź',
      phone: '+48 42 345 6789',
      position: { lat: 51.7592, lng: 19.4560 }
    },
    {
      id: 3,
      name: 'Poznan',
      address: '12 Święty Marcin Street, 61-803 Poznań',
      phone: '+48 61 456 7890',
      position: { lat: 52.4064, lng: 16.9252 }
    },
    {
      id: 4,
      name: 'Warsaw',
      address: '123 Marszałkowska Street, 00-102 Warsaw',
      phone: '+48 22 123 4567',
      position: { lat: 52.2297, lng: 21.0122 }
    }
  ];

  useEffect(() => {
    const initMap = async () => {
      try {
        setOptions({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'your-api-key-here',
          version: 'weekly'
        });

        const { Map } = await importLibrary('maps');
        const { Marker } = await importLibrary('marker');
        const { InfoWindow } = await importLibrary('maps');

        // Центр карты (Warsaw как основной офис)
        const center = { lat: 52.2297, lng: 21.0122 };

        const map = new Map(mapRef.current, {
          center,
          zoom: 5,
          mapTypeId: 'roadmap',
          disableDefaultUI: true,
          styles: [
            {
              featureType: "all",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f6f8fc" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#bcd8f2" }]
            },
            {
              featureType: "administrative.country",
              elementType: "geometry.stroke",
              stylers: [{ color: "#d0d7e3" }, { weight: 0.5 }]
            }
          ]
        });

        // Создаем маркеры для каждого офиса
        const createdMarkers = [];
        offices.forEach((office, index) => {
          const marker = new Marker({
            position: office.position,
            map,
            title: office.name,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 6,
              fillColor: "#2a5bff",
              fillOpacity: 1,
              strokeWeight: 0,
            }
          });

          const infoWindow = new InfoWindow({
            content: `
              <div style="
                padding: 15px; 
                font-family: 'Segoe UI', Arial, sans-serif;
                min-width: 200px;
                border-radius: 8px;
              ">
                <div style="
                  display: flex;
                  align-items: center;
                  margin-bottom: 10px;
                ">
                  <div style="
                    width: 8px;
                    height: 8px;
                    background: #2563eb;
                    border-radius: 50%;
                    margin-right: 8px;
                  "></div>
                  <h3 style="
                    margin: 0; 
                    color: #1f2937; 
                    font-size: 16px;
                    font-weight: 600;
                  ">${office.name}</h3>
                </div>
                <p style="
                  margin: 0 0 8px 0; 
                  color: #6b7280; 
                  font-size: 14px;
                  line-height: 1.4;
                ">📍 ${office.address}</p>
                <p style="
                  margin: 0; 
                  color: #6b7280; 
                  font-size: 14px;
                  font-weight: 500;
                ">📞 ${office.phone}</p>
              </div>
            `,
            maxWidth: 300
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          createdMarkers.push({ marker, infoWindow, office });
        });

        setMarkers(createdMarkers);
        setMap(map);

        setIsLoaded(true);
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Failed to load map. Please check your API key.');
      }
    };

    if (mapRef.current) {
      initMap();
    }
  }, []);

  // Функция для выбора города
  const handleCitySelect = (cityName) => {
    if (selectedCity === cityName) {
      // Если кликнули на уже выбранный город, показываем все
      setSelectedCity(null);
      if (map && markers.length > 0) {
        // Показываем все маркеры
        markers.forEach(({ marker }) => {
          marker.setMap(map);
        });
        // Центрируем карту на всех офисах
        const bounds = new google.maps.LatLngBounds();
        offices.forEach(office => {
          bounds.extend(office.position);
        });
        map.fitBounds(bounds);
      }
    } else {
      // Выбираем конкретный город
      setSelectedCity(cityName);
      if (map && markers.length > 0) {
        // Скрываем все маркеры
        markers.forEach(({ marker }) => {
          marker.setMap(null);
        });
        
        // Показываем только выбранный город
        const selectedOffice = offices.find(office => office.name === cityName);
        if (selectedOffice) {
          const selectedMarker = markers.find(({ office }) => office.name === cityName);
          if (selectedMarker) {
            selectedMarker.marker.setMap(map);
            map.setCenter(selectedOffice.position);
            map.setZoom(10);
          }
        }
      }
    }
  };

  if (error) {
    return (
      <div style={{
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <p style={{ color: '#666', textAlign: 'center' }}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      {/* City Selection Blocks */}
      <div className={styles.locations}>
        {offices.map((office) => (
          <div
            key={office.id}
            onClick={() => handleCitySelect(office.name)}
            className={`${styles.location} ${selectedCity === office.name ? styles.active : ''}`}
          >
            <div className={styles.locationInfo}>
              <div className={styles.cityName}>
                {office.name}
              </div>
              <span className={styles.phone}>
                {office.phone}
              </span>
              <div className={styles.cityImage}>
                <img 
                  src={office.name.toLowerCase() === 'gdansk' ? '/images/gdan\'sk.png' : `/images/${office.name.toLowerCase()}.svg`}
                  alt={office.name}
                  style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className={styles.address}>
                {office.address}
              </span>
            </div>
            <div className={styles.dot}></div>
          </div>
        ))}
      </div>

      {/* Map Container */}
      <div style={{ position: 'relative', width: '100%', height: '400px' }}>
        <div
          ref={mapRef}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}
        />
        <div 
          className="mesh-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            opacity: 0.15,
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><path d='M0 100 L100 0 L200 100 L100 200 Z' stroke='%239bb8d0' stroke-width='0.5' fill='none'/></svg>")`,
            backgroundSize: '200px 200px',
            borderRadius: '8px'
          }}
        />
        {!isLoaded && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#666'
          }}>
            Loading map...
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleMap;

// Configuración inicial
const API_KEY = '867da5e05f9cb996ee4b232533cee5a5';
let map, marker, forecastChart;

// Inicialización de la App
document.addEventListener('DOMContentLoaded', () => {
    // Intentar obtener ubicación del navegador
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => initApp(pos.coords.latitude, pos.coords.longitude),
            () => initApp(40.4167, -3.7037) // Fallback a Madrid si falla
        );
    } else {
        initApp(40.4167, -3.7037);
    }
});

function initApp(lat, lng) {
    // Inicializar Mapa
    map = L.map('map').setView([lat, lng], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Marcador inicial
    marker = L.marker([lat, lng]).addTo(map);

    // Cargar datos iniciales
    fetchWeather(lat, lng);

    // Evento de clic en el mapa para cambiar POI
    map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        marker.setLatLng([lat, lng]);
        fetchWeather(lat, lng);
    });
}

async function fetchWeather(lat, lng) {
    try {
        // Llamada fetch doble (Actual + Predicción)
        const [currentRes, forecastRes] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&lang=es&appid=${API_KEY}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&lang=es&appid=${API_KEY}`)
        ]);

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        updateUI(currentData);
        updateChart(forecastData);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

function updateUI(data) {
    const container = document.getElementById('current-weather');
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    container.innerHTML = `
        <h3>${data.name || 'Coordenadas seleccionadas'}</h3>
        <img src="${iconUrl}" class="weather-icon" alt="clima">
        <p style="font-size: 2rem; margin: 10px 0;">${Math.round(data.main.temp)}°C</p>
        <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
        <p><strong>Viento:</strong> ${data.wind.speed} m/s (${data.wind.deg}°)</p>
        <p><em>${data.weather[0].description}</em></p>
    `;
}

function updateChart(data) {
    // Extraemos solo los primeros 8 puntos (24 horas) para que la gráfica sea legible
    const next24h = data.list.slice(0, 8);
    const labels = next24h.map(item => item.dt_txt.split(' ')[1].substring(0, 5));
    const temps = next24h.map(item => item.main.temp);
    const humidity = next24h.map(item => item.main.humidity);

    if (forecastChart) forecastChart.destroy();

    const ctx = document.getElementById('forecastChart').getContext('2d');
    forecastChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Temperatura (°C)',
                    data: temps,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Humedad (%)',
                    data: humidity,
                    borderColor: '#95a5a6',
                    borderDash: [5, 5],
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: { display: true, text: 'Predicción próximas 24 horas' }
            }
        }
    });
}
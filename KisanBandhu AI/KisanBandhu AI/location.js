// Location services functionality
const locationModule = {
    currentPosition: null,
    
    initialize: function() {
      // Check if geolocation is supported
      if (navigator.geolocation) {
        console.log('Geolocation is supported');
      } else {
        console.warn('Geolocation is not supported by this browser');
      }
    },
    
    getCurrentLocation: function(callback) {
      if (!navigator.geolocation) {
        callback(null, 'Geolocation not supported');
        return;
      }
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentPosition = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          callback(this.currentPosition, null);
        },
        (error) => {
          console.error('Error getting location:', error);
          callback(null, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    },
    
    // Function to get location-based recommendations for crops
    getCropRecommendations: function(position) {
      // This would typically involve API calls to agricultural services
      // For now, we'll simulate recommendations based on latitude
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate different recommendations based on latitude ranges
          // In a real app, this would use actual agricultural data APIs
          const latitude = position.latitude;
          
          if (latitude > 30) {
            // Northern regions
            resolve([
              { crop: 'Wheat', suitability: 'High' },
              { crop: 'Barley', suitability: 'High' },
              { crop: 'Maize', suitability: 'Medium' },
              { crop: 'Rice', suitability: 'Low' }
            ]);
          } else if (latitude > 15) {
            // Central regions
            resolve([
              { crop: 'Cotton', suitability: 'High' },
              { crop: 'Sorghum', suitability: 'High' },
              { crop: 'Soybeans', suitability: 'Medium' },
              { crop: 'Wheat', suitability: 'Low' }
            ]);
          } else {
            // Southern regions
            resolve([
              { crop: 'Rice', suitability: 'High' },
              { crop: 'Sugarcane', suitability: 'High' },
              { crop: 'Cotton', suitability: 'Medium' },
              { crop: 'Coconut', suitability: 'High' }
            ]);
          }
        }, 1000);
      });
    }
  };
  
  // Function to get location and display crop recommendations
  function getLocationRecommendations() {
    const locationStatus = document.getElementById('locationStatus');
    const locationResults = document.getElementById('locationResults');
    const cropRecommendations = document.getElementById('cropRecommendations');
    
    locationResults.classList.remove('hidden');
    locationStatus.innerHTML = '<div class="spinner"></div><p>Getting your location...</p>';
    cropRecommendations.innerHTML = '';
    
    locationModule.getCurrentLocation(async (position, error) => {
      if (error) {
        locationStatus.innerHTML = `<p class="text-red-500">Error: ${error}</p>`;
        return;
      }
      
      locationStatus.innerHTML = `<p class="text-green-500">Location found! Latitude: ${position.latitude.toFixed(4)}, Longitude: ${position.longitude.toFixed(4)}</p>`;
      
      try {
        const recommendations = await locationModule.getCropRecommendations(position);
        
        if (recommendations && recommendations.length > 0) {
          let html = '<h3 class="text-xl font-bold mb-2">Recommended Crops for Your Location:</h3>';
          html += '<div class="space-y-2">';
          
          recommendations.forEach(rec => {
            let suitabilityClass = '';
            
            if (rec.suitability === 'High') {
              suitabilityClass = 'high-suitability';
            } else if (rec.suitability === 'Medium') {
              suitabilityClass = 'medium-suitability';
            } else {
              suitabilityClass = 'low-suitability';
            }
            
            html += `
              <div class="recommendation-item ${suitabilityClass}">
                <span>${rec.crop}</span>
                <span>Suitability: ${rec.suitability}</span>
              </div>
            `;
          });
          
          html += '</div>';
          cropRecommendations.innerHTML = html;
        } else {
          cropRecommendations.innerHTML = '<p>No recommendations available for your location.</p>';
        }
      } catch (err) {
        console.error('Error getting recommendations:', err);
        cropRecommendations.innerHTML = '<p class="text-red-500">Error retrieving crop recommendations.</p>';
      }
    });
  }
  
  // Initialize location module on page load
  document.addEventListener('DOMContentLoaded', function() {
    locationModule.initialize();
  });
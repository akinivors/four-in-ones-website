// In app/components/journey/EnhancedDestinationsSection.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Cloud, Sun, Landmark, UtensilsCrossed, Camera, ShoppingBag, Star, ExternalLink, DollarSign, CloudRain, CloudSnow, Zap, Eye } from 'lucide-react';

const destinations = [
  { 
    city: "İstanbul", 
    title: "Crossroads of History & Health", 
    imageUrl: "/images/dest-istanbul.jpg",
    description: "World-class healthcare in a city spanning two continents",
    flightTime: "3-4 hours from Europe, 10-12 hours from US",
    weatherCity: "Istanbul",
    weather: { temp: 18, condition: "Partly Cloudy", icon: Cloud, humidity: 65, feelsLike: 20 },
    attractions: [
      { 
        name: "Hagia Sophia", 
        icon: Landmark,
        description: "Iconic Byzantine cathedral turned mosque, architectural marvel",
        rating: 4.8,
        visitTime: "2-3 hours",
        price: "Free",
        tips: "Visit early morning to avoid crowds, dress modestly",
        location: "Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul",
        website: "https://ayasofyacamii.gov.tr/en",
        googleMaps: "https://maps.google.com/?q=Hagia+Sophia+Istanbul"
      },
      { 
        name: "Grand Bazaar", 
        icon: ShoppingBag,
        description: "Historic covered market with 4,000 shops, perfect for souvenirs",
        rating: 4.6,
        visitTime: "2-4 hours", 
        price: "Free entry",
        tips: "Bargain expected, cash preferred, try Turkish tea",
        location: "Beyazıt, 34126 Fatih/İstanbul, Turkey",
        website: "https://grandbazaaristanbul.org",
        googleMaps: "https://maps.google.com/?q=Grand+Bazaar+Istanbul"
      },
      { 
        name: "Bosphorus Cruise", 
        icon: Camera,
        description: "Scenic boat ride between Europe and Asia continents",
        rating: 4.7,
        visitTime: "1.5-2 hours",
        price: "$15-30",
        tips: "Sunset cruises offer best views, bring camera",
        location: "Eminönü Pier, 34110 Fatih/İstanbul",
        website: "https://www.bosphorus-cruises.com/",
        googleMaps: "https://maps.google.com/?q=Eminonu+Pier+Istanbul"
      },
      { 
        name: "Turkish Cuisine Tour", 
        icon: UtensilsCrossed,
        description: "World-famous food scene: kebabs, baklava, Turkish delight",
        rating: 4.9,
        visitTime: "All day",
        price: "$10-50",
        tips: "Try local street food, ask for recommendations",
        location: "Various locations in Sultanahmet & Galata",
        website: "https://www.tripadvisor.com.tr/RestaurantsNear-g293974-d294495-Blue_Mosque-Istanbul.html",
        googleMaps: "https://maps.google.com/?q=Sultanahmet+Istanbul+restaurants"
      },
    ]
  },
  { 
    city: "İzmir", 
    title: "Aegean Charm & Modern Care", 
    imageUrl: "/images/dest-izmir.jpg",
    description: "Mediterranean beauty meets cutting-edge medical facilities",
    flightTime: "3-4 hours from Europe, 11-13 hours from US",
    weatherCity: "Izmir",
    weather: { temp: 22, condition: "Sunny", icon: Sun, humidity: 58, feelsLike: 24 },
    attractions: [
      { 
        name: "Ancient Ephesus", 
        icon: Landmark,
        description: "Best-preserved ancient Roman city, UNESCO World Heritage Site",
        rating: 4.9,
        visitTime: "3-4 hours",
        price: "$20-35",
        tips: "Wear comfortable shoes, bring water, guided tour recommended",
        location: "Selçuk, 35920 Selçuk/İzmir, Turkey",
        website: "https://whc.unesco.org/en/list/1018/",
        googleMaps: "https://maps.google.com/?q=Ancient+City+of+Ephesus+Selcuk+Izmir"
      },
      { 
        name: "Kordon Promenade", 
        icon: Camera,
        description: "Beautiful waterfront walkway with cafes and sea views",
        rating: 4.5,
        visitTime: "1-2 hours",
        price: "Free",
        tips: "Perfect for evening walks, many seafood restaurants",
        location: "Alsancak, Kordon Boyu, 35220 Konak/İzmir",
        website: "https://www.izmir.bel.tr/en/izmir/kordon",
        googleMaps: "https://maps.google.com/?q=Kordon+Alsancak+Izmir"
      },
      { 
        name: "Fish Market & Restaurants", 
        icon: UtensilsCrossed,
        description: "Fresh seafood, olive oil dishes, and Mediterranean flavors",
        rating: 4.8,
        visitTime: "All day",
        price: "$12-40",
        tips: "Try local fish restaurants, olive oil tastings available",
        location: "Kemeraltı Çarşısı, 35360 Konak/İzmir",
        website: "https://www.izmir.bel.tr/en/izmir/kemeralti-bazaar",
        googleMaps: "https://maps.google.com/?q=Kemeralti+Fish+Market+Izmir"
      },
      { 
        name: "Cesme & Alacati", 
        icon: Camera,
        description: "Crystal clear waters and pristine beaches, 1-hour drive",
        rating: 4.7,
        visitTime: "Half day",
        price: "$5-15",
        tips: "Best beaches: Ilica and Alacati, windsurfing popular",
        location: "Çeşme, 35930 Çeşme/İzmir, Turkey",
        website: "https://www.cesme.bel.tr/en",
        googleMaps: "https://maps.google.com/?q=Cesme+Alacati+Beach+Izmir"
      },
    ]
  },
  { 
    city: "Cyprus", 
    title: "Serene Recovery by the Sea", 
    imageUrl: "/images/dest-cyprus.jpg",
    description: "Peaceful island paradise for your healing journey",
    flightTime: "4-5 hours from Europe, 12-14 hours from US",
    weatherCity: "Nicosia",
    weather: { temp: 20, condition: "Sunny", icon: Sun, humidity: 52, feelsLike: 22 },
    attractions: [
      { 
        name: "Kyrenia Castle", 
        icon: Landmark,
        description: "Medieval fortress with harbor views and shipwreck museum",
        rating: 4.6,
        visitTime: "2-3 hours",
        price: "$8-12",
        tips: "Combine with harbor visit, great photo opportunities",
        location: "Kyrenia Harbour, Girne, Northern Cyprus",
        website: "https://www.northcyprus.cc/kyrenia/kyrenia-castle.html",
        googleMaps: "https://maps.google.com/?q=Kyrenia+Castle+Northern+Cyprus"
      },
      { 
        name: "Blue Lagoon (Akamas)", 
        icon: Camera,
        description: "Stunning natural swimming spot with turquoise waters",
        rating: 4.8,
        visitTime: "Half day",
        price: "Free",
        tips: "Bring snorkeling gear, can get crowded in summer",
        location: "Akamas Peninsula, Paphos District, Cyprus",
        website: "https://www.visitcyprus.com/index.php/en/discovercyprus/nature/item/158-akamas-peninsula",
        googleMaps: "https://maps.google.com/?q=Blue+Lagoon+Akamas+Cyprus"
      },
      { 
        name: "Traditional Tavernas", 
        icon: UtensilsCrossed,
        description: "Fresh fish, halloumi cheese, and traditional meze platters",
        rating: 4.7,
        visitTime: "All day",
        price: "$10-35",
        tips: "Try local halloumi, meze is perfect for sharing",
        location: "Limassol & Paphos Old Towns, Cyprus",
        website: "https://www.visitcyprus.com/index.php/en/discovercyprus/gastronomy",
        googleMaps: "https://maps.google.com/?q=Traditional+restaurants+Limassol+Cyprus"
      },
      { 
        name: "Paphos Archaeological Park", 
        icon: ShoppingBag,
        description: "Ancient mosaics, tombs, and UNESCO World Heritage sites",
        rating: 4.4,
        visitTime: "3-4 hours",
        price: "$5-8",
        tips: "Early morning visits recommended, wear sun protection",
        location: "Kato Paphos, 8042 Paphos, Cyprus",
        website: "https://whc.unesco.org/en/list/79/",
        googleMaps: "https://maps.google.com/?q=Paphos+Archaeological+Park+Cyprus"
      },
    ]
  },
];

// Real Weather API integration with OpenWeatherMap
const fetchWeatherData = async (city: string) => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    if (!API_KEY) {
      console.warn('Weather API key not found, using fallback data');
      // Fallback to mock data if no API key
      const baseTemps = { "Istanbul": 18, "Izmir": 22, "Nicosia": 20 };
      const temp = baseTemps[city as keyof typeof baseTemps] || 20;
      return {
        temp,
        condition: temp > 20 ? "Sunny" : "Partly Cloudy",
        icon: temp > 20 ? Sun : Cloud,
        humidity: 60,
        feelsLike: temp + 2
      };
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Map weather conditions to our display format
    const getWeatherCondition = (weatherMain: string, description: string) => {
      switch (weatherMain.toLowerCase()) {
        case 'clear':
          return 'Sunny';
        case 'clouds':
          return description.includes('few') ? 'Partly Cloudy' : 'Cloudy';
        case 'rain':
        case 'drizzle':
          return 'Rainy';
        case 'snow':
          return 'Snowy';
        case 'thunderstorm':
          return 'Stormy';
        case 'mist':
        case 'fog':
          return 'Foggy';
        default:
          return 'Partly Cloudy';
      }
    };

    const condition = getWeatherCondition(data.weather[0].main, data.weather[0].description);
    
    // Get appropriate weather icon
    const getWeatherIcon = (condition: string) => {
      switch (condition) {
        case 'Sunny':
          return Sun;
        case 'Rainy':
          return CloudRain;
        case 'Snowy':
          return CloudSnow;
        case 'Stormy':
          return Zap;
        case 'Foggy':
          return Eye;
        case 'Cloudy':
        case 'Partly Cloudy':
        default:
          return Cloud;
      }
    };
    
    return {
      temp: Math.round(data.main.temp),
      condition,
      icon: getWeatherIcon(condition),
      humidity: data.main.humidity,
      feelsLike: Math.round(data.main.feels_like)
    };
    
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Fallback to reasonable default data
    const baseTemps = { "Istanbul": 18, "Izmir": 22, "Nicosia": 20 };
    const temp = baseTemps[city as keyof typeof baseTemps] || 20;
    
    return {
      temp,
      condition: "Partly Cloudy",
      icon: Cloud,
      humidity: 60,
      feelsLike: temp + 2
    };
  }
};

const EnhancedDestinationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAttractions, setShowAttractions] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<number | null>(null);
  const [weatherData, setWeatherData] = useState<Array<{temp: number, condition: string, icon: React.ComponentType, humidity: number, feelsLike: number}>>([]);
  const [weatherLoading, setWeatherLoading] = useState(true);

  const next = () => setCurrentIndex((prev) => (prev + 1) % destinations.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);

  const currentDest = destinations[currentIndex];

  // Load weather data on component mount
  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        setWeatherLoading(true);
        const weatherPromises = destinations.map(dest => 
          fetchWeatherData(dest.weatherCity)
        );
        const weatherResults = await Promise.all(weatherPromises);
        setWeatherData(weatherResults);
      } catch (error) {
        console.error('Failed to load weather data:', error);
      } finally {
        setWeatherLoading(false);
      }
    };
    
    loadWeatherData();
    
    // Update weather every 30 minutes (reasonable for real API)
    const interval = setInterval(() => {
      loadWeatherData();
    }, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Get current weather or fallback to static data
  const currentWeather = weatherData[currentIndex] || currentDest.weather;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl md:text-4xl font-bold text-brand-dark">
            Our Premier Destinations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">
            Combine your treatment with an unforgettable stay in world-class locations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden rounded-3xl shadow-2xl mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentDest.imageUrl}
                  alt={currentDest.city}
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 max-w-lg text-white"
                >
                  <h3 className="font-lora text-4xl md:text-7xl font-bold mb-3 md:mb-4">
                    {currentDest.city}
                  </h3>
                  <p className="text-xl md:text-3xl text-gray-200 mb-2 md:mb-4">
                    {currentDest.title}
                  </p>
                  <p className="text-base md:text-lg text-gray-300">
                    {currentDest.description}
                  </p>
                </motion.div>
                
                {/* Enhanced Weather Widget - Repositioned to top-right */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-6 md:top-8 right-6 md:right-16 z-10"
                >
                  <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                    {weatherLoading ? (
                      <>
                        <div className="w-6 h-6 md:w-8 md:h-8 animate-spin">
                          <Cloud className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div className="text-white">
                          <p className="text-xl md:text-2xl font-bold">--°C</p>
                          <p className="text-xs md:text-sm opacity-90">Loading...</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0">
                          {currentWeather.condition === 'Sunny' && <Sun className="w-6 h-6 md:w-8 md:h-8" />}
                          {currentWeather.condition === 'Rainy' && <CloudRain className="w-6 h-6 md:w-8 md:h-8" />}
                          {currentWeather.condition === 'Snowy' && <CloudSnow className="w-6 h-6 md:w-8 md:h-8" />}
                          {currentWeather.condition === 'Stormy' && <Zap className="w-6 h-6 md:w-8 md:h-8" />}
                          {currentWeather.condition === 'Foggy' && <Eye className="w-6 h-6 md:w-8 md:h-8" />}
                          {(currentWeather.condition === 'Cloudy' || currentWeather.condition === 'Partly Cloudy' || !['Sunny', 'Rainy', 'Snowy', 'Stormy', 'Foggy'].includes(currentWeather.condition)) && <Cloud className="w-6 h-6 md:w-8 md:h-8" />}
                        </div>
                        <div className="text-white min-w-0">
                          <p className="text-xl md:text-2xl font-bold">{currentWeather.temp}°C</p>
                          <p className="text-xs md:text-sm opacity-90">{currentWeather.condition}</p>
                          <div className="hidden md:flex gap-2 text-xs opacity-75 mt-1">
                            <span>Feels {currentWeather.feelsLike}°C</span>
                            <span>{currentWeather.humidity}%</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex gap-3 md:gap-4 z-10">
              <button
                onClick={prev}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all hover:scale-110"
                aria-label="Previous destination"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all hover:scale-110"
                aria-label="Next destination"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-16 flex gap-2 z-10">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white w-8 md:w-12' 
                      : 'bg-white/50 w-8 hover:bg-white/70'
                  }`}
                  aria-label={`Go to destination ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Info Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Distance Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-teal to-brand-teal/80 text-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-8 h-8" />
                <h4 className="text-xl font-bold">Travel Time</h4>
              </div>
              <p className="text-white/90 text-lg">{currentDest.flightTime}</p>
              <p className="text-sm text-white/70 mt-2">
                You&apos;re just hours away from world-class care
              </p>
            </motion.div>

            {/* Weather Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8">
                  {!weatherLoading && (
                    <>
                      {currentWeather.condition === 'Sunny' && <Sun className="w-8 h-8" />}
                      {currentWeather.condition === 'Rainy' && <CloudRain className="w-8 h-8" />}
                      {currentWeather.condition === 'Snowy' && <CloudSnow className="w-8 h-8" />}
                      {currentWeather.condition === 'Stormy' && <Zap className="w-8 h-8" />}
                      {currentWeather.condition === 'Foggy' && <Eye className="w-8 h-8" />}
                      {(currentWeather.condition === 'Cloudy' || currentWeather.condition === 'Partly Cloudy' || !['Sunny', 'Rainy', 'Snowy', 'Stormy', 'Foggy'].includes(currentWeather.condition)) && <Cloud className="w-8 h-8" />}
                    </>
                  )}
                </div>
                <h4 className="text-xl font-bold">Current Weather</h4>
              </div>
              {weatherLoading ? (
                <p className="text-white/90 text-lg">Loading weather data...</p>
              ) : (
                <>
                  <p className="text-white/90 text-lg">{currentWeather.temp}°C - {currentWeather.condition}</p>
                  <p className="text-sm text-white/70 mt-2">
                    Feels like {currentWeather.feelsLike}°C • {currentWeather.humidity}% humidity
                  </p>
                </>
              )}
            </motion.div>

            {/* Local Attractions Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-brand-orange to-brand-orange/80 text-white p-6 rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setShowAttractions(!showAttractions)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8" />
                  <h4 className="text-xl font-bold">Local Attractions</h4>
                </div>
                <motion.div
                  animate={{ rotate: showAttractions ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
              <p className="text-white/90">Click to explore nearby attractions</p>
            </motion.div>
          </div>

          {/* Enhanced Expandable Attractions */}
          <AnimatePresence>
            {showAttractions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-brand-background p-6 rounded-2xl">
                  <h4 className="font-lora text-2xl font-bold text-brand-dark mb-6">
                    Things to Do in {currentDest.city}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentDest.attractions.map((attraction, idx) => (
                      <motion.div
                        key={attraction.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                        onClick={() => setSelectedAttraction(selectedAttraction === idx ? null : idx)}
                      >
                        {/* Card Header */}
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className="bg-brand-teal/10 p-3 rounded-xl group-hover:bg-brand-teal/20 transition-colors">
                                <attraction.icon className="w-8 h-8 text-brand-teal" />
                              </div>
                              <div>
                                <h5 className="text-xl font-bold text-brand-dark">{attraction.name}</h5>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-semibold text-gray-700">{attraction.rating}</span>
                                  </div>
                                  <span className="text-gray-300">•</span>
                                  <span className="text-sm text-gray-600">{attraction.visitTime}</span>
                                </div>
                              </div>
                            </div>
                            <motion.div
                              animate={{ rotate: selectedAttraction === idx ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-brand-teal"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.div>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{attraction.description}</p>
                          
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4 text-green-600" />
                              <span className="font-semibold text-green-700">{attraction.price}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-blue-600" />
                              <span className="text-blue-700">{attraction.visitTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {selectedAttraction === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-100 bg-gray-50"
                            >
                              <div className="p-6">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                  <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </div>
                                    <div>
                                      <h6 className="font-semibold text-blue-900 mb-2">Local Tips</h6>
                                      <p className="text-blue-800 text-sm">{attraction.tips}</p>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                                  <p className="text-sm font-semibold text-gray-700 mb-1">📍 Location</p>
                                  <p className="text-sm text-gray-600">{attraction.location}</p>
                                </div>
                                
                                <div className="mt-4 flex gap-3">
                                  <a
                                    href={attraction.googleMaps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-brand-teal text-white py-2 px-4 rounded-lg hover:bg-brand-teal/90 transition-colors flex items-center justify-center gap-2"
                                  >
                                    <MapPin className="w-4 h-4" />
                                    Get Directions
                                  </a>
                                  <a
                                    href={attraction.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    Learn More
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EnhancedDestinationsSection;

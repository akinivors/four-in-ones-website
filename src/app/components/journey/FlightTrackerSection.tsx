// In app/components/journey/FlightTrackerSection.tsx
"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, MapPin, Clock, Navigation } from 'lucide-react';

// Major cities with coordinates (accurate positions on the map visualization)
const cities = {
  // Europe
  "London": { x: 45.5, y: 33.5, region: "Europe" },
  "Paris": { x: 47, y: 35.4, region: "Europe" },
  "Berlin": { x: 51, y: 34, region: "Europe" },
  "Frankfurt": { x: 49.2, y: 35.2, region: "Europe" },
  "Rome": { x: 50.5, y: 41, region: "Europe" },
  "Madrid": { x: 46, y: 41.5, region: "Europe" },
  "Amsterdam": { x: 47.9, y: 33, region: "Europe" },
  "Vienna": { x: 51.5, y: 36.5, region: "Europe" },
  "Brussels": { x: 47.5, y: 34.5, region: "Europe" },
  "Zurich": { x: 48.8, y: 36.2, region: "Europe" },
  "Stockholm": { x: 52, y: 29.5, region: "Europe" },
  "Copenhagen": { x: 50.5, y: 32, region: "Europe" },
  "Oslo": { x: 49.5, y: 29.3, region: "Europe" },
  "Barcelona": { x: 47.1, y: 40.8, region: "Europe" },
  "Munich": { x: 50, y: 36, region: "Europe" },
  "Warsaw": { x: 53, y: 34.5, region: "Europe" },
  "Prague": { x: 51.8, y: 35.5, region: "Europe" },
  "Athens": { x: 53.2, y: 42.5, region: "Europe" },
  
  // Americas
  "New York": { x: 27.5, y: 40.5, region: "Americas" },
  "Los Angeles": { x: 15.5, y: 45.7, region: "Americas" },
  "Toronto": { x: 27, y: 38, region: "Americas" },
  "Miami": { x: 25.3, y: 48.6, region: "Americas" },
  "São Paulo": { x: 34, y: 74, region: "Americas" },
  "Chicago": { x: 22, y: 41.5, region: "Americas" },
  "Montreal": { x: 28, y: 36.5, region: "Americas" },
  "Vancouver": { x: 14, y: 36, region: "Americas" },
  "Mexico City": { x: 20, y: 52, region: "Americas" },
  "Buenos Aires": { x: 32, y: 79.7, region: "Americas" },
  "Bogotá": { x: 28, y: 61, region: "Americas" },
  
  // Middle East & Asia
  "Dubai": { x: 62, y: 50, region: "Middle East" },
  "Doha": { x: 61, y: 48.8, region: "Middle East" },
  "Riyadh": { x: 59, y: 48.5, region: "Middle East" },
  "Tel Aviv": { x: 57, y: 45.5, region: "Middle East" },
  "Kuwait City": { x: 60, y: 47.5, region: "Middle East" },
  "Baghdad": { x: 58.5, y: 45.8, region: "Middle East" },
  "Tehran": { x: 61, y: 43.9 , region: "Middle East" },
  "Moscow": { x: 56.5, y: 31, region: "Asia" },
  "Tokyo": { x: 84, y: 43, region: "Asia" },
  "Beijing": { x: 79, y: 39, region: "Asia" },
  "Shanghai": { x: 79.5, y: 46, region: "Asia" },
  "Hong Kong": { x: 78, y: 50, region: "Asia" },
  "Singapore": { x: 74, y: 61.5, region: "Asia" },
  "Bangkok": { x: 74, y: 55, region: "Asia" },
  "Mumbai": { x: 67, y: 54, region: "Asia" },
  "Delhi": { x: 67.4, y: 47, region: "Asia" },
  "Seoul": { x: 82, y: 41, region: "Asia" },
  "Manila": { x: 80, y: 56, region: "Asia" },
  
  // Africa
  "Cairo": { x: 54.8, y: 48, region: "Africa" },
  "Johannesburg": { x: 54, y: 72, region: "Africa" },
  "Lagos": { x: 48.5, y: 58, region: "Africa" },
  "Casablanca": { x: 44, y: 46, region: "Africa" },
  "Nairobi": { x: 57, y: 61, region: "Africa" },
  "Tunis": { x: 49, y: 43.5, region: "Africa" },
  
  // Oceania
  "Sydney": { x: 87, y: 80, region: "Oceania" },
  "Melbourne": { x: 86, y: 84, region: "Oceania" },
  "Auckland": { x: 96, y: 81, region: "Oceania" },
  
  // Destinations
  "Istanbul": { x: 54.8, y: 39.4, region: "Turkey" },
  "Izmir": { x: 54.3, y: 41, region: "Turkey" },
  "Cyprus": { x: 56, y: 44, region: "Cyprus" },
};

  // Real flight times lookup table
  const flightTimes: Record<string, Record<string, string>> = {
    "London": { "Istanbul": "4h 0m", "Izmir": "4h 0m", "Cyprus": "4h 30m" },
    "Paris": { "Istanbul": "3h 30m", "Izmir": "3h 30m", "Cyprus": "4h 0m" },
    "Berlin": { "Istanbul": "2h 45m", "Izmir": "2h 50m", "Cyprus": "3h 30m" },
    "Frankfurt": { "Istanbul": "3h 5m", "Izmir": "3h 10m", "Cyprus": "3h 45m" },
    "Rome": { "Istanbul": "2h 20m", "Izmir": "2h 10m", "Cyprus": "2h 45m" },
    "Madrid": { "Istanbul": "4h 15m", "Izmir": "4h 0m", "Cyprus": "4h 40m" },
    "Amsterdam": { "Istanbul": "3h 30m", "Izmir": "3h 35m", "Cyprus": "4h 10m" },
    "Vienna": { "Istanbul": "2h 10m", "Izmir": "2h 15m", "Cyprus": "2h 50m" },
    "Brussels": { "Istanbul": "3h 20m", "Izmir": "3h 30m", "Cyprus": "4h 0m" },
    "Zurich": { "Istanbul": "2h 50m", "Izmir": "2h 55m", "Cyprus": "3h 20m" },
    "Stockholm": { "Istanbul": "3h 45m", "Izmir": "3h 50m", "Cyprus": "4h 20m" },
    "Copenhagen": { "Istanbul": "3h 20m", "Izmir": "3h 25m", "Cyprus": "3h 55m" },
    "Oslo": { "Istanbul": "4h 10m", "Izmir": "4h 15m", "Cyprus": "4h 45m" },
    "Barcelona": { "Istanbul": "3h 45m", "Izmir": "3h 40m", "Cyprus": "4h 15m" },
    "Munich": { "Istanbul": "2h 35m", "Izmir": "2h 40m", "Cyprus": "3h 15m" },
    "Warsaw": { "Istanbul": "2h 20m", "Izmir": "2h 25m", "Cyprus": "3h 0m" },
    "Prague": { "Istanbul": "2h 30m", "Izmir": "2h 35m", "Cyprus": "3h 10m" },
    "Athens": { "Istanbul": "1h 20m", "Izmir": "1h 0m", "Cyprus": "1h 40m" },
    "New York": { "Istanbul": "9h 45m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Los Angeles": { "Istanbul": "13h 0m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Toronto": { "Istanbul": "10h 0m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Miami": { "Istanbul": "11h 0m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "São Paulo": { "Istanbul": "12h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Chicago": { "Istanbul": "10h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Montreal": { "Istanbul": "9h 20m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Vancouver": { "Istanbul": "12h 45m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Mexico City": { "Istanbul": "13h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Buenos Aires": { "Istanbul": "14h 0m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Bogotá": { "Istanbul": "12h 15m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Dubai": { "Istanbul": "4h 45m", "Izmir": "4h 50m", "Cyprus": "4h 15m" },
    "Doha": { "Istanbul": "4h 20m", "Izmir": "4h 30m", "Cyprus": "3h 50m" },
    "Riyadh": { "Istanbul": "4h 0m", "Izmir": "4h 15m", "Cyprus": "3h 40m" },
    "Tel Aviv": { "Istanbul": "2h 10m", "Izmir": "1h 45m", "Cyprus": "1h 0m" },
    "Kuwait City": { "Istanbul": "4h 10m", "Izmir": "4h 20m", "Cyprus": "3h 50m" },
    "Baghdad": { "Istanbul": "2h 30m", "Izmir": "2h 40m", "Cyprus": "2h 50m" },
    "Tehran": { "Istanbul": "3h 20m", "Izmir": "3h 30m", "Cyprus": "3h 40m" },
    "Moscow": { "Istanbul": "4h 45m", "Izmir": "4h 30m", "Cyprus": "5h 0m" },
    "Tokyo": { "Istanbul": "13h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Beijing": { "Istanbul": "8h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Shanghai": { "Istanbul": "11h 0m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Hong Kong": { "Istanbul": "11h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Singapore": { "Istanbul": "11h 45m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Bangkok": { "Istanbul": "9h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Mumbai": { "Istanbul": "6h 30m", "Izmir": "6h 45m", "Cyprus": "6h 0m" },
    "Delhi": { "Istanbul": "6h 0m", "Izmir": "6h 15m", "Cyprus": "5h 30m" },
    "Seoul": { "Istanbul": "10h 45m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Manila": { "Istanbul": "12h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Cairo": { "Istanbul": "2h 15m", "Izmir": "1h 45m", "Cyprus": "1h 20m" },
    "Johannesburg": { "Istanbul": "10h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Lagos": { "Istanbul": "7h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Casablanca": { "Istanbul": "5h 0m", "Izmir": "4h 45m", "Cyprus": "5h 30m" },
    "Nairobi": { "Istanbul": "6h 45m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Tunis": { "Istanbul": "3h 30m", "Izmir": "3h 15m", "Cyprus": "3h 50m" },
    "Sydney": { "Istanbul": "17h 0m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Melbourne": { "Istanbul": "18h 30m", "Izmir": "1-stop", "Cyprus": "1-stop" },
    "Auckland": { "Istanbul": "20h 0m", "Izmir": "1-stop", "Cyprus": "1-stop" },
  };

  const getFlightTime = (from: string, to: string) => {
    return flightTimes[from]?.[to] || "N/A";
  };

const FlightTrackerSection = () => {
  const [fromCity, setFromCity] = useState("London");
  const [toCity, setToCity] = useState("Istanbul");

  const fromCoords = cities[fromCity as keyof typeof cities];
  const toCoords = cities[toCity as keyof typeof cities];
  const flightTime = useMemo(() => getFlightTime(fromCity, toCity), [fromCity, toCity]);

  // Get origin cities (exclude Turkey/Cyprus)
  const originCities = Object.keys(cities).filter(
    city => !["Istanbul", "Izmir", "Cyprus"].includes(city)
  );

  // Destination cities
  const destinationCities = ["Istanbul", "Izmir", "Cyprus"];

  // Group cities by region for the dropdown
  const groupedOrigins = originCities.reduce((acc, city) => {
    const region = cities[city as keyof typeof cities].region;
    if (!acc[region]) acc[region] = [];
    acc[region].push(city);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section className="bg-gradient-to-b from-white to-brand-background/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl md:text-4xl font-bold text-brand-dark">
            Plan Your Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">
            See how close you are to world-class medical care. Select your city to calculate travel time.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* City Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* From City */}
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <label className="text-sm font-semibold text-brand-dark mb-2 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-brand-orange" />
                Flying From
              </label>
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="w-full mt-2 p-3 border-2 border-gray-200 rounded-lg focus:border-brand-teal focus:outline-none text-brand-dark font-medium"
              >
                {Object.entries(groupedOrigins).map(([region, citiesInRegion]) => (
                  <optgroup key={region} label={region}>
                    {citiesInRegion.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Flight Time Display */}
            <div className="bg-gradient-to-br from-brand-teal to-brand-teal/80 text-white rounded-xl p-4 shadow-lg flex items-center justify-center">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm opacity-90">Estimated Flight</p>
                <p className="text-3xl font-bold mt-1">{flightTime}</p>
              </div>
            </div>

            {/* To City */}
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <label className="text-sm font-semibold text-brand-dark mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-teal" />
                Destination
              </label>
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="w-full mt-2 p-3 border-2 border-gray-200 rounded-lg focus:border-brand-teal focus:outline-none text-brand-dark font-medium"
              >
                {destinationCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Map Visualization */}
          <div className="relative rounded-3xl shadow-2xl overflow-hidden">
            {/* Real Map Background */}
            <div className="relative h-[400px] md:h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/map_for_dest.webp)' }}>
              {/* Overlay for better visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${fromCity}-${toCity}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative h-full"
                >
                  {/* Starting Point */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute z-10"
                    style={{
                      left: `${fromCoords.x}%`,
                      top: `${fromCoords.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-brand-orange/20 rounded-full"
                      />
                      <div className="relative bg-brand-orange text-white p-1 rounded-full shadow-sm ring-1 ring-white">
                        <Navigation className="w-2 h-2" />
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 px-1.5 py-0.5 rounded text-[9px] font-medium text-brand-dark shadow-sm">
                        {fromCity}
                      </div>
                    </div>
                  </motion.div>

                  {/* Destination Point */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute z-10"
                    style={{
                      left: `${toCoords.x}%`,
                      top: `${toCoords.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="absolute inset-0 bg-brand-teal/20 rounded-full"
                      />
                      <div className="relative bg-brand-teal text-white p-1 rounded-full shadow-sm ring-1 ring-white">
                        <MapPin className="w-2 h-2" />
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 px-1.5 py-0.5 rounded text-[9px] font-medium text-brand-dark shadow-sm">
                        {toCity}
                      </div>
                    </div>
                  </motion.div>

                  {/* Flight Path Curve */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.path
                      d={`M ${fromCoords.x}% ${fromCoords.y}% Q ${(fromCoords.x + toCoords.x) / 2}% ${Math.min(fromCoords.y, toCoords.y) - 15}%, ${toCoords.x}% ${toCoords.y}%`}
                      fill="none"
                      stroke="#407e8eff"
                      strokeWidth="1.5"
                      strokeDasharray="4,2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>

                  {/* Animated Plane */}
                  <motion.div
                    className="absolute z-20"
                    initial={{
                      left: `${fromCoords.x}%`,
                      top: `${fromCoords.y}%`,
                      rotate: 0,
                    }}
                    animate={{
                      left: `${toCoords.x}%`,
                      top: `${toCoords.y}%`,
                      rotate: Math.atan2(toCoords.y - fromCoords.y, toCoords.x - fromCoords.x) * (180 / Math.PI) + 90,
                    }}
                    transition={{
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    style={{ transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="bg-white p-0.5 rounded-full shadow-sm">
                      <Plane className="w-2 h-2 text-brand-teal" />
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Flight Info Card */}
            <motion.div
              key={`${fromCity}-${toCity}-info`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="text-center">
                <p className="text-sm text-brand-text mb-1">From</p>
                <p className="text-xl font-bold text-brand-dark">{fromCity}</p>
                <p className="text-xs text-brand-text">{cities[fromCity as keyof typeof cities].region}</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Plane className="w-8 h-8 text-brand-teal mx-auto mb-2" />
                  <p className="text-sm text-brand-text">Direct flights available</p>
                  <p className="text-xs text-brand-teal font-semibold mt-1">We&apos;ll help you book</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-brand-text mb-1">To</p>
                <p className="text-xl font-bold text-brand-dark">{toCity}</p>
                <p className="text-xs text-brand-text">Turkey/Cyprus</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightTrackerSection;

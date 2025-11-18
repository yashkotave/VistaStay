const sampleListings= [
  {
    "title": "The Grand Hotel",
    "description": "Luxurious hotel in the heart of the city.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?q=80&w=807&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "grand-hotel.jpg"
    },
    "price": 250,
    "location": "New York City",
    "country": "USA",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [-74.006, 40.7128]
    },
    "category": "Trending",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Mountain Retreat",
    "description": "Cozy cabin in the mountains with breathtaking views.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1686782502386-f3f3114ed9b4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "mountain-retreat.jpg"
    },
    "price": 150,
    "location": "Aspen",
    "country": "USA",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [-106.8175, 39.1911]
    },
    "category": "Mountain",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Ocean View Villa",
    "description": "Elegant villa overlooking the ocean.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1676528715827-66dbd9c3520f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "filename": "ocean-view-villa.jpg"
    },
    "price": 300,
    "location": "Malibu",
    "country": "USA",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [-118.6682, 34.0259]
    },
    "category": "Rooms",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Castle on the Hill",
    "description": "A historical castle with modern amenities.",
    "image": {
      "url": "https://images.unsplash.com/photo-1621699097131-ba95d99bb5a0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FzdGxlJTIwb24lMjB0aGUlMjBIaWxsfGVufDB8fDB8fHww",
      "filename": "castle-hill.jpg"
    },
    "price": 400,
    "location": "Scotland",
    "country": "UK",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [-3.8269, 55.9445]
    },
    "category": "Castles",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Amazing Poolside Resort",
    "description": "A resort with an amazing pool and spa.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1675039871139-06cc792da9a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW1hemluZyUyMFBvb2xzaWRlJTIwUmVzb3J0fGVufDB8fDB8fHww",
      "filename": "poolside-resort.jpg"
    },
    "price": 200,
    "location": "Miami",
    "country": "USA",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [-80.1918, 25.7617]
    },
    "category": "Amazing Pools",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Charming Farm Stay",
    "description": "Experience the countryside in a charming farm.",
    "image": {
      "url": "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hhcm1pbmclMjBGYXJtJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D",
      "filename": "farm-stay.jpg"
    },
    "price": 100,
    "location": "Napa Valley",
    "country": "USA",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [-122.2869, 38.2975]
    },
    "category": "Farms",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Arctic Adventure Lodge",
    "description": "A unique lodge in the Arctic for adventurous souls.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1661939307419-8192c6d00f04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QSUyMHVuaXF1ZSUyMGxvZGdlJTIwaW4lMjB0aGUlMjBBcmN0aWMlMjBmb3IlMjBhZHZlbnR1cm91cyUyMHNvdWxzLnxlbnwwfHwwfHx8MA%3D%3D",
      "filename": "arctic-lodge.jpg"
    },
    "price": 500,
    "location": "Tromsø",
    "country": "Norway",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [18.956, 69.6496]
    },
    "category": "Arctic",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Luxury Boat Stay",
    "description": "Stay on a luxury boat with stunning sea views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1676386499857-bdcb7e5b8ce0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RheSUyMG9uJTIwYSUyMGx1eHVyeSUyMGJvYXR8ZW58MHx8MHx8fDA%3D",
      "filename": "boat-stay.jpg"
    },
    "price": 350,
    "location": "Santorini",
    "country": "Greece",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [25.4308, 36.3932]
    },
    "category": "Boats",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Serene Camping Grounds",
    "description": "Enjoy nature with our serene camping grounds.",
    "image": {
      "url": "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZyUyMGdyb3VuZHMufGVufDB8fDB8fHww",
      "filename": "camping-grounds.jpg"
    },
    "price": 75,
    "location": "Yosemite National Park",
    "country": "USA",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [-119.5383, 37.8651]
    },
    "category": "Campings",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Iconic City Hotel",
    "description": "A stylish hotel in an iconic city center.",
    "image": {
      "url": "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEElMjBzdHlsaXNoJTIwaG90ZWwlMjBpbiUyMGFuJTIwaWNvbmljJTIwY2l0eSUyMGNlbnRlci58ZW58MHx8MHx8fDA%3D",
      "filename": "iconic-city-hotel.jpg"
    },
    "price": 220,
    "location": "Paris",
    "country": "France",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [2.3522, 48.8566]
    },
    "category": "Iconic Cities",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
  {
    "title": "Desert Oasis Resort",
    "description": "A tranquil resort in the desert with spa services.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1678335449247-92f0ab1d2f02?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QSUyMHRyYW5xdWlsJTIwcmVzb3J0JTIwaW4lMjB0aGUlMjBkZXNlcnQlMjB3aXRoJTIwc3BhJTIwc2VydmljZXMufGVufDB8fDB8fHww",
      "filename": "desert-oasis.jpg"
    },
    "price": 275,
    "location": "Dubai",
    "country": "UAE",
    "reviews": [],
    "owner": "66f1a30b7ff32fd8433e50e0",
    "geometry": {
      "type": "Point",
      "coordinates": [55.2708, 25.2048]
    },
    "category": "Trending",
    "admin": "66f1a30b7ff32fd8433e50e0"
  },
]


  module.exports = { data: sampleListings };
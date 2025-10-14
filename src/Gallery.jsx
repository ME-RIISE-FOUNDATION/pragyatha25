
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "Opening Ceremony",
      category: "events",
      image: "/gallery/opening-ceremony.jpg",
      description: "The grand opening ceremony of Pragyatha '25"
    },
    {
      id: 2,
      title: "Coding Competition",
      category: "technical",
      image: "/gallery/coding-competition.jpg",
      description: "Students showcasing their programming skills"
    },
    {
      id: 3,
      title: "Robotics Exhibition",
      category: "robotics",
      image: "/gallery/robotics-exhibition.jpg",
      description: "Innovative robots built by talented students"
    },
    {
      id: 4,
      title: "Design Showcase",
      category: "creative",
      image: "/gallery/design-showcase.jpg",
      description: "Creative designs and artistic expressions"
    },
    {
      id: 5,
      title: "Workshop Session",
      category: "events",
      image: "/gallery/workshop-session.jpg",
      description: "Interactive workshops and learning sessions"
    },
    {
      id: 6,
      title: "Award Ceremony",
      category: "events",
      image: "/gallery/award-ceremony.jpg",
      description: "Celebrating the winners and participants"
    },
    {
      id: 7,
      title: "Hackathon Finals",
      category: "technical",
      image: "/gallery/hackathon-finals.jpg",
      description: "Final presentations of hackathon projects"
    },
    {
      id: 8,
      title: "Cultural Night",
      category: "events",
      image: "/gallery/cultural-night.jpg",
      description: "Cultural performances and entertainment"
    },
    {
      id: 9,
      title: "Guest Lectures",
      category: "events",
      image: "/gallery/guest-lectures.jpg",
      description: "Industry experts sharing their knowledge"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'technical', name: 'Technical' },
    { id: 'creative', name: 'Creative' },
    { id: 'robotics', name: 'Robotics' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div id="gallery" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4">
            GALLERY
          </h1>
          <p className="text-gray-300 text-lg md:text-xl tracking-wider uppercase">
            Moments from Pragyatha '25
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-cyan-400 text-black'
                  : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 opacity-50"></div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="text-white/80 text-sm">Image Coming Soon</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    item.category === 'technical' ? 'bg-blue-500/20 text-blue-300' :
                    item.category === 'creative' ? 'bg-purple-500/20 text-purple-300' :
                    item.category === 'robotics' ? 'bg-green-500/20 text-green-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-wider uppercase mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-wider uppercase mb-4">
              Share Your Moments
            </h2>
            <p className="text-gray-300 mb-6">
              Did you capture amazing moments during Pragyatha '25? Share them with us and be featured in our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 font-semibold tracking-wide rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase">
                Submit Photos
              </button>
              <button className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold tracking-wide rounded-lg hover:bg-white/20 transition-all duration-300 uppercase">
                View Full Gallery
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300 uppercase tracking-wider text-sm">Photos</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-300 uppercase tracking-wider text-sm">Events</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
            <div className="text-gray-300 uppercase tracking-wider text-sm">Days</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
            <div className="text-gray-300 uppercase tracking-wider text-sm">Memories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

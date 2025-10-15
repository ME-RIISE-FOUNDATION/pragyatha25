// import React, { useState, useEffect } from 'react';

// const Events = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   
//   const events = [
//     {
//       id: 1,
//       title: "AdVogue",
//       category: "event",
//       description: "A fusion of creativity and commerce! AdVogue challenges participants to craft original ad campaigns and business models for popular brands — blending storytelling, innovation, and strategy. Teams are judged on creativity, impact, and presentation.",
//       date: "Day 1",
//       time: "5:00 PM – 7:00 PM",
//       prize: "Trophy",
//       participants: "6+ branches ",
//       difficulty: "Inter-Branch Competition"
//     },
//     {
//       id: 2,
//       title: "UI/UX Hackathon",
//       category: "event",
//       description: `A blend of learning and creation, this event begins with interactive sessions for beginners who want to explore UI/UX design using Figma. Participants will learn the fundamentals of user-centered design, wireframing, and prototyping — guided by experts.\n\nFollowing the sessions, a 24-hour design sprint challenges participants to conceptualize, design, and prototype digital solutions for real-world problems, applying everything they’ve learned.`,
//       date: "Day 1-2",
//       time: "24 Hours",
//       participants: "40 teams",
//       difficulty: "Beginner – Advanced"
//     },
//     {
//       id: 3,
//       title: "BlockCord",
//       category: "technical",
//       description: "A beginner-focused workshop that introduces participants to the core concepts of blockchain technology. Explore how decentralization, digital ledgers, and secure data management are transforming industries.Through interactive sessions and guided examples, participants will gain a clear understanding of how blockchain works and its potential in real-world applications.",
//       date: "Day 2-3",
//       time: "9:00 AM - 5:00 PM",
//       participants: "60+",
//       difficulty: "Beginner – Intermediate"
//     },
//     {
//       id: 4,
//       title: "Entrorphosis",
//       category: "event",
//       description: "From problem to prototype! Entrorphosis guides participants through the complete innovation journey — starting with identifying a real-world problem, brainstorming creative solutions, and developing them into tangible prototypes. Learn how to plan, design, and iterate ideas while applying practical techniques to build impactful, feasible solutions.",
//       date: "Day 2-3",
//       time: "9:00 AM - 4:00 PM",
//       participants: "70+",
//       difficulty: "All Levels"
//     },
//     {
//       id: 5,
//       title: "Designing 101",
//       category: "creative",
//       description: "A hands-on creative workshop exploring the fundamentals of digital design. Learn layout, color theory, typography, and visual storytelling while crafting professional-grade designs using industry tools like Figma and Adobe Photoshop.",
//       date: "Day 2-3",
//       time: "9:00 AM - 4:00 PM",
//       participants: "60+",
//       difficulty: "Beginner – Intermediate"
//     },
//     {
//       id: 6,
//       title: "CloudLab",
//       category: "technical",
//       description: "An interactive and beginner-friendly workshop that introduces participants to the fundamentals of cloud computing. The session focuses on understanding the concepts of virtualization, scalability, and how cloud-based solutions are shaping the modern tech landscape.Engage, explore, and gain a solid foundation in the world of cloud technology through guided, hands-on learning.",
//       date: "Day 2-3",
//       time: "9:00 AM - 4:00 PM",
//       participants: "60+",
//       difficulty: "Beginner – Intermediate"
//     }
//   ];

//   const particleCount = 150;
//   const particles = Array.from({ length: particleCount }).map((_, i) => {
//     const horizontalDrift = Math.random() * 80 - 40;
//     const style = {
//       left: `${Math.random() * 100}%`,
//       width: `${Math.random() * 3 + 1}px`,
//       height: `${Math.random() * 3 + 1}px`,
//       animationDuration: `${Math.random() * 10 + 10}s`,
//       animationDelay: `${Math.random() * 10}s`,
//       '--horizontal-drift': `${horizontalDrift}vw`,
//     };
//     return <div key={i} className="particle" style={style}></div>;
//   });

//   const categories = [
//     { id: 'all', name: 'All Events' },
//     { id: 'technical', name: 'Technical' },
//     { id: 'creative', name: 'Creative' },
//     { id: 'event', name: 'Event' }
//   ];

//   const filteredEvents = selectedCategory === 'all'
//     ? events
//     : events.filter(event => event.category === selectedCategory);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [selectedCategory]);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? filteredEvents.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === filteredEvents.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   
//   const animationStyles = `
//     .particle {
//       position: absolute;
//       bottom: -10px;
//       background-color: #00ffff;
//       border-radius: 50%;
//       opacity: 0.8;
//       box-shadow: 0 0 10px #00ffff, 0 0 20px #00bfff, 0 0 30px #1e90ff;
//       animation-name: rise;
//       animation-timing-function: linear;
//       animation-iteration-count: infinite;
//     }

//     @keyframes rise {
//       0% {
//         transform: translate(0, 0);
//         opacity: 0.8;
//       }
//       100% {
//         transform: translate(var(--horizontal-drift), -105vh);
//         opacity: 0;
//       }
//     }
//     /* Utility to hide scrollbars */
//     .no-scrollbar::-webkit-scrollbar {
//         display: none;
//     }
//     .no-scrollbar {
//         -ms-overflow-style: none; /* IE and Edge */
//         scrollbar-width: none; /* Firefox */
//     }
//   `;

//   return (
//     <div id="events" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 text-gray-100 py-40 font-sans overflow-x-hidden">
//       <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
//       <div className="particles-container absolute inset-0 pointer-events-none z-0">
//         {particles}
//       </div>

//       <div className="container mx-auto px-6 relative z-10 flex flex-col h-full">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4 text-white"
//             style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 191, 255, 0.5)' }}>
//             EVENTS
//           </h1>
//           <p className="text-gray-400 text-lg md:text-xl tracking-wider uppercase">
//             Discover Amazing Competitions
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 border ${selectedCategory === category.id
//                   ? 'bg-blue-700 text-white border-blue-500 shadow-md shadow-blue-700/50'
//                   : 'bg-gray-800/40 border-gray-700 text-gray-300 hover:bg-blue-900/40 hover:text-white'
//                 }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Event Carousel */}
//         <div className="flex-grow flex items-center justify-center relative">
//           {filteredEvents.length > 0 ? (
//             <div className="relative w-full max-w-4xl flex items-center justify-center">
//               
//               {/* Navigation Arrows */}
//               <button onClick={goToPrevious} className="absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/50 rounded-full hover:bg-blue-800/70 transition-colors duration-300 left-0">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
//               </button>

//               <div className="relative h-[520px] w-full max-w-2xl mx-auto">
//                 {filteredEvents.map((event, eventIndex) => {
//                   let position = 'opacity-0 scale-90 pointer-events-none';
//                   if (eventIndex === currentIndex) {
//                     position = 'opacity-100 scale-100 z-10';
//                   } else if (eventIndex === (currentIndex - 1 + filteredEvents.length) % filteredEvents.length) {
//                     position = 'opacity-0 md:opacity-50 scale-90 transform md:-translate-x-3/4 z-0 pointer-events-none';
//                   } else if (eventIndex === (currentIndex + 1) % filteredEvents.length) {
//                     position = 'opacity-0 md:opacity-50 scale-90 transform md:translate-x-3/4 z-0 pointer-events-none';
//                   }

//                   return (
//                     <div key={event.id} className={`absolute inset-0 transition-all duration-500 ease-in-out ${position}`}>
//                       <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg shadow-lg shadow-black/30 w-full h-full flex flex-col p-6 md:p-8">
//                         <div className="flex justify-between items-start mb-4">
//                           <h3 className="text-2xl font-semibold tracking-wider uppercase text-cyan-400">{event.title}</h3>
//                           <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${event.category === 'technical' ? 'bg-blue-800/30 text-blue-200' :
//                               event.category === 'creative' ? 'bg-cyan-800/30 text-cyan-200' :
//                               'bg-gray-700/30 text-gray-300'
//                           }`}>
//                             {event.category}
//                           </span>
//                         </div>
//                         <p className="text-gray-300 text-sm mb-6 leading-relaxed whitespace-pre-line flex-grow overflow-y-auto pr-2 no-scrollbar">
//                           {event.description}
//                         </p>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t border-blue-900/50 pt-4">
//                           <div><span className="font-semibold text-gray-400 block">Date:</span><span className="text-white">{event.date}</span></div>
//                           <div><span className="font-semibold text-gray-400 block">Time:</span><span className="text-white">{event.time}</span></div>
//                           <div><span className="font-semibold text-gray-400 block">Participants:</span><span className="text-white">{event.participants}</span></div>
//                           <div><span className="font-semibold text-gray-400 block">Level:</span><span className="text-white">{event.difficulty}</span></div>
//                         </div>
//                          <button className="w-full mt-6 py-3 px-8 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase text-sm">
//                             Register Now
//                   _</button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//               
//               <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/50 rounded-full hover:bg-blue-800/70 transition-colors duration-300 right-0">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full">
//               <p className="text-gray-500">No events in this category.</p>
//             </div>
//           )}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg p-8 max-w-2xl mx-auto shadow-lg shadow-black/30">
//             <h2 className="text-2xl font-semibold tracking-wider uppercase mb-4 text-white">
//               Ready to Participate?
//             </h2>
//             <p className="text-gray-300 mb-6">
//               Register for multiple events and showcase.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//       _     <button className="px-8 py-3 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase">
//                 View All Events
//               </button>
//               <button className="px-8 py-3 bg-gray-800/40 border border-gray-700 text-gray-300 font-semibold tracking-wide rounded-lg hover:bg-gray-700/60 hover:text-white transition-all duration-300 uppercase">
//                 Download Schedule
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;
// import React, { useState, useEffect } from 'react';

// const Events = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   
//   const events = [
//     {
//       id: 1,
//       title: "AdVogue",
//       category: "event",
//       description: "A fusion of creativity and commerce! AdVogue challenges participants to craft original ad campaigns and business models for popular brands — blending storytelling, innovation, and strategy. Teams are judged on creativity, impact, and presentation.",
//       date: "Day 1",
//       time: "5:00 PM – 7:00 PM",
//       prize: "Trophy",
//       participants: "6+ branches ",
//       difficulty: "Inter-Branch Competition"
//     },
//     {
//       id: 2,
//       title: "UI/UX Hackathon",
//       category: "event",
//       description: `A blend of learning and creation, this event begins with interactive sessions for beginners who want to explore UI/UX design using Figma. Participants will learn the fundamentals of user-centered design, wireframing, and prototyping — guided by experts.\n\nFollowing the sessions, a 24-hour design sprint challenges participants to conceptualize, design, and prototype digital solutions for real-world problems, applying everything they’ve learned.`,
//       date: "Day 1-2",
//       time: "24 Hours",
//       participants: "40 teams",
//       difficulty: "Beginner – Advanced"
//     },
//     {
//       id: 3,
//       title: "BlockCord",
//       category: "technical",
//       description: "A beginner-focused workshop that introduces participants to the core concepts of blockchain technology. Explore how decentralization, digital ledgers, and secure data management are transforming industries.Through interactive sessions and guided examples, participants will gain a clear understanding of how blockchain works and its potential in real-world applications.",
//       date: "Day 2-3",
//       time: "9:00 AM - 5:00 PM",
//       participants: "60+",
//       difficulty: "Beginner – Intermediate"
//     },
//     {
//       id: 4,
//       title: "Entrorphosis",
//       category: "event",
//       description: "From problem to prototype! Entrorphosis guides participants through the complete innovation journey — starting with identifying a real-world problem, brainstorming creative solutions, and developing them into tangible prototypes. Learn how to plan, design, and iterate ideas while applying practical techniques to build impactful, feasible solutions.",
//       date: "Day 2-3",
//       time: "9:00 AM - 4:00 PM",
//       participants: "70+",
//       difficulty: "All Levels"
//     },
//     {
//       id: 5,
//       title: "Designing 101",
//       category: "creative",
//       description: "A hands-on creative workshop exploring the fundamentals of digital design. Learn layout, color theory, typography, and visual storytelling while crafting professional-grade designs using industry tools like Figma and Adobe Photoshop.",
//       date: "Day 2-3",
//       time: "9:00 AM - 4:00 PM",
//       participants: "60+",
//       difficulty: "Beginner – Intermediate"
//     },
//     {
//       id: 6,
//       title: "CloudLab",
//       category: "technical",
//       description: "An interactive and beginner-friendly workshop that introduces participants to the fundamentals of cloud computing. The session focuses on understanding the concepts of virtualization, scalability, and how cloud-based solutions are shaping the modern tech landscape.Engage, explore, and gain a solid foundation in the world of cloud technology through guided, hands-on learning.",
//       date: "Day 2-3",
//       time: "9:00 AM - 4:00 PM",
//       participants: "60+",
//       difficulty: "Beginner – Intermediate"
//     }
//   ];

//   const particleCount = 150;
//   const particles = Array.from({ length: particleCount }).map((_, i) => {
//     const horizontalDrift = Math.random() * 80 - 40;
//     const style = {
//       left: `${Math.random() * 100}%`,
//       width: `${Math.random() * 3 + 1}px`,
//       height: `${Math.random() * 3 + 1}px`,
//       animationDuration: `${Math.random() * 10 + 10}s`,
//       animationDelay: `${Math.random() * 10}s`,
//       '--horizontal-drift': `${horizontalDrift}vw`,
//     };
//     return <div key={i} className="particle" style={style}></div>;
//   });

//   const categories = [
//     { id: 'all', name: 'All Events' },
//     { id: 'technical', name: 'Technical' },
//     { id: 'creative', name: 'Creative' },
//     { id: 'event', name: 'Event' }
//   ];

//   const filteredEvents = selectedCategory === 'all'
//     ? events
//     : events.filter(event => event.category === selectedCategory);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [selectedCategory]);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? filteredEvents.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === filteredEvents.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   // Function for automatic sliding
//   useEffect(() => {
//     if (filteredEvents.length > 1) {
//       const slideInterval = setInterval(() => {
//         goToNext();
//       }, 5000); // Change event every 5 seconds

//       return () => clearInterval(slideInterval); // Cleanup interval
//     }
//   }, [currentIndex, filteredEvents.length]); // Reruns when index or filter changes
//   
//   const animationStyles = `
//     .particle {
//       position: absolute;
//       bottom: -10px;
//       background-color: #00ffff;
//       border-radius: 50%;
//       opacity: 0.8;
//       box-shadow: 0 0 10px #00ffff, 0 0 20px #00bfff, 0 0 30px #1e90ff;
//       animation-name: rise;
//       animation-timing-function: linear;
//       animation-iteration-count: infinite;
//     }

//     @keyframes rise {
//       0% {
//         transform: translate(0, 0);
//         opacity: 0.8;
//       }
//       100% {
//         transform: translate(var(--horizontal-drift), -105vh);
//         opacity: 0;
//       }
//     }
//     /* Utility to hide scrollbars */
//     .no-scrollbar::-webkit-scrollbar {
//         display: none;
//     }
//     .no-scrollbar {
//         -ms-overflow-style: none; /* IE and Edge */
//         scrollbar-width: none; /* Firefox */
//     }
//   `;

//   return (
//     <div id="events" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 text-gray-100 py-40 font-sans overflow-x-hidden">
//       <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
//       <div className="particles-container absolute inset-0 pointer-events-none z-0">
//         {particles}
//       </div>

//       <div className="container mx-auto px-6 relative z-10 flex flex-col h-full">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4 text-white"
//             style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 191, 255, 0.5)' }}>
//             EVENTS
//           </h1>
//           <p className="text-gray-400 text-lg md:text-xl tracking-wider uppercase">
//             Discover Amazing Competitions
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 border ${selectedCategory === category.id
//                   ? 'bg-blue-700 text-white border-blue-500 shadow-md shadow-blue-700/50'
//                   : 'bg-gray-800/40 border-gray-700 text-gray-300 hover:bg-blue-900/40 hover:text-white'
//                 }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Event Carousel */}
//         <div className="flex-grow flex items-center justify-center relative">
//           {filteredEvents.length > 0 ? (
//             <div className="relative w-full max-w-4xl flex items-center justify-center">
//               
//               {/* Navigation Arrows */}
//               <button onClick={goToPrevious} className="absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/50 rounded-full hover:bg-blue-800/70 transition-colors duration-300 left-0">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
//               </button>

//               <div className="relative h-[520px] w-full max-w-2xl mx-auto">
//                 {filteredEvents.map((event, eventIndex) => {
//                   let position = 'opacity-0 scale-90 pointer-events-none';
//                   if (eventIndex === currentIndex) {
//                     position = 'opacity-100 scale-100 z-10';
//                   } else if (eventIndex === (currentIndex - 1 + filteredEvents.length) % filteredEvents.length) {
//                     position = 'opacity-0 md:opacity-50 scale-90 transform md:-translate-x-3/4 z-0 pointer-events-none';
//                   } else if (eventIndex === (currentIndex + 1) % filteredEvents.length) {
//                     position = 'opacity-0 md:opacity-50 scale-90 transform md:translate-x-3/4 z-0 pointer-events-none';
//                   }

//                   return (
//                     <div key={event.id} className={`absolute inset-0 transition-all duration-500 ease-in-out ${position}`}>
//                       <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg shadow-lg shadow-black/30 w-full h-full flex flex-col p-6 md:p-8">
//                         <div className="flex justify-between items-start mb-4">
//                           <h3 className="text-2xl font-semibold tracking-wider uppercase text-cyan-400">{event.title}</h3>
//                           <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${event.category === 'technical' ? 'bg-blue-800/30 text-blue-200' :
//                               event.category === 'creative' ? 'bg-cyan-800/30 text-cyan-200' :
//                               'bg-gray-700/30 text-gray-300'
//                           }`}>
//                             {event.category}
//                           </span>
//                         </div>
//                         <p className="text-gray-300 text-sm mb-6 leading-relaxed whitespace-pre-line flex-grow overflow-y-auto pr-2 no-scrollbar">
//                           {event.description}
//                         </p>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t border-blue-900/50 pt-4">
//                           <div><span className="font-semibold text-gray-400 block">Date:</span><span className="text-white">{event.date}</span></div>
//                           <div><span className="font-semibold text-gray-400 block">Time:</span><span className="text-white">{event.time}</span></div>
//                           <div><span className="font-semibold text-gray-400 block">Participants:</span><span className="text-white">{event.participants}</span></div>
//                           <div><span className="font-semibold text-gray-400 block">Level:</span><span className="text-white">{event.difficulty}</span></div>
//                         </div>
//                          <button className="w-full mt-6 py-3 px-8 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase text-sm">
//                             Register Now
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//               
//               <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/50 rounded-full hover:bg-blue-800/70 transition-colors duration-300 right-0">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-full">
//               <p className="text-gray-500">No events in this category.</p>
//             </div>
//           )}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg p-8 max-w-2xl mx-auto shadow-lg shadow-black/30">
//             <h2 className="text-2xl font-semibold tracking-wider uppercase mb-4 text-white">
//               Ready to Participate?
//             </h2>
//             <p className="text-gray-300 mb-6">
//               Register for multiple events and showcase.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-3 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase">
//                 View All Events
//             _</button>
//               <button className="px-8 py-3 bg-gray-800/40 border border-gray-700 text-gray-300 font-semibold tracking-wide rounded-lg hover:bg-gray-700/60 hover:text-white transition-all duration-300 uppercase">
//                 Download Schedule
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;

import React, { useState, useEffect } from 'react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const events = [
    {
      id: 1,
      title: "AdVogue",
      category: "event",
      description: "A fusion of creativity and commerce! AdVogue challenges participants to craft original ad campaigns and business models for popular brands — blending storytelling, innovation, and strategy. Teams are judged on creativity, impact, and presentation.",
      date: "Day 1",
      time: "5:00 PM – 7:00 PM",
      prize: "Trophy",
      participants: "6+ branches ",
      difficulty: "Inter-Branch Competition",
      sigil: "public/ad.png"
    },
    {
      id: 2,
      title: "UI/UX Hackathon",
      category: "event",
      description: `A blend of learning and creation, this event begins with interactive sessions for beginners who want to explore UI/UX design using Figma. Participants will learn the fundamentals of user-centered design, wireframing, and prototyping — guided by experts.\n\nFollowing the sessions, a 24-hour design sprint challenges participants to conceptualize, design, and prototype digital solutions for real-world problems, applying everything they’ve learned.`,
      date: "Day 1-2",
      time: "24 Hours",
      participants: "40 teams",
      difficulty: "Beginner – Advanced",
      sigil: "public/t.png"
    },
    {
      id: 3,
      title: "BlockCord",
      category: "technical",
      description: "A beginner-focused workshop that introduces participants to the core concepts of blockchain technology. Explore how decentralization, digital ledgers, and secure data management are transforming industries.Through interactive sessions and guided examples, participants will gain a clear understanding of how blockchain works and its potential in real-world applications.",
      date: "Day 2-3",
      time: "9:00 AM - 5:00 PM",
      participants: "60+",
      difficulty: "Beginner – Intermediate",
      sigil: "public/block.png"
    },
    {
      id: 4,
      title: "Entrorphosis",
      category: "event",
      description: "From problem to prototype! Entrorphosis guides participants through the complete innovation journey — starting with identifying a real-world problem, brainstorming creative solutions, and developing them into tangible prototypes. Learn how to plan, design, and iterate ideas while applying practical techniques to build impactful, feasible solutions.",
      date: "Day 2-3",
      time: "9:00 AM - 4:00 PM",
      participants: "70+",
      difficulty: "All Levels",
      sigil: "public/entro.png"
    },
    {
      id: 5,
      title: "Designing 101",
      category: "creative",
      description: "A hands-on creative workshop exploring the fundamentals of digital design. Learn layout, color theory, typography, and visual storytelling while crafting professional-grade designs using industry tools like Figma and Adobe Photoshop.",
      date: "Day 2-3",
      time: "9:00 AM - 4:00 PM",
      participants: "60+",
      difficulty: "Beginner – Intermediate",
      sigil: "public/101.png"
    },
    {
      id: 6,
      title: "CloudLab",
      category: "technical",
      description: "An interactive and beginner-friendly workshop that introduces participants to the fundamentals of cloud computing. The session focuses on understanding the concepts of virtualization, scalability, and how cloud-based solutions are shaping the modern tech landscape.Engage, explore, and gain a solid foundation in the world of cloud technology through guided, hands-on learning.",
      date: "Day 2-3",
      time: "9:00 AM - 4:00 PM",
      participants: "60+",
      difficulty: "Beginner – Intermediate",
      sigil: "https://placehold.co/200x200/0f172a/1e90ff?text=Sigil+6"
    }
  ];

  const particleCount = 150;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const horizontalDrift = Math.random() * 80 - 40;
    const style = {
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 10}s`,
      '--horizontal-drift': `${horizontalDrift}vw`,
    };
    return <div key={i} className="particle" style={style}></div>;
  });

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'technical', name: 'Technical' },
    { id: 'creative', name: 'Creative' },
    { id: 'event', name: 'Event' }
  ];

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? filteredEvents.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === filteredEvents.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function for automatic sliding
  useEffect(() => {
    if (filteredEvents.length > 1) {
      const slideInterval = setInterval(() => {
        goToNext();
      }, 5000); // Change event every 5 seconds

      return () => clearInterval(slideInterval); // Cleanup interval
    }
  }, [currentIndex, filteredEvents.length, goToNext]); // Reruns when index or filter changes
  
  const animationStyles = `
    .particle {
      position: absolute;
      bottom: -10px;
      background-color: #00ffff;
      border-radius: 50%;
      opacity: 0.8;
      box-shadow: 0 0 10px #00ffff, 0 0 20px #00bfff, 0 0 30px #1e90ff;
      animation-name: rise;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes rise {
      0% {
        transform: translate(0, 0);
        opacity: 0.8;
      }
      100% {
        transform: translate(var(--horizontal-drift), -105vh);
        opacity: 0;
      }
    }
    /* Utility to hide scrollbars */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
  `;

  return (
    <div id="events" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 text-gray-100 py-40 font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <div className="particles-container absolute inset-0 pointer-events-none z-0">
        {particles}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col h-full">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4 text-white"
            style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 191, 255, 0.5)' }}>
            EVENTS
          </h1>
          <p className="text-gray-400 text-lg md:text-xl tracking-wider uppercase">
            Discover Amazing Competitions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 border ${selectedCategory === category.id
                  ? 'bg-blue-700 text-white border-blue-500 shadow-md shadow-blue-700/50'
                  : 'bg-gray-800/40 border-gray-700 text-gray-300 hover:bg-blue-900/40 hover:text-white'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Event Carousel */}
        <div className="flex-grow flex items-center justify-center relative">
          {filteredEvents.length > 0 ? (
            <div className="relative w-full max-w-4xl flex items-center justify-center">
              
              {/* Navigation Arrows */}
              <button onClick={goToPrevious} className="absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/50 rounded-full hover:bg-blue-800/70 transition-colors duration-300 left-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>

              <div className="relative h-[520px] w-full max-w-2xl mx-auto">
                {filteredEvents.map((event, eventIndex) => {
                  let position = 'opacity-0 scale-90 pointer-events-none';
                  if (eventIndex === currentIndex) {
                    position = 'opacity-100 scale-100 z-10';
                  } else if (eventIndex === (currentIndex - 1 + filteredEvents.length) % filteredEvents.length) {
                    position = 'opacity-0 md:opacity-50 scale-90 transform md:-translate-x-3/4 z-0 pointer-events-none';
                  } else if (eventIndex === (currentIndex + 1) % filteredEvents.length) {
                    position = 'opacity-0 md:opacity-50 scale-90 transform md:translate-x-3/4 z-0 pointer-events-none';
                  }

                  return (
                    <div key={event.id} className={`absolute inset-0 transition-all duration-500 ease-in-out ${position}`}>
                        <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg shadow-lg shadow-black/30 w-full h-full flex flex-col p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <img src={event.sigil} alt={`${event.title} Sigil`} className="w-48 h-48 object-contain opacity-10" />
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-semibold tracking-wider uppercase text-cyan-400">{event.title}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${event.category === 'technical' ? 'bg-blue-800/30 text-blue-200' :
                                        event.category === 'creative' ? 'bg-cyan-800/30 text-cyan-200' :
                                        'bg-gray-700/30 text-gray-300'
                                    }`}>
                                        {event.category}
                                    </span>
                                </div>
                                <p className="text-gray-300 text-sm mb-6 leading-relaxed whitespace-pre-line flex-grow overflow-y-auto pr-2 no-scrollbar">
                                    {event.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t border-blue-900/50 pt-4">
                                    <div><span className="font-semibold text-gray-400 block">Date:</span><span className="text-white">{event.date}</span></div>
                                    <div><span className="font-semibold text-gray-400 block">Time:</span><span className="text-white">{event.time}</span></div>
                                    <div><span className="font-semibold text-gray-400 block">Participants:</span><span className="text-white">{event.participants}</span></div>
                                    <div><span className="font-semibold text-gray-400 block">Level:</span><span className="text-white">{event.difficulty}</span></div>
                                </div>
                                <button className="w-full mt-6 py-3 px-8 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase text-sm">
                                    Register Now
                                </button>
                            </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/50 rounded-full hover:bg-blue-800/70 transition-colors duration-300 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">No events in this category.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg p-8 max-w-2xl mx-auto shadow-lg shadow-black/30">
            <h2 className="text-2xl font-semibold tracking-wider uppercase mb-4 text-white">
              Ready to Participate?
            </h2>
            <p className="text-gray-300 mb-6">
              Register for multiple events and showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase">
                View All Events
              </button>
              <button className="px-8 py-3 bg-gray-800/40 border border-gray-700 text-gray-300 font-semibold tracking-wide rounded-lg hover:bg-gray-700/60 hover:text-white transition-all duration-300 uppercase">
                Download Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;


// // import React, { useState } from 'react';

// // const Events = () => {
// //   const [selectedCategory, setSelectedCategory] = useState('all');

// //   const events = [
// //     {
// //       id: 1,
// //       title: "Code Wars",
// //       category: "technical",
// //       description: "Intense coding competition with algorithmic challenges",
// //       date: "Day 1",
// //       time: "10:00 AM - 2:00 PM",
// //       prize: "₹50,000",
// //       participants: "100+",
// //       difficulty: "Advanced"
// //     },
// //     {
// //       id: 2,
// //       title: "Hackathon",
// //       category: "technical",
// //       description: "48-hour hackathon to build innovative solutions",
// //       date: "Day 1-2",
// //       time: "24 Hours",
// //       prize: "₹1,00,000",
// //       participants: "50+",
// //       difficulty: "Expert"
// //     },
// //     {
// //       id: 3,
// //       title: "Design Challenge",
// //       category: "creative",
// //       description: "UI/UX design competition for mobile applications",
// //       date: "Day 2",
// //       time: "9:00 AM - 5:00 PM",
// //       prize: "₹25,000",
// //       participants: "75+",
// //       difficulty: "Intermediate"
// //     },
// //     {
// //       id: 4,
// //       title: "Robo Race",
// //       category: "robotics",
// //       description: "Autonomous robot racing competition",
// //       date: "Day 2",
// //       time: "2:00 PM - 6:00 PM",
// //       prize: "₹40,000",
// //       participants: "30+",
// //       difficulty: "Advanced"
// //     },
// //     {
// //       id: 5,
// //       title: "Tech Quiz",
// //       category: "technical",
// //       description: "General knowledge quiz on technology and science",
// //       date: "Day 3",
// //       time: "11:00 AM - 1:00 PM",
// //       prize: "₹15,000",
// //       participants: "200+",
// //       difficulty: "Beginner"
// //     },
// //     {
// //       id: 6,
// //       title: "Photography Contest",
// //       category: "creative",
// //       description: "Theme-based photography competition",
// //       date: "Day 1-3",
// //       time: "All Day",
// //       prize: "₹20,000",
// //       participants: "150+",
// //       difficulty: "All Levels"
// //     }
// //   ];

// //   const categories = [
// //     { id: 'all', name: 'All Events' },
// //     { id: 'technical', name: 'Technical' },
// //     { id: 'creative', name: 'Creative' },
// //     { id: 'robotics', name: 'Robotics' }
// //   ];

// //   const filteredEvents = selectedCategory === 'all'
// //     ? events
// //     : events.filter(event => event.category === selectedCategory);

// //   return (
// //     <div id="events" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
// //       <div className="container mx-auto px-6">
        
// //         {/* Header */}
// //         <div className="text-center mb-16">
// //           <h1 className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4">
// //             EVENTS
// //           </h1>
// //           <p className="text-gray-300 text-lg md:text-xl tracking-wider uppercase">
// //             Discover Amazing Competitions
// //           </p>
// //         </div>

// //         {/* Category Filter */}
// //         <div className="flex flex-wrap justify-center gap-4 mb-12">
// //           {categories.map((category) => (
// //             <button
// //               key={category.id}
// //               onClick={() => setSelectedCategory(category.id)}
// //               className={`px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 ${
// //                 selectedCategory === category.id
// //                   ? 'bg-cyan-400 text-black'
// //                   : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
// //               }`}
// //             >
// //               {category.name}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Events Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
// //           {filteredEvents.map((event) => (
// //             <div
// //               key={event.id}
// //               className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
// //             >
// //               {/* Event Header */}
// //               <div className="flex justify-between items-start mb-4">
// //                 <h3 className="text-xl font-semibold tracking-wider uppercase group-hover:text-cyan-400 transition-colors duration-300">
// //                   {event.title}
// //                 </h3>
// //                 <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
// //                   event.category === 'technical' ? 'bg-blue-500/20 text-blue-300' :
// //                   event.category === 'creative' ? 'bg-purple-500/20 text-purple-300' :
// //                   event.category === 'robotics' ? 'bg-green-500/20 text-green-300' :
// //                   'bg-gray-500/20 text-gray-300'
// //                 }`}>
// //                   {event.category}
// //                 </span>
// //               </div>

// //               {/* Event Description */}
// //               <p className="text-gray-300 text-sm mb-4 leading-relaxed">
// //                 {event.description}
// //               </p>

// //               {/* Event Details */}
// //               <div className="space-y-2 mb-6">
// //                 <div className="flex justify-between text-sm">
// //                   <span className="text-gray-400">Date:</span>
// //                   <span className="text-white">{event.date}</span>
// //                 </div>
// //                 <div className="flex justify-between text-sm">
// //                   <span className="text-gray-400">Time:</span>
// //                   <span className="text-white">{event.time}</span>
// //                 </div>
// //                 <div className="flex justify-between text-sm">
// //                   <span className="text-gray-400">Prize:</span>
// //                   <span className="text-cyan-400 font-semibold">{event.prize}</span>
// //                 </div>
// //                 <div className="flex justify-between text-sm">
// //                   <span className="text-gray-400">Participants:</span>
// //                   <span className="text-white">{event.participants}</span>
// //                 </div>
// //                 <div className="flex justify-between text-sm">
// //                   <span className="text-gray-400">Level:</span>
// //                   <span className="text-white">{event.difficulty}</span>
// //                 </div>
// //               </div>

// //               {/* Register Button */}
// //               <button className="w-full py-2 px-4 bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 font-semibold tracking-wide rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase text-sm">
// //                 Register Now
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Call to Action */}
// //         <div className="text-center mt-16">
// //           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
// //             <h2 className="text-2xl font-semibold tracking-wider uppercase mb-4">
// //               Ready to Participate?
// //             </h2>
// //             <p className="text-gray-300 mb-6">
// //               Register for multiple events and showcase your skills across different domains.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <button className="px-8 py-3 bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 font-semibold tracking-wide rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase">
// //                 View All Events
// //               </button>
// //               <button className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold tracking-wide rounded-lg hover:bg-white/20 transition-all duration-300 uppercase">
// //                 Download Schedule
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Events;

// import React, { useState } from 'react';

// const Events = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   // We are now generating the particles directly in the component for better reliability.
//   const particleCount = 150; // Increased count for fuller effect
//   const particles = Array.from({ length: particleCount }).map((_, i) => {
//     const horizontalDrift = Math.random() * 80 - 10; // Random drift from -10vw to +10vw
//     const style = {
//       left: `${Math.random() * 100}%`,
//       width: `${Math.random() * 3 + 1}px`,
//       height: `${Math.random() * 3 + 1}px`,
//       animationDuration: `${Math.random() * 10 + 10}s`, // Very slow rise (15s to 30s)
//       animationDelay: `${Math.random() * 10}s`, // Staggered start times (0s to 30s)
//       '--horizontal-drift': `${horizontalDrift}vw`, // CSS custom property for drift
//     };
//     return <div key={i} className="particle" style={style}></div>;
//   });

//   const events = [
//     {
//       id: 1,
//       title: "AdVogue",
//       category: "event",
//       description: "A fusion of creativity and commerce! AdVogue challenges participants to craft original ad campaigns and business models for popular brands — blending storytelling, innovation, and strategy. Teams are judged on creativity, impact, and presentation.",
//       date: "Day 1",
//       time: "5:00 PM – 7:00 PM",
//       prize: "Trophy",
//       participants: "6+ branches ",
//       difficulty: "Inter-Branch Competition"
//     },
//     {
//       id: 2,
//       title: "UI/UX Hackathon",
//       category: "event",
// description: `A blend of learning and creation, this event begins with interactive sessions for beginners who want to explore UI/UX design using Figma. Participants will learn the fundamentals of user-centered design, wireframing, and prototyping — guided by experts.

// Following the sessions, a 24-hour design sprint challenges participants to conceptualize, design, and prototype digital solutions for real-world problems, applying everything they’ve learned.`,

//       date: "Day 1-2",
//       time: "24 Hours",
//       participants: "40 teams",
//       difficulty: "Beginner – Advanced"
//     },
//     {
//       id: 3,
//       title: " BlockCord",
//       category: "technical",
//       description: "A beginner-focused workshop that introduces participants to the core concepts of blockchain technology. Explore how decentralization, digital ledgers, and secure data management are transforming industries.Through interactive sessions and guided examples, participants will gain a clear understanding of how blockchain works and its potential in real-world applications.",
//       date: "Day 2-3",
//       time: "9:00 AM - 5:00 PM",
//       participants: "60+",
//       difficulty: "Beginner – Intermediate"
//     },
//     {
//       id: 4,
//       title: "Entrorphosis",
//       category: "event",
//       description: "From problem to prototype! Entrorphosis guides participants through the complete innovation journey — starting with identifying a real-world problem, brainstorming creative solutions, and developing them into tangible prototypes. Learn how to plan, design, and iterate ideas while applying practical techniques to build impactful, feasible solutions.",
//       date: "Day 2-3",
//       time: "9:00 AM - 4:00 PM",
//       participants: "70+",
//       difficulty: " All Levels"
//     },
//     {
//       id: 5,
//       title: "Designing 101",
//       category: "creative",
//       description: "A hands-on creative workshop exploring the fundamentals of digital design. Learn layout, color theory, typography, and visual storytelling while crafting professional-grade designs using industry tools like Figma and Adobe Photoshop.",
//       date: "Day 2-3",
//       time: "9:00 AM - 4:00 PM",
//       participants: "60+",
//       difficulty: "Beginner – Intermediate"
//     },
//     {
//       id: 6,
//       title: "CloudLab",
//       category: "technical",
//       description: "An interactive and beginner-friendly workshop that introduces participants to the fundamentals of cloud computing. The session focuses on understanding the concepts of virtualization, scalability, and how cloud-based solutions are shaping the modern tech landscape.Engage, explore, and gain a solid foundation in the world of cloud technology through guided, hands-on learning.",
//       date: "Day 2-3",
//       time: "9:00 AM - 4:00 PM",
//       participants: "60+",
//       difficulty: "Beginner – Intermediate"
//     }
//   ];

//   const categories = [
//     { id: 'all', name: 'All Events' },
//     { id: 'technical', name: 'Technical' },
//     { id: 'creative', name: 'Creative' },
//     { id: 'event', name: 'Event' }
//   ];

//   const filteredEvents = selectedCategory === 'all'
//     ? events
//     : events.filter(event => event.category === selectedCategory);

//   return (
//     <div id="events" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 text-gray-100 py-20 overflow-hidden font-sans">
//       <div className="particles-container absolute inset-0 pointer-events-none z-0">
//         {particles}
//       </div>

//       <style jsx>{`
//         .particle {
//           position: absolute;
//           bottom: -10px; /* Start from below the screen */
//           background-color: #00ffff;
//           border-radius: 50%;
//           opacity: 0.8;
//           box-shadow: 0 0 10px #00ffff, 0 0 20px #00bfff, 0 0 30px #1e90ff;
//           animation-name: rise;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }

//         @keyframes rise {
//           0% {
//             transform: translate(0, 0);
//             opacity: 0.8;
//           }
//           100% {
//             transform: translate(var(--horizontal-drift), -105vh); /* Move up and sideways */
//             opacity: 0;
//           }
//         }
//       `}</style>

//       <div className="container mx-auto px-6 relative z-10">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4 text-white"
//             style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 191, 255, 0.5)' }}>
//             EVENTS
//           </h1>
//           <p className="text-gray-400 text-lg md:text-xl tracking-wider uppercase">
//             Discover Amazing Competitions
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-6 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 border ${selectedCategory === category.id
//                   ? 'bg-blue-700 text-white border-blue-500 shadow-md shadow-blue-700/50'
//                   : 'bg-gray-800/40 border-gray-700 text-gray-300 hover:bg-blue-900/40 hover:text-white'
//                 }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Events Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {filteredEvents.map((event) => (
//             <div
//               key={event.id}
//               className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg p-6 hover:bg-gray-800/70 hover:border-blue-700 transition-all duration-300 group shadow-lg shadow-black/30"
//             >
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-xl font-semibold tracking-wider uppercase group-hover:text-cyan-400 transition-colors duration-300 text-white">
//                   {event.title}
//                 </h3>
//                 <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${event.category === 'technical' ? 'bg-blue-800/30 text-blue-200' :
//                     event.category === 'creative' ? 'bg-cyan-800/30 text-cyan-200' :
//                       event.category === 'robotics' ? 'bg-teal-800/30 text-teal-200' :
//                         'bg-gray-700/30 text-gray-300'
//                   }`}>
//                   {event.category}
//                 </span>
//               </div>
//               <p className="text-gray-300 text-sm mb-4 leading-relaxed">
//                 {event.description}
//               </p>
//               <div className="space-y-2 mb-6 border-t border-gray-700/50 pt-4">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-400">Date:</span>
//                   <span className="text-white">{event.date}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-400">Time:</span>
//                   <span className="text-white">{event.time}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-400">Participants:</span>
//                   <span className="text-white">{event.participants}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-400">Level:</span>
//                   <span className="text-white">{event.difficulty}</span>
//                 </div>
//               </div>
//               <button className="w-full py-2 px-4 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase text-sm">
//                 Register Now
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg p-8 max-w-2xl mx-auto shadow-lg shadow-black/30">
//             <h2 className="text-2xl font-semibold tracking-wider uppercase mb-4 text-white">
//               Ready to Participate?
//             </h2>
//             <p className="text-gray-300 mb-6">
//               Register for multiple events and showcase your skills across different domains.
//             </p>
//             <div className="flex flex-col sm-flex-row gap-4 justify-center">
//               <button className="px-8 py-3 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase">
//                 View All Events
//               </button>
//               <button className="px-8 py-3 bg-gray-800/40 border border-gray-700 text-gray-300 font-semibold tracking-wide rounded-lg hover:bg-gray-700/60 hover:text-white transition-all duration-300 uppercase">
//                 Download Schedule
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;

// import React, { useState } from 'react';

// const Events = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [openAccordion, setOpenAccordion] = useState(1); // State to track which event is open

//   // We are now generating the particles directly in the component for better reliability.
//   const particleCount = 150; // Increased count for fuller effect
//   const particles = Array.from({ length: particleCount }).map((_, i) => {
//     const horizontalDrift = Math.random() * 80 - 10; // Random drift from -10vw to +10vw
//     const style = {
//       left: `${Math.random() * 100}%`,
//       width: `${Math.random() * 3 + 1}px`,
//       height: `${Math.random() * 3 + 1}px`,
//       animationDuration: `${Math.random() * 10 + 10}s`, // Very slow rise (15s to 30s)
//       animationDelay: `${Math.random() * 10}s`, // Staggered start times (0s to 30s)
//       '--horizontal-drift': `${horizontalDrift}vw`, // CSS custom property for drift
//     };
//     return <div key={i} className="particle" style={style}></div>;
//   });

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
//       description: `A blend of learning and creation, this event begins with interactive sessions for beginners who want to explore UI/UX design using Figma. Participants will learn the fundamentals of user-centered design, wireframing, and prototyping — guided by experts.\n\nFollowing the sessions, a 24-hour design sprint challenges participants to conceptualize, design, and prototype digital solutions for real-world problems, applying everything they’ve learned.`,
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

//   const categories = [
//     { id: 'all', name: 'All Events' },
//     { id: 'technical', name: 'Technical' },
//     { id: 'creative', name: 'Creative' },
//     { id: 'event', name: 'Event' }
//   ];

//   const filteredEvents = selectedCategory === 'all'
//     ? events
//     : events.filter(event => event.category === selectedCategory);

//   return (
//     <div id="events" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 text-gray-100 py-20 overflow-hidden font-sans">
//       <div className="particles-container absolute inset-0 pointer-events-none z-0">
//         {particles}
//       </div>

//       <style>{`
//         .particle {
//           position: absolute;
//           bottom: -10px; /* Start from below the screen */
//           background-color: #00ffff;
//           border-radius: 50%;
//           opacity: 0.8;
//           box-shadow: 0 0 10px #00ffff, 0 0 20px #00bfff, 0 0 30px #1e90ff;
//           animation-name: rise;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }

//         @keyframes rise {
//           0% {
//             transform: translate(0, 0);
//             opacity: 0.8;
//           }
//           100% {
//             transform: translate(var(--horizontal-drift), -105vh); /* Move up and sideways */
//             opacity: 0;
//           }
//         }
//       `}</style>

//       <div className="container mx-auto px-6 relative z-10">

//         {/* Header */}
//         <div className="text-center mb-16">
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

//         {/* Events Accordion */}
//         <div className="max-w-4xl mx-auto space-y-2">
//             {filteredEvents.map((event) => (
//                 <div key={event.id} className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg shadow-lg shadow-black/30 overflow-hidden">
//                     {/* Accordion Header */}
//                     <button 
//                         onClick={() => setOpenAccordion(openAccordion === event.id ? null : event.id)}
//                         className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800/70 transition-colors duration-300"
//                     >
//                         <h3 className={`text-xl font-semibold tracking-wider uppercase text-white transition-colors duration-300 ${openAccordion === event.id ? 'text-cyan-400' : ''}`}>
//                             {event.title}
//                         </h3>
//                         <div className="flex items-center space-x-4">
//                             <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${event.category === 'technical' ? 'bg-blue-800/30 text-blue-200' :
//                                 event.category === 'creative' ? 'bg-cyan-800/30 text-cyan-200' :
//                                 'bg-gray-700/30 text-gray-300'
//                             }`}>
//                                 {event.category}
//                             </span>
//                             <span className={`transform transition-transform duration-300 ${openAccordion === event.id ? 'rotate-180' : ''}`}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </span>
//                         </div>
//                     </button>

//                     {/* Accordion Content */}
//                     <div className={`transition-all duration-500 ease-in-out ${openAccordion === event.id ? 'max-h-screen' : 'max-h-0'}`}>
//                         <div className="p-6 border-t border-blue-900/50">
//                             <p className="text-gray-300 text-sm mb-6 leading-relaxed whitespace-pre-line">
//                                 {event.description}
//                             </p>
//                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
//                                 <div><span className="font-semibold text-gray-400 block">Date:</span><span className="text-white">{event.date}</span></div>
//                                 <div><span className="font-semibold text-gray-400 block">Time:</span><span className="text-white">{event.time}</span></div>
//                                 <div><span className="font-semibold text-gray-400 block">Participants:</span><span className="text-white">{event.participants}</span></div>
//                                 <div><span className="font-semibold text-gray-400 block">Level:</span><span className="text-white">{event.difficulty}</span></div>
//                             </div>
//                             <button className="w-full md:w-auto mt-4 py-2 px-6 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase text-sm">
//                                 Register Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg p-8 max-w-2xl mx-auto shadow-lg shadow-black/30">
//             <h2 className="text-2xl font-semibold tracking-wider uppercase mb-4 text-white">
//               Ready to Participate?
//             </h2>
//             <p className="text-gray-300 mb-6">
//               Register for multiple events and showcase your skills across different domains.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-3 bg-blue-800/40 border border-blue-700 text-blue-200 font-semibold tracking-wide rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 uppercase">
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
      difficulty: "Inter-Branch Competition"
    },
    {
      id: 2,
      title: "UI/UX Hackathon",
      category: "event",
      description: `A blend of learning and creation, this event begins with interactive sessions for beginners who want to explore UI/UX design using Figma. Participants will learn the fundamentals of user-centered design, wireframing, and prototyping — guided by experts.\n\nFollowing the sessions, a 24-hour design sprint challenges participants to conceptualize, design, and prototype digital solutions for real-world problems, applying everything they’ve learned.`,
      date: "Day 1-2",
      time: "24 Hours",
      participants: "40 teams",
      difficulty: "Beginner – Advanced"
    },
    {
      id: 3,
      title: "BlockCord",
      category: "technical",
      description: "A beginner-focused workshop that introduces participants to the core concepts of blockchain technology. Explore how decentralization, digital ledgers, and secure data management are transforming industries.Through interactive sessions and guided examples, participants will gain a clear understanding of how blockchain works and its potential in real-world applications.",
      date: "Day 2-3",
      time: "9:00 AM - 5:00 PM",
      participants: "60+",
      difficulty: "Beginner – Intermediate"
    },
    {
      id: 4,
      title: "Entrorphosis",
      category: "event",
      description: "From problem to prototype! Entrorphosis guides participants through the complete innovation journey — starting with identifying a real-world problem, brainstorming creative solutions, and developing them into tangible prototypes. Learn how to plan, design, and iterate ideas while applying practical techniques to build impactful, feasible solutions.",
      date: "Day 2-3",
      time: "9:00 AM - 4:00 PM",
      participants: "70+",
      difficulty: "All Levels"
    },
    {
      id: 5,
      title: "Designing 101",
      category: "creative",
      description: "A hands-on creative workshop exploring the fundamentals of digital design. Learn layout, color theory, typography, and visual storytelling while crafting professional-grade designs using industry tools like Figma and Adobe Photoshop.",
      date: "Day 2-3",
      time: "9:00 AM - 4:00 PM",
      participants: "60+",
      difficulty: "Beginner – Intermediate"
    },
    {
      id: 6,
      title: "CloudLab",
      category: "technical",
      description: "An interactive and beginner-friendly workshop that introduces participants to the fundamentals of cloud computing. The session focuses on understanding the concepts of virtualization, scalability, and how cloud-based solutions are shaping the modern tech landscape.Engage, explore, and gain a solid foundation in the world of cloud technology through guided, hands-on learning.",
      date: "Day 2-3",
      time: "9:00 AM - 4:00 PM",
      participants: "60+",
      difficulty: "Beginner – Intermediate"
    }
  ];

  const particleCount = 150;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const horizontalDrift = Math.random() * 80 - 10;
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
  `;

  return (
    <div id="events" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 text-gray-100 py-20 font-sans">
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
            <div className="relative w-full max-w-2xl">
              {/* Carousel Container */}
              <div className="h-[520px] relative">
                {filteredEvents.map((event, eventIndex) => {
                  let position = 'opacity-0 scale-90 pointer-events-none';
                  if (eventIndex === currentIndex) {
                    position = 'opacity-100 scale-100 z-10';
                  } else if (eventIndex === (currentIndex - 1 + filteredEvents.length) % filteredEvents.length) {
                    position = 'opacity-0 md:opacity-50 scale-90 md:-translate-x-full z-0 pointer-events-none';
                  } else if (eventIndex === (currentIndex + 1) % filteredEvents.length) {
                    position = 'opacity-0 md:opacity-50 scale-90 md:translate-x-full z-0 pointer-events-none';
                  }

                  return (
                    <div key={event.id} className={`absolute inset-0 transition-all duration-500 ease-in-out ${position}`}>
                      <div className="bg-gray-900/60 backdrop-blur-sm border border-blue-900/50 rounded-lg shadow-lg shadow-black/30 w-full h-full flex flex-col p-6 md:p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-semibold tracking-wider uppercase text-cyan-400">{event.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${event.category === 'technical' ? 'bg-blue-800/30 text-blue-200' :
                              event.category === 'creative' ? 'bg-cyan-800/30 text-cyan-200' :
                              'bg-gray-700/30 text-gray-300'
                          }`}>
                            {event.category}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed whitespace-pre-line flex-grow overflow-y-auto pr-2">
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
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <button onClick={goToPrevious} className="absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/50 rounded-full hover:bg-blue-800/70 transition-colors duration-300 left-2 md:-left-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/50 rounded-full hover:bg-blue-800/70 transition-colors duration-300 right-2 md:-right-16">
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


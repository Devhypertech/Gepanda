'use client';
import Hero from './components/hero/Hero';
import Sidebar from './components/Sidebar';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { Quote } from 'lucide-react';
import Footer from './components/Footer/Footer';
import StepSection from './components/StepSection';
import ScrollCards from './components/ScrollCards';
import { motion } from 'framer-motion';

// Animation variants for consistent animations
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function Home() {

  const countries = [
    { name: "Turkey", price: "3.89", flag: "/icons/turkey.png", url: "https://esim.gepanda.com/packages/?bundle=turkey" },
    { name: "United States", price: "3.99", flag: "/icons/usa.png", url: "https://esim.gepanda.com/packages/?bundle=united-states" },
    { name: "Thailand", price: "2.99", flag: "/icons/thailand.png", url: "https://esim.gepanda.com/packages/?bundle=339" },
    { name: "Malaysia", price: "3.89", flag: "/icons/mala.png", url: "https://esim.gepanda.com/packages/?bundle=malaysia" },
    { name: "United Arab Emirates", price: "3.99", flag: "/icons/uae.png", url: "https://esim.gepanda.com/packages/?bundle=united-arab-emirates" },
    { name: "China", price: "4.48", flag: "/icons/china.png", url: "https://esim.gepanda.com/packages/?bundle=334" },
    { name: "Japan", price: "3.89", flag: "/icons/japan.png", url: "https://esim.gepanda.com/packages/?bundle=335" },
    { name: "France", price: "3.99", flag: "/icons/france.png", url: "https://esim.gepanda.com/packages/?bundle=france" },
    { name: "India", price: "3.99", flag: "/icons/ind.png", url: "https://esim.gepanda.com/packages/?bundle=india" },
  ];

  const stats = [
    { value: '400+', label: 'Networks' },
    { value: '150+', label: 'Countries' },
    { value: '100k+', label: 'Users' },
  ];

  const items = [
    {
      number: '01',
      title: 'Multi-Network',
    
      description:
        'Each bundle spans multiple networks in each country of coverage.',
    },
    {
      number: '02',
      title: 'Activation',
 
      description:
        'The refilled data activates with the bundle’s first usage.',
    },
    {
      number: '03',
      title: 'Validity',
  
      description:
        'Every bundle comes with its own specific validity period.',
    },
    {
      number: '04',
      title: 'Coverage',
    
      description:
        '4G and 5G speeds are achieved in most locations.',
    },
  ];

  const steps = [
    {
      step: "Step 1",
      title: "Download the Truely App",
      desc:
        "Find us on the App Store or Google Play. Tell us where you're headed and how many days of unlimited you need.",
      image: "/step1.png",
      bg: "linear-gradient(to bottom, #00ffe1, #fff000)",
    },
    {
      step: "Step 2",
      title: "Activate Your eSIM",
      desc:
        "Choose your destination and activate your eSIM with a tap.",
      image: "/step2.png",
      bg: "linear-gradient(to bottom, #ff7a00, #ffcc00)",
    },
    {
      step: "Step 3",
      title: "Enjoy Unlimited Data",
      desc:
        "You're online and connected. No roaming fees, no contracts.",
      image: "/step3.png",
      bg: "linear-gradient(to bottom, #ff4d4d, #ffcc00)",
    },
  ]

  const carouselItems = [
    {
      src: '/carousel-1.png',
      id: '01/',
    },
    {
      src: '/carousel-2.png',
      id: '02/',
    },
    {
      src: '/carousel-3.png',
      id: '03/',
    },
    {
      src: '/carousel-2.png',
      id: '04/',
    },
  ];

  const cardData = [ 
    {
      number: '01',
      title: 'Multi-Network',
      description:
        'Each bundle spans multiple networks in each country of coverage.',
    },
    {
      number: '02',
      title: 'Activation',
      description:
        'The refilled data activates with the bundle’s first usage.',
    },
    {
      number: '03',
      title: 'Validity',
      description:
        'Every bundle comes with its own specific validity period.',
    },
    {
      number: '04',
      title: 'Coverage',
      description:
        '4G and 5G speeds are achieved in most locations.',
    },
  ];

  const duplicatedItems = [...carouselItems, ...carouselItems];

  const testimonials: Array<{
    name: string;
    role: string;
    quote: string;
    avatar: string;
  }> = [
    {
      name: 'Ava Madison',
      role: 'Content Creator',
      quote:
        'GePanda made my trip so smooth! No SIM swaps, no roaming panic, just instant data wherever I landed. Totally clutch for digital nomads like me."',
      avatar: '/Ava.webp',
    },
    {
      name: 'Daniel Mitchells',
      role: 'Sales Executive',
      quote:
        'Highly recommended for someone who travels frequently for work, GePanda keeps me connected across countries without any network issues. It\'s reliable and fast',
      avatar: '/reviewer.png',
    },
    {
      name: 'Danny Simmons',
      role: 'Communications Manager',
      quote:
        'Amazed by the service of GePanda. Much better than Local service providers. They have affordable data plans and offer international communication easily.',
      avatar: '/danny.webp',
    },
    {
      name: 'Sofia Malik',
      role: 'University Student',
      quote:
        'I love how easy it was to set up my eSIM with GePanda. The internet worked immediately after signing up, and I didn\'t have to worry about buying local SIMs anymore.',
      avatar: '/Sofia.webp',
    },
  ];


  return (
    <main className="bg-black text-white">
      <Hero />
      
      {/* Country Cards Section */}
      <motion.section 
        className="bg-black px-4 sm:px-6 md:px-8 py-8 md:py-0 relative md:bottom-24 md:h-80"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Navigation row */}
        <motion.div 
          className="relative max-w-5xl mx-auto mb-8 md:mb-10"
          variants={scaleIn}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:flex md:items-center md:justify-center">
            <motion.button 
              className="w-full whitespace-nowrap rounded-full bg-cyan-600 py-3 px-4 text-sm sm:text-base font-semibold shadow-md transition-all duration-300 hover:opacity-90 hover:scale-105"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Country
            </motion.button>

            <motion.a 
              href="https://esim.gepanda.com/packages/?nocache"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full whitespace-nowrap rounded-full bg-[#fdfd74] py-3 px-4 text-sm sm:text-base font-semibold text-[#007e68] shadow-md transition-all duration-300 hover:bg-yellow-300 inline-block text-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Destinations
            </motion.a>

            <motion.button 
              className="w-full whitespace-nowrap rounded-full bg-green-600 py-3 px-4 text-sm sm:text-base font-semibold shadow-md transition-all duration-300 hover:opacity-90 hover:scale-105"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Region
            </motion.button>
          </div>
        </motion.div>

        {/* Country Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {countries.map((country, idx) => (
            <motion.a
              key={idx}
              href={country.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#191919] rounded-lg px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-white transition-all duration-300 hover:scale-105 hover:bg-[#222] cursor-pointer"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.01, 
                y: -2,
                boxShadow: "0 20px 40px rgba(0, 255, 225, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image src={country.flag} alt={`${country.name} Flag`} width={32} height={24} className="rounded-sm" />
                </motion.div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{country.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400">From USD {country.price}</p>
                </div>
              </div>
              <motion.span 
                className="text-xl text-gray-400 group-hover:text-emerald-400 transition-colors"
                whileHover={{ x: 3 }}
              >
                &gt;
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-center"
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-[#191919] p-6 sm:p-8 lg:p-12 rounded-xl relative overflow-hidden group cursor-pointer"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0, 255, 225, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#00ffe1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: -100 }}
                whileHover={{ x: 0 }}
              />
              
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <motion.div 
                  className="bg-[#00ffe1] p-3 sm:p-4 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </div>
              <div className="mt-8 sm:mt-10 relative z-10">
                <motion.h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm sm:text-base text-white/70 mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why GePanda Section */}
      <motion.div 
        className="relative text-center mb-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <motion.h2 
          className="text-4xl font-extrabold uppercase font-heading"
          variants={scaleIn}
        >
          Why GePanda
        </motion.h2>
        <motion.div 
          className="flex justify-center"
          variants={scaleIn}
        >
          <Image
            src="/gamechanger.png"
            alt="Is a game-changer"
            width={270}
            height={66}
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Video Section */}
      <motion.section 
        className="relative w-full text-white py-8 sm:py-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Rounded rectangle video container with bottom fade */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative w-full mx-auto overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]"
            style={{
              height: '300px',
              WebkitMaskImage: 'linear-gradient(to bottom, black 75%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, black 75%, rgba(0,0,0,0) 100%)',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/video/newvideo.mp4.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Optional dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>

        {/* Cards pulled into the fade area */}
        <div className="relative z-10 max-w-7xl mx-auto -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 px-4 sm:px-6 pb-12 sm:pb-16">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
          >
       {cardData.map((card, index) => (
  <motion.div
    key={index}
    className="rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-sm bg-gradient-to-b from-black/70 to-black/80 p-4 sm:p-5 lg:p-6 cursor-pointer"
    variants={fadeInUp}
    whileHover={{ 
      scale: 1.05, 
      y: -10,
      boxShadow: "0 25px 50px rgba(0, 255, 225, 0.3)"
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div 
      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#00ffe1] text-black font-bold text-base sm:text-lg rounded-full mb-3 sm:mb-4"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      {card.number}
    </motion.div>
    <h3 className="text-base sm:text-lg lg:text-xl font-extrabold font-heading">{card.title}</h3>
    {/* Removed the date line */}
    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{card.description}</p>
  </motion.div>
))}
          </motion.div>
        </div>
      </motion.section>

      <ScrollCards />

      {/* Glow Background Section */}
      <motion.section 
        className="relative py-8 px-4 sm:px-6 bg-black overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Glow background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/Ellipse.png"
            alt="Glow"
            width={1968}
            height={268}
            className="absolute top-14 left-1/2 h-130 -translate-x-1/2 pointer-events-none select-none"
          />
        </motion.div>

        {/* Content wrapper */}
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background image */}
            <Image
              src="/bgtool.png"
              alt="Umbrellas Background"
              width={1431}
              height={534}
              className="w-full opacity-40 sm:h-auto object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 backdrop-blur-sm px-4 text-center">
              <motion.p 
                className="text-xs sm:text-sm uppercase tracking-wide mb-1 text-white/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Easier
              </motion.p>
              <motion.h2 
                className="text-2xl sm:text-4xl font-semibold mb-3 font-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Connect Instantly
              </motion.h2>
              <motion.a 
                href="https://myaccount.gepanda.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2 rounded-full shadow-md inline-block"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Activate your eSim
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Carousel Section */}
      <motion.section 
        className="relative overflow-hidden bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex gap-4 sm:gap-6 animate-marquee"
            variants={staggerContainer}
          >
            {duplicatedItems.map((item, index) => (
              <motion.div
                key={index}
                className={`relative min-w-[240px] sm:min-w-[280px] md:min-w-[320px] rounded-xl overflow-hidden shadow-lg bg-black text-white transition-all duration-300 cursor-pointer ${index % 2 === 0 ? '-translate-y-4 sm:-translate-y-8' : 'translate-y-3 sm:translate-y-6 mb-6'}`}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05, 
                  y: index % 2 === 0 ? -8 : 0,
                  boxShadow: "0 25px 50px rgba(0, 255, 225, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background image */}
                <Image
                  src={item.src}
                  alt={item.id || ""}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4 flex flex-col justify-end">
                  {item.id && <span className="text-xs sm:text-sm text-white/70 mb-2 mt-2 sm:mt-4">{item.id}</span>}
                  <motion.a 
                    href="https://esim.gepanda.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 sm:mt-3 text-xs sm:text-sm underline underline-offset-4 text-emerald-400 flex items-center gap-1"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Explore more <span className="text-lg sm:text-xl">→</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          variants={staggerContainer}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-[#15160E] rounded-2xl sm:rounded-3xl p-4 sm:p-6 pb-12 sm:pb-16 text-center flex flex-col items-center cursor-pointer"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 255, 225, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Quote Icon */}
              <motion.div 
                className="absolute -top-4 sm:-top-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#00ffe1] text-black rounded-full left-1/2 -translate-x-1/2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Quote size={16} className="sm:w-5 sm:h-5" />
              </motion.div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mt-4 sm:mt-6 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span 
                    key={i} 
                    className="text-emerald-400 text-base sm:text-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Name + Role */}
              <h3 className="font-bold text-base sm:text-lg font-heading">{item.name}</h3>
              <p className="text-emerald-400 text-xs sm:text-sm mb-3 sm:mb-4">{item.role}</p>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{item.quote}</p>

              {/* Avatar Image */}
              <motion.div 
                className="absolute -bottom-6 sm:-bottom-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-black bg-white"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={item.avatar || '/reviewer.png'} alt={item.name} width={56} height={56} className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Refer a Friend Section */}
      <motion.section 
        className="bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Green glow */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#00ffe1] blur-[100px] opacity-20 rounded-full pointer-events-none"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 relative z-10">
          {/* Image Side */}
          <motion.div 
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/womens.png"
              alt="Refer a friend"
              width={550}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div variants={fadeInUp} className="order-1 lg:order-2 text-center lg:text-left">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase mb-4 sm:mb-6 leading-snug font-heading"
              variants={scaleIn}
            >
              Refer a Friend, Get Free Gepanda Credit!
            </motion.h2>
            {/* <motion.p 
              className="text-white/80 text-sm mb-6"
              variants={fadeInUp}
            >
              Invite your friends to use Gepanda and get a USD 5 credit for every successful referral.
            </motion.p> */}
            <motion.a 
              href="https://esim.gepanda.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00ffe1] text-black font-semibold px-6 py-3 sm:py-4 rounded-full hover:bg-[#00e6cb] transition-colors text-sm sm:text-base inline-block"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 35px rgba(0, 255, 225, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </main>
  );
}
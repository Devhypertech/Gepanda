import Hero from './components/hero/Hero';
import Sidebar from '../app/components/Sidebar';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { Quote } from 'lucide-react';
import Footer from './components/Footer/Footer';
import StepSection from './components/StepSection';
import ScrollCards from './components/ScrollCards';



export default function Home() {

  const countries = [
    { name: "Turkey", price: "3.89", flag: "/icons/turkey.png" },
    { name: "United States", price: "3.99", flag: "/icons/usa.png" },
    { name: "Thailand", price: "2.99", flag: "/icons/thailand.png" },
    { name: "Malaysia", price: "3.89", flag: "/icons/mala.png" },
    { name: "United Arab Emirates", price: "3.99", flag: "/icons/uae.png" },
    { name: "China", price: "4.48", flag: "/icons/china.png" },
    { name: "Japan", price: "3.89", flag: "/icons/japan.png" },
    { name: "France", price: "3.99", flag: "/icons/france.png" },
    { name: "India", price: "3.99", flag: "/icons/ind.png" },
  ];

  const stats = [
    { value: '199+', label: 'Team member' },
    { value: '20+', label: 'Winning award' },
    { value: '100M+', label: 'Complete project' },
  ];

  const items = [
    {
      number: '01',
      title: 'CREATIVE AGENCY',
      date: '2019 - PRESENT',
      description:
        'Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos quI Designe ratione',
    },
    {
      number: '02',
      title: 'SAMSUNG TECH',
      date: '2009 - 2018',
      description:
        'Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos quI Designe ratione',
    },
    {
      number: '03',
      title: 'METAVERSE',
      date: '2008 - 2013',
      description:
        'Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos quI Designe ratione',
    },
    {
      number: '04',
      title: 'METAVERSE',
      date: '2008 - 2013',
      description:
        'Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos quI Designe ratione',
    },
  ];

  const steps = [
    {
      step: "Step 1",
      title: "Download the Truely App",
      desc:
        "Find us on the App Store or Google Play. Tell us where you’re headed and how many days of unlimited you need.",
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
        "You’re online and connected. No roaming fees, no contracts.",
      image: "/step3.png",
      bg: "linear-gradient(to bottom, #ff4d4d, #ffcc00)",
    },
  ]

  const carouselItems = [
    {
      src: '/carousel-1.png',
      alt: 'Instant Connectivity',
      badge: 'Instant Connectivity',
      title: 'Automate workflows for efficiency.',
      tag: 'EfficioAI',
      id: '01/',
    },
    {
      src: '/carousel-2.png',
      alt: 'Optimize Workflows',
      badge: 'Ads Blocked',
      title: 'Effortlessly optimize workflows with AI.',
      tag: '',
      id: '02/',
    },
    {
      src: '/carousel-3.png',
      alt: 'Profits with AI',
      badge: 'Instant Connectivity',
      title: 'Guide your business to higher profits using AI.',
      tag: 'OptiFlow',
      id: '03/',
    },
    {
      src: '/carousel-2.png',
      alt: 'AI Blocked',
      badge: 'Ads Blocked',
      title: '',
      tag: '',
      id: '04/',
    },
  ];

  const duplicatedItems = [...carouselItems, ...carouselItems];

  const testimonials = [
    {
      name: 'Brooklyn Simmons',
      role: 'Marketing Coordinator',
      quote:
        'Financial planners help people to knowledge in about how to invest and save their money the most efficient way ever. planners help people to knowledge in about how.',
      avatar: '/reviewer.png', // replace with your real avatar image
    },
    // Duplicate as needed
    {
      name: 'Brooklyn Simmons',
      role: 'Marketing Coordinator',
      quote:
        'Financial planners help people to knowledge in about how to invest and save their money the most efficient way ever. planners help people to knowledge in about how.',
      avatar: '/reviewer.png',
    },
    {
      name: 'Brooklyn Simmons',
      role: 'Marketing Coordinator',
      quote:
        'Financial planners help people to knowledge in about how to invest and save their money the most efficient way ever. planners help people to knowledge in about how.',
      avatar: '/reviewer.png',
    },
    {
      name: 'Brooklyn Simmons',
      role: 'Marketing Coordinator',
      quote:
        'Financial planners help people to knowledge in about how to invest and save their money the most efficient way ever. planners help people to knowledge in about how.',
      avatar: '/reviewer.png',
    },
  ];


  return (
    <main className="bg-black text-white">
      <Hero />

      {/* Country Cards Section */}
      <section className="bg-black py-20 px-6 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {countries.map((country, idx) => (
            <div key={idx} className="bg-[#191919] rounded-md px-5 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <Image src={country.flag} alt={`${country.name} Flag`} width={28} height={20} className="rounded-sm" />
                <div>
                  <p className="font-semibold">{country.name}</p>
                  <p className="text-sm text-gray-400">From USD {country.price}</p>
                </div>
              </div>
              <span className="text-xl text-gray-400">&gt;</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#191919] p-12 rounded-lg relative">

              {/* Icon circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#00ffe1] p-4 rounded-full">
                  <Users className="text-black w-6 h-6" />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
                <p className="text-sm text-white/70 mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold uppercase">Why GePanda</h2>
          <div className="flex justify-center">
            <Image
              src="/gamechanger.png" // Update path
              alt="Is a game-changer"
              width={310}
              height={72}
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-white text-black rounded-xl max-w-6xl mx-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-6  pb-6 relative">
                {/* Left Column */}
                <div className="flex flex-col items-center text-[#C9C907] font-bold text-5xl">

                  <span>{item.number}</span>
                  <span className="text-2xl mt-2">↑</span>
                </div>

                {/* Right Column */}
                <div className="w-full">
                  <h4 className=" text-teal-600 uppercase text-sm font-bold">{item.title}</h4>
                  <div className="h-px bg-gray-300 mt-6 w-full"></div>
                  <p className="text-sm font-semibold mt-2">{item.date}</p>
                  <p className="text-sm text-gray-800 mt-2">{item.description}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>


      <ScrollCards />






      <section className="relative py-8 px-4 sm:px-6 bg-black overflow-hidden">
        {/* Glow background */}
        <Image
          src="/Ellipse.png"
          alt="Glow"
          width={768}
          height={768}
          className="absolute top-4 bottom-20 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
        />

        {/* Content wrapper */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Background image */}
            <Image
              src="/bgtool.png"
              alt="Umbrellas Background"
              width={1431}
              height={534}
              className="w-full h-[180px] sm:h-auto object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 backdrop-blur-sm px-4 text-center">
              <p className="text-xs sm:text-sm uppercase tracking-wide mb-1 text-white/70">Easier</p>
              <h2 className="text-2xl sm:text-4xl font-semibold mb-3">Connect Instantly</h2>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2 rounded-full shadow-md">
                Try AI Tools
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden bg-black py-20 px-6">
        <div className="w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className="relative min-w-[280px] md:min-w-[320px] rounded-xl overflow-hidden shadow-lg bg-white text-white"
              >
                {/* Background image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  {item.id && <span className="text-sm text-white/70 mb-2">{item.id}</span>}
                  {item.badge && (
                    <span className="bg-white text-black text-xs font-medium px-2 py-1 rounded w-fit mb-2">
                      {item.badge}
                    </span>
                  )}
                  {item.tag && <span className="text-emerald-400 text-sm font-semibold">{item.tag}</span>}
                  {item.title && <h3 className="text-lg font-bold leading-snug mt-1">{item.title}</h3>}
                  <button className="mt-3 text-sm underline underline-offset-4 text-emerald-400 flex items-center gap-1">
                    Explore more <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#15160E] rounded-3xl p-6 pb-16 text-center flex flex-col items-center"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 w-12 h-12 flex items-center justify-center bg-[#00ffe1] text-black rounded-full left-1/2 -translate-x-1/2">
                <Quote size={20} />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mt-6 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-emerald-400 text-lg">★</span>
                ))}
              </div>

              {/* Name + Role */}
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-emerald-400 text-sm mb-4">{item.role}</p>

              {/* Quote Text */}
              <p className="text-sm text-white/80 leading-relaxed">{item.quote}</p>

              {/* Avatar Image */}
              <div className="absolute -bottom-8 w-14 h-14 rounded-full overflow-hidden border-2 border-black bg-white">
                <Image src={item.avatar} alt={item.name} width={56} height={56} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-8 px-6 relative overflow-hidden">

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase mb-12">
            FAIR PRICES, NO HIDDEN FEES
          </h2>

          {/* Video Container */}
          <div className="relative overflow-hidden shadow-lg h-[600px] w-full rounded-9xl">
            <video
              src="/video/video.mp4"
              className="w-full h-full object-cover rounded-3xl"
              autoPlay
              loop
              muted
              playsInline
            />

            {/* Play Button Overlay (Optional if you want a manual play interface) */}
            {/* Remove this if you don't want an overlay play icon */}
            <div className="absolute inset-0 flex items-center justify-center">

            </div>
          </div>
        </div>
      </section>


      <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
        {/* Green glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#00ffe1] blur-[100px] opacity-20 rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
          {/* Image Side */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/womens.png" // Replace with your actual file in /public
              alt="Refer a friend"
              width={550}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 leading-snug">
              Refer a Friend, Get Free Gepanda Credit!
            </h2>
            <p className="text-white/80 text-sm mb-6">
              Invite your friends to use Gepanda and get a USD 5 credit for every successful referral.
            </p>
            <button className="bg-[#00ffe1] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#00e6cb] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main >

  );
}
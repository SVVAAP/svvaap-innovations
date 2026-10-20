// Single source of truth for the Svvaap Innovations group: companies, products,
// brands, people and contact details. Pages read from here — edit facts in one place.

export const CONTACT = {
  phone: '+91 78995 35703',
  phoneRaw: '917899535703',
  email: 'workwithsvvaap@gmail.com',
  city: 'Udupi, Karnataka',
  address: 'Udupi, Karnataka 576101, India',
  linkedin: 'https://www.linkedin.com/company/svvaap-innovations/',
  x: 'https://x.com/SVVAAPofficial',
  instagram: 'https://www.instagram.com/svvaap/',
  youtube: 'https://youtube.com/@svvaap-innovations',
  github: 'https://github.com/SVVAAP',
};

export const whatsapp = (text) =>
  `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(text)}`;

export const FOUNDED = 2021;

// Operating companies registered under Svvaap Innovations.
export const COMPANIES = [
  {
    key: '21xengineers',
    name: '21xEngineers',
    role: 'Software products & engineering',
    summary:
      'Builds and runs the group’s SaaS products, and designs and engineers web, mobile and SaaS platforms for clients.',
    focus: ['SaaS products', 'Web & mobile apps', 'Product engineering'],
    url: 'https://21xengineers.svvaap.in',
    internal: '/21xengineers',
    logo: '/brand/21xengineers.jpg',
    tile: 'bg-[#ff3333]',
    status: 'Operating',
  },
  {
    key: 'sen10games',
    name: 'Sen10 Games',
    role: 'Game studio',
    summary: 'Designs and publishes mobile and PC games, from first prototype to live release.',
    focus: ['Game design', 'Unity development', 'Mobile & PC titles'],
    url: 'https://sen10games.in',
    logo: '/brand/sen10.png',
    tile: 'bg-ink',
    status: 'Operating',
  },
  {
    key: 'starlabs',
    name: 'Star Labs',
    role: 'Research & development',
    summary: 'The group’s applied research lab, exploring AI, computer vision and new product ideas before they become companies.',
    focus: ['Applied AI', 'Prototyping', 'Research'],
    url: null,
    logo: null,
    monogram: 'SL',
    tile: 'bg-ink-2',
    status: 'In development',
  },
];

// Products built and operated within the group (by 21xEngineers).
export const PRODUCTS = [
  {
    name: 'MenuCraft',
    domain: 'menucraft.in',
    url: 'https://menucraft.in',
    category: 'Restaurant tech',
    summary: 'QR ordering, POS and kitchen management for restaurants and cafés, with a customer mobile app.',
    logo: '/brand/menucraft.png',
    logoStyle: 'wordmark',
    shot: '/shots/menucraft.webp',
    flagship: true,
  },
  {
    name: 'BizKitOps',
    domain: 'bizkitops.app',
    url: 'https://bizkitops.app',
    category: 'Business operations',
    summary: 'GST invoicing, inventory, CRM, bookings and storefronts for small businesses, on web and mobile.',
    logo: '/brand/bizkitops.png',
    logoStyle: 'tile',
    shot: '/shots/bizkitops.webp',
    flagship: true,
  },
  {
    name: 'BizKitOps Dealership Suite',
    domain: 'dealership.bizkitops.app',
    url: 'https://dealership.bizkitops.app',
    category: 'Automotive',
    summary: 'A dealership website that ranks on Google, wired into a dealership management module. Built from our Hyper Ride Superbikes project.',
    shot: '/shots/dealership.webp',
    isNew: true,
  },
  {
    name: 'Ideogram',
    domain: 'ideogram.svvaap.in',
    url: 'https://ideogram.svvaap.in',
    category: 'Community',
    summary: 'A platform to share, discover and develop ideas for businesses, projects and games.',
  },
  {
    name: 'CreatX',
    domain: 'createx.svvaap.in',
    url: 'https://createx.svvaap.in',
    category: 'AI tools',
    summary: 'Turns a plain-language idea into a working front-end prototype.',
  },
  {
    name: 'HostelBuddy',
    domain: 'pimhostel.svvaap.in',
    url: 'https://pimhostel.svvaap.in',
    category: 'Education',
    summary: 'Room allocation, fees and student records for hostels and PGs.',
  },
  {
    name: 'TrackMyBus',
    domain: 'trackmybus.svvaap.in',
    url: 'https://trackmybus.svvaap.in',
    category: 'Mobility',
    summary: 'Local bus timings and routes for Udupi and Manipal.',
  },
];

// Consumer and creative brands in the group.
export const BRANDS = [
  { name: 'N9 Clothing', category: 'Apparel', summary: 'Streetwear built around original sketch art.', logo: '/brand/n9.png' },
  { name: 'Bhumij Creations', category: 'Design studio', summary: 'Branding, identity and visual design for businesses.', logo: '/brand/bhumij.png' },
];

export const CLIENT_WORK = [
  {
    name: 'Shashi Caterers',
    domain: 'shashicaterers.com',
    url: 'https://shashicaterers.com',
    category: 'Hospitality',
    summary: 'Website for a wedding and corporate caterer in Shirva, Udupi, with menus, packages and gallery, built to rank in local search.',
    shot: '/shots/shashi.webp',
    isNew: true,
  },
  {
    name: 'Hyper Ride Superbikes',
    domain: 'hyperride.in',
    url: null,
    category: 'Automotive',
    summary: 'Showroom website for a pre-owned superbike dealer in Bengaluru, with live stock, search, compare, EMI calculator and sell-your-bike flows.',
    shot: '/shots/hyperride.webp',
    status: 'Launching soon',
    isNew: true,
  },
  {
    name: 'Jnana Shiksha Kendra',
    domain: 'jnanashikshakendra.com',
    url: 'https://jnanashikshakendra.com',
    category: 'Education',
    summary: 'An education platform with courses, articles, events and branch information.',
    shot: '/shots/jnanashikshakendra.webp',
  },
  {
    name: 'JobHunt4U',
    domain: 'jobhunt4u.in',
    url: 'https://jobhunt4u.in',
    category: 'Job portal',
    summary: 'A job marketplace connecting candidates with employers, with search and application tracking.',
    shot: '/shots/jobhunt4u.webp',
  },
  {
    name: 'A2Z Premium Deals',
    domain: 'a2zpremiumdeals.com',
    url: 'https://a2zpremiumdeals.com',
    category: 'Real estate',
    summary: 'Property listings and a lead-capture portal for sellers and buyers.',
    shot: '/shots/a2z.webp',
  },
  {
    name: 'Poornaprajna College',
    domain: 'pimhostel.svvaap.in',
    url: 'https://pimhostel.svvaap.in',
    category: 'Institution',
    summary: 'Hostel allocation, fees and records for the college, in one admin panel.',
  },
];

// Research projects from Star Labs. Prototypes, not commercial products.
export const RESEARCH = [
  {
    name: 'VisionX',
    category: 'Computer vision',
    summary: 'Real-time object detection that runs entirely in the browser, using YOLOv8 on TensorFlow.js with no server.',
    stack: ['YOLOv8', 'TensorFlow.js', 'WebGL'],
  },
  {
    name: 'MAX',
    category: 'On-device AI',
    summary: 'A local-first AI desktop assistant for Windows that works offline, built on Electron, FastAPI and Ollama.',
    stack: ['Electron', 'Python', 'Ollama'],
  },
];

export const LEADERSHIP = [
  {
    name: 'Srujan Moolya',
    role: 'Founder & CEO',
    bio: 'Leads strategy, product and engineering across the group. Built MenuCraft and BizKitOps.',
    image: '/img/srujan.png',
    linkedin: 'https://www.linkedin.com/in/srujan-moolya',
  },
  {
    name: 'Anup Nayak',
    role: 'Co-founder',
    bio: 'Full-stack engineer focused on building scalable, high-performance systems.',
    image: '/img/anup.png',
    linkedin: 'https://www.linkedin.com/in/anup-nayak',
  },
];

export const TEAM = [
  { name: 'Viyan', role: 'UI/UX Designer', image: '/img/viyan.png', linkedin: 'https://www.linkedin.com/in/viyan-castelino' },
  { name: 'Sainik', role: 'Graphic Designer', image: '/img/sainik.png', linkedin: 'https://www.linkedin.com/in/sainik-bhumij' },
  { name: 'Preetham Acharya', role: 'Graphic Designer & 3D Artist', image: '/img/preetham.png', linkedin: 'https://www.linkedin.com/in/preetham-acharya-815616256/' },
  // LinkedIn intentionally omitted: the previous link pointed to Preetham's profile.
  { name: 'Alister Dsouza', role: 'Graphic Designer & 3D Artist', image: '/img/alister.png', linkedin: null },
];

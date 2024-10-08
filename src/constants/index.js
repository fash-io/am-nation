export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/artists", label: "Artists" },
  { href: "/about", label: "About US" },
];
export const navIcons = [
  { class: "bi-twitter", label: "twitter", href: "#" },
  { class: "bi-facebook", label: "facebook", href: "#" },
  { class: "bi-instagram", label: "instagram", href: "#" },
  { class: "bi-linkedin", label: "linkedin", href: "#" },
];

export const carouselItems = [
  {
    imgSrc: "/img/pexels-wendywei-1190297.jpg",
    altText: "Live Music Experience",
    caption: "Experience Live Music Like Never Before",
    isActive: true,
  },
  {
    imgSrc: "/img/pexels-teddy-2263435.jpg",
    altText: "Biggest Concerts",
    caption: "Join the Biggest Concerts of the Year",
    isActive: false,
  },
  {
    imgSrc: "/img/pexels-wendywei-1494665.jpg",
    altText: "Feel the Music",
    caption: "Feel the Music, Live the Moment",
    isActive: false,
  },
  {
    imgSrc: "/img/pexels-teddy-2167381.jpg",
    altText: "Unforgettable Performances",
    caption: "Unforgettable Live Performances",
    isActive: false,
  },
  {
    imgSrc: "/img/pexels-roneferreira-2250092.jpg",
    altText: "Favorite Artists",
    caption: "Catch Your Favorite Artists Live",
    isActive: false,
  },
  {
    imgSrc: "/img/pexels-wendywei-1387174.jpg",
    altText: "Book Tickets",
    caption: "Book Your Tickets Now",
    isActive: false,
  },
];

export const events = [
  {
    id: "afronation",
    name: "AfroNation",
    organizers: "AfroNation x Global Beats.",
    date: "August 17, 2024 22:00:00",
    hero_img: "/img/SHOTLIST_JAKEMULKA_JMULKA_SUNDAY__6390.jpg",
    top_img: "/img/Shotlista_ciggsFANS.jpg3.jpg",
    main_img: "/img/Lineup013 (1).png",
    imgSrc: "/img/Lineup013.png",
    altText: "AFRONATION",
    location: "Bedrock's Douglass Site, Detroit, Michigan",
    rating: 5,
    curr: '₦',
    isActive: false,
    get link_name() {
      return `/event/${this.id}`;
    },
    tickets: [
      {
        name: "General Admission2",
        price: 3000,
        price_string: "₦3,000.00",
      },
      {
        name: "VIP Access2",
        price: 20000,
        price_string: "₦20,000.00",
      },
      {
        name: "Exclusive Lounge2",
        price: 50000,
        price_string: "₦50,000.00",
        sec: "Table for 3",
      },
      {
        name: "Exclusive VIP Chambers2",
        price: 100000,
        price_string: "₦100,000.00",
        sec: "Table for 6",
      },
    ],
    artistId: [3, 4, 6, 9],
  },
  {
    id: "afronation2",
    name: "afroNation2",
    organizers: "AfroNation x Global Beats2.",
    date: "August 17, 2024 22:00:00",
    imgSrc: "/img/SHOTLIST_JAKEMULKA_JMULKA_SUNDAY__6390.jpg",
    main_img: "/img/Shotlista_ciggsFANS.jpg3.jpg",
    top_img: "/img/Lineup013.png",
    hero_img: "/img/Lineup013.png",
    altText: "AFRONATION",
    location: "Bedrock's Douglass Site, Detroit, Michigan2",
    rating: 3,
    curr: '₦',
    isActive: false,
    get link_name() {
      return `/event/${this.id}`;
    },
    tickets: [
      {
        name: "General Admission2",
        price: 3000,
        price_string: "₦3,000.00",
      },
      {
        name: "VIP Access2",
        price: 20000,
        price_string: "₦20,000.00",
      },
      {
        name: "Exclusive Lounge2",
        price: 50000,
        price_string: "₦50,000.00",
        sec: "Table for 3",
      },
      {
        name: "Exclusive VIP Chambers2",
        price: 100000,
        price_string: "₦100,000.00",
        sec: "Table for 6",
      },
    ],
    artistId: [5, 10, 7, 2],
  },
  {
    id: "circusMaximus",
    name: "CIRCUS MAXIMUS 2024 (Main Event)",
    organizers: "Travis Scott x Tenpo.",
    date: "September 7, 2024 22:00:00",
    hero_img: "/img/circus maximus.png",
    top_img: "/img/circus maximus.png",
    main_img: "/img/utopia.jpg",
    imgSrc: "/img/circus maximus.png",
    altText: "Circus MAximus",
    location: "ESTADIO BICENTENARIO LA FLORIDA SANTIAGO, CHILE",
    rating: 5,
    curr: '$',
    isActive: true,
    get link_name() {
      return `/event/${this.id}`;
    },
    tickets: [
      {
        name: "Regular",
        price: 300,
        price_string: "$300.00",
      },
      {
        name: "VIP",
        price: 1500,
        price_string: "$1,500.00",
      },
      {
        name: "Exclusive Lounge",
        price: 10000,
        price_string: "$10,000.00",
      },
      {
        name: "Exclusive VIP Chambers",
        price: 100000,
        price_string: "$100,000.00",
      },
    ],
    artistId: [2],
  },
  
  {
    id: "circusMaximus9",
    name: "CIRCUS MAXIMUS 2024 (Main Event)20",
    organizers: "Travis Scott x Tenpo2.",
    date: "September 23, 2024 22:00:00",
    category: "",
    tickets_number: 100,
    available_tks: 49,
    hero_img: "/img/utopia.jpg",
    top_img: "/img/utopia.jpg",
    main_img: "/img/circus maximus.png",
    imgSrc: "/img/utopia.jpg",
    altText: "Circus MAximus2",
    location: "ESTADIO BICENTENARIO LA FLOIDA SANTIAGO, CHILE2",
    location_: "us",
    rating: 2,
    curr: '$',
    isActive: false,
    get link_name() {
      return `/event/${this.id}`;
    },
    tickets: [
      {
        name: "Regular",
        price: 300,
        price_string: "$300.00",
      },
      {
        name: "VIP",
        price: 1500,
        price_string: "$1,500.00",
      },
      {
        name: "Exclusive Lounge",
        price: 10000,
        price_string: "$10,000.00",
      },
      {
        name: "Exclusive VIP Chambers",
        price: 100000,
        price_string: "$100,000.00",
      },
    ],
    artistId: [5,1,2,8],
  },
  
];

export const artists = [
  {
    id: 1,
    name: "Burna Boy",
    img_url: "/img/burna1.jpg",
    event: false,
    headline: true,
    featured: false,
    relevance: 10,
  },
  {
    id: 2,
    name: "Travis Scott",
    img_url: "/img/travis.png",
    event: events[2],
    headline: true,
    featured: false,
    relevance: 11,

  },
  {
    id: 3,
    name: "Lil Wayne",
    img_url: "/img/lil-wayne.png",
    event: events[0],
    headline: true,
    featured: true,
    relevance: 12,

  },
  {
    id: 4,
    name: "Rema",
    img_url: "/img/rema.png",
    event: events[0],
    headline: true,
    featured: true,
    relevance: 8,
  },
  {
    id: 5,
    name: "Wizkid",
    img_url: "/img/wiz.jpg",
    event: false,
    headline: true,
    featured: false,
    relevance: 9,

  },
  {
    id: 6,
    name: "Asake",
    img_url: "/img/asake1.jpg",
    event: events[0],
    headline: true,
    featured: false,
    relevance: 10,

  },
  {
    id: 7,
    name: "Odumodublvck",
    img_url: "/img/6407215.webp",
    event: false,
    headline: false,
    featured: true,
    relevance: 3,

  },
  {
    id: 8,
    name: "Omah Lay",
    img_url: "/img/6428828.webp",
    event: false,
    headline: false,
    featured: true,
    relevance: 7,

  },
  {
    id: 9,
    name: "Tems",
    img_url: "/img/6430465.webp",
    event: false,
    headline: false,
    featured: true,
    relevance: 6,
  },
  {
    id: 10,
    name: "Ayra Starr",
    img_url: "/img/6319970.webp",
    event: false,
    headline: false,
    featured: true,
    relevance: 7,
  },
];

export const reviews = [
  {
    name: "John D",
    reviewTitle: "Amazing Atmosphere!",
    stars: 4,
    img_url: "/img/pic-5.png",
    review:
      "he concert was electric! The atmosphere was incredible, and the music was out of this world. Can't wait for the next one!",
  },
  {
    name: "Sarah K",
    reviewTitle: "Unforgettable Night",
    stars: 5,
    img_url: "/img/pic-6.png",
    review:
      "An unforgettable night of music and fun. Everything was perfectly organized, and the artists were phenomenal. Highly recommend!",
  },
  {
    name: "Emily R",
    reviewTitle: "Best Concert Ever",
    stars: 4.5,
    img_url: "/img/pic-4.png",
    review:
      "This was hands down the best concert I've ever been to. The energy, the crowd, the performances – just wow!",
  },
];

export const jumbo = {
  jumboTxt:
    "Experience the electrifying world of live music like never before. Whether you're a die-hard fan or a curious newcomer, our events promise unforgettable moments, incredible performances, and a vibrant atmosphere. Dive into a concert experience that’s tailored just for you.",
  jumboTitle: "Welcome to Your Next Great Adventure",
  jumboBtn: "BOOK NOW",
};
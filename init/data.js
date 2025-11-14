// Default image
const DEFAULT_LISTING_IMAGE =
  "https://images.unsplash.com/photo-1505692952047-1a78307da8a3?auto=format&fit=crop&w=1000&q=80";

const sampleListings = [
  // ⭐ Trending (5)
  {
    title: "Forest Glass Retreat",
    description:
      "A sleek glasshouse wrapped in lush greenery—perfect for peaceful nature escapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2800,
    location: "Asheville",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Cliffside Ocean Villa",
    description:
      "A modern coastal villa perched dramatically on cliffside rocks with sweeping sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    },
    price: 4800,
    location: "Madeira",
    country: "Portugal",
    category: "Trending",
  },
  {
    title: "Minimalist Desert Home",
    description:
      "A clean-lined sandstone home blending perfectly into the calm desert landscape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530735037965-52eec1c6a4a0?auto=format&fit=crop&w=1000&q=80",
    },
    price: 3000,
    location: "Phoenix",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Tropical Jungle House",
    description:
      "A vibrant green jungle stay surrounded by plants and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2600,
    location: "Ubud",
    country: "Indonesia",
    category: "Trending",
  },
  {
    title: "Cottage by the Bay",
    description:
      "A bright, airy cottage with coastal breezes and stunning water views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507086182422-97bd7ca241fa?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2200,
    location: "Vancouver",
    country: "Canada",
    category: "Trending",
  },

  // 🛏 Rooms (5)
  {
    title: "Soft Minimal Studio",
    description: "A calm Scandinavian-inspired room with warm natural tones.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=1000&q=80",
    },
    price: 850,
    location: "Copenhagen",
    country: "Denmark",
    category: "Rooms",
  },
  {
    title: "City View Bedroom",
    description:
      "A bright room overlooking the urban skyline—perfect for city explorers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512915922682-794f1e0d17a3?auto=format&fit=crop&w=1000&q=80",
    },
    price: 950,
    location: "Toronto",
    country: "Canada",
    category: "Rooms",
  },
  {
    title: "Boho Cozy Room",
    description:
      "Warm lights, earth tones, and plants create a relaxing boho stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
    },
    price: 700,
    location: "Barcelona",
    country: "Spain",
    category: "Rooms",
  },
  {
    title: "Sunlit White Loft",
    description: "A minimalist white loft with soft sunlight and clean décor.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1100,
    location: "Warsaw",
    country: "Poland",
    category: "Rooms",
  },
  {
    title: "Bright Retro Room",
    description:
      "A colorful retro-styled room full of personality and vibrant patterns.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152844-6cc50d4a51c6?auto=format&fit=crop&w=1000&q=80",
    },
    price: 650,
    location: "Berlin",
    country: "Germany",
    category: "Rooms",
  },

  // 🏙 Iconic Cities (5)
  {
    title: "Eiffel View Apartment",
    description:
      "A timeless Paris flat with a direct view of the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2400,
    location: "Paris",
    country: "France",
    category: "Iconic Cities",
  },
  {
    title: "Tokyo Skyline Suite",
    description:
      "A modern high-rise apartment overlooking Tokyo’s futuristic skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2600,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
  },
  {
    title: "London Bridge Flat",
    description: "A chic flat steps from the River Thames with iconic views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2300,
    location: "London",
    country: "United Kingdom",
    category: "Iconic Cities",
  },
  {
    title: "Dubai Marina Luxe Suite",
    description:
      "A luxury suite with floor-to-ceiling windows overlooking Dubai Marina.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1000&q=80",
    },
    price: 3000,
    location: "Dubai",
    country: "UAE",
    category: "Iconic Cities",
  },
  {
    title: "New York Central Loft",
    description:
      "A stylish loft in the heart of Manhattan with city energy all around.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2800,
    location: "New York",
    country: "United States",
    category: "Iconic Cities",
  },

  // 🏔 Mountains (5)
  {
    title: "Swiss Wooden Chalet",
    description:
      "A warm alpine chalet with stunning snow-covered mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80",
    },
    price: 4000,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "Rocky Mountain Cabin",
    description:
      "A rustic cabin deep in the forest near scenic mountain trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390369-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1800,
    location: "Estes Park",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Norway Hillside Lodge",
    description: "A minimalist cabin overlooking Norway’s dramatic fjords.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1000&q=80",
    },
    price: 3200,
    location: "Tromsø",
    country: "Norway",
    category: "Mountains",
  },
  {
    title: "Alpine Sunrise Cabin",
    description: "Wake up to golden sunrise views across alpine meadows.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507582020474-23e9c56808e2?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1600,
    location: "Innsbruck",
    country: "Austria",
    category: "Mountains",
  },
  {
    title: "Himalayan Wooden Home",
    description: "A wooden lodge surrounded by dramatic Himalayan peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1700,
    location: "Manali",
    country: "India",
    category: "Mountains",
  },

  // 🏊 Amazing Pools (5)
  {
    title: "Bali Jungle Infinity Pool",
    description:
      "A luxury villa with a dramatic infinity pool above tropical greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1000&q=80",
    },
    price: 3800,
    location: "Ubud",
    country: "Indonesia",
    category: "Amazing Pools",
  },
  {
    title: "Blue Coast Pool Villa",
    description: "A bright oceanfront villa with a crystal-blue private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1000&q=80",
    },
    price: 4100,
    location: "Mykonos",
    country: "Greece",
    category: "Amazing Pools",
  },
  {
    title: "African Desert Pool Stay",
    description:
      "A serene lodge with a refreshing pool surrounded by red dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80",
    },
    price: 3000,
    location: "Windhoek",
    country: "Namibia",
    category: "Amazing Pools",
  },
  {
    title: "Modern Ocean Pool House",
    description: "A stylish pool villa overlooking turquoise ocean waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505430630170-2025b009a2c3?auto=format&fit=crop&w=1000&q=80",
    },
    price: 4500,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
  },
  {
    title: "Tropical Garden Pool Retreat",
    description: "A colorful tropical pool hidden inside lush gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578894381163-e72c17f2dbad?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2600,
    location: "Fiji",
    country: "Fiji",
    category: "Amazing Pools",
  },

  // 🏕 Camping (5)
  {
    title: "Woodland Yurt Escape",
    description:
      "A cozy yurt surrounded by tall forest trees and nature sounds.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390369-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80",
    },
    price: 900,
    location: "Oregon",
    country: "United States",
    category: "Camping",
  },
  {
    title: "Golden Desert Camp",
    description:
      "A desert tent experience with colorful sunsets and starry skies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1526676037777-88fcb7a2127e?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1100,
    location: "Merzouga",
    country: "Morocco",
    category: "Camping",
  },
  {
    title: "Lakeside Tent Stay",
    description: "A bright camping setup right beside a clear mountain lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    },
    price: 750,
    location: "Banff",
    country: "Canada",
    category: "Camping",
  },
  {
    title: "Nordic Forest Cabin Tent",
    description: "A minimal canvas tent surrounded by misty northern forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499696010181-6d8c61a9f37e?auto=format&fit=crop&w=1000&q=80",
    },
    price: 800,
    location: "Helsinki",
    country: "Finland",
    category: "Camping",
  },
  {
    title: "Sunrise Ridge Camp",
    description: "Wake up to bright views of rolling mountains and soft skies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521295125880-4d50f7be9f2u?auto=format&fit=crop&w=1000&q=80",
    },
    price: 600,
    location: "Queenstown",
    country: "New Zealand",
    category: "Camping",
  },

  // 🚜 Farms (5)
  {
    title: "Rustic Farm Cottage",
    description: "A peaceful farmhouse cottage surrounded by open fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601709228841-cb7a6a2c7eca?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1200,
    location: "Vermont",
    country: "United States",
    category: "Farms",
  },
  {
    title: "Sunny Countryside Stay",
    description: "Bright yellow fields and a cozy farmhouse welcome you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1100,
    location: "Leicester",
    country: "United Kingdom",
    category: "Farms",
  },
  {
    title: "Italian Vineyard Farmstay",
    description:
      "Stay among grape vines with sunlit Tuscan hills as your backdrop.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1526483360412-f4dbaf036963?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2600,
    location: "Tuscany",
    country: "Italy",
    category: "Farms",
  },
  {
    title: "Pastel Ranch House",
    description:
      "A bright ranch home with gentle neutral colors and open living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580584113306-4e89fdeb1f7e?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1400,
    location: "Nashville",
    country: "United States",
    category: "Farms",
  },
  {
    title: "Green Meadow Farmstay",
    description: "A charming farm home with peaceful bright meadows around.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1545153996-59f4ff7e6e96?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1300,
    location: "Bavaria",
    country: "Germany",
    category: "Farms",
  },

  // ❄ Arctic (5)
  {
    title: "Glass Igloo under Stars",
    description: "Sleep under the northern lights in a warm glass igloo.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    },
    price: 5000,
    location: "Lapland",
    country: "Finland",
    category: "Arctic",
  },
  {
    title: "Blue Ice Hotel",
    description: "A magical suite carved entirely from ice and snow.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517341720797-657e0e1e1b5f?auto=format&fit=crop&w=1000&q=80",
    },
    price: 4800,
    location: "Jukkasjärvi",
    country: "Sweden",
    category: "Arctic",
  },
  {
    title: "Arctic Coastal Cabin",
    description: "A soft minimal cabin with views of icy blue coastlines.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533417200904-30f03d6a9d65?auto=format&fit=crop&w=1000&q=80",
    },
    price: 3500,
    location: "Nuuk",
    country: "Greenland",
    category: "Arctic",
  },
  {
    title: "Northern Snow Lodge",
    description: "Bright snowy landscapes surrounding a warm timber lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=1000&q=80",
    },
    price: 3000,
    location: "Reykjavik",
    country: "Iceland",
    category: "Arctic",
  },
  {
    title: "Polar Peak Cabin",
    description: "A remote arctic cabin set against bright icy mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1543342386-9325d1f50b5b?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2600,
    location: "Svalbard",
    country: "Norway",
    category: "Arctic",
  },

  // 🐴 Barns (5)
  {
    title: "Rustic Wooden Barn House",
    description: "A warm-toned wooden barn converted into a peaceful home.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1700,
    location: "Hudson",
    country: "United States",
    category: "Barns",
  },
  {
    title: "English Stone Barn",
    description: "A scenic barn stay in the rolling English countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585152948-08dfd22d70f1?auto=format&fit=crop&w=1000&q=80",
    },
    price: 2100,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Barns",
  },
  {
    title: "Bright White Barn Loft",
    description: "A clean neutral barn loft with soft light and open space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593996574758-41e8b17f14fa?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1800,
    location: "Sydney",
    country: "Australia",
    category: "Barns",
  },
  {
    title: "Countryside Red Barn",
    description: "A bright red barn surrounded by green fields and sunshine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496588152823-e33a15a517e3?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1600,
    location: "Ohio",
    country: "United States",
    category: "Barns",
  },
  {
    title: "Pastel Farm Barnhouse",
    description: "A soft minimal barn home with warm pastel interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1545153996-59f4ff7e6e96?auto=format&fit=crop&w=1000&q=80",
    },
    price: 1500,
    location: "Zurich",
    country: "Switzerland",
    category: "Barns",
  },

  // 🏖 Beachfront (5)
  {
    title: "Maldives Overwater Villa",
    description: "A luxury villa floating above crystal-clear turquoise water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505735454784-8f2d7f1842ce?auto=format&fit=crop&w=1000&q=80",
    },
    price: 7000,
    location: "Malé",
    country: "Maldives",
    category: "Beachfront",
  },
  {
    title: "Tropical Beach Cottage",
    description: "A bright cottage steps away from white sandy beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    },
    price: 3200,
    location: "Barbados",
    country: "Barbados",
    category: "Beachfront",
  },
  {
    title: "Modern Oceanfront House",
    description: "A minimal home with pure ocean views and soft neutral tones.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=1000&q=80",
    },
    price: 5000,
    location: "Gold Coast",
    country: "Australia",
    category: "Beachfront",
  },
  {
    title: "Blue Horizon Villa",
    description: "A colorful villa with sweeping views of the bright blue sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522403236047-95a1c16f2bfc?auto=format&fit=crop&w=1000&q=80",
    },
    price: 4200,
    location: "Santorini",
    country: "Greece",
    category: "Beachfront",
  },
  {
    title: "Palm Coast Bungalow",
    description: "A bright beachfront bungalow surrounded by palm trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80",
    },
    price: 3500,
    location: "Bali",
    country: "Indonesia",
    category: "Beachfront",
  },
];

module.exports = { data: sampleListings, DEFAULT_LISTING_IMAGE };

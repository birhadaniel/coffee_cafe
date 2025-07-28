import menu1 from './menu1.jpg';
import menu2 from './menu2.jpg';
import menu3 from './menu3.jpg';
import menu4 from './menu4.jpg';
import person1 from './person1.jpg';
import person2 from './person2.jpg';
import person3 from './person3.jpg';
import ourstory from './ourstory.jpg';
import team1 from './team1.jpg';
import team2 from './team2.jpg';
import team3 from './team3.jpg';
import team4 from './team4.jpg';
import team5 from './team5.jpg';
import team6 from './team6.jpg';
import Espresso1 from './Espresso1.jpg';
import Espresso2 from './Espresso2.jpg';
import Espresso3 from './Espresso3.jpg';
import Espresso4 from './Espresso4.jpg';
import Espresso5 from './Espresso5.jpg';
import Espresso6 from './Espresso6.jpg';
import ColdDrinks1 from './ColdDrinks1.jpg';
import ColdDrinks2 from './ColdDrinks2.jpg';
import ColdDrinks3 from './ColdDrinks3.jpg';
import ColdDrinks4 from './ColdDrinks4.jpg';
import ColdDrinks5 from './ColdDrinks5.jpg';
import tea1 from './tea1.jpg';
import tea2 from './tea2.jpg';
import tea3 from './tea3.jpg';
import tea4 from './tea4.jpg';
import tea5 from './tea5.jpg';
import pastries1 from './pastries1.jpg';
import pastries2 from './pastries2.jpg';
import pastries3 from './pastries3.jpg';
import pastries4 from './pastries4.jpg';
import pastries5 from './pastries5.jpg';
import pastries6 from './pastries6.jpg';
import galleryImage1 from './galleryImages1.jpg';
import galleryImage2 from './galleryImages2.jpg';
import galleryImage3 from './galleryImages3.jpg';
import galleryImage4 from './galleryImages4.jpg';
import galleryImage5 from './galleryImages5.jpg';
import galleryImage6 from './galleryImages6.jpg';
import galleryImage7 from './galleryImages7.jpg';
import galleryImage8 from './galleryImages8.jpg';
import galleryImage9 from './galleryImages9.jpg';





export const assets ={
  ourstory
}


export const menu_list = [
    {
        name: "Caramel Macchiato",
        price: "$4.95",
        description: "Rich espresso with steamed milk and caramel drizzle",
        image: menu1
    },
    {
        name: "Vanilla Latte",
        price: "$4.25",
        description: "Smooth espresso with vanilla syrup and steamed milk",
        image: menu2
    },
    {
        name: "Cold Brew Special",
        price: "$3.95",
        description: "Slow-steeped cold brew with a hint of chocolate",
        image: menu3
    },
    {
        name: "Chai Tea Latte",
        price: "$4.50",
        description: "Spiced chai blend with steamed milk and foam",
        image: menu4
    }
]

export const person = [
    {
        name: "Sarah Johnson",
        rating: 5,
        comment: "The best coffee in town! The atmosphere is so cozy and welcoming. I come here every morning before work.",
        avatar: person1
    },
    {
        name: "Michael Chen",
        rating: 5,
        comment: "Amazing baristas who really know their craft. The latte art is incredible and the taste is even better!",
        avatar: person2
    },
    {
        name: "Emma Davis",
        rating: 5,
        comment: "Perfect place to work or catch up with friends. Great WiFi, comfortable seating, and delicious pastries too!",
        avatar: person3
    }
]

export const team = [
    {
        name: "Maria Rodriguez",
        role: "Co-Founder & Head Roaster",
        bio: "Coffee expert with 15 years of experience in sourcing and roasting the perfect beans.",
        image: team1
    },
    {
        name: "David Rodriguez",
        role: "Co-Founder & Operations Manager",
        bio: "Business strategist passionate about creating exceptional customer experiences.",
        image: team2
    },
    {
        name: "Jessica Chen",
        role: "Lead Barista",
        bio: "Latte art champion who brings creativity and precision to every drink she crafts.",
        image: team3
    },
    {
        name: "Alex Thompson",
        role: "Assistant Manager",
        bio: "Customer service expert dedicated to ensuring every visit is memorable.",
        image: team4
    },
    {
        name: "Sophie Martinez",
        role: "Pastry Chef",
        bio: "Culinary artist who creates delicious pastries that perfectly complement our coffee.",
        image: team5
    },
    {
        name: "Marcus Johnson",
        role: "Barista",
        bio: "Coffee enthusiast who loves sharing his knowledge and passion with customers.",
        image: team6
    }
]

export const categories = [
    { id: 'espresso', name: 'Espresso Drinks', icon: 'ri-cup-line' },
    { id: 'cold', name: 'Cold Drinks', icon: 'ri-drop-line' },
    { id: 'tea', name: 'Tea & Others', icon: 'ri-leaf-line' },
    { id: 'pastries', name: 'Pastries & Snacks', icon: 'ri-cake-line' }
]

export const menuItems = {
    espresso: [
      {
        name: "Espresso",
        price: "$2.50",
        description: "Rich, concentrated shot of our signature blend",
        image: Espresso1
      },
      {
        name: "Americano",
        price: "$3.25",
        description: "Espresso with hot water, smooth and bold",
        image: Espresso2
      },
      {
        name: "Cappuccino",
        price: "$4.25",
        description: "Espresso with steamed milk and foam, classic Italian style",
        image: Espresso3
      },
      {
        name: "Latte",
        price: "$4.50",
        description: "Smooth espresso with steamed milk and light foam",
        image: Espresso4
      },
      {
        name: "Mocha",
        price: "$4.95",
        description: "Espresso with chocolate and steamed milk, topped with whipped cream",
        image: Espresso5
      },
      {
        name: "Caramel Macchiato",
        price: "$4.95",
        description: "Espresso with vanilla, steamed milk, and caramel drizzle",
        image: Espresso6
      }
    ],
    cold: [
      {
        name: "Iced Coffee",
        price: "$3.50",
        description: "Freshly brewed coffee served over ice",
        image:ColdDrinks1
      },
      {
        name: "Cold Brew",
        price: "$3.95",
        description: "Slow-steeped for 12 hours, smooth and bold",
        image: ColdDrinks2
      },
      {
        name: "Iced Latte",
        price: "$4.75",
        description: "Espresso with cold milk over ice",
        image: ColdDrinks3
      },
      {
        name: "Frappuccino",
        price: "$5.25",
        description: "Blended coffee with ice and milk, topped with whipped cream",
        image:ColdDrinks4
      },
      {
        name: "Nitro Cold Brew",
        price: "$4.50",
        description: "Cold brew infused with nitrogen for a creamy texture",
        image: ColdDrinks5
      }
    ],
    tea: [
      {
        name: "Earl Grey Tea",
        price: "$2.95",
        description: "Classic bergamot-flavored black tea",
        image: tea1
      },
      {
        name: "Chai Latte",
        price: "$4.25",
        description: "Spiced chai blend with steamed milk",
        image: tea2
      },
      {
        name: "Green Tea",
        price: "$2.75",
        description: "Premium sencha green tea, light and refreshing",
        image: tea3
      },
      {
        name: "Hot Chocolate",
        price: "$3.95",
        description: "Rich chocolate drink topped with whipped cream",
        image: tea4
      },
      {
        name: "Matcha Latte",
        price: "$4.75",
        description: "Premium matcha powder with steamed milk",
        image: tea5
      }
    ],
    pastries: [
      {
        name: "Croissant",
        price: "$3.50",
        description: "Buttery, flaky French pastry",
        image: pastries1
      },
      {
        name: "Chocolate Muffin",
        price: "$3.25",
        description: "Rich chocolate muffin with chocolate chips",
        image: pastries2
      },
      {
        name: "Blueberry Scone",
        price: "$3.75",
        description: "Fresh blueberry scone with glaze",
        image: pastries3
      },
      {
        name: "Avocado Toast",
        price: "$7.95",
        description: "Artisan bread with fresh avocado, tomato, and seasoning",
        image: pastries4
      },
      {
        name: "Bagel with Cream Cheese",
        price: "$4.50",
        description: "Fresh bagel with cream cheese spread",
        image: pastries5
      },
      {
        name: "Granola Bowl",
        price: "$6.95",
        description: "House-made granola with yogurt and fresh berries",
        image: pastries6
      }
    ]
};

export const galleryImages = [
    {
      src: galleryImage1,
      alt: "Cozy Interior",
      category: "Interior"
    },
    {
      src: galleryImage2,
      alt: "Latte Art Creation",
      category: "Coffee Making"
    },
    {
      src:galleryImage3,
      alt: "Coffee Roasting",
      category: "Behind the Scenes"
    },
    {
      src: galleryImage4,
      alt: "Happy Customers",
      category: "Community"
    },
    {
      src:galleryImage5,
      alt: "Fresh Pastries",
      category: "Food"
    },
    {
      src: galleryImage6,
      alt: "Specialty Drinks",
      category: "Drinks"
    },
    {
      src: galleryImage7,
      alt: "Outdoor Seating",
      category: "Interior"
    },
    {
      src: galleryImage8,
      alt: "Milk Art",
      category: "Coffee Making"
    },
    {
      src: galleryImage9,
      alt: "Coffee Cupping",
      category: "Behind the Scenes"
    }
]

 export const categories2 = [
    { id: 'drinks', name: 'Drinks', icon: 'ri-cup-line' },
    { id: 'food', name: 'Food', icon: 'ri-cake-line' }
];
export const menuItems2 = {
    drinks: [
      { id: 1, name: "Espresso", price: 2.50, description: "Rich, concentrated shot" },
      { id: 2, name: "Cappuccino", price: 4.25, description: "Espresso with steamed milk and foam" },
      { id: 3, name: "Latte", price: 4.50, description: "Smooth espresso with steamed milk" },
      { id: 4, name: "Americano", price: 3.25, description: "Espresso with hot water" },
      { id: 5, name: "Mocha", price: 4.95, description: "Espresso with chocolate and steamed milk" },
      { id: 6, name: "Cold Brew", price: 3.95, description: "Slow-steeped for 12 hours" }
    ],
    food: [
      { id: 7, name: "Croissant", price: 3.50, description: "Buttery, flaky French pastry" },
      { id: 8, name: "Chocolate Muffin", price: 3.25, description: "Rich chocolate with chocolate chips" },
      { id: 9, name: "Avocado Toast", price: 7.95, description: "Artisan bread with fresh avocado" },
      { id: 10, name: "Bagel with Cream Cheese", price: 4.50, description: "Fresh bagel with cream cheese" },
      { id: 11, name: "Granola Bowl", price: 6.95, description: "House-made granola with yogurt and berries" }
    ]
};
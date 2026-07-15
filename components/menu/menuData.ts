export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const starters: MenuItem[] = [
  {
    name: "Burrata & Heirloom Tomatoes",
    description: "Fresh burrata, basil pesto, aged balsamic, olive oil",
    price: 14,
  },
  {
    name: "Seared Scallops",
    description: "Cauliflower purée, brown butter, crispy capers",
    price: 16,
  },
  {
    name: "French Onion Soup",
    description: "Caramelized onions, Gruyère, sourdough crouton",
    price: 12,
  },
  {
    name: "Beef Carpaccio",
    description: "Parmesan, arugula, truffle oil, lemon dressing",
    price: 15,
  },
];

export const mains: MenuItem[] = [
  {
    name: "Pan-Seared Salmon",
    description: "Lemon beurre blanc, baby greens, roasted potatoes",
    price: 24,
  },
  {
    name: "Duck Confit",
    description: "Braised red cabbage, carrot purée, cherry jus",
    price: 26,
  },
  {
    name: "Mushroom Risotto",
    description: "Wild mushrooms, parmesan, white truffle oil",
    price: 22,
  },
  {
    name: "Grilled Lamb Chops",
    description: "Herb crust, ratatouille, rosemary jus",
    price: 28,
  },
];

export const desserts: MenuItem[] = [
  {
    name: "Chocolate Fondant",
    description: "Warm chocolate cake, vanilla ice cream",
    price: 12,
  },
  {
    name: "Crème Brûlée",
    description: "Classic vanilla custard, caramelized sugar",
    price: 10,
  },
  {
    name: "Apple Tarte Tatin",
    description: "Caramelized apples, cinnamon ice cream",
    price: 11,
  },
  {
    name: "Lemon Meringue Tart",
    description: "Lemon curd, toasted meringue",
    price: 10,
  },
];

export const chefSpecial = {
  name: "Wagyu Striploin",
  description:
    "Served with truffle mashed potatoes, grilled asparagus, and red wine jus.",
  price: 36,
};

export const menuImages = {
  featured: "/images/menu/featured-dish.png",
  pasta: "/images/menu/pasta.png",
  dessert: "/images/menu/dessert.png",
};
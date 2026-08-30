import CaramelMacchiato from "../assets/coffee1.png";
import Americano from "../assets/coffee2.png";
import Latte from "../assets/coffee3.png";
import DarkChocoMocha from "../assets/coffee4.png";

export const coffeeMenu = [
  {
    id: "espresso",
    name: "Espresso",
    size12: 85,
    size16: null,
    note: "hot only",
  },
  {
    id: "americano",
    name: "Americano",
    size12: 90,
    size16: 100,
    image: Americano,
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    size12: 150,
    size16: 165,
    image: CaramelMacchiato,
    description:
      "Espresso layered with condensed milk for a rich, sweet finish.",
  },
  {
    id: "latte",
    name: "Latte",
    size12: 135,
    size16: 150,
    image: Latte,
    description: "Espresso with steamed milk and a light layer of foam.",
  },
  {
    id: "spanish-latte",
    name: "Spanish Latte",
    size12: 145,
    size16: 160,
  },
  {
    id: "white-choco-mocha",
    name: "White Choco Mocha",
    size12: 150,
    size16: 165,
  },
  {
    id: "dark-choco-mocha",
    name: "Dark Choco Mocha",
    size12: 150,
    size16: 165,
    image: DarkChocoMocha,
    description:
      "Espresso with steamed milk and a rich layer of dark chocolate.",
  },

  { id: "seasalt-latte", name: "Seasalt Latte", size12: 155, size16: 180 },
];

export const coffeeAddon = { name: "Oatside milk", price: 40 };

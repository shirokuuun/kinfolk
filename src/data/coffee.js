import CaramelMacchiato from "../assets/coffee/macchiato.png";
import Americano from "../assets/coffee/americano.png";
import Latte from "../assets/coffee/latte.png";
import DarkChocoMocha from "../assets/coffee/choco_mocha.png";
import Hojicha from "../assets/coffee/hojicha.png";
import MatchaOat from "../assets/coffee/matcha_oat.png";
import Passionfruit from "../assets/coffee/passionfruit.png";
import StrawberryLemonade from "../assets/coffee/strawberry_lemonade.png";
import PinkLatte from "../assets/coffee/pink_latte.png";
import IcedChoco from "../assets/coffee/iced_choco.png";

export const coffeeMenu = [
  {
    id: "espresso",
    name: "Espresso",
    size12: 85,
    size16: null,
    note: "hot only",
    description: "A concentrated, full-bodied shot of rich and bold coffee.",
  },
  {
    id: "americano",
    name: "Americano",
    size12: 90,
    size16: 100,
    image: Americano,
    description: "A classic, smooth blend of rich espresso diluted with water.",
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
    description:
      "A sweet, creamy blend of espresso and milk sweetened with condensed milk.",
  },
  {
    id: "white-choco-mocha",
    name: "White Choco Mocha",
    size12: 150,
    size16: 165,
    description:
      "A sweet and creamy espresso drink made with rich white chocolate sauce.",
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
  {
    id: "seasalt-latte",
    name: "Seasalt Latte",
    size12: 155,
    size16: 180,
    description:
      "A smooth milk latte elevated with a sweet and savory sea salt cream foam.",
  },
  {
    id: "hojicha",
    name: "Hojicha",
    size12: 150,
    size16: 165,
    image: Hojicha,
    description:
      "A comforting, earthy latte made from roasted green tea and creamy milk.",
  },
  {
    id: "matcha-oat",
    name: "Matcha Oat",
    size12: 180,
    size16: 195,
    image: MatchaOat,
    description:
      "Premium earthy matcha green tea blended perfectly with creamy oat milk.",
  },
  {
    id: "passionfruit",
    name: "Passion Fruit",
    size12: 120,
    size16: 130,
    image: Passionfruit,
    description:
      "A vibrant, tangy, and refreshing tropical passionfruit beverage.",
  },
  {
    id: "strawberry-lemonade",
    name: "Strawberry Lemonade",
    size12: 120,
    size16: 130,
    image: StrawberryLemonade,
    description:
      "A perfect balance of sweet strawberries and tart lemon for a refreshing sip.",
  },
  {
    id: "pink-latte",
    name: "Pink Latte",
    size12: 120,
    size16: 130,
    image: PinkLatte,
    description:
      "A sweet, creamy, and visually stunning pink-hued milk-based drink.",
  },
  {
    id: "iced-choco-mocha",
    name: "Iced Choco",
    size12: 140,
    size16: 150,
    image: IcedChoco,
    description:
      "A chilled, rich chocolate and espresso blend served over ice.",
  },
];

export const coffeeAddon = { name: "Oatside milk", price: 40 };

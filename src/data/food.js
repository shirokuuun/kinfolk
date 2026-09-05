import BaconEgg from "../assets/snacks/bacon_egg.png";
import Carbonara from "../assets/snacks/carbonara.png";
import ChickenAlaKing from "../assets/snacks/chicken_alaking.png";
import ChickenKatsu from "../assets/snacks/chicken_katsu.png";
import ChickenPesto from "../assets/snacks/chicken_pesto.png";
import ChickenWrap from "../assets/snacks/chicken_wrap.png";
import Clubhouse from "../assets/snacks/clubhouse.png";
import FishFillet from "../assets/snacks/fish_fillet.png";
import HungarianSausage from "../assets/snacks/hungarian_sausage.png";
import ShrimpAglioOlio from "../assets/snacks/shrimp_aglio_olio.png";
import VeggieEggWrap from "../assets/snacks/veggie_wrap.png";

export const riceBowls = [
  {
    id: "bacon-egg",
    name: "Bacon and egg",
    price: 150,
    image: BaconEgg,
    description:
      "Crispy bacon strips and a perfectly cooked egg served over warm, steamed rice.",
  },
  {
    id: "hungarian-sausage",
    name: "Hungarian sausage",
    price: 145,
    image: HungarianSausage,
    description:
      "Savory, slightly spicy Hungarian sausage paired with a fried egg and warm rice.",
  },
  {
    id: "fish-fillet",
    name: "Fish fillet",
    price: 160,
    image: FishFillet,
    description:
      "Golden, crispy breaded fish fillet served with steaming white rice.",
  },
  {
    id: "chicken-ala-king",
    name: "Chicken ala king",
    price: 160,
    image: ChickenAlaKing,
    description:
      "Tender chicken pieces in a rich, creamy white sauce with bell peppers over hot rice.",
  },
  {
    id: "chicken-katsu",
    name: "Chicken katsu",
    price: 160,
    image: ChickenKatsu,
    description:
      "Crispy, deep-fried breaded chicken cutlet drizzled with savory sauce alongside steamed rice.",
  },
];

export const pasta = [
  {
    id: "chicken-pesto",
    name: "Chicken Pesto",
    price: 180,
    image: ChickenPesto,
    description:
      "Al dente pasta tossed in a vibrant basil pesto sauce and topped with grilled chicken.",
  },
  {
    id: "carbonara",
    name: "Carbonara",
    price: 180,
    image: Carbonara,
    description:
      "Classic creamy pasta mixed with savory bacon bits and finished with parmesan cheese.",
  },
  {
    id: "shrimp-aglio-olio",
    name: "Shrimp Aglio Olio",
    price: 180,
    image: ShrimpAglioOlio,
    description:
      "Light pasta sautéed in olive oil, toasted garlic, and chili flakes with plump shrimp.",
  },
];

export const sandwiches = [
  {
    id: "clubhouse",
    name: "Clubhouse",
    price: 190,
    image: Clubhouse,
    description:
      "A towering layered sandwich packed with savory meat, fresh greens, and creamy mayo.",
  },
  {
    id: "ham-cheese",
    name: "Ham and cheese",
    price: 160,
    image: null,
    description:
      "A classic comfort sandwich featuring savory ham and melted cheese.",
  },
  {
    id: "bacon-egg-sandwich",
    name: "Bacon and egg",
    price: 170,
    image: null,
    description:
      "Crispy bacon and a freshly cooked egg served in soft, toasted bread.",
  },
];

export const wraps = [
  {
    id: "chicken-wrap",
    name: "Chicken",
    price: 190,
    image: ChickenWrap,
    description:
      "Tender chicken bites wrapped in a soft tortilla with fresh greens and dressing.",
  },
  {
    id: "veggie-egg-wrap",
    name: "Veggie Egg Wrap",
    price: 170,
    image: VeggieEggWrap,
    description:
      "A wholesome wrap filled with fresh vegetables, fluffy eggs, and a light dressing.",
  },
];

export const snacks = [
  {
    id: "fries",
    name: "Fries",
    solo: 65,
    family: 125,
    description:
      "Crispy, golden potato string fries lightly salted to perfection.",
  },
  {
    id: "nachos",
    name: "Nachos",
    solo: 90,
    family: 150,
    description:
      "Crunchy tortilla chips loaded with rich cheese sauce and savory toppings.",
  },
  {
    id: "chicken-pops-original",
    name: "Chicken Pops, original",
    solo: 125,
    family: 200,
    description:
      "Bite-sized, crispy fried chicken chunks that are juicy on the inside.",
  },
  {
    id: "chicken-pops-cheese",
    name: "Chicken Pops, cheese parmesan",
    solo: 135,
    family: 215,
    description:
      "Crispy chicken bites tossed in a savory cheese parmesan coating.",
  },
  {
    id: "chicken-pops-buffalo",
    name: "Chicken Pops, buffalo",
    solo: 135,
    family: 215,
    description:
      "Spicy and tangy buffalo-glazed fried chicken bites for a flavorful kick.",
  },
  {
    id: "family-snack",
    name: "Family snack platter",
    family: 520,
    note: "nachos, fries, bacon and egg sandwich, ham and cheese sandwich",
    description:
      "The ultimate sharing platter featuring nachos, fries, and our signature sandwiches.",
  },
  {
    id: "fish-chips",
    name: "Fish and chips",
    solo: 150,
    description:
      "Classic golden-battered fish fillet served alongside a generous portion of crispy fries.",
  },
];

export const addons = [
  { name: "Cheese dip", price: 15 },
  { name: "Garlic mayo dip", price: 15 },
  { name: "Bottled water", price: 25 },
  { name: "Extra rice", price: 25 },
  { name: "Extra egg", price: 20 },
  { name: "To go box", price: 10 },
];

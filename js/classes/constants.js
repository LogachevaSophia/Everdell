const seasons = ["весна", "лето", "осень"];
const resources = [
  { id: 1, name: "Дерево" },
  { id: 2, name: "Смола" },
  { id: 3, name: "Камень" },
  { id: 4, name: "Ягодка" },
];
const LocationResource = [
  [{ id: 1, count: 3 }],
  [
    { id: 1, count: 2 },
    { id: 2, count: 1 },
  ],
  [{ id: 2, count: 2 }],
  [
    { id: 3, count: 1 },
    { id: 2, count: 2 },
  ],
  [
    { id: 1, count: 2 },
    { id: 3, count: 1 },
  ],
  [{ id: 3, count: 2 }],
  [{ id: 4, count: 2 }],
  [{ id: 4, count: 1 }],
];
const marks = [
  { id: 1, name: "лапка медведя" },
  { id: 2, name: "вихрь" },
  { id: 3, name: "колосок" },
];

const UnicCardDeck = [ //колода
  new CardBuilding([{ id: 1, count: 1 }], marks[0], 1, "Школа"),
  new CardBuilding([{ id: 2, count: 1 }], marks[2], 1, "Ферма"),
  new CardAnimal([{ id: 3, count: 2 }], marks[0], 1, "Учитель"),
  new CardAnimal([{ id: 4, count: 1 }], marks[2], 1, "Фермер"),
]; 


export type Dish = {
  name: string;
  english?: string;
  description?: string;
  englishDescription?: string;
  price?: string;
  detail?: string;
};

export type MenuGroup = { title: string; dishes: Dish[] };
export type MenuCategory = {
  id: string;
  title: string;
  navLabel?: string;
  subtitle?: string;
  note?: string;
  dishes?: Dish[];
  groups?: MenuGroup[];
};

export const categories: MenuCategory[] = [
  {
    id: 'entrees', title: 'Entrées & spécialités tandoori', subtitle: 'Starters · Tandoori specialities',
    note: "Le tandoor est un four en terre cuite où l’on cuit le pain, la viande et le poisson. Viandes et poissons sont marinés au yaourt et aux épices, puis grillés au tandoor.",
    dishes: [
      { name: 'Brochettes Kebab', english: 'Seekh Kebab', detail: '2 pièces', description: "Brochettes d’agneau haché à la menthe, coriandre, gingembre et ail, grillées au tandoor.", englishDescription: 'Minced lamb skewers with mint, coriander, ginger and garlic, grilled in the tandoor.', price: '6,00 €' },
      { name: 'Agneau Tikka', english: 'Lamb Tikka', detail: '3 à 4 pièces', description: "Morceaux d’agneau désossés, marinés puis grillés au tandoor.", englishDescription: 'Boneless lamb pieces, marinated and grilled in the tandoor.', price: '9,00 €' },
      { name: 'Bara Kabab', description: "Souris d’agneau marinée et grillée au tandoor.", englishDescription: 'Marinated lamb shank, grilled in the tandoor.', price: '19,00 €' },
      { name: 'Poulet Tandoori', english: 'Tandoori Chicken', description: 'Une cuisse de poulet marinée et grillée au tandoor.', englishDescription: 'Chicken thigh, marinated and grilled in the tandoor.', price: '7,00 €' },
      { name: 'Poulet Tikka', english: 'Chicken Tikka', detail: '3 à 4 pièces', description: 'Morceaux de blanc de poulet, marinés et grillés au tandoor.', englishDescription: 'Chicken breast pieces, marinated and grilled in the tandoor.', price: '9,00 €' },
      { name: 'Poisson Tikka', english: 'Fish Tikka', detail: '2 pièces', description: 'Filet de saumon mariné et grillé au tandoor.', englishDescription: 'Salmon fillet, marinated and grilled in the tandoor.', price: '9,00 €' },
      { name: 'Gambas Tandoori', english: 'Tandoori King Prawns', detail: '5 pièces', description: 'Gambas grillées au tandoor.', englishDescription: 'King prawns grilled in the tandoor.', price: '19,00 €' },
      { name: 'Mixed Grill', detail: 'Pour 2 personnes · 10 pièces (2 de chaque)', description: 'Assortiment tandoori : agneau, poulet, gambas, brochettes kebab et samoussa légumes.', englishDescription: 'Tandoori assortment: lamb, chicken, king prawns, seekh kebab and vegetable samosa.', price: '32,00 €' },
      { name: 'Samoussa Légumes', english: 'Vegetable Samosa', detail: '2 pièces', description: 'Chaussons aux pommes de terre, petits pois, cumin et coriandre.', englishDescription: 'Crispy pastries filled with potatoes, peas, cumin and coriander.', price: '6,50 €' },
      { name: 'Samoussa Agneau', english: 'Lamb Samosa', detail: '2 pièces', description: "Chaussons farcis à l’agneau haché, petits pois, cumin et coriandre.", englishDescription: 'Crispy pastries filled with minced lamb, peas, cumin and coriander.', price: '7,00 €' },
      { name: 'Pakora de légumes', english: 'Vegetable Pakora', description: 'Beignets à la farine de pois chiche et aux épices : pomme de terre (7 pièces) et aubergine (2 pièces).', englishDescription: 'Spiced fritters in chickpea batter: potato (7 pieces) and aubergine (2 pieces).', price: '6,00 €' },
      { name: 'Pakora de poisson', english: 'Fish Pakora', detail: '5 pièces', description: 'Beignets de cabillaud à la farine de pois chiche et aux épices.', englishDescription: 'Spiced cod fritters in chickpea batter.', price: '7,00 €' },
      { name: 'Oignons Bajia', english: 'Onion Bajia', detail: '8 pièces', description: "Beignets d’oignon à la farine de pois chiche et aux épices.", englishDescription: 'Spiced onion fritters in chickpea batter.', price: '6,00 €' },
      { name: 'Mix Pakora', detail: '14 pièces', description: 'Beignets de légumes : oignons (6 pièces), pomme de terre (6 pièces) et aubergine (2 pièces).', englishDescription: 'Vegetable fritters: onion (6 pieces), potato (6 pieces) and aubergine (2 pieces).', price: '10,00 €' },
      { name: 'Crevettes Pakora', english: 'Prawn Pakora', detail: '8 pièces', description: 'Beignets de crevettes aux épices, à la farine de pois chiche.', englishDescription: 'Spiced prawn fritters in chickpea batter.', price: '7,00 €' },
      { name: 'Raita', description: 'Yaourt, tomates, concombre, carottes, fruits frais, cumin et coriandre fraîche.', englishDescription: 'Yoghurt, tomatoes, cucumber, carrots, fresh fruit, cumin and fresh coriander.', price: '6,00 €' },
      { name: 'Crevettes Raita', english: 'Shrimp Raita', description: 'Raita avec des crevettes décortiquées.', englishDescription: 'Raita with peeled shrimp.', price: '7,00 €' },
      { name: 'Salade de Poulet', english: 'Chicken Salad', description: 'Salade fraîche, concombre, tomate, maïs, carottes et poulet tikka.', englishDescription: 'Fresh salad with cucumber, tomato, corn, carrots and chicken tikka.', price: '7,00 €' },
      { name: 'Salade de Crevettes', english: 'Shrimp Salad', description: 'Salade fraîche, concombre, tomate, maïs, carottes et crevettes décortiquées.', englishDescription: 'Fresh salad with cucumber, tomato, corn, carrots and peeled shrimp.', price: '7,00 €' },
    ],
  },
  {
    id: 'pains', title: 'Pains maison', subtitle: 'Homemade naan',
    note: 'Naans cuits au tandoor avec de la farine blanche. Tous nos naans sont badigeonnés de ghee (beurre clarifié).',
    dishes: [
      { name: 'Naan', description: 'Pain moelleux à la pâte levée, au beurre, yaourt et lait, cuit au tandoor.', englishDescription: 'Soft leavened bread with butter, yoghurt and milk, baked in the tandoor.', price: '2,00 €' },
      { name: 'Sabzi Naan', description: 'Naan farci aux pommes de terre épicées, parsemé de coriandre fraîche.', englishDescription: 'Naan stuffed with spiced potatoes, topped with fresh coriander.', price: '3,50 €' },
      { name: 'Cheese Naan', description: 'Naan farci au fromage.', englishDescription: 'Naan stuffed with cheese.', price: '3,50 €' },
      { name: 'Garlic Naan', description: "Naan farci à l’ail, parsemé de coriandre fraîche.", englishDescription: 'Naan stuffed with garlic, topped with fresh coriander.', price: '4,00 €' },
      { name: 'Garlic Cheese Naan', description: "Naan farci au fromage et à l’ail, parsemé de coriandre fraîche.", englishDescription: 'Naan stuffed with cheese and garlic, topped with fresh coriander.', price: '6,00 €' },
      { name: 'Naan Keema', description: "Naan farci à la viande d’agneau hachée et épicée, parsemé de coriandre fraîche.", englishDescription: 'Naan stuffed with spiced minced lamb, topped with fresh coriander.', price: '4,00 €' },
      { name: 'Chapati', description: 'Galette fine sans levain, à la farine complète.', englishDescription: 'Thin unleavened whole wheat flatbread.', price: '2,00 €' },
    ],
  },
  {
    id: 'biryanis', title: 'Biryanis',
    note: "Le biryani est un plat complet de riz basmati parfumé aux épices, préparé avec l’agneau, le poulet, les crevettes ou les légumes de votre choix. Il est garni de noix de coco râpée, d’amandes, de noix de cajou, de raisins secs et de fruits frais.",
    dishes: [
      { name: 'Agneau Biryani', english: 'Lamb Biryani', price: '19,00 €' },
      { name: 'Poulet Biryani', english: 'Chicken Biryani', price: '16,00 €' },
      { name: 'Crevettes Biryani', english: 'Prawn Biryani', price: '17,00 €' },
      { name: 'Légumes Biryani', english: 'Vegetable Biryani', price: '14,00 €' },
      { name: 'Taj Biryani', description: 'Avec agneau, poulet et crevettes.', englishDescription: 'With lamb, chicken and prawns.', price: '21,00 €' },
    ],
  },
  {
    id: 'agneau', title: 'Plats à l’agneau', navLabel: 'Plats à l’agneau', subtitle: 'Lamb',
    dishes: [
      { name: 'Roghan Josh', description: 'Tendres morceaux d’agneau préparés avec des oignons, des tomates et des poivrons verts dans une sauce.', englishDescription: 'Tender pieces of lamb cooked with onions, tomatoes and green peppers in a sauce.', price: '14,00 €' },
      { name: 'Agneau Korma', english: 'Lamb Korma', description: 'Morceaux d’agneau préparés avec des épices douces et des fruits secs dans une sauce à la crème.', englishDescription: 'Pieces of lamb cooked with mild spices and dried fruit in a cream sauce.', price: '14,00 €' },
      { name: 'Agneau Tikka Masala', english: 'Lamb Tikka Masala', description: 'Agneau mariné, grillé au tandoor puis préparé avec de la crème, des épices, des oignons, des tomates et des poivrons verts.', englishDescription: 'Marinated lamb grilled in the tandoor, then cooked with cream, spices, onions, tomatoes and green peppers.', price: '14,00 €' },
      { name: 'Agneau Palak (Saag Gosht)', english: 'Lamb Palak', description: 'Agneau préparé avec des épinards, des tomates et une sauce épicée.', englishDescription: 'Lamb cooked with spinach, tomatoes and a spicy sauce.', price: '15,00 €' },
      { name: 'Agneau Daal (Daal Gosht)', english: 'Lamb Daal', description: 'Agneau préparé avec des lentilles, des tomates et une sauce épicée.', englishDescription: 'Lamb cooked with lentils, tomatoes and a spicy sauce.', price: '15,00 €' },
      { name: 'Agneau Madras', english: 'Lamb Madras', description: 'Spécialité de Madras : curry d’agneau bien épicé et relevé.', englishDescription: 'A Madras speciality: hot and spicy lamb curry.', price: '14,00 €' },
      { name: 'Agneau Vindaloo', english: 'Lamb Vindaloo', description: 'Spécialité du sud : curry d’agneau à la sauce vindaloo, plus forte que la sauce Madras.', englishDescription: 'A southern speciality: lamb curry in vindaloo sauce, hotter than Madras.', price: '14,00 €' },
      { name: 'Keema Matar', description: 'Agneau haché préparé avec des petits pois dans une sauce moyennement épicée.', englishDescription: 'Minced lamb with peas in a medium-spiced sauce.', price: '12,00 €' },
      { name: 'Bara Kabab Masala', description: 'Souris d’agneau marinée et grillée au tandoor, avec oignons, tomates et poivrons verts dans sa sauce.', englishDescription: 'Marinated lamb shank grilled in the tandoor, with onions, tomatoes and green peppers in its sauce.', price: '22,00 €' },
    ],
  },
  {
    id: 'poulet', title: 'Plats au poulet', navLabel: 'Plats au poulet', subtitle: 'Chicken',
    note: 'Pour les prix indiqués sous la forme « cuisse | blanc de poulet », le premier tarif correspond à la cuisse et le second au blanc.',
    dishes: [
      { name: 'Poulet Curry', english: 'Chicken Curry', description: 'Le plat le plus populaire de l’Inde. Sauce aux tomates, à la coriandre et aux épices.', englishDescription: 'The most popular dish in India. A sauce with tomatoes, coriander and spices.', price: '12,00 € (cuisse) | 14,00 € (blanc)' },
      { name: 'Poulet Korma', english: 'Chicken Korma', description: 'Cuisiné avec des épices douces et des fruits secs.', englishDescription: 'Cooked with mild spices and dried fruit.', price: '14,00 €' },
      { name: 'Poulet Karahi', english: 'Chicken Karahi', description: 'Cuisiné avec des tomates, de la coriandre, des poivrons, des oignons et du jus de citron.', englishDescription: 'Cooked with tomatoes, coriander, peppers, onions and lemon juice.', price: '14,00 €' },
      { name: 'Poulet Tikka Masala', english: 'Chicken Tikka Masala', description: 'Grillé au tandoor, puis cuisiné dans une sauce épicée avec tomates, coriandre, poivrons et oignon.', englishDescription: 'Grilled in the tandoor, then cooked in a spicy sauce with tomatoes, coriander, peppers and onion.', price: '14,00 €' },
      { name: 'Poulet Palak', english: 'Chicken Palak', description: 'Poulet cuisiné dans une sauce épicée aux épinards, tomates et coriandre.', englishDescription: 'Chicken cooked in a spicy sauce with spinach, tomatoes and coriander.', price: '12,50 € (cuisse) | 14,50 € (blanc)' },
      { name: 'Poulet Madras', english: 'Chicken Madras', description: 'Spécialité de Madras : curry de poulet bien épicé et relevé, avec tomates et coriandre.', englishDescription: 'A Madras speciality: hot and spicy chicken curry with tomatoes and coriander.', price: '12,00 € (cuisse) | 14,00 € (blanc)' },
      { name: 'Poulet Vindaloo', english: 'Chicken Vindaloo', description: 'Spécialité du sud : curry de poulet à la sauce vindaloo, plus forte que la sauce Madras.', englishDescription: 'A southern speciality: chicken curry in vindaloo sauce, hotter than Madras.', price: '12,00 € (cuisse) | 14,00 € (blanc)' },
      { name: 'Butter Chicken', description: 'Poulet grillé avec de la sauce, du beurre et des fruits secs.', englishDescription: 'Grilled chicken in a sauce with butter and dried fruit.', price: '12,00 € (cuisse) | 14,00 € (blanc)' },
      { name: 'Kofta', description: 'Boulettes de poulet aux épices, coriandre, ail et gingembre. Sauce au choix : curry, madras ou vindaloo.', englishDescription: 'Chicken meatballs with spices, coriander, garlic and ginger. Choice of curry, madras or vindaloo sauce.', price: '14,00 €' },
    ],
  },
  {
    id: 'crevettes', title: 'Plats aux crevettes', navLabel: 'Plats aux crevettes', subtitle: 'Prawns',
    dishes: [
      { name: 'Crevettes Curry', english: 'Prawn Curry', description: 'Crevettes dans une sauce épicée avec tomates et coriandre.', englishDescription: 'Prawns in a spicy sauce with tomatoes and coriander.', price: '12,00 €' },
      { name: 'Crevettes Korma', english: 'Prawn Korma', description: 'Crevettes dans une sauce crémeuse aux épices douces et aux fruits secs.', englishDescription: 'Prawns in a creamy sauce with mild spices and dried fruit.', price: '14,00 €' },
      { name: 'Crevettes Madras', english: 'Prawn Madras', description: 'Spécialité de Madras : curry de crevettes bien épicé et relevé, avec tomates et coriandre.', englishDescription: 'A Madras speciality: hot and spicy prawn curry with tomatoes and coriander.', price: '12,00 €' },
      { name: 'Crevettes Vindaloo', english: 'Prawn Vindaloo', description: 'Spécialité du sud : curry de crevettes à la sauce vindaloo, plus forte que la sauce Madras.', englishDescription: 'A southern speciality: prawn curry in vindaloo sauce, hotter than Madras.', price: '12,00 €' },
      { name: 'Crevettes Masala', english: 'Prawn Masala', description: 'Crevettes dans une sauce épicée à la coriandre.', englishDescription: 'Prawns in a spicy coriander sauce.', price: '14,00 €' },
      { name: 'Gambas Spéciales', english: 'Special King Prawns', description: 'Gambas grillées au tandoor, servies dans une sauce crémeuse aux épices douces et aux fruits secs.', englishDescription: 'King prawns grilled in the tandoor, served in a creamy sauce with mild spices and dried fruit.', price: '22,00 €' },
    ],
  },
  {
    id: 'poisson', title: 'Plats au poisson', navLabel: 'Plats au poisson', subtitle: 'Fish',
    dishes: [
      { name: 'Poisson Curry', english: 'Fish Curry', description: 'Saumon mariné et grillé au tandoor, cuisiné dans une sauce épicée avec tomates et coriandre.', englishDescription: 'Marinated salmon grilled in the tandoor, cooked in a spicy sauce with tomatoes and coriander.', price: '14,00 €' },
      { name: 'Poisson Tikka Masala', english: 'Fish Tikka Masala', description: 'Saumon mariné et grillé au tandoor, puis préparé dans une sauce épicée à la coriandre.', englishDescription: 'Marinated salmon grilled in the tandoor, then cooked in a spicy coriander sauce.', price: '14,00 €' },
      { name: 'Poisson Madras', english: 'Fish Madras', description: 'Spécialité de Madras : curry de saumon bien épicé et relevé, avec tomates et coriandre.', englishDescription: 'A Madras speciality: hot and spicy salmon curry with tomatoes and coriander.', price: '14,00 €' },
      { name: 'Poisson Vindaloo', english: 'Fish Vindaloo', description: 'Spécialité du sud : curry de saumon à la sauce vindaloo, plus forte que la sauce Madras.', englishDescription: 'A southern speciality: salmon curry in vindaloo sauce, hotter than Madras.', price: '14,00 €' },
      { name: 'Poisson Palak', english: 'Fish Palak', description: 'Saumon mariné et grillé au tandoor, cuisiné avec une sauce épicée aux épinards, tomates et coriandre.', englishDescription: 'Marinated salmon grilled in the tandoor, cooked in a spicy sauce with spinach, tomatoes and coriander.', price: '15,00 €' },
    ],
  },
  {
    id: 'legumes', title: 'Plats végétariens', subtitle: 'Vegetarian dishes',
    dishes: [
      { name: 'Légumes Korma', english: 'Vegetable Korma', description: 'Pommes de terre, chou-fleur, carottes, aubergines, petits pois et fruits secs.', englishDescription: 'Potatoes, cauliflower, carrots, aubergines, peas and dried fruit.', price: '10,00 €' },
      { name: 'Palak Paneer', english: 'Spinach Paneer', description: 'Épinards cuisinés au fromage, tomates et coriandre dans une sauce légèrement épicée.', englishDescription: 'Spinach cooked with cheese, tomatoes and coriander in a mildly spiced sauce.', price: '9,00 €' },
      { name: 'Matar Paneer', description: 'Petits pois cuisinés au fromage, tomates et coriandre dans une sauce légèrement épicée.', englishDescription: 'Peas cooked with cheese, tomatoes and coriander in a mildly spiced sauce.', price: '9,00 €' },
      { name: 'Légumes Curry', english: 'Vegetable Curry', description: 'Mélange de légumes au curry : pommes de terre, chou-fleur, carottes, petits pois et aubergines.', englishDescription: 'A selection of vegetables in a curry sauce: potatoes, cauliflower, carrots, peas and aubergines.', price: '9,00 €' },
      { name: 'Baigan Burtha', description: 'Caviar d’aubergine aux tomates, oignons et coriandre.', englishDescription: 'Aubergine caviar with tomatoes, onions and coriander.', price: '10,00 €' },
      { name: 'Dal', description: 'Lentilles cuisinées dans une sauce légèrement épicée avec tomates et coriandre.', englishDescription: 'Lentils cooked in a mildly spiced sauce with tomatoes and coriander.', price: '10,00 €' },
    ],
  },
  {
    id: 'riz', title: 'Riz basmati', subtitle: 'Basmati rice',
    dishes: [
      { name: 'Riz', english: 'Rice', description: 'Préparé avec du laurier, de la cannelle, des clous de girofle, du cumin, de la cardamome et du safran.', englishDescription: 'Prepared with bay leaf, cinnamon, cloves, cumin, cardamom and saffron.', price: '3,00 €' },
      { name: 'Riz Kashmiri', english: 'Kashmiri Rice', description: 'Riz préparé avec des fruits secs et du safran.', englishDescription: 'Rice with dried fruit and saffron.', price: '5,00 €' },
      { name: 'Riz Légumes', english: 'Vegetable Rice', description: 'Riz préparé avec des légumes, tomates et coriandre.', englishDescription: 'Rice with vegetables, tomatoes and coriander.', price: '6,00 €' },
    ],
  },
  {
    id: 'desserts', title: 'Desserts', dishes: [
      { name: 'Halwa', description: 'Gâteau de semoule avec cardamome et noix de coco.', englishDescription: 'Semolina cake with cardamom and coconut.', price: '5,00 €' },
      { name: 'Gulab Jamun', description: 'Boules moelleuses à base de lait, frites puis imbibées d’un sirop à la cardamome et saupoudrées de noix de coco râpée.', englishDescription: 'Soft milk-based dumplings, fried then soaked in cardamom syrup and sprinkled with grated coconut.', price: '6,00 €' },
      { name: 'Kulfi', description: 'Glace maison avec mangue, crème, amandes, noix de cajou, noix de coco, cardamome et une touche de sirop de rose.', englishDescription: 'Homemade ice cream with mango, cream, almonds, cashew nuts, coconut, cardamom and a hint of rose syrup.', price: '6,00 €' },
      { name: 'Glace', description: 'Vanille, chocolat, café, rose ou pistache.', englishDescription: 'Vanilla, chocolate, coffee, rose or pistachio.', price: '2 boules : 5,00 € · 3 boules : 7,00 €' },
      { name: 'Sorbet', description: 'Citron vert, coco, fruit de la passion, fraise, banane ou mangue.', englishDescription: 'Lime, coconut, passion fruit, strawberry, banana or mango.', price: '2 boules : 6,00 € · 3 boules : 8,00 €' },
      { name: 'Irish Coffee', description: 'Café chaud, whisky irlandais et sucre de canne, surmonté de crème fouettée.', englishDescription: 'Hot coffee, Irish whiskey and cane sugar, topped with whipped cream.', price: '8,00 €' },
      { name: 'Colonel', description: 'Sorbet citron vert arrosé de vodka.', englishDescription: 'Lime sorbet with a shot of vodka.', price: '8,00 €' },
    ],
  },
  {
    id: 'boissons', title: 'Boissons', subtitle: 'Drinks',
    groups: [
      { title: 'Alcool', dishes: [
        { name: 'Heineken (33 cl)', price: '4,00 €' }, { name: '1664 (33 cl)', price: '4,00 €' }, { name: 'Bière indienne - Kingfisher (33 cl)', price: '6,00 €' },
      ] },
      { title: 'Eau', dishes: [
        { name: 'Evian (1 L)', price: '6,00 €' }, { name: 'Evian (50 cl)', price: '4,00 €' }, { name: 'Badoit (1 L)', price: '6,00 €' }, { name: 'Badoit (1/2 L)', price: '4,00 €' },
      ] },
      { title: 'Boissons sans alcool', dishes: [
        { name: 'Lassi (mangue, banane ou rose) (50 cl)', price: '6,00 €' }, { name: 'Lassi nature (salé ou sucré) (50 cl)', price: '6,00 €' }, { name: 'Lassi menthe (salé ou sucré) (50 cl)', price: '6,00 €' }, { name: 'Coca Cola (33 cl)', price: '4,00 €' }, { name: 'Jus Maaza (goyave, mangue ou litchi) (33 cl)', price: '4,00 €' },
      ] },
      { title: 'Boissons chaudes', dishes: [
        { name: 'Café', price: '1,75 €' }, { name: 'Thé masala', price: '3,00 €' }, { name: 'Thé menthe', price: '3,00 €' }, { name: 'Chai', description: 'Thé indien avec du lait.', price: '5,00 €' },
      ] },
      { title: 'Apéritifs (15 cl)', dishes: [
        { name: 'Cocktail maison', price: '5,00 €' }, { name: 'Cocktail Bombay', price: '5,00 €' }, { name: 'Kir', price: '4,00 €' }, { name: 'Martini', price: '5,00 €' }, { name: 'Ricard', price: '5,00 €' }, { name: 'Johnnie Walker Red Label', price: '6,00 €' }, { name: 'J&B', price: '6,00 €' }, { name: 'Chivas Regal', price: '7,00 €' },
      ] },
      { title: 'Digestifs (5 cl)', dishes: [
        { name: 'Cognac autre', price: '6,00 €' }, { name: 'Armagnac', price: '6,00 €' }, { name: 'Poire Williams', price: '6,00 €' }, { name: 'Marie Brizard', price: '6,00 €' }, { name: 'Get 27', price: '6,00 €' },
      ] },
    ],
  },
  {
    id: 'vins', title: 'Carte des vins', subtitle: 'Wine list',
    note: 'Les contenances et tarifs affichés reprennent ceux indiqués sur le menu.',
    groups: [
      { title: 'Les rouges A.O.C.', dishes: [
        { name: 'Grover indien', price: '25,00 € (75 cl) · 14,00 € (37,5 cl)' }, { name: 'Côtes du Rhône (Domaine Perrin)', price: '25,00 € (75 cl)' }, { name: 'Vacqueyras (Domaine de la Souleiade)', price: '25,00 € (75 cl)' }, { name: 'Bordeaux', price: '25,00 € (75 cl)' }, { name: 'Brouilly', price: '25,00 € (75 cl)' }, { name: 'Saint-Émilion', price: '25,00 € (75 cl)' }, { name: 'Saumur Champigny', price: '22,00 € (75 cl)' }, { name: 'Vin de table rouge', price: '6,00 € (50 cl) · 4,00 € (25 cl)' },
      ] },
      { title: 'Les rosés', dishes: [
        { name: 'Grover indien', price: '25,00 € (75 cl) · 14,00 € (37,5 cl)' }, { name: 'Provence (Real)', price: '25,00 € (75 cl)' }, { name: 'Tavel', price: '25,00 € (75 cl)' }, { name: 'Bandol (Château Barthès)', price: '25,00 € (75 cl)' }, { name: 'Vin de table rosé', price: '6,00 € (50 cl) · 4,00 € (25 cl)' },
      ] },
      { title: 'Les blancs', dishes: [
        { name: 'Grover indien', price: '25,00 € (75 cl) · 14,00 € (37,5 cl)' },
      ] },
    ],
  },
];

export type Choice = { name: string; description?: string };
export type FixedPart = { heading: string; description?: string; choices?: Choice[]; options?: string[] };
export type SetMenu = { id: string; name: string; price: string; note?: string; parts: FixedPart[] };

export const setMenus: SetMenu[] = [
  {
    id: 'midi', name: 'Menu Midi', price: '12,90 € / personne',
    note: 'Hors week-ends et jours fériés. Café et naan en supplément.',
    parts: [
      { heading: 'Entrée au choix', choices: [
        { name: 'Pakora de légumes (6 pièces)' }, { name: 'Pakora de poisson (4 à 5 pièces)' }, { name: 'Oignons Bajia (6 pièces)' }, { name: 'Poulet Tandoori', description: 'Une cuisse marinée et grillée au tandoor.' }, { name: 'Raita' },
      ] },
      { heading: 'Plat principal au choix', choices: [
        { name: 'Poulet Curry' }, { name: 'Poisson Curry', description: 'Cabillaud cuisiné dans une sauce épicée avec tomates et coriandre.' }, { name: 'Crevettes Curry' }, { name: 'Keema Matar' }, { name: 'Légumes Curry' },
      ] },
      { heading: 'Avec', description: 'Riz Basmati' },
      { heading: 'Dessert au choix', options: ['Halwa', '2 boules de glace', 'Salade de fruits'], description: 'Glace : vanille, chocolat, café, rose ou pistache.' },
    ],
  },
  {
    id: 'chef', name: 'Menu du Chef', price: '29 € / personne',
    parts: [
      { heading: 'Entrée au choix', choices: [
        { name: 'Brochettes Kebab (2 pièces)', description: 'Brochettes d’agneau haché à la menthe, coriandre, gingembre et ail, grillées au tandoor.' },
        { name: 'Poulet Tikka (3 à 4 pièces)', description: 'Morceaux de blanc de poulet marinés et grillés au tandoor.' },
        { name: 'Samoussa Légumes (2 pièces)', description: 'Chaussons aux pommes de terre, petits pois, cumin et coriandre.' },
        { name: 'Raita', description: 'Yaourt, tomates, concombre, carottes, fruits, cumin et coriandre fraîche.' },
      ] },
      { heading: 'Avec', description: 'Naan' },
      { heading: 'Plat principal au choix', choices: [
        { name: 'Crevettes Masala' }, { name: 'Poulet Curry' }, { name: 'Poisson Tikka Masala' }, { name: 'Agneau Curry', description: 'Morceaux d’agneau dans une sauce aux tomates, oignons et épices.' },
      ] },
      { heading: 'Avec', description: 'Riz Basmati' },
      { heading: 'Dessert au choix', options: ['Kulfi (glace indienne)', 'Glace ou sorbet (2 boules)', 'Halwa', 'Gulab Jamun', 'Salade de fruits'] },
    ],
  },
  {
    id: 'gourmet', name: 'Menu Gourmet', price: '65 € / 2 personnes',
    parts: [
      { heading: 'Entrée à partager', description: 'Mixed Grill : 10 pièces, soit 2 de chaque. Assortiment tandoori avec agneau, poulet, gambas, brochettes kebab et samoussa légumes.' },
      { heading: 'Avec', options: ['Cheese Naan', 'Sabzi Naan'] },
      { heading: '2 plats au choix', description: '1 plat par personne', choices: [
        { name: 'Poisson Curry' }, { name: 'Crevettes Masala' }, { name: 'Poulet Vindaloo' }, { name: 'Roghan Josh' },
      ] },
      { heading: 'Accompagnements', options: ['2 riz basmati', 'ou 1 riz basmati et 1 Légumes Curry'] },
      { heading: '2 desserts au choix', description: '1 dessert par personne', options: ['Kulfi (glace indienne)', 'Glace ou sorbet (2 boules)', 'Halwa', 'Gulab Jamun', 'Salade de fruits'] },
    ],
  },
];

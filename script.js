const products = {
  "Americano": {
    name: "Americano",
    price: "RM 9.00",
    desc: "A bold and classic black coffee made with premium espresso and hot water.",
    ingredients: "Espresso, hot water",
    img: "img/americano.jpg"
  },
  "Boom Boom Chocolate": {
    name: "Boom Boom Chocolate",
    price: "RM 10.90",
    desc: "Rich, velvety chocolate blended with creamy milk for a full-bodied indulgence.",
    ingredients: "Chocolate syrup, milk, whipped cream",
    img: "img/boom-boom-chocolate.jpg"
  },
  "Boom Boom Matcha": {
    name: "Boom Boom Matcha",
    price: "RM 10.90",
    desc: "Earthy Japanese matcha blended with milk for a smooth, energizing drink.",
    ingredients: "Matcha powder, milk, sweetener",
    img: "img/boom-boom-matcha.jpg"
  },
  "Boom Boom Milk Tea": {
    name: "Boom Boom Milk Tea",
    price: "RM 10.90",
    desc: "A perfect fusion of robust black tea and creamy milk with a hint of sweetness.",
    ingredients: "Black tea, milk, sugar",
    img: "img/boom-boom-milktea.jpg"
  },
  "Boom Boom Milk": {
    name: "Boom Boom Milk",
    price: "RM 9.00",
    desc: "Pure and simple – creamy cold milk, served smooth and refreshing.",
    ingredients: "Fresh milk, syrup (optional)",
    img: "img/boom-boom-milk.jpg"
  },
  "Caramel Macchiato": {
    name: "Caramel Macchiato",
    price: "RM 9.00",
    desc: "Espresso layered with steamed milk and rich caramel drizzle on top.",
    ingredients: "Espresso, milk, caramel syrup",
    img: "img/caramel-macchiato.jpg"
  },
  "Classic Coco": {
    name: "Classic Coco",
    price: "RM 8.50",
    desc: "Classic chocolate milk drink for cocoa lovers – nostalgic and comforting.",
    ingredients: "Cocoa, milk, sugar",
    img: "img/classic-coco.jpg"
  },
  "Hazelnut Coco": {
    name: "Hazelnut Coco",
    price: "RM 9.00",
    desc: "Chocolate milk with a nutty twist – the perfect combo of cocoa and hazelnut.",
    ingredients: "Cocoa, hazelnut syrup, milk",
    img: "img/hazelnut-coco.jpg"
  },
  "Hazelnut Latte": {
    name: "Hazelnut Latte",
    price: "RM 9.00",
    desc: "Smooth espresso with steamed milk and aromatic hazelnut flavor.",
    ingredients: "Espresso, milk, hazelnut syrup",
    img: "img/hazelnut-latte.jpg"
  },
  "Matcha Latte": {
    name: "Matcha Latte",
    price: "RM 9.00",
    desc: "Creamy and calming – finely ground matcha whisked with milk.",
    ingredients: "Matcha powder, milk, sugar",
    img: "img/matcha-latte.jpg"
  },
  "Original Milk Tea": {
    name: "Original Milk Tea",
    price: "RM 8.50",
    desc: "Simple and satisfying – traditional milk tea that never disappoints.",
    ingredients: "Black tea, milk, sugar",
    img: "img/original-milktea.jpg"
  },
  "Roasted Milk Tea with Grass Jelly": {
    name: "Roasted Milk Tea with Grass Jelly",
    price: "RM 10.90",
    desc: "Toasty milk tea paired with bouncy grass jelly for extra texture.",
    ingredients: "Roasted tea, milk, grass jelly, sugar",
    img: "img/roasted-milktea.jpg"
  },
  "Signature Brown Sugar Pearl Milk Tea": {
    name: "Signature Brown Sugar Pearl Milk Tea",
    price: "RM 10.90",
    desc: "Sweet brown sugar syrup, chewy pearls, and fresh milk – our best-seller!",
    ingredients: "Brown sugar syrup, tapioca pearls, milk",
    img: "img/brown-sugar-milktea.jpg"
  },
  "Snowy Coco Oreo Smoothie": {
    name: "Snowy Coco Oreo Smoothie",
    price: "RM 11.90",
    desc: "Creamy chocolate smoothie with crunchy Oreo bits for a delightful treat.",
    ingredients: "Chocolate base, milk, Oreo cookies, ice",
    img: "img/snowy-coco-oreo.jpg"
  },
  "Snowy Double Coco Oreo Smoothie (With Coffee)": {
    name: "Snowy Double Coco Oreo Smoothie (With Coffee)",
    price: "RM 12.90",
    desc: "Rich chocolate meets coffee and Oreo – for serious flavor lovers.",
    ingredients: "Chocolate, coffee, Oreo, milk, ice",
    img: "img/snowy-double-coco-oreo.jpg"
  },
  "Snowy Double Coco": {
    name: "Snowy Double Coco",
    price: "RM 11.90",
    desc: "Double the chocolate, double the fun – extra cocoa for chocoholics.",
    ingredients: "Chocolate syrup, cocoa powder, milk, ice",
    img: "img/snowy-double-coco.jpg"
  },
  "Snowy Mango Passionfruit Smoothie": {
    name: "Snowy Mango Passionfruit Smoothie",
    price: "RM 12.90",
    desc: "Tropical vibes in a cup! Sweet mango blended with zesty passionfruit.",
    ingredients: "Mango puree, passionfruit syrup, ice",
    img: "img/snowy-mango-passionfruit.jpg"
  },
  "Snowy Matcha Smoothie": {
    name: "Snowy Matcha Smoothie",
    price: "RM 11.90",
    desc: "Cool and creamy matcha smoothie – earthy, fresh and energizing.",
    ingredients: "Matcha powder, milk, ice, sweetener",
    img: "img/snowy-matcha.jpg"
  },
  "Strawberry Pudding Smoothie": {
    name: "Strawberry Pudding Smoothie",
    price: "RM 12.90",
    desc: "Sweet strawberry smoothie with soft pudding bits – refreshing and fun.",
    ingredients: "Strawberry puree, milk, pudding, ice",
    img: "img/strawberry-pudding.jpg"
  },
  "Bolognese Chicken Slice With Popcorn Chicken": {
    name: "Bolognese Chicken Slice With Popcorn Chicken",
    price: "RM 13.00",
    desc: "Macaroni with bolognese sauce, topped with juicy chicken slices and crispy popcorn chicken.",
    ingredients: "Macaroni, bolognese sauce, chicken slices, popcorn chicken, herbs",
    img: "img/bolognese-popcorn.jpg"
  },
  "Bolognese Chicken Slice": {
    name: "Bolognese Chicken Slice",
    price: "RM 13.90",
    desc: "Macaroni pasta smothered in rich bolognese sauce, topped with juicy sliced chicken.",
    ingredients: "Macaroni, bolognese sauce, chicken slices, herbs",
    img: "img/bolognese-chicken-slice.jpg"
  },
  "Cheezy Chicken Roll Banjir": {
    name: "Cheezy Chicken Roll Banjir",
    price: "RM 13.90",
    desc: "Crispy chicken rolls drenched in creamy cheese sauce – ‘banjir’ style!",
    ingredients: "Chicken roll, cheese sauce, fries (optional)",
    img: "img/cheezy-chicken-roll.jpg"
  },
  "Creamy Carbonara": {
    name: "Creamy Carbonara",
    price: "RM 11.90",
    desc: "Silky cream sauce pasta with bits of chicken and cheese – a Western fave!",
    ingredients: "Spaghetti, cream, chicken, cheese, herbs",
    img: "img/creamy-carbonara.jpg"
  },
  "Korean Spicy": {
    name: "Korean Spicy",
    price: "RM 12.90",
    desc: "Spicy and savory Korean-style dish with gochujang-based sauce – kick your tastebuds!",
    ingredients: "Korean spicy sauce, chicken or noodles, sesame seeds",
    img: "img/korean-spicy.jpg"
  },
  "Original Chicken Roll": {
    name: "Original Chicken Roll",
    price: "RM 10.90",
    desc: "Golden fried chicken rolls served hot and crispy – perfect snack or side.",
    ingredients: "Chicken roll, seasoning, dipping sauce",
    img: "img/original-chicken-roll.jpg"
  }
};

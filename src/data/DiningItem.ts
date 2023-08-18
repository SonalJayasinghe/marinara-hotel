export interface DiningItem {
    cardUrl: string,
    cuisine: string,
    meat: string,
    halal?: boolean
    name: string,
  }
  
  export const Dining_Item: Array<DiningItem> = [
    {
      cardUrl: "src/assets/diningAssests/seafood_pasta.jpg",
      cuisine: "Italian",
      meat: "Prawns",
      name: "Pasta Carbonara with Local Prawns",
    },

    {
        cardUrl: "src/assets/diningAssests/pizza.jpg",
        cuisine: "Italian",
        meat: "Chicken",
        name: "Cheesy Chicken Pizza",
      },

      {
        cardUrl: "src/assets/diningAssests/pancake.jpg",
        cuisine: "English",
        meat: "Veg",
        halal: true,
        name: "Pancake With Sliced Strawberry"
      },

      {
        cardUrl: "src/assets/diningAssests/burger.jpg",
        cuisine: "American",
        meat: "Beef",
        name: "Classic Beef Burger",
      },

      {
        cardUrl: "src/assets/diningAssests/ramen.jpg",
        cuisine: "Korean",
        meat: "Pork",
        name: "Ramen Noodles With Pork",
      },
      {
        cardUrl: "src/assets/diningAssests/rice.jpg",
        cuisine: "Sri Lankan",
        meat: "Prawns",
        name: "Sri Lankan Prawns Rice",
      },

  ];
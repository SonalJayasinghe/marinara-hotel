export interface DiningItem {
    cardUrl: string,
    cuisine: string,
    meat: string,
    halal?: boolean
    name: string,
  }
  
  export const Dining_Item: Array<DiningItem> = [
    {
      cardUrl: "./assets/diningAssests/seafood_pasta.jpg",
      cuisine: "Italian",
      meat: "Prawns",
      name: "Pasta Carbonara with Local Prawns",
    },

    {
        cardUrl: "./assets/diningAssests/pizza.jpg",
        cuisine: "Italian",
        meat: "Chicken",
        name: "Cheesy Chicken Pizza",
      },

      {
        cardUrl: "./assets/diningAssests/pancake.jpg",
        cuisine: "English",
        meat: "Veg",
        halal: true,
        name: "Pancake With Sliced Strawberry"
      },

      {
        cardUrl: "./assets/diningAssests/burger.jpg",
        cuisine: "American",
        meat: "Beef",
        name: "Classic Beef Burger",
      },

      {
        cardUrl: "./assets/diningAssests/ramen.jpg",
        cuisine: "Korean",
        meat: "Pork",
        name: "Ramen Noodles With Pork",
      },
      {
        cardUrl: "./assets/diningAssests/rice.jpg",
        cuisine: "Sri Lankan",
        meat: "Prawns",
        name: "Sri Lankan Prawns Rice",
      },

  ];
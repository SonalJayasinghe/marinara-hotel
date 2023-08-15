export interface ShowCaseItem {
    cardUrl: string,
    title: string,

    bedAndBreackfast: {
        price: number,
        info: string
    },

    halfBoard: {
        price: number,
        info: string
    },

    fullBoard: {
        price: number,
        info: string
    },
  }
  
  export const RoomTour_Items: Array<ShowCaseItem> = [
    {
      cardUrl: "src/assets/JrSuite.jpg",
      title: "Jr. Suite",

      bedAndBreackfast: {
        price: 139.00,
        info: "Indulge in comfort in our chic Junior Suite bedroom with a plush king bed, modern amenities, and elegant design with fabulous breakfast."
      },
      halfBoard: {
        price: 149.00,
        info: "Indulge in comfort in our chic Junior Suite bedroom with a plush king bed, modern amenities, and elegant design with fabulous breakfast & launch"
      },

      fullBoard: {
        price: 159.00,
        info: "Indulge in comfort in our chic Junior Suite bedroom with a plush king bed, modern amenities, and elegant design with fabulous breakfast, launch & dinner"
      },

    },

  ];
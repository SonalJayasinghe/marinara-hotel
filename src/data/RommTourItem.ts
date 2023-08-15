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

    {
        cardUrl: "src/assets/QueenBed.jpg",
        title: "Queen Suite",
  
        bedAndBreackfast: {
          price: 25.00,
          info: "Indulge in comfort in our chic Queen Suite bedroom with a plush king bed, modern amenities, and elegant design with fabulous breakfast."
        },
        halfBoard: {
          price: 39.00,
          info: "Indulge in comfort in our chic Queen Suite bedroom with a plush king bed, modern amenities, and elegant design with fabulous breakfast & launch"
        },
  
        fullBoard: {
          price: 45.00,
          info: "Indulge in comfort in our chic Queen Suite bedroom with a plush king bed, modern amenities, and elegant design with fabulous breakfast, launch & dinner"
        },
  
      },


      {
        cardUrl: "src/assets/kingbed.jpg",
        title: "King Suite",
  
        bedAndBreackfast: {
          price: 149.00,
          info: "Indulge in comfort in our chic King Suite bedroom with a plush king bed, modern amenities, and elegant design with fabulous breakfast."
        },
        halfBoard: {
          price: 159.00,
          info: "Indulge in comfort in our chic King Suite bedroom with a plush king bed, modern amenities, and elegant design with fabulous breakfast & launch"
        },
  
        fullBoard: {
          price: 169.00,
          info: "Indulge in comfort in our chic King Suite bedroom with a plush king bed, modern amenities, and elegant design with fabulous breakfast, launch & dinner"
        },
  
      },

  ];
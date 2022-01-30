import {
  GET_CLOTHES,
  GET_CLOTHES_ITEM_BY_ID,
  SELECT_CLOTHES_BY_SIZE,
} from "../actions/types";

const initialState = {
  clothes: [
    {
      id: "1",
      name: "Apollo Running Pants",
      price: "25",
      sizes: ["s", "m", "l"],
      img: [
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F68%2F86%2F6886cc2d3145a796e829853d8576ad52e04bad02.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_joggers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      ],
      desc: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
      non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
      reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
      Voluptatum ducimus voluptates voluptas?`,
    },
    {
      id: "2",
      name: "Apollo Running Shirt",
      price: "50",
      sizes: ["s", "m", "l"],
      img: [
        "https://media.istockphoto.com/photos/sweater-yellow-color-isolated-on-whitetrendy-womens-clothingknitted-picture-id1278802435?k=20&m=1278802435&s=612x612&w=0&h=5Zn7XJcTVmCxSyDtkdHOr5OE0jsrafaQDlaS0_Hr0Pc=",
      ],
      desc: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
      non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
      reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
      Voluptatum ducimus voluptates voluptas?`,
    },
  ],
  clothesItem: {},
};

export default function clothesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CLOTHES:
      return {
        ...state,
      };

    case GET_CLOTHES_ITEM_BY_ID:
      return {
        ...state,
        clothesItem: state.clothes.find((item) => item.id === action.payload),
      };
    case SELECT_CLOTHES_BY_SIZE:
      return {
        ...state,
        clothesItem: { ...state.clothesItem, selectedSize: action.payload },
      };
    default:
      return state;
  }
}

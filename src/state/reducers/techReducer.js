import { GET_TECH } from "../actions/types";

const initialState = {
  tech: [
    {
      id: "1",
      name: "Apollo Running Pants",
      price: "25",
      sizes: ["s", "m", "l"],
      selectedSize: "l",
      count: "1",
      totalCount: "5",
      img: [
        "https://media.istockphoto.com/photos/sweater-yellow-color-isolated-on-whitetrendy-womens-clothingknitted-picture-id1278802435?k=20&m=1278802435&s=612x612&w=0&h=5Zn7XJcTVmCxSyDtkdHOr5OE0jsrafaQDlaS0_Hr0Pc=",
      ],
    },
    {
      id: "2",
      name: "Apollo Running Shirt",
      price: "50",
      sizes: ["s", "m"],
      selectedSize: "m",
      count: "1",
      totalCount: "6",
      img: [
        "https://media.istockphoto.com/photos/sweater-yellow-color-isolated-on-whitetrendy-womens-clothingknitted-picture-id1278802435?k=20&m=1278802435&s=612x612&w=0&h=5Zn7XJcTVmCxSyDtkdHOr5OE0jsrafaQDlaS0_Hr0Pc=",
      ],
    },
  ],
};

export default function techReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TECH:
      return {
        ...state,
      };
    default:
      return state;
  }
}

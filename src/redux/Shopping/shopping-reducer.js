import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "This is the COOLEST Cube Ever",
      description:
        "This cube will keep you busy the entire day and it is very fun to play with",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Large Coffee Cup",
      description:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Books That CHANGED My Life",
      description:
        "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 4,
      title: "Bowers & Wilkins PX7: Best high-end headphones",
      description:
        "For a comfortable, ear-cradling option, turn to the largest over-ear headphones from Bowers & Wilkins. Their PX7 headphones are built with 43.6mm drivers, the largest in their headphone collection, for studio-quality performances. ",
      price: 50.0,
      image:
        "https://unsplash.com/photos/PDX_a_82obo",
    },
    {
      id: 5,
      title: "Bose Noise Cancelling 700: Best value headphones",
      description:
        "With their noise-cancelling capabilities, the Bose Headphones 700 can make any place your office or studio. Their integrated microphones are built to pick up your voice, and your voice only. At both low and high volume, the fine-tuned audio sounds precisely the way you’d like.",
      price: 150.0,
      image:
        "https://unsplash.com/photos/GI6L2pkiZgQ",
    },
    {
      id: 6,
      title: "Bang & Olufsen Beoplay H9i: Best headphones for commuting",
      description:
        "Between its modern, modular design and high-quality sound delivery, the Bang & Olufsen Beoplay H9i set offers great sound for your everyday life. Comfortable over-ear headphones offer active noise cancelling so you can hear your music or calls perfectly—no matter where you are.",
      price: 150.0,
      image:
        "https://unsplash.com/photos/oXXc-s5nNy8",
    },
    {
      id: 7,
      title: "Beats Studio3: Best headphones for workouts",
      description:
        "Matte grey. Rose gold. Bright red. No matter what your activewear aesthetic is, there’s going to be a Beats Studio3 that is meant for you. The top-tier listening experience that is tuning into these Beats is only enhanced by their stylish exterior.",
      price: 150.0,
      image:
        "https://unsplash.com/photos/oXXc-s5nNy8",
    },
    {
      id: 8,
      title: "Fujifilm X-T4",
      description:
        "Looking for a hybrid camera that's just as capable at shooting video as it is stills? The Fujifilm X-T4 is the best option around.",
      price: 600.0,
      image:
        "https://unsplash.com/photos/5vACuQ4tTy8",
    },
    {
      id: 9,
      title: "Canon EOS R6",
      description:
        "While the Canon EOS R5 is overkill for most people, the EOS R6 is a more affordable full-frame alternative that is simply one of the best cameras you can buy today",
      price: 150.0,
      image:
        "https://unsplash.com/photos/cwy9yVBBPxg",
    },
    {
      id: 10,
      title: "Beats Studio3: Best headphones for workouts",
      description:
        "Matte grey. Rose gold. Bright red. No matter what your activewear aesthetic is, there’s going to be a Beats Studio3 that is meant for you. The top-tier listening experience that is tuning into these Beats is only enhanced by their stylish exterior.",
      price: 150.0,
      image:
        "https://unsplash.com/photos/oXXc-s5nNy8",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

export const initialState = {
  trucks: [],
  truck: {
    name: "",
    rating: 0,
    reviews: [],
    location: "",
    price: 0,
    gallery: [],
    description: "",
  },
  isLoading: false,
  error: null,
  filters: {
    features: [],
    form: "",
    location: "",
  },
  favorites: [],
};

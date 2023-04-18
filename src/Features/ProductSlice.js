import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  total: null,
  cartItems: [],
  products: null,
  filtered: null,
  quentity: 1,
  singleProduct: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  directionRtl: false,
};

//fetching all products
export const getProducts = createAsyncThunk(
  "get/product",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return data;
    } catch (err) {
      const message = err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//fetching a specific category
export const getCategories = createAsyncThunk(
  "get/categories",
  async (category, thunkAPI) => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      const message = err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//fetching a specific product by it's id
export const getSingleProduct = createAsyncThunk(
  "get/singleProduct",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      return data;
    } catch (err) {
      const message = err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const ProductSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    //finding if a products is already exist and increment it's quentity
    setCartItems: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (exist) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quentity: item.quentity + 1 }
            : item
        );
      } else {
        state.cartItems.push({ ...action.payload, quentity: state.quentity });
      }
    },

    //searching
    setFilteredProducts: (state, action) => {
      const regExpression = new RegExp(action.payload, "i");
      state.filtered = state.products.filter((item) => {
        const str = item.title;
        if (str.match(regExpression)) {
          return item;
        }
      });
    },

    //decrement items quentity
    decCartItemsQuntity: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      exist &&
        (state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quentity: item.quentity - 1 }
            : item
        ));
    },

    //remove cart if it's less than 1
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    //finding total price
    setTotal: (state) => {
      state.total = state.cartItems.reduce(
        (cart, acu) => (cart += acu.price * acu.quentity),
        0
      );
    },

    //change direction
    setDirection: (state, action) => {
      state.directionRtl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {
  setCartItems,
  removeItemFromCart,
  setTotal,
  decCartItemsQuntity,
  setFilteredProducts,
  setDirection,
} = ProductSlice.actions;

export default ProductSlice.reducer;

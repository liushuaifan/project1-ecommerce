import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createProduct, fetchProducts } from '../services/product';
import { removeError, addError } from './errorSlice';

const initialState = {
  products: [],
  status: 'idle'
};

export const createProductAction = createAsyncThunk(
  'products/createProduct',
  async (data, thunkAPI) => {
    try {
      const product = await createProduct(data);
      thunkAPI.dispatch(removeError());
      return product;
    } catch (error) {
      const { product } = error;
      thunkAPI.dispatch(addError(product));
      return thunkAPI.rejectWithValue(product);
    }
  }
);
export const fetchProductsAction = createAsyncThunk(
  'products/fetchProducts',
  async (data, thunkAPI) => {
    try {
      const products = await fetchProducts(data);
      console.log("products list: ", products);
      // thunkAPI.dispatch(removeError());
      return products;
    } catch (error) {
      const { product } = error;
      thunkAPI.dispatch(addError(product));
      return thunkAPI.rejectWithValue(product);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // loadProducts: (state, action) => {
    //   state.status = 'pending';
    //   state.products = action.payload;
    // }
  },
  extraReducers: builder => {
    builder.addCase(fetchProductsAction.fulfilled, (state, action) => {
      state.status = 'succeeded';
      console.log('product state is assigned')
      state.products = action.payload;
    });
    builder.addCase(fetchProductsAction.rejected, (state, action) => {
      state.status = 'failed';
      state.products = action.payload;
    });
    builder.addCase(fetchProductsAction.pending, (state, action) => {
      state.status = 'pending';
      state.products = action.payload;
    });
    builder.addCase(createProductAction.fulfilled, (state, action) => {
      state.status = 'succeeded';
      console.log('product state is created')
      state.products.push(action.payload);
    });
    builder.addCase(createProductAction.rejected, (state, action) => {
      state.status = 'failed';
      console.log('product state is created')
    });
    builder.addCase(createProductAction.pending, (state, action) => {
      state.status = 'pending';
      console.log('product state is created')
    });
  }
});

// export const { loadProducts } = productSlice.actions;

export default productSlice.reducer;

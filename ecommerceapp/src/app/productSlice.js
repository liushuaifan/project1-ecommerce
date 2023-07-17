import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createProduct, deleteProduct, fetchProducts, updateProduct } from '../services/product';
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
      console.log("fetched product is: ", products);
      // thunkAPI.dispatch(removeError());
      return products;
    } catch (error) {
      const { product } = error;
      thunkAPI.dispatch(addError(product));
      return thunkAPI.rejectWithValue(product);
    }
  }
);
export const updateProductAction = createAsyncThunk(
  'products/updateProducts',
  async (data, thunkAPI) => {
    try {
      // console.log("updateProductAction is called");
      // console.log("data is: ", data)
      const products = await updateProduct(data);
      // thunkAPI.dispatch(removeError());
      console.log("aaaa", products);
      return products;
    } catch (error) {
      const { product } = error;
      thunkAPI.dispatch(addError(product));
      return thunkAPI.rejectWithValue(product);
    }
  }
);

export const deleteProductAction = createAsyncThunk(
  'products/deleteProducts',
  async (data, thunkAPI) => {
    try {
      // console.log("deleteProductAction is called");
      // console.log("data is: ", data)
      const products = await deleteProduct(data);
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
      state.products = action.payload;
      console.log('fetchProductsAction succeeded');
    });
    builder.addCase(fetchProductsAction.rejected, (state, action) => {
      state.status = 'failed';
      state.products = action.payload;
      console.log('fetchProductsAction failed');
    });
    builder.addCase(fetchProductsAction.pending, (state, action) => {
      state.status = 'pending';
      state.products = action.payload;
      console.log('fetchProductsAction pending');
    });
    builder.addCase(createProductAction.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products.push(action.payload);
    });
    builder.addCase(createProductAction.rejected, (state, action) => {
      state.status = 'failed';
    });
    builder.addCase(createProductAction.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(updateProductAction.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products.push(action.payload);
      console.log('updateProductAction succeeded');
    });
    builder.addCase(updateProductAction.rejected, (state, action) => {
      state.status = 'failed';
    });
    builder.addCase(updateProductAction.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(deleteProductAction.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products.push(action.payload);
    });
    builder.addCase(deleteProductAction.rejected, (state, action) => {
      state.status = 'failed';
    });
    builder.addCase(deleteProductAction.pending, (state, action) => {
      state.status = 'pending';
    });
  }
});

// export const { loadProducts } = productSlice.actions;

export default productSlice.reducer;

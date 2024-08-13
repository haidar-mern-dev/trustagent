import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProperties, getPropertById, getBidsByProperty, getPropertyCount } from '../api';

// Fetch all properties
export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProperties();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch a specific property by ID
export const fetchPropertyById = createAsyncThunk(
  'properties/fetchPropertyById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getPropertById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const fetchBidsByPropertyId = createAsyncThunk(
  'properties/fetchBidsByPropertyId',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBidsByProperty();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchPropertyCount = createAsyncThunk(
  'properties/count',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPropertyCount();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    items: [], 
    selectedProperty: null,
    bids: [], 
    propertyCount : 0, 
    loading: false, 
    error: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling fetch all properties
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // Storing all properties
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handling fetch property by ID
      .addCase(fetchPropertyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProperty = action.payload; // Storing the specific property
      })
      .addCase(fetchPropertyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handling fetch bids by property ID
      .addCase(fetchBidsByPropertyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBidsByPropertyId.fulfilled, (state, action) => {
        state.loading = false;
        state.bids = action.payload; // Storing bids for the specific property
      })
      .addCase(fetchBidsByPropertyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handling property count
      .addCase(fetchPropertyCount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPropertyCount.fulfilled, (state, action) => {
        state.loading = false;
        state.propertyCount = action.payload; 
      })
      .addCase(fetchPropertyCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default propertiesSlice.reducer;

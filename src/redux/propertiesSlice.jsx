import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProperties, getPropertById, getBidsByProperty, getPropertyCount, comparedBids } from '../api';

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

// Fetch bids by property ID
export const fetchBidsByPropertyId = createAsyncThunk(
  'properties/fetchBidsByPropertyId',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getBidsByProperty(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch property count
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

// Compare bids by property ID
export const compareBidsById = createAsyncThunk(
  'properties/compareBidsById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await comparedBids(id);
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
    comparedBids: null,
    propertyCount: 0,
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
        state.items = action.payload;
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
        state.selectedProperty = action.payload;
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
        state.bids = action.payload;
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
      })
      // Handling compare bids by property ID
      .addCase(compareBidsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(compareBidsById.fulfilled, (state, action) => {
        state.loading = false;
        state.comparedBids = action.payload;
      })
      .addCase(compareBidsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default propertiesSlice.reducer;

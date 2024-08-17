import { createSlice, createAsyncThunk } from'@reduxjs/toolkit';
import axios from'axios';

export const fetchCityByName = createAsyncThunk(
  'cities/fetchCityByName',
  async (cityName, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://192.168.100.41:8080/api/cities/find-city-by-name?name=${cityName}`);
      return response.data;
    } catch (error) {
      returnrejectWithValue(error.response.data);
    }
  }
);

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    city: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCityByName.fulfilled, (state, action) => {
        state.loading = false;
        state.city = action.payload;
      })
      .addCase(fetchCityByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default citiesSlice.reducer;

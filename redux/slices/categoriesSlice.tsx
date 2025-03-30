import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk("Categories/fetchCategories", async () => {
    const response = await fetch("https://dummy-api-jtg6bessta-ey.a.run.app/getCategories");
    const data: { data: { rank: number; title: string; image: any }[] } = await response.json();

    const sortedData = data.data.sort((a, b) => a.rank - b.rank); 

    return sortedData;
});

interface Category {
    rank: number;
    title: string;
    image: any;
}

const initialState: {
    categories: Category[];
    status: string;
    error: string | null;
} = {
    categories: [],
    status: "idle",
    error: null
};

const categorieSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = "failed";
            });
    }
});

export default categorieSlice.reducer;

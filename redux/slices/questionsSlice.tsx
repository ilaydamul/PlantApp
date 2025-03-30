import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuestions = createAsyncThunk("questions/fetchQuestions", async () => {
    const response = await fetch("https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions");
    return await response.json();
});

const initialState = {
    questions: [],
    status: "idle",
    error: null
};

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.questions = action.payload;
            })
            .addCase(fetchQuestions.rejected, (state) => {
                state.status = "failed";
            });
    }
});

export default questionSlice.reducer;

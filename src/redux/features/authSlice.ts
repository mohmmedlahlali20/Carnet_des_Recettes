import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/type";
import registerApi from "../service/api/auth.ts";


const initialState = {
    isLoading: false,
    error: null as string | null,
    user: null as User | null,
    isAuthenticated: false,
};

export const register = createAsyncThunk(
    "auth/register",
    async (Data: User, { rejectWithValue }) => {
        try {
            const response = await registerApi(Data);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export default authSlice.reducer;

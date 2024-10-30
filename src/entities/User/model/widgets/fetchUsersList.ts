import { User } from './../types/userSchema';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersList = createAsyncThunk(
    'users/fetchUsersList', void , User
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk('comments/get', async (id) => {
    const response = await axios.get(`http://localhost:3004/comments?book=${id}`)

    return response.data
})

export const addComment = createAsyncThunk('comment/add', async (data) => {
    const response = await axios.post(`http://localhost:3004/comments`, data)

    return response.data
})
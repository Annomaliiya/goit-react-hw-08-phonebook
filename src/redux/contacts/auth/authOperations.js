import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://connections-api.herokuapp.com";
export const userLogin = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      console.log("user :>> ", user);
      const response = await axios.post(BASE_URL + "/users/login", user);
      console.log(response);
    } catch (error) {
      console.log("error :>> ", error.request);
    }
  }
);

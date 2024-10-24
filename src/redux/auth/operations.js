import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      ErrorMessage("Registration error. Please try again.");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      ErrorMessage("Authentication Error. Check your details and try again");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await goitApi.post("users/logout");
  } catch (error) {
    ErrorMessage("Logout error");
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("refresh", async (_, thunkApi) => {
  try {
    const saveToken = thunkApi.getState().auth.token;
    if (!saveToken) {
      ErrorMessage("Device operation error");
      return thunkApi.rejectWithValue(`Not found token`);
    }
    setAuthHeader(saveToken);
    const { data } = await goitApi.get("users/current");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.massage);
  }
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";
import ErrorMessage from "../../components/ErrorMessage";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      ErrorMessage("Error loading phone book");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkApi) => {
    try {
      const { data } = await goitApi.post("/contacts", newContact);
      ErrorMessage("Contact added", false);
      return data;
    } catch (error) {
      ErrorMessage("Error. Contact not added");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      ErrorMessage("Contact deleted", false);
      return data.id;
    } catch (error) {
      ErrorMessage("Error. Contact not deleted");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await goitApi.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      return data;
    } catch (error) {
      ErrorMessage("Error.The changed contact is not recorded");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

import { createSlice } from "@reduxjs/toolkit";

import { RootObject } from "../interfaces/interface";

const initialState: RootObject = {
  provider: "",
  CurrentStatus: { state: "", timestamp: "" },
  PromisedDate: "",
  TrackingNumber: "",
  TrackingURL: "",
  SupportPhoneNumbers: [],
  TransitEvents: [],
  CreateDate: "",
  loaded: false,
  searchBar: "",
  language: "EN",
  languagePopUp: false,
};

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    setTrackingNumber: (state, action) => {
      state.TrackingNumber = action.payload;
      state.searchBar = "";
    },
    setSearchBar: (state, action) => {
      state.searchBar = action.payload;
    },
    togglePopUp: (state) => {
      state.languagePopUp = !state.languagePopUp;
    },
    openPopUp: (state) => {
      state.languagePopUp = true;
    },
    closePopUp: (state) => {
      state.languagePopUp = false;
    },
    changeLanguage: (state) => {
      if (state.language === "EN") {
        state.language = "AR";
      } else {
        state.language = "EN";
      }
    },
    setData: (state, action) => {
      // console.log("before redux", state.loaded);
      state.provider = action.payload.provider;
      state.CurrentStatus = action.payload.CurrentStatus;
      state.PromisedDate = action.payload.PromisedDate;
      state.TrackingNumber = action.payload.TrackingNumber;
      state.TrackingURL = action.payload.TrackingURL;
      state.SupportPhoneNumbers = action.payload.SupportPhoneNumbers;
      state.TransitEvents = action.payload.TransitEvents;
      state.CreateDate = action.payload.CreateDate;
      state.loaded = true;

      // console.log("afters redux", state.TrackingNumber);
    },
  },
});

export const actions = { ...shipmentSlice.reducer };
export default shipmentSlice.reducer;

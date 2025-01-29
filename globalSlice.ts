import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {
  isSidebarCollapsed: boolean;
}

const initialState: GlobalState = {
  isSidebarCollapsed: false, // Sidebar is hidden by default
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
  },
});

export const { toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;

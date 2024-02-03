import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  // isAuthorised: boolean;
  firstname: string;
  lastname: string;
  middlename: string;
  phone: string;
}

const initialState: UserState = {
  // isAuthorised: false,
  firstname: "firstname",
  lastname: "lastname",
  middlename: "middlename",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setAuthorised: (state, { payload: isUserAuthorised }: PayloadAction<boolean>) => {
    //   state.isAuthorised = isUserAuthorised;
    // },
    setPhone: (state, { payload: phoneNumber }: PayloadAction<string>) => {
      state.phone = phoneNumber;
    },
  },
});

export const { setPhone } = userSlice.actions;

export default userSlice.reducer;

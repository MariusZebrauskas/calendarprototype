import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface IdI {
  day: number;
  id: string;
}



// types
export interface callendarTypes {
  daysInTheMonth: IdI[];
  emtyDays: any[];
  yearOnScreen: number;
  currentMonth: number;
  daysOnScreen: number[];
  month: string;
  emtyDaysDisplay: string[];
  months: string[];
  staticDays: string[];
  daysInAMonthNumber: number | null;
}

// variables

const date: Date = new Date();
let daysInTheMonth: number[] = [];
const staticDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
//   slice

const initialState: callendarTypes = {
  daysInTheMonth: [],
  emtyDays: [],
  yearOnScreen: date.getFullYear(),
  currentMonth: date.getMonth() + 1,
  daysOnScreen: daysInTheMonth,
  month: months[date.getMonth()],
  months: months,
  emtyDaysDisplay: [],
  staticDays: staticDays,
  daysInAMonthNumber: null,
};

interface PayloadI {
  yearOnScreen: number;
  currentMonth: number;
}

export const callendarSlice = createSlice({
  name: 'callendar',
  initialState,
  reducers: {
    getDaysFuncion: (state, action: PayloadAction<PayloadI>) => {
      console.log('action:', action);
      // get how many days in the month
      function getDaysInMonth(year: number, month: number) {
        return new Date(year, month, 0).getDate();
      }
      // number how many days in the month
      let daysInTheMonth = getDaysInMonth(action.payload.yearOnScreen, action.payload.currentMonth);
      // number how many days in the month
      state.daysInAMonthNumber = daysInTheMonth;

      

      let days = [];
      for (let i = 0; i < daysInTheMonth; i++) {
        days.push({
          day: i + 1,
          id: `${state.yearOnScreen}-${state.currentMonth}-${i + 1}`,
        });
      }

      state.daysInTheMonth = days;
    },
    setEmtyDaysOnScreen: (state) => {},
    monthPlus: (state) => {},
    monthMinus: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setEmtyDaysOnScreen, getDaysFuncion, monthPlus, monthMinus } =
  callendarSlice.actions;

export default callendarSlice.reducer;

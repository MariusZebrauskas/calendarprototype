import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getDaysInMonth } from './helperFuncions';

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

  months: string[];
  staticDays: string[];
  daysInAMonthNumber: number | null;
  monthStartsOn: number;
}

// variables

const date: Date = new Date();
let daysInTheMonth: number[] = [];
const staticDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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
  currentMonth: date.getMonth(),
  daysOnScreen: daysInTheMonth,
  month: months[date.getMonth()],
  months: months,

  staticDays: staticDays,
  daysInAMonthNumber: null,
  monthStartsOn: date.getDay(),
};

interface PayloadI {
  yearOnScreen: number;
  currentMonth: number;
}

// get how many days in the month

export const callendarSlice = createSlice({
  name: 'callendar',
  initialState,
  reducers: {
    getDaysFuncion: (state, action: PayloadAction<PayloadI>) => {
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
    next: (state) => {
      // add new month
      state.currentMonth = state.currentMonth + 1;

      // on new year reset months to [0] and add 1 year
      if (state.currentMonth === 12) {
        let newYear = 1;
        state.currentMonth = 0;
        state.yearOnScreen = state.yearOnScreen + newYear;
      }

      // find month from array
      state.month = months[state.currentMonth];

      // find how many days in a month
      let daysInTheMonth = getDaysInMonth(state.yearOnScreen, state.currentMonth);
      state.daysInAMonthNumber = daysInTheMonth;

      // populate days in aray
      let days = [];
      for (let i = 0; i < daysInTheMonth; i++) {
        days.push({
          day: i + 1,
          id: `${state.yearOnScreen}-${state.currentMonth}-${i + 1}`,
        });
      }

      // add days in redux array
      state.daysInTheMonth = days;
    },
    back: (state) => {
      // back one month
      state.currentMonth = state.currentMonth - 1;

      // on new year reset months to [11] and - 1 year
      if (state.currentMonth === -1) {
        let newYear = 1;
        state.currentMonth = 11;
        state.yearOnScreen = state.yearOnScreen - newYear;
      }

      // find month from array
      state.month = months[state.currentMonth];

      // find how many days in a month
      let daysInTheMonth = getDaysInMonth(state.yearOnScreen, state.currentMonth);
      state.daysInAMonthNumber = daysInTheMonth;

      // populate days in aray
      let days = [];
      for (let i = 0; i < daysInTheMonth; i++) {
        days.push({
          day: i + 1,
          id: `${state.yearOnScreen}-${state.currentMonth}-${i + 1}`,
        });
      }

      // add days in redux array
      state.daysInTheMonth = days;
    },
    setEmtyDaysOnScreen: (state) => {
      function getFirstDayOfMonth(year: number, month: number) {
        return new Date(year, month, 1);
      }

      // 👇️ First day of CURRENT MONTH
      const date = new Date();
      const firstDayCurrentMonth = getFirstDayOfMonth(state.yearOnScreen, state.currentMonth);

      // get 3 letters of of string , name of the day
      let beginingOfMonth = `${firstDayCurrentMonth}`.substring(0, 3);

      // get ammount of emty days to put on the calendar
      const ammountOfEmtyDays = state.staticDays.findIndex((element) => element == beginingOfMonth);

      let emtyDays = [];
      // make empty day array
      for (let i = 0; i < ammountOfEmtyDays; i++) {
        emtyDays.push({
          day: i + 1,
          id: `${state.yearOnScreen - 1}-${state.currentMonth - 1}-${i + 1}`,
        });
      }
      //push array to state
      state.emtyDays = emtyDays;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmtyDaysOnScreen, getDaysFuncion, next, back } = callendarSlice.actions;

export default callendarSlice.reducer;

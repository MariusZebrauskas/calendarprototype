import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import WeeksDays from './Weeks';
import { getDaysFuncion } from '../../redux/callendarSlice';
import { AppDispatch } from '../../redux/store';

const Caledar = () => {
  const month = useSelector((state: RootState) => state.callendar.month);
  const yearOnScreen = useSelector((state: RootState) => state.callendar.yearOnScreen);
  const staticDays = useSelector((state: RootState) => state.callendar.staticDays);
  const daysInTheMonth = useSelector((state: RootState) => state.callendar.daysInTheMonth);
  const currentMonth = useSelector((state: RootState) => state.callendar.currentMonth);
  const store = useSelector((state: RootState) => state.callendar);
  // console.log('store:', store);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getDaysFuncion({ yearOnScreen, currentMonth }));
  }, []);

  return (
    <div>
      <h1>Awesome calendar</h1>
      <div className='flex-space'>
        <button style={{ width: '5rem' }}>{'<'}</button>
        <h2>
          {yearOnScreen} {month}
        </h2>
        <button style={{ width: '5rem' }}>{'>'}</button>
      </div>
      <div className='cointainer'>
        <WeeksDays staticDays={staticDays} />
        {/* { emtyDaysDisplay.map((day, i) => (
          <span key={i} className='day gray'></span>
        ))} */}
        {daysInTheMonth.map((day) => {
          return (
            <span className='day' key={day.id}>
              {day.day}
            </span>
          );
        })}
        {/* <span className='day gray'></span>
        <span className='day gray'></span> */}
      </div>
    </div>
  );
};

export default Caledar;

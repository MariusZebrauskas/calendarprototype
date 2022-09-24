import React, { useState, useEffect } from 'react';

const Caledar = () => {
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
  const date: Date = new Date();

  // array of days
  let daysInTheMonth: number[] = [];
  const [yearOnScreen, setyearOnScreen] = useState<number>(date.getFullYear());
  const [currentMonth, setcurrentMonth] = useState<number>(date.getMonth());
  const [daysOnScreen, setDaysOnScreen] = useState<number[]>(daysInTheMonth);
  const [month, setMonth] = useState<string>(months[currentMonth]);
  // function get days in a month number

  const getDaysFuncion = (nr: number) => {
    const getDaysInMonth = (year: number, month: number) => {
      return new Date(year, month + 1, 0).getDate();
    };

    let getCurrentDaysInMonth = getDaysInMonth(yearOnScreen, currentMonth + nr);
    for (let i = 0; i < getCurrentDaysInMonth; i++) {
      daysInTheMonth.push(i + 1);
    }
    return setDaysOnScreen([...daysInTheMonth]);
  };

  // add month
  const monthPlus = () => {
    let addOneMonth = 1;
    getDaysFuncion(addOneMonth);
    return setcurrentMonth((prev) => {
      if (prev === 11) {
        setyearOnScreen((prev) => prev + 1);
        return 0;
      }

      return prev + 1;
    });
  };

  // minus month
  const monthMinus = () => {
    let minusOneMOnth = -1;
    getDaysFuncion(minusOneMOnth);

    return setcurrentMonth((prev) => {
      if (prev === 0) {
        setyearOnScreen((prev) => prev - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  // update current month
  useEffect(() => {
    setMonth(months[currentMonth]);
  }, [currentMonth]);

  useEffect(() => {
    let dontNeedToAddAnyMonth = 0;
    if (daysOnScreen.length === 0) {
      getDaysFuncion(dontNeedToAddAnyMonth);
    }
  }, []);

  return (
    <div>
      <h1>Awesome calendar</h1>
      <div className='flex-space'>
        <button style={{ width: '5rem' }} onClick={monthMinus}>
          {'<'}
        </button>
        <h2>
          {yearOnScreen} {month}
        </h2>
        <button style={{ width: '5rem' }} onClick={monthPlus}>
          {'>'}
        </button>
      </div>
      <ul>
        {daysOnScreen.map((day, i) => {
          return <li key={i}>{day}</li>;
        })}
      </ul>
    </div>
  );
};

export default Caledar;

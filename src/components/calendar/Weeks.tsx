import React, { FC } from 'react';
interface PropsI {
  staticDays: string[];
}

const Weeks: FC<PropsI> = ({ staticDays }) => {
  return (
    <>
      {staticDays.map((day, i) => {
        return (
          <span
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}
            key={i}
          >
            {day}
          </span>
        );
      })}
    </>
  );
};

export default Weeks;

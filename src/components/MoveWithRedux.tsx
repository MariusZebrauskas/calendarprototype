import gsap from 'gsap';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { prev, update } from '../redux/updateSlice';
interface PropsI {
  data: string;
}

const MoveWithRedux: FC<PropsI> = ({ data }) => {
  const [stateR, setStateR] = useState<number>(1);
  const dispatch = useDispatch();
  const currentValueinRedux = useSelector((state: RootState) => state.updateSlice.value);
  
  const updateRedux = () => {
    // setStateR((prev) => prev + 1);
    console.log('stateR:', stateR % 0)
    if (currentValueinRedux === 'updated') {
      dispatch(prev());
      return gsap.to('h2', { opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      dispatch(update());
      return gsap.to('h2', { opacity: 0, duration: 0.3, ease: 'power2.out' });
    }
  };

  useEffect(() => {
    console.log('render');
    gsap.fromTo('.animation', { opacity: 0 }, { opacity: 1, duration: 4, ease: 'power2.out' });
  }, []);

  return (
    <div>
      <h1 className='animation'>fun component</h1>
      <h2>{data}</h2>
      <button onClick={updateRedux}>move data</button>
      <p
        className={
          currentValueinRedux === 'updated' ? 'animationWithredux' : 'animationWitoutRedux'
        }
      >
        {currentValueinRedux}
      </p>
    </div>
  );
};

export default MoveWithRedux;

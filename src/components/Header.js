// import { Spring } from 'react-spring';
import React, { useState, useContext } from 'react';
import { Context } from './context/Context';
import { useSpring, animated } from 'react-spring';
import SpringList from 'react-spring-dnd';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Header = () => {
  let globalContext = useContext(Context);

  // NAME STATE
  const [name, setName] = useState('');
  // START BUTTON ANIMATION
  const [state, toggle] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  });

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const [showMessage1, setMessage1, stopMessage1] = useSpring(() => ({
    top: '-6rem'
  }));
  const [
    removeStartScreen,
    setRemoveStartScreen,
    stopRemoveStartScreen
  ] = useSpring(() => ({
    display: 'block'
  }));

  //   const fadeIn = useSpring({
  //     config: { duration: 250 },
  //     from: { opacity: 1 },
  //     to: { opacity: 1 }
  //   });

  const startNext = () => {
    if (name !== '') {
      setTimeout(() => {
        document.getElementById('starting-screen').classList.add('clear');
      }, 1000);
      setTimeout(() => {
        document.getElementById('wc-container').classList.add('show');
        document.getElementById('starting-screen').style.display = 'none';
      }, 2000);
      // globalContext.setUserName(name);
      globalContext.userName = name;
      console.log(globalContext);
    } else {
      setMessage1({ top: '-0.5rem' });
      setTimeout(() => {
        setMessage1({ top: '-6rem' });
      }, 2000);
    }
  };

  return (
    <div>
      <div className='starting-screen' id='starting-screen'>
        <animated.div style={showMessage1} className='message-1' id='message-1'>
          Enter A Name to Continue
        </animated.div>
        <div className='intro-container'>
          <div className='year intro-item'>
            <h1>2020-2021</h1>
          </div>
          <animated.div
            className='nba-logo intro-item'
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          ></animated.div>
          <div className='part-3 intro-item'>
            <h1>Predictions</h1>
          </div>
        </div>
        <div className='start'>
          <div className='empty'></div>
          <input
            type='text'
            placeholder='Enter Name'
            className='enter-name intro-item'
            onChange={e => {
              setName(e.target.value);
            }}
          ></input>
          <div
            onClick={() => {
              toggle(!state);
              startNext();
            }}
          >
            <animated.button
              className='start-btn intro-item'
              style={{
                //   opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: x
                  .interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                  })
                  .interpolate(x => `scale(${x})`)
              }}
            >
              Start
            </animated.button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

//  START BUTTON DOESNT SHOW ON MOBILE VP UNLESS SCROLL OR INPUT SELEECT
// CHANGE INTRO FOR MOBILE

// MAKE REVIEW PAGE WITH EDIT OPTION & FINALIZE BUTTON
// TRY DRAGGABLE LIST AT END TO EDIT

// CONFIRM MESSAGE TO END

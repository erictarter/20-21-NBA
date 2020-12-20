import React, { useState, useContext } from 'react';
import { Context } from './context/Context';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  //   -(y - window.innerHeight / 10) / 20,
  //   (x - window.innerWidth / 10) / 20,
  1,
  1,
  1.05
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const PickWC = () => {
  let globalContext = useContext(Context);

  const [picks, setPicks] = useState([]);

  const [state, toggle] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  });

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 50, friction: 20 }
  }));

  const addWcTeam = e => {
    if (wcTeams.length < 8) {
      wcTeams.push(e.target.id.split(' ')[0]);
      document.getElementById('pick-num').innerText = `Pick #${8 -
        wcTeams.length} Seed`;
      e.target.classList.add('clear');
      setTimeout(() => {
        e.target.style.display = 'none';
      }, 500);
      if (wcTeams.length === 8) {
        document.querySelector('.east-btn').classList.add('show');
        document.getElementById('pick-num').innerText = `Pick East`;
        globalContext.westPicks = wcTeams;
        console.log(globalContext);
      }
    }
  };

  const pickEast = () => {
    setTimeout(() => {
      document.getElementById('wc-container').classList.add('clear');
    }, 1000);
    setTimeout(() => {
      document.getElementById('ec-container').classList.add('show');
      document.getElementById('wc-container').style.display = 'none';
    }, 2000);
  };

  const growLogo = e => {
    e.target.classList.add('grow');
  };
  const shrinkLogo = e => {
    e.target.classList.remove('grow');
  };

  let wcTeams = [];

  return (
    <div>
      <div className='wc-container' id='wc-container'>
        <div className='line'></div>
        <div className='background-change'></div>
        <div className='wc-top'>
          <div className='wc-logo'></div>
          <div className='wc-seed'>
            <h1 id='pick-num'>Pick #8 Seed</h1>
          </div>
        </div>
        <div className='lower-section'>
          <animated.div
            className='wc-teams'
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='spurs wc-team'
              id='spurs wc-team'
            >
              spurs
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='clippers wc-team'
              id='clippers wc-team'
            >
              clipper
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='suns wc-team'
              id='suns wc-team'
            >
              suns
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='timberwolves wc-team'
              id='timberwolves wc-team'
            >
              timber
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='blazers wc-team'
              id='blazers wc-team'
            >
              blazers
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='thunder wc-team'
              id='thunder wc-team'
            >
              thunder
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='kings wc-team'
              id='kings wc-team'
            >
              kings
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='nuggets wc-team'
              id='nuggets wc-team'
            >
              nuggets
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='mavericks wc-team'
              id='mavericks wc-team'
            >
              maverik
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='rockets wc-team'
              id='rockets wc-team'
            >
              rockets
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='worriors wc-team'
              id='worriors wc-team'
            >
              worrior
            </div>{' '}
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='pelicans wc-team'
              id='pelicans wc-team'
            >
              pelican
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='grizzlies wc-team'
              id='grizzlies wc-team'
            >
              Grizzli
            </div>{' '}
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='jazz wc-team'
              id='jazz wc-team'
            >
              Jazz
            </div>{' '}
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='lakers wc-team'
              id='lakers wc-team'
            >
              Lakers
            </div>
          </animated.div>
        </div>

        <div
          onClick={() => {
            toggle(!state);
            pickEast();
          }}
        >
          <animated.button
            className='east-btn'
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
            Pick East
          </animated.button>
        </div>
      </div>
    </div>
  );
};
export default PickWC;

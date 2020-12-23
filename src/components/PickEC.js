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

export const PickEC = () => {
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
    if (ecTeams.length < 8) {
      ecTeams.push(e.target.id.split(' ')[0]);
      document.getElementById('pick-num-2').innerText = `Pick #${8 -
        ecTeams.length} Seed`;
      e.target.classList.add('clear');
      setTimeout(() => {
        // e.target.style.display = 'none';
      }, 500);
      if (ecTeams.length === 8) {
        document.querySelector('.review-btn').classList.add('show');
        document.getElementById('pick-num-2').innerText = `Review Predictions`;
        globalContext.eastPicks = ecTeams;
      }
    }
  };

  const toReview = () => {
    setTimeout(() => {
      document.getElementById('ec-container').classList.add('clear');
    }, 1000);
    setTimeout(() => {
      document.getElementById('review-container').classList.add('show');
      document.getElementById('ec-container').style.display = 'none';
    }, 2000);
    setTimeout(() => {
      globalContext.eastPicksFill.map((i, index) => {
        i.classList.remove('clear');
        document.getElementById('ec-review').innerHTML += `
        <div class='review-team'>${globalContext.eastPicks[
          7 - index
        ].toUpperCase()}</div>
        `;
      });
      globalContext.westPicksFill.map((i, index) => {
        i.classList.remove('clear');
        document.getElementById('wc-review').innerHTML += `
        <div class='review-team'>${globalContext.westPicks[
          7 - index
        ].toUpperCase()}</div>
        `;
      });
    }, 2100);

    let eastFill = [];
    globalContext.eastPicks.map(i => {
      document.querySelectorAll('.ec-team').forEach(team => {
        if (team.classList.contains(i)) {
          eastFill.push(team);
        }
      });
    });
    let westFill = [];
    globalContext.westPicks.map(i => {
      document.querySelectorAll('.wc-team').forEach(team => {
        if (team.classList.contains(i)) {
          westFill.push(team);
        }
      });
    });
    globalContext.westPicksFill = westFill;
    globalContext.eastPicksFill = eastFill;
  };

  const growLogo = e => {
    e.target.classList.add('grow');
  };
  const shrinkLogo = e => {
    e.target.classList.remove('grow');
  };

  let ecTeams = [];

  return (
    <div>
      <div className='ec-container' id='ec-container'>
        <div className='line-2'></div>
        <div className='background-change-2'></div>
        <div className='wc-top'>
          <div className='ec-logo'></div>
          <div className='wc-seed'>
            <h1 className='pick-num-2' id='pick-num-2'>
              Pick #8 Seed
            </h1>
          </div>
        </div>
        <div className='lower-section-2'>
          <animated.div
            className='ec-teams'
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
              className='bucks ec-team'
              id='bucks ec-team'
            >
              bucks
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='pacers ec-team'
              id='pacers ec-team'
            >
              pacers
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='celtics ec-team'
              id='celtics ec-team'
            >
              celtics
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='wizards ec-team'
              id='wizards ec-team'
            >
              wizards
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='hornets ec-team'
              id='hornets ec-team'
            >
              hornets
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='heat ec-team'
              id='heat ec-team'
            >
              heat
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='raptors ec-team'
              id='raptors ec-team'
            >
              raptors
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='magic ec-team'
              id='magic ec-team'
            >
              magic
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='caviliers ec-team'
              id='caviliers ec-team'
            >
              cavili
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='pistons ec-team'
              id='pistons ec-team'
            >
              pistons
            </div>{' '}
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='hawks ec-team'
              id='hawks ec-team'
            >
              hawks
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='knicks ec-team'
              id='knicks ec-team'
            >
              knicks
            </div>{' '}
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='bulls ec-team'
              id='bulls ec-team'
            >
              bulls
            </div>{' '}
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='sixers ec-team'
              id='sixers ec-team'
            >
              Sixers
            </div>
            <div
              onMouseOver={growLogo}
              onMouseLeave={shrinkLogo}
              onClick={addWcTeam}
              className='nets ec-team'
              id='nets ec-team'
            >
              Nets
            </div>
          </animated.div>
        </div>

        <div
          onClick={() => {
            toggle(!state);
            toReview();
          }}
        >
          <animated.button
            className='review-btn'
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
            Review <i className='fas fa-arrow-right'></i>
          </animated.button>
        </div>
      </div>
    </div>
  );
};
export default PickEC;

// BORDERS STILL RED

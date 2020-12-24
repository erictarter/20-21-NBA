import React, { useState, useContext, useRef } from 'react';
import { Context } from './context/Context';
import { useSprings, useSpring, animated, interpolate } from 'react-spring';
import SpringList from 'react-spring-dnd';
import EditWest from './EditWest';

const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? {
        y: curIndex * 100 + y,
        scale: 1.1,
        zIndex: '1',
        shadow: 15,
        immediate: n => n === 'y' || n === 'zIndex'
      }
    : {
        y: order.indexOf(index) * 100,
        scale: 1,
        zIndex: '0',
        shadow: 1,
        immediate: false
      };

export const Review = () => {
  const globalContext = useContext(Context);

  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  });

  const editPicks = () => {};

  const submit = e => {
    // document.getElementById('sub').submit();
  };

  const clickSubmit = () => {
    console.log(globalContext);
    document.getElementById('review-container').classList.add('clear');
  };

  return (
    <div>
      <div className='review-container' id='review-container'>
        <div className='top-review'>
          <h1>Review Picks</h1>
        </div>
        <div className='picks-container' id='picks-container'>
          <div className='seeds'>
            <div className='seed-num'>1</div>
            <div className='seed-num'>2</div>
            <div className='seed-num'>3</div>
            <div className='seed-num'>4</div>
            <div className='seed-num'>5</div>
            <div className='seed-num'>6</div>
            <div className='seed-num'>7</div>
            <div className='seed-num'>8</div>
          </div>
          <div className='seeds-2'>
            <div className='seed-num'>1</div>
            <div className='seed-num'>2</div>
            <div className='seed-num'>3</div>
            <div className='seed-num'>4</div>
            <div className='seed-num'>5</div>
            <div className='seed-num'>6</div>
            <div className='seed-num'>7</div>
            <div className='seed-num'>8</div>
          </div>{' '}
          <div className='seeds-3'>
            <div className='seed-num'>1</div>
            <div className='seed-num'>2</div>
            <div className='seed-num'>3</div>
            <div className='seed-num'>4</div>
            <div className='seed-num'>5</div>
            <div className='seed-num'>6</div>
            <div className='seed-num'>7</div>
            <div className='seed-num'>8</div>
          </div>
          <div className='wc-review' id='wc-review'></div>
          <div className='ec-review' id='ec-review'></div>
        </div>

        {/* <form name='contact' method='POST' netlify netlify-honeypot='bot-field'>
          <input
            type='text'
            id='name'
            value={globalContext.userName}
            onChange={e => {
              globalContext.userName = e.target.value;
            }}
          />
          <button type='submit'>
            <div onClick={() => toggle(!state)}>
              <animated.input
                onClick={clickSubmit}
                onSubmit={submit}
                type='submit'
                className='submit-btn'
                style={{
                  //   opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                  transform: x
                    .interpolate({
                      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
                }}
                submit
              />
            </div>
          </button>
        </form> */}
        <form name='contact' method='post'>
          <p>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Review;

// FORM SUBMISSION
// THANK YOU COMP

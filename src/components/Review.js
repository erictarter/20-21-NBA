import React, { useState, useContext } from 'react';
import { Context } from './context/Context';
import { useSpring, animated } from 'react-spring';

export const Review = () => {
  const globalContext = useContext(Context);

  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  });

  const submit = e => {
    e.preventDefault();
  };

  const clickSubmit = () => {
    console.log(globalContext);
  };

  return (
    <div>
      <div className='review-container' id='review-container'>
        <div className='top-review'>
          <h1>Review &amp; Edit Picks</h1>
        </div>
        <div className='direction'>
          <h3>Drag teams to make changes</h3>
        </div>
        <div className='picks-container'>
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
          <div className='wc-review' id='wc-review'>
            {/* {globalContext.westPicksFill.map((i, index) => (
              <div className={i.className}></div>
            ))} */}
          </div>
          <div className='ec-review' id='ec-review'>
            {/* {globalContext.eastPicksFill.map((i, index) => (
              <div className={i.className}></div>
            ))} */}
          </div>
        </div>
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
          />
        </div>
      </div>
    </div>
  );
};
export default Review;

// index.js:1 Warning: Each child in a list should have a unique "key" prop.

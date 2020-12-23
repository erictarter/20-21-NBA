import React, { useState, useContext } from 'react';
import { Context } from './context/Context';
import SpringList from 'react-spring-dnd';

export const EditWest = ({ items }) => {
  const globalContext = useContext(Context);
  let wcTeamList = [
    'Spurs',
    'Suns',
    'Clippers',
    'Timberwolves',
    'Blazers',
    'Thunder',
    'Kings',
    'Nuggets',
    'Mavericks',
    'Rockets',
    'Warriors',
    'Pelicans',
    'Grizzlies',
    'Jazz',
    'Lakers'
  ];
  return (
    <div>
      <div className='wc-edit' id='wc-edit'>
        <SpringList>{globalContext.westPicks.map(i => i)}</SpringList>
      </div>
    </div>
  );
};
export default EditWest;

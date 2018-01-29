import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';
import {submitGuess} from './actions';

import store from './store';
import Game from './components/game';

console.log(store.getState());
console.log(store.dispatch(submitGuess('33')));
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

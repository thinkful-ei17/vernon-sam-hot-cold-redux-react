import {SUBMIT_GUESS, NEW_GAME} from './actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

const generateFeedback = (guess, answer) => {
  
  const difference = Math.abs(guess - answer);

  if (difference >= 50) {
    return'You\'re Ice Cold...';
  } else if (difference >= 30) {
    return 'You\'re Cold...';
  } else if (difference >= 10) {
    return 'You\'re Warm.';
  } else if (difference >= 1) {
    return 'You\'re Hot!';
  } else {
    return 'You got it!';
  }
}


 const reducer = (state = initialState, action) => {
  if (action.type === SUBMIT_GUESS) {
    const guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
     return Object.assign({}, state, {
        feedback: 'Please enter a valid number'
      })
    } else {
      return Object.assign({}, state, {
        guesses: [...state.guesses, guess],
        feedback: generateFeedback(guess, state.correctAnswer),
      })
    }
  } else if (action.type === NEW_GAME) {
    return Object.assign({}, initialState, {
      correctAnswer: Math.round(Math.random() * 100) + 1
    });
  }
  return state;
}
export default reducer;
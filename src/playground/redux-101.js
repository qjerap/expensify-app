import { createStore } from 'redux';

// Action Generator

const incrementCount = ( { incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( { setBy = 0 } = {} ) => ({
    type: 'SET',
    setBy
});

const resetCount = () => ({
    type: 'RESET',
});


// Reducers
// 1. Reducers are pure functions
// 2. Nerver change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.setBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;    
    }
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});





// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 100 }));

store.dispatch(setCount({ setBy: 999 }));


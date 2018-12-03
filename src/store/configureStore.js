import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import blogReducer from './reducers/blog'
import filterReducer from './reducers/filter'



// import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

// export default () => {
//     const store = createStore(
//         combineReducers({
//             expenses: expensesReducer,
//             filters: filtersReducer,
//             auth: authReducer
//         }),
//         composeEnhancers(applyMiddleware(thunk))
//     );
//     return store;
// }


export default () => {

    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            filters: filterReducer
        })
    )
    return store;

}




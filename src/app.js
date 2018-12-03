import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import { startSetExpenses } from './actions/expenses';
// import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles.scss';
// import { firebase } from './firebase/firebase';



const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.querySelector('#app'));




// let hasRendered = false;
// const renderApp = () => {
//     if (!hasRendered) {
//         ReactDOM.render(jsx, document.querySelector('#app'));
//         hasRendered = true;

//     }
// };

// ReactDOM.render(<p>Loading...</p>, document.querySelector('#app'));



// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         store.dispatch(login(user.uid));
//         store.dispatch(startSetExpenses()).then(() => {
//             renderApp();
//             if (history.location.pathname === '/') {
//                 history.push('/dashboard');
//             }
//         });
//     } else {
//         store.dispatch(logout());
//         renderApp();
//         history.push('/');
//     }
// })
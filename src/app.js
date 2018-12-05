import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { firebaseFetchData } from './store/actions/blog'
import { login, logout } from './store/actions/auth'
import 'normalize.css/normalize.css';
import './styles.scss';
import { firebase } from './firebase/firebase';



const store = configureStore();

store.dispatch(firebaseFetchData())


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.querySelector('#app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {

      store.dispatch(login(user.uid));
      store.dispatch(firebaseFetchData())
            
        if (history.location.pathname === '/') {
                history.push('/dashboard')
            }

      } else {
        store.dispatch(logout())
        history.push('/')
    }
  });


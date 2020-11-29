import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import InputReducer from './components/store/reducer/Inputreducer';


const rootReducer = combineReducers({ UserInputs: InputReducer })

const store = createStore(rootReducer)

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

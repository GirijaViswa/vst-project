import {createStore} from 'redux';
import reducer from './reducer.js';

//Initial State
// const initialState = {records:[],recordId:''}
const initialState = {records:[{"firstname":"parthasarathy","lastname":"perumal","username":"parthasarathy",
                    "email":"parthasarathy@parthasarathy.parthasarathy","password":"parthasarathy123","address1":"parthasarathy",
                    "state":"parthasarathy","city":"parthasarathy","zipcode":"parthasarathy","country":"parthasarathy"}],recordId:'0'}

//Store creation
const store = createStore(reducer,initialState);

export default store;
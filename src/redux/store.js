import {createStore} from 'redux';
import reducer from './reducer.js';

//Initial State
const initialState = {records:[],recordId:'',oldRecord:{},activeRecord:{},edittingrec:{}}
// const initialState = {records:[{"firstname":"parthasarathy","lastname":"perumal","username":"parthasarathy",
//                     "email":"parthasarathy@parthasarathy.parthasarathy","password":"parthasarathy123","address1":"parthasarathy",
//                     "state":"parthasarathy","city":"parthasarathy","zipcode":"parthasarathy","country":"parthasarathy"}],recordId:'0',activeRecord:{"firstname":"parthasarathy","lastname":"perumal","username":"parthasarathy",
//                     "email":"parthasarathy@parthasarathy.parthasarathy","password":"parthasarathy123","address1":"parthasarathy",
//                     "state":"parthasarathy","city":"parthasarathy","zipcode":"parthasarathy","country":"parthasarathy"}}

//Store creation
const store = createStore(reducer,initialState);

export default store;
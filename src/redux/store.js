import {createStore} from 'redux';
import reducer from './reducer.js';

//Initial State
const initialState = {records:[],recordId:'',oldRecord:{},activeRecord:{},edittingrec:{}}

//Store creation
const store = createStore(reducer,initialState);

export default store;
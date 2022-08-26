import { createStore } from 'redux';
import { rootReducer } from './rootReduce';

export const store = createStore(rootReducer)


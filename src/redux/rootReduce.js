import { combineReducers } from "redux";

import { jobReduce } from './JobReduce/jobReduce';

export const rootReducer = combineReducers({job :jobReduce})
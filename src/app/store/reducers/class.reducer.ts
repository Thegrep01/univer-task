import { createReducer, on } from '@ngrx/store';
import * as ClassActions from '../actions/class.actions';

export interface Class {
    name: string;
}

const initialState: Class[] = [{ name: '1A' }, { name: '2A' }];

export const classReducer = createReducer(
    initialState,
    on(ClassActions.addClass, (state, { className }) => [...state, { name: className }])
);

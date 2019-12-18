import { createReducer, on } from '@ngrx/store';
import * as ClassActions from '../actions/class.actions';

export interface Class {
    name: string;
    students: string[];
}

const initialState: Class[] = [
    { name: '1A', students: ['student 1', 'student 2'] },
    { name: '2A', students: ['student 3'] },
];

export const classReducer = createReducer(
    initialState,
    on(ClassActions.addClass, (state, { className }) => [...state, { name: className, students: [] }]),
    on(ClassActions.addnewStudent, (state, { className, studentName }) => [
        ...state.map(i => {
            if (i.name === className) {
                i.students = [...i.students, studentName];
            }
            return i;
        }),
    ])
);


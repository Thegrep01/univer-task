import { createReducer, on } from '@ngrx/store';
import * as SubjectActions from '../actions/subject.actions';

export interface ISubject {
    name: string;
    classes?: string[];
}

const initialState: ISubject[] = [
    { name: 'Math', classes: ['1A', '2A'] },
    { name: 'Biology', classes: ['2A'] },
    { name: 'Economic', classes: ['1A', '2A'] },
];

export const subjectReducer = createReducer(
    initialState,
    on(SubjectActions.addSubject, (state, subject) => [
        ...state,
        { name: subject.subjectName, classes: subject.classes },
    ])
);

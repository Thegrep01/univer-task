import { createReducer, on } from '@ngrx/store';
import * as SubjectActions from '../actions/subject.actions';

export interface ISubject {
    name: string;
    classes: string[];
}

const initialState: ISubject[] = [
    { name: 'Math', classes: ['1A', '2A'] },
    { name: 'Biology', classes: ['2A'] },
    { name: 'Economic', classes: ['1A', '2A'] },
];

export const subjectReducer = createReducer(
    initialState,
    on(SubjectActions.addSubject, (state, subject) => {
        if (state.find(obj => obj.name === subject.subjectName)) {
            return [
                ...state.map(i => {
                    if (i.name === subject.subjectName) {
                        return {
                            ...i,
                            classes: [...i.classes, subject.classes],
                        };
                    }
                    return i;
                }),
            ];
        }
        return [
            ...state,
            {
                name: subject.subjectName,
                classes: [subject.classes],
            },
        ];
    })
);

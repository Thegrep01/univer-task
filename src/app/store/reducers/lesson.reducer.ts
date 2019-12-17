import { createReducer, on } from '@ngrx/store';
import * as LessonActions from '../actions/lesson.actions';

export interface Lessons {
    class: string;
    subject: string;
    dates: Date[];
}

const initialState: Lessons[] = [
    { class: '1A', subject: 'Math', dates: [new Date('2019-11-11'), new Date('2019-11-12')] },
];

const cond = (item: { class: string; subject: string }, className: string, subject: string) =>
    item.class === className && item.subject === subject;

export const lessonReducer = createReducer(
    initialState,
    on(LessonActions.createNewLesson, (state, props) => {
        if (state.find(item => cond(item, props.className, props.subject))) {
            return [
                ...state.map(item => {
                    if (cond(item, props.className, props.subject)) {
                        item.dates = [...item.dates, props.date];
                    }
                    return { ...item };
                }),
            ];
        }
        return [...state, { class: props.className, subject: props.subject, dates: [props.date] }];
    })
);

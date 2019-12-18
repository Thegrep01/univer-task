import { createReducer, on } from '@ngrx/store';
import * as LessonActions from '../actions/lesson.actions';

export interface Lessons {
    class: string;
    subject: string;
    dates: Date;
    id: number;
}

const initialState: Lessons[] = [{ class: '1A', subject: 'Math', dates: new Date('2019-11-12'), id: 1 }];

export const lessonReducer = createReducer(
    initialState,
    on(LessonActions.createNewLesson, (state, props) => {
        return [
            ...state,
            { class: props.className, subject: props.subject, dates: props.date, id: state[state.length - 1].id + 1 },
        ];
    })
);

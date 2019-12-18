import { IStore } from '..';
import { createSelector } from '@ngrx/store';
import { Lessons } from '../reducers/lesson.reducer';

export const selectLessons = (state: IStore) => state.lessons;

export const selectCurrLessons = createSelector(
    selectLessons,
    (lessons: Lessons[], props: { currClass: string; subject: string }) => {
        return lessons.find(lesson => lesson.class === props.currClass && lesson.subject === props.subject);
    }
);

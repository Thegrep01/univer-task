import { IStore } from '..';
import { createSelector } from '@ngrx/store';

import { Class } from '../reducers/class.reducer';
import { selectCurrSubj } from './subject.selectors';
import { selectCurrClass } from './class.selectors';

export const selectLessons = (state: IStore) => state.lessons;

export const selectCurrLessons = createSelector(
    selectLessons,
    selectCurrClass,
    selectCurrSubj,
    (lessons, currClass, subject) => {
        return lessons.find(lesson => lesson.class === currClass && lesson.subject === subject);
    }
);

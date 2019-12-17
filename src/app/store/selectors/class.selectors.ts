import { IStore } from '..';
import { createSelector } from '@ngrx/store';

import { Class } from '../reducers/class.reducer';

export const selectClasses = (state: IStore) => state.classList;
export const selectCurrClass = (state: IStore) => state.selectedClass;

export const selectStudentsByClass = createSelector(selectClasses, (classes: Class[], props: { className: string }) => {
    return classes.filter(cl => cl.name === props.className).map(cl => cl.students);
});

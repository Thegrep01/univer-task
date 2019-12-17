import { Class, classReducer, selectedClassReducer } from './reducers/class.reducer';
import { subjectReducer, ISubject, selectedSubjectReducer } from './reducers/subject.reducer';
import { lessonReducer, Lessons } from './reducers/lesson.reducer';
import { merge, pick } from 'lodash-es';
import { Action, ActionReducer } from '@ngrx/store';

export interface IStore {
    lessons: Lessons[];
    classList: Class[];
    subjectsList: ISubject[];
    selectedClass: string;
    selectedSubject: string;
}

export const reducers: any = {
    classList: classReducer,
    subjectsList: subjectReducer,
    selectedClass: selectedClassReducer,
    selectedSubject: selectedSubjectReducer,
    lessons: lessonReducer,
};

const stateKeys = ['selectedClass', 'selectedSubject'];
const localStorageKey = '__app_storage__';

function setSavedState(state: any, key: string) {
    localStorage.setItem(key, JSON.stringify(state));
}
function getSavedState(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '{}');
}
export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
    let onInit = true;
    return function(state: S, action: A): S {
        const nextState = reducer(state, action);

        if (onInit) {
            onInit = false;
            const savedState = getSavedState(localStorageKey);
            return merge(nextState, savedState);
        }
        const stateToSave = pick(nextState, stateKeys);
        setSavedState(stateToSave, localStorageKey);
        return nextState;
    };
}

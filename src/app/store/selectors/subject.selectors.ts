import { createSelector } from '@ngrx/store';
import { IStore } from '..';
import { ISubject } from '../reducers/subject.reducer';

export const selectSubjects = (state: IStore) => state.subjectsList;

export const selectSubjectsByClass = createSelector(
    selectSubjects,
    (subjects: ISubject[], props: { className: string }) =>
        subjects.filter(subj => subj.classes && !!subj.classes.find(cl => cl === props.className))
);
export const selectSubjectsNotInClass = createSelector(
    selectSubjects,
    (subjects: ISubject[], props: { className: string }) =>
        subjects.filter(subj => subj.classes && !subj.classes.find(cl => cl === props.className))
);

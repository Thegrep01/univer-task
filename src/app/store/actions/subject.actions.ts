import { createAction, props } from '@ngrx/store';

export const addSubject = createAction('[Subject] Add new subject', props<{ subjectName: string; classes: string }>());

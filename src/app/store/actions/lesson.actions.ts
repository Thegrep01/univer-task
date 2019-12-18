import { createAction, props } from '@ngrx/store';

export const createNewLesson = createAction(
    '[Lesson] Create new lesson-list',
    props<{ className: string; subject: string; date: Date }>()
);

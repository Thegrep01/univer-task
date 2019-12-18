import { createAction, props } from '@ngrx/store';

export const addClass = createAction('[Class] Add new class', props<{ className: string }>());
export const addnewStudent = createAction(
  '[Class] Add new student',
  props<{ className: string; studentName: string }>(),
);
export const updateStudentMarks = createAction(
  '[Class] update student mark',
  props<{ lessonId: number; mark: number; studentName: string }>(),
);

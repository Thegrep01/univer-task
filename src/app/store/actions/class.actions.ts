import { createAction, props } from '@ngrx/store';

export const addClass = createAction('[Class] Add new class', props<{ className: string }>());

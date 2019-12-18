import { Class, classReducer } from './reducers/class.reducer';
import { subjectReducer, ISubject } from './reducers/subject.reducer';
import { lessonReducer, Lessons } from './reducers/lesson.reducer';

export interface IStore {
    lessons: Lessons[];
    classList: Class[];
    subjectsList: ISubject[];
}

export const reducers: any = {
    classList: classReducer,
    subjectsList: subjectReducer,
    lessons: lessonReducer,
};

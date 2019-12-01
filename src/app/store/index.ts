import { Class, classReducer } from './reducers/class.reducer';
import { subjectReducer, ISubject } from './reducers/subject.reducer';

export interface IStore {
    // lessons: Lesson[];
    classList: Class[];
    subjectsList: ISubject[];
}

export const reducers: any = {
    classList: classReducer,
    subjectsList: subjectReducer,
};

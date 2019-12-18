import { createReducer, on } from '@ngrx/store';
import * as ClassActions from '../actions/class.actions';

export interface Class {
  name: string;
  students: Student[];
}

export interface Student {
  name: string;
  results?: { lessonId: number; mark: number }[];
}

const initialState: Class[] = [
  { name: '1A', students: [{ name: 'student 1', results: [{ lessonId: 1, mark: 5 }] }, { name: 'student 2' }] },
  { name: '2A', students: [{ name: 'student 3' }] },
];

export const classReducer = createReducer(
  initialState,
  on(ClassActions.addClass, (state, { className }) => [...state, { name: className, students: [] }]),
  on(ClassActions.addnewStudent, (state, { className, studentName }) => [
    ...state.map(i => {
      if (i.name === className) {
        i.students = [...i.students, { name: studentName }];
      }
      return i;
    }),
  ]),
  on(ClassActions.updateStudentMarks, (state, props) => {
    return state.map(cl => {
      if (cl.students.find(i => i.name === props.studentName)) {
        return {
          ...cl,
          students: cl.students.map(st => {
            if (st.name === props.studentName) {
              if (st.results && st.results.find(rs => rs.lessonId === props.lessonId)) {
                return {
                  ...st,
                  results: st.results.map(rs => {
                    if (rs.lessonId === props.lessonId) {
                      return {
                        ...rs,
                        mark: props.mark,
                      };
                    }
                    return rs;
                  }),
                };
              } else if (st.results && !st.results.find(rs => rs.lessonId === props.lessonId)) {
                return {
                  ...st,
                  results: [...st.results, { lessonId: props.lessonId, mark: props.mark }],
                };
              } else {
                return {
                  ...st,
                  results: [{ lessonId: props.lessonId, mark: props.mark }],
                };
              }
            }
            return st;
          }),
        };
      }
      return cl;
    });
  }),
);

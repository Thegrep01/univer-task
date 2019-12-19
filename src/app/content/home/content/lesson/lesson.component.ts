import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { flatMap, takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { IStore } from '../../../../store';
import { ActivatedRoute } from '@angular/router';
import { selectStudentsByClass } from '../../../../store/selectors/class.selectors';
import { Observable, Subject } from 'rxjs';
import { Student } from '../../../../store/reducers/class.reducer';
import { updateStudentMarks } from '../../../../store/actions/class.actions';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit, OnDestroy {
  constructor(private store: Store<IStore>, private route: ActivatedRoute) {
  }

  public studentList$!: Observable<Student[]>;
  public destroy$: Subject<void> = new Subject<void>();
  @Input()
  public lessonId!: number;

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.studentList$ = this.store.pipe(
        select(selectStudentsByClass, { className: params.get('classId') || '' }),
        flatMap(a => a),
      );
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  public changeMark(mark: number, st: string) {
    this.store.dispatch(updateStudentMarks({ studentName: st, lessonId: this.lessonId, mark }));
  }
}

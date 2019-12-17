import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../store';
import { combineLatest, Observable, Subject } from 'rxjs';
import { Lessons } from '../../../../store/reducers/lesson.reducer';
import { selectCurrLessons } from '../../../../store/selectors/lesson.selectors';
import { map, takeUntil, tap } from 'rxjs/operators';
import { selectCurrClass } from '../../../../store/selectors/class.selectors';
import { selectCurrSubj } from '../../../../store/selectors/subject.selectors';
import { createNewLesson } from '../../../../store/actions/lesson.actions';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit, OnDestroy {
    constructor(private store: Store<IStore>) {}
    public destroy$: Subject<void> = new Subject<void>();

    public lessons$!: Observable<Date[] | undefined>;
    public isVisible: boolean = false;
    public date: Date | null = null;

    ngOnInit() {
        this.lessons$ = this.store.select(selectCurrLessons).pipe(map(data => data && data.dates));
    }

    public newLesson() {
        this.isVisible = true;
    }
    public handleCancel() {
        this.isVisible = false;
    }

    public addNewLesson() {
        this.isVisible = false;
        combineLatest(this.store.select(selectCurrClass), this.store.select(selectCurrSubj))
            .pipe(
                takeUntil(this.destroy$),
                map(([cl, subj]) => {
                    this.store.dispatch(
                        createNewLesson({ className: cl, subject: subj, date: this.date || new Date() })
                    );
                })
            )
            .subscribe();
    }
    public ngOnDestroy(): void {
        this.destroy$.next();
    }
}

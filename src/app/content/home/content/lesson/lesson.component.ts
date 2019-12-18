import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { IStore } from '../../../../store';
import {  Observable, Subject } from 'rxjs';
import { selectCurrLessons } from '../../../../store/selectors/lesson.selectors';
import { map, takeUntil } from 'rxjs/operators';
import { createNewLesson } from '../../../../store/actions/lesson.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit, OnDestroy {
    constructor(private store: Store<IStore>, private route: ActivatedRoute) {}
    public destroy$: Subject<void> = new Subject<void>();

    public lessons$!: Observable<Date[] | undefined>;
    public isVisible: boolean = false;
    public date: Date | null = null;

    public className: string = '';
    public subjName: string = '';

    ngOnInit() {
        this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
            this.className = params.get('classId') || '';
            this.subjName = params.get('subjId') || '';
            this.lessons$ = this.store
                .select(selectCurrLessons, { currClass: this.className, subject: this.subjName })
                .pipe(map(data => data && data.dates));
        });
    }

    public newLesson() {
        this.isVisible = true;
    }
    public handleCancel() {
        this.isVisible = false;
    }

    public addNewLesson() {
        this.isVisible = false;
        this.store.dispatch(
            createNewLesson({ className: this.className, subject: this.subjName, date: this.date || new Date() })
        );
    }
    public ngOnDestroy(): void {
        this.destroy$.next();
    }
}

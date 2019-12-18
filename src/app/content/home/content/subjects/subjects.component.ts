import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ISubject } from 'src/app/store/reducers/subject.reducer';
import { IStore } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { selectSubjectsByClass, selectSubjectsNotInClass } from 'src/app/store/selectors/subject.selectors';
import { addSubject } from '../../../../store/actions/subject.actions';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss'],
})
export class SubsectsComponent implements OnInit, OnDestroy {
    constructor(private store: Store<IStore>, private route: ActivatedRoute) {}

    public subjectByClass$!: Observable<ISubject[]>;
    public allSubjects$!: Observable<ISubject[]>;
    public destroy$: Subject<void> = new Subject<void>();
    public isModalSubject: boolean = false;
    public className: string | null = '';
    public listOfSelectedValue!: string[];

    public newSubject() {
        this.listOfSelectedValue = [];
        this.isModalSubject = true;
    }

    public submitSubjectForm() {
        this.isModalSubject = false;
        this.listOfSelectedValue.forEach(subgj => {
            this.store.dispatch(addSubject({ subjectName: subgj, classes: this.className || '' }));
        });
    }

    public handleCancel() {
        this.isModalSubject = false;
    }
    public ngOnInit() {
        this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.className = data.get('classId');
            this.subjectByClass$ = this.store.pipe(select(selectSubjectsByClass, { className: this.className || '' }));
            this.allSubjects$ = this.store.pipe(select(selectSubjectsNotInClass, { className: this.className || '' }));
        });
    }
    public ngOnDestroy(): void {
        this.destroy$.next();
    }
}

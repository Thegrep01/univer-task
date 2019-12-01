import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ISubject } from 'src/app/store/reducers/subject.reducer';
import { IStore } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { selectSubjectsByClass } from 'src/app/store/selectors/subject.selectors';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss'],
})
export class SubsectsComponent implements OnInit, OnDestroy {
    constructor(private route: ActivatedRoute, private store: Store<IStore>) {}
    public className!: string;

    public subjectByClass$!: Observable<ISubject[]>;
    public destroy$: Subject<void> = new Subject<void>();

    public ngOnInit() {
        this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
            this.subjectByClass$ = this.store.pipe(select(selectSubjectsByClass, { className: params['id'] }));
        });
    }
    public ngOnDestroy(): void {
        this.destroy$.next();
    }
}

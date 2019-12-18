import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectStudentsByClass } from '../../../../store/selectors/class.selectors';
import { IStore } from '../../../../store';
import { Observable, Subject } from 'rxjs';
import { flatMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { addnewStudent } from '../../../../store/actions/class.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../store/reducers/class.reducer';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit, OnDestroy {
    constructor(private store: Store<IStore>, private fb: FormBuilder, private route: ActivatedRoute) {}

  public studentList$!: Observable<Student[]>;
  public destroy$: Subject<void> = new Subject<void>();
    public className: string = '';
    public isVisible: boolean = false;
    public form!: FormGroup;

    ngOnInit() {
        this.form = this.fb.group({
            studName: [null, [Validators.required]],
        });
        this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.className = data.get('classId') || '';
            this.studentList$ = this.store.pipe(
                select(selectStudentsByClass, { className: this.className }),
                flatMap(a => a)
            );
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
    }

    addStudent(): void {
        this.isVisible = true;
    }

    public handleCancel() {
        this.isVisible = false;
    }
    public submitForm() {
        this.isVisible = false;
        this.store.dispatch(addnewStudent({ studentName: this.form.value.studName, className: this.className }));
        this.form.reset();
    }
}

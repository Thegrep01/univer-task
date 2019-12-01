import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IStore } from 'src/app/store';
import { addClass } from 'src/app/store/actions/class.actions';
import { selectClasses } from 'src/app/store/selectors/class.selectors';
import { Class } from 'src/app/store/reducers/class.reducer';
import { addSubject } from 'src/app/store/actions/subject.actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private router: Router, private fb: FormBuilder, private store: Store<IStore>) {}

    public isVisible: boolean = false;
    public isModalSubject: boolean = false;

    public classForm!: FormGroup;
    public subjectForm!: FormGroup;

    public classList$!: Observable<Class[]>;

    public listOfSelectedValue!: string[];

    public logOut(): void {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    public newClass() {
        this.listOfSelectedValue = [];
        this.isVisible = true;
    }
    public newSubject() {
        this.listOfSelectedValue = [];
        this.isModalSubject = true;
    }

    public handleCancel() {
        this.isVisible = false;
        this.isModalSubject = false;
    }
    public submitForm() {
        this.isVisible = false;
        this.store.dispatch(addClass({ className: this.classForm.value.className }));
        this.classForm.reset();
    }

    public submitSubjectForm() {
        this.isModalSubject = false;
        this.store.dispatch(
            addSubject({ subjectName: this.subjectForm.value.subjName, classes: this.listOfSelectedValue })
        );
        this.subjectForm.reset();
    }

    public ngOnInit(): void {
        this.classForm = this.fb.group({
            className: [null, [Validators.required]],
        });
        this.subjectForm = this.fb.group({
            subjName: [null, [Validators.required]],
        });
        this.classList$ = this.store.pipe(select(selectClasses));
    }
}
